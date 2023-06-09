import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import {
  getSingleCustomer,
  createCustomerTermOfPaymentAndDelivey
} from '@/provider/features/customer/customer.slice';

let validationSchema = yup.object({
  termOfDelivery: yup.string().required('Term Of Delivery is required'),
  termOfPayment: yup.string().required('Term Of Payment is required'),
});

export default function useMangeTerm({ handleTabClick, resetTabCompleted }) {
  const [selectedValue, setSelectedValue] = useState('PAYMENT_TERMS_AS_DATE');
  const [data, setData] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [validationSchemaState, setValidationSchemaState] = useState(validationSchema);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    handleReset
  } = useForm({
    resolver: yupResolver(validationSchemaState)
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  const handleChangeRadio = (event) => {
    console.log(event.target.value);
    setSelectedValue(event.target.value);
  };

  const transformValue = (value) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const i in value) {
      if (value[i].match(/[A-Z]/)) {
        const temp = value[i].match(/[A-Z]/)[0];
        return value.replace(temp, ` ${temp.toLowerCase()}`);
      }
    }
  };

  useEffect(() => {
    if (searchParams.get('id')) {
      const id = Number(searchParams.get('id'));

      async function fetchMyAPI() {
        let data = await dispatch(getSingleCustomer({ payload: id }));
        if (data.payload) {
          data = data.payload;
          Object.keys(data).forEach((key) => setValue(key, data[key]));
          setValue('termOfDelivery', data.termOfDeliveries[0].termOfDelivery);
          setSelectedValue(data.termOfPayment || 'PAYMENT_TERMS_AS_DATE');
        }
      }

      if (id) {
        fetchMyAPI();
      }
    }
  }, [searchParams]);

  // useEffect(() => {
  //   if (selectedValue) {
  //     validationSchema = yup.object({
  //       // [selectedValue.substring(0, selectedValue.length - 6)]: yup
  //       //   .string()
  //       //   .required(
  //       //     `${transformValue(
  //       //       selectedValue.substring(0, selectedValue.length - 6)
  //       //     )} is required`
  //       //   )
  //     });
  //     console.log(validationSchema);
  //     setValidationSchemaState(validationSchema);
  //   }
  // }, [selectedValue]);

  const onSubmit = async (value) => {
    console.log(value,"onSubmit");	
    const payload = {
      customerId: Number(searchParams.get('id')),
      termOfPayment: selectedValue,
      termOfPaymentData: value.termOfPaymentData,
      termOfDeliveries: [
        {
          termOfDelivery: value.termOfDelivery
        }
      ]
    };
    const res = await dispatch(createCustomerTermOfPaymentAndDelivey({ payload }));
    if (res.payload) {
      resetTabCompleted();
      router.push('/customer');
      handleTabClick('customer_details');
    }
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    selectedValue,
    handleChangeRadio,
    handleTabClick,
    setIsSubmit,
    setSelectedValue,
    handleReset,
    data,
    router
  };
}
