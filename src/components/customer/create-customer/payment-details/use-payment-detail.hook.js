import { useEffect, useState } from 'react';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const validationSchema = yup.object({
  // Define your validation rules here.
  onwerName: yup
    .string()
    .max(100, 'Account must be at most 100 characters long')
    .min(1, 'Account must be minimum 1 characters')
    .required('Account is required'),
  iban: yup
    .string()
    .max(34, 'IBAN must be at most 34 characters long')
    .min(15, 'IBAN must be minimum 15 characters')
    .matches(/^[^.]*$/, {
      message: 'No period'
    })
    .matches(/^[^.]*$/, {
      message: 'Invalid postal'
    })
    .matches(/^[^!@#$%^&*+=<>:;|~(){}[\s\]]*$/, {
      message: 'Invalid postal'
    })
    .required('IBAN is required'),
  bicNumber: yup
    .string()
    .max(11, 'BIC must be at most 11 characters long')
    .min(8, 'BIC must be minimum 8 characters')
    .required('bic is required'),
  mandateReference: yup
    .string()
    .max(18, 'Mandate Reference must be at most 18 characters long')
    .min(6, 'Mandate Reference must be minimum 6 characters')
    .required('Mandate Reference is required'),
  mandateDate: yup.string().required('Mandate Date is required')
});

export default function usePaymentDetails({ handleTabClick, handleTabCompleted }) {
  const [data, setData] = useState();
  const [bankDetail, setBankDetail] = useState(true);
  const [creditCard, setCreditCard] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [validationSchemaState, setValidationSchemaState] = useState(validationSchema);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchemaState)
  });

  const router = useRouter();

  useEffect(() => {
    if (router.query) {
      const { id } = router.query;

      async function fetchMyAPI() {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/${id}`
        );
        if (res.data.result.data.customer.paymentDetails) {
          setData(res.data.result.data.customer.paymentDetails);
          setBankDetail(
            res.data.result.data.customer.paymentDetails.paymentMethod === 'bankDetail'
          );
          setCreditCard(
            res.data.result.data.customer.paymentDetails.paymentMethod === 'creditCard'
          );
        } else {
          setData({});
        }
      }
      if (id) {
        fetchMyAPI();
      }
    }
  }, [router]);

  useEffect(() => {
    if (!bankDetail) {
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
          .matches(/^[0-9]{3,4}$/, 'CVV must be at most 3 or 4 characters long')
          .required('CVV is required'),
        creditCardExpiry: yup.string().required('Credit Card Expiry is required')
      });
      setValidationSchemaState(validationCreditSchema);
    }
    if (bankDetail) {
      setValidationSchemaState(validationSchema);
    }
  }, [bankDetail]);

  const onSubmit = async (value) => {
    console.log(value);
    handleTabClick('discount');
    handleTabCompleted('payment_details');
    // try {
    //   const res = await axios.post(
    //     `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/payment-detail`,
    //     {
    //       ...value,
    //       paymentMethod: bankDetail ? 'bankDetail' : 'creditCard',
    //       customerId: router.query.id
    //     }
    //   );
    //   if (res.data.status) {
    //     handleTabClick('discount');
    //     handleTabCompleted('payment_details');
    //   } else {
    //     CustomAlert(res.data.message, 'Error');
    //   }
    // } catch (e) {
    //   CustomAlert(e.response.data.error[0].msg, 'Error');
    // }
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
    errors
  };
}
