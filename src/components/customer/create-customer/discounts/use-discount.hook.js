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
  // discount: yup
  //   .number()
  //   .max(9999999999, 'Discount must be at most 10 characters long')
  //   .min(1, 'Discount must be minimum 1 characters')
  //   .required('Discount is required'),
  // days: yup.number().required('day is required')
});

export default function useDiscount({ handleTabClick, handleTabCompleted }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const [data, setData] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('id')) {
      const id = searchParams.get('id');

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
          customerId: searchParams.get('id')
        }
      })
    );
    if (res.payload) {
      handleTabClick('manage_terms');
      handleTabCompleted('discount');
    }
    // try {
    //   const res = await axios.post(
    //     `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/discount`,
    //     { ...value, customerId: router.query.id }
    //   );
    //   if (res.data.status) {
    //     handleTabClick('manage_terms');
    //     handleTabCompleted('discount');
    //   } else {
    //     CustomAlert(res.data.message, 'Error');
    //   }
    // } catch (e) {
    //   CustomAlert(e.response.data.error[0].msg, 'Error');
    // }
  };

  return { errors, register, handleSubmit, onSubmit, setIsSubmit, router, data };
}
