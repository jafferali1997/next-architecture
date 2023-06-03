import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { popupMessages } from '@/common/constants/message';

const FormSchema = yup.object().shape({
  pass: yup
    .string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
  confirm: yup
    .string()
    .oneOf([yup.ref('pass'), null], 'Must match "password" field value')
});
export default function useCreateNewPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(FormSchema)
  });
  // hooks
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const router = useRouter(null);

  useEffect(() => {
    setShowPassword(false);
    setShowConfirmPassword(false);
  }, []);

  // functions
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const borderStyle = {
    border: '1px solid red'
  };
  const borderSuc = {
    border: '1px solid #10FF61'
  };

  const onSubmit = (values) => {
    const { email } = router.query;
    console.log(router.query);
    const data = {
      email,
      password: values.pass
    };
    console.log(data);
    axios
      .post(`${process.env.NEXT_PUBLIC_MAIN_URL}/auth/change-password/`, data)
      .then((response) => {
        if (response.data.status === true) {
          //   CustomAlert('Password Updated Successfully.', 'success');
          router.push({
            pathname: '/login',
            query: { email }
          });
        } else {
          //   CustomAlert(response.data.message, 'error');
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.message === 'Network Error') {
          //   CustomAlert(popupMessages.networkError, 'error');
        }
      });
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    showPassword,
    borderStyle,
    borderSuc,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
    loader
  };
}
