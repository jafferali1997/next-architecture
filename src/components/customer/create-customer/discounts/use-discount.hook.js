import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { createCustomerDiscount } from '@/provider/features/customer/customer.slice';

const validationSchema = yup.object({
  // Define your validation rules here.
  discountAmount: yup
    .string()
    .max(10, 'Discount must be at most 10 characters long')
    .required('Discount is required'),
  discountDays: yup.string().required('day is required')
});

export default function useDiscount({ handleTabClick, handleTabCompleted }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur'
  });
  const [data, setData] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('id')) {
      const id = Number(searchParams.get('id'));

      async function fetchMyAPI() {
        let data = await dispatch(getSingleCustomer({ payload: id }));
        if (data.payload) {
          data = data.payload;
          Object.keys(data).forEach((key) => setValue(key, data[key]));
        }
      }

      if (id) {
        fetchMyAPI();
      }
    }
  }, [searchParams]);

  const onSubmit = async (value) => {
    const res = await dispatch(
      createCustomerDiscount({
        payload: {
          ...value,
          discountDays: Number(value.discountDays),
          discountAmount: Number(value.discountAmount),
          customerId: Number(searchParams.get('id'))
        }
      })
    );
    if (res.payload) {
      handleTabClick('manage_terms');
      handleTabCompleted('discount');
    }
  };

  return { errors, register, handleSubmit, onSubmit, setIsSubmit, router, data };
}
