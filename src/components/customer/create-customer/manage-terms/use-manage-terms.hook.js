import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

let validationSchema = yup.object({});

export default function useMangeTerm({ handleTabClick, resetTabCompleted }) {
  const [selectedValue, setSelectedValue] = useState('paymentDateSelect');
  const [data, setData] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [validationSchemaState, setValidationSchemaState] = useState(validationSchema);

  const {
    register,
    handleSubmit,
    formState: { errors },
    handleReset
  } = useForm({
    resolver: yupResolver(validationSchemaState)
  });

  const router = useRouter();

  const handleChangeRadio = (event) => {
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
    if (router.query) {
      const { id } = router.query;

      async function fetchMyAPI() {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/${id}`
        );
        if (res.data.result.data.customer) {
          setData({
            [res.data.result.data.customer.paymentTermsName]:
              res.data.result.data.customer.paymentTerms,
            deliveryTerm: res.data.result.data.customer.deliveryTerms
          });
          setSelectedValue(
            res.data.result.data.customer.paymentTermsName ?? 'paymentDateSelect'
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
    if (selectedValue) {
      validationSchema = yup.object({
        // [selectedValue.substring(0, selectedValue.length - 6)]: yup
        //   .string()
        //   .required(
        //     `${transformValue(
        //       selectedValue.substring(0, selectedValue.length - 6)
        //     )} is required`
        //   )
      });
      console.log(validationSchema);
      setValidationSchemaState(validationSchema);
    }
  }, [selectedValue]);

  const onSubmit = async (value) => {
    resetTabCompleted();
    router.push('/customer');
    handleTabClick('customer_details');
    // try {
    //   await axios.post(
    //     `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/payment-terms`,
    //     {
    //       paymentTerms: value[selectedValue],
    //       paymentTermsName: selectedValue,
    //       customerId: router.query.id
    //     }
    //   );
    //   const res = await axios.post(
    //     `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/delivery-terms`,
    //     {
    //       deliveryTerms: value.deliveryTerm,
    //       customerId: router.query.id
    //     }
    //   );
    //   if (res.data.status) {
    //     CustomAlert('Customer Created Successfully', 'Success');
    //     resetTabCompleted();
    //     router.push('/customer');
    //     handleTabClick('customer_details');
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
    errors,
    selectedValue,
    handleChangeRadio,
    handleTabClick,
    setIsSubmit,
    handleReset,
    data,
    router
  };
}
