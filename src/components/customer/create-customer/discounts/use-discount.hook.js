import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup.object({
  // Define your validation rules here.
  discount: yup
    .number()
    .max(9999999999, 'Discount must be at most 10 characters long')
    .min(1, 'Discount must be minimum 1 characters')
    .required('Discount is required'),
  days: yup.number().required('day is required')
});

export default function useDiscount({ handleTabClick, handleTabCompleted }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const [data, setData] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.query) {
      const { id } = router.query;

      async function fetchMyAPI() {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/${id}`
        );
        if (res.data.result.data.customer.discount) {
          setData(res.data.result.data.customer.discount);
        } else {
          setData({});
        }
      }

      if (id) {
        fetchMyAPI();
      }
    }
  }, [router.query]);

  const onSubmit = async (value) => {
    handleTabClick('manage_terms');
    handleTabCompleted('discount');
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
