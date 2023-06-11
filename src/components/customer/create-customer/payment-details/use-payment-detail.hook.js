'use client';

import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  createCustomerAccountDetail,
  getSingleCustomer
} from '@/provider/features/customer/customer.slice';

const validationSchema = yup.object({
  // Define your validation rules here.
  accountOwnerName: yup
    .string()
    .max(100, 'Account must be at most 100 characters long')
    .required('Account is required'),
  iban: yup
    .string()
    .max(34, 'IBAN must be at most 34 characters long')
    .min(15, 'IBAN must be minimum 15 characters')
    // .matches(/^[^.]*$/, {
    //   message: 'No period'
    // })
    // .matches(/^[^.]*$/, {
    //   message: 'Invalid postal'
    // })
    // .matches(/^[^!@#$%^&*+=<>:;|~(){}[\s\]]*$/, {
    //   message: 'Invalid postal'
    // })
    .required('IBAN is required'),
  bic: yup
    .string()
    .max(11, 'BIC must be at most 11 characters long')
    .min(8, 'BIC must be minimum 8 characters')
    .required('bic is required'),
  mendateReferance: yup
    .string()
    .max(18, 'Mandate Reference must be at most 18 characters long')
    .min(6, 'Mandate Reference must be minimum 6 characters')
    .required('Mandate Reference is required'),
  mandateGenerateDate: yup.string().required('Mandate Date is required')
});

export default function usePaymentDetails({ handleTabClick, handleTabCompleted }) {
  const [data, setData] = useState();
  const [bankDetail, setBankDetail] = useState(true);
  const [creditCard, setCreditCard] = useState(false);
  const [paymentType, setPaymentType] = useState('bankDetails');
  const [isSubmit, setIsSubmit] = useState(false);
  const [validationSchemaState, setValidationSchemaState] = useState(validationSchema);

  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchemaState),
    mode: 'onBlur'
  });

  const router = useRouter();

  useEffect(() => {
    if (searchParams.get('id')) {
      const id = Number(searchParams.get('id'));

      async function fetchMyAPI() {
        let data = await dispatch(getSingleCustomer({ payload: id }));
        if (data.payload) {
          data = data.payload;
          Object.keys(data).forEach((key) => setValue(key, data[key]));
          setPaymentType(data.iban === '' ? 'creditCardDetails' : 'bankDetails');
        }
      }
      if (id) {
        fetchMyAPI();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    if (paymentType !== 'bankDetails') {
      const validationCreditSchema = yup.object({
        // Define your validation rules here.
        creditCardName: yup
          .string()
          .max(50, 'Credit Card Name must be at most 50 characters long')
          .min(1, 'Credit Card Name must be minimum 1 characters')
          .required('Credit Card Name is required'),
        creditCardNo: yup
          .number()
          // .test(
          //   'test-number',
          //   'Credit Card number is invalid',
          //   (value) => cardValidator.number(value).isValid
          // )
          .required('Credit Card Number is required'),
        cvv: yup
          .string()
          .matches(/^[0-9]{3}$/, 'CVV must be at most 3 characters long')
          .required('CVV is required'),
        creditCardExpiry: yup.string().required('Credit Card Expiry is required')
      });
      setValidationSchemaState(validationCreditSchema);
    }
    if (paymentType === 'bankDetails') {
      setValidationSchemaState(validationSchema);
    }
  }, [paymentType]);

  const onSubmit = async (value) => {
    console.log(value);
    let payload = {
      ...value,
      iban: '',
      accountOwnerName: '',
      bic: '',
      mendateReferance: '',
      mandateGenerateDate: ''
    };
    if (paymentType === 'bankDetails') {
      payload = {
        ...value,
        nameOfCreditCard: '',
        creditCardNumber: '',
        creditCardExpiry: '',
        creditCardCVV: ''
      };
    }
    const res = await dispatch(
      createCustomerAccountDetail({
        payload: { ...payload, customerId: Number(searchParams.get('id')) }
      })
    );
    if (res.payload) {
      handleTabClick('discount');
      handleTabCompleted('payment_details');
    }
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    bankDetail,
    setBankDetail,
    setCreditCard,
    creditCard,
    setIsSubmit,
    router,
    data,
    errors,
    paymentType,
    setPaymentType
  };
}
