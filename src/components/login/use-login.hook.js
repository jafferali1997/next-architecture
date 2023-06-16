'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { AES, enc } from 'crypto-js';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { generateOtp } from '@/provider/features/user/user.slice';
import { login } from '@/provider/features/auth/auth.slice';
import { getAccessToken } from '@/common/utils/access-token.util';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .max(30, 'Username must be at most 30 characters long')
    .min(5, 'Username must be minimum 5 characters')
    .required('Username or Email is required'),
  password: Yup.string().required('Password is required')
});

export default function useLogin() {
  const dispatch = useDispatch();

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema)
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [loader, setLoader] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      router.push('/customer');
    }
  }, [router]);

  // functions
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const borderStyle = {
    border: '1px solid red'
  };
  const borderSuc = {
    border: '1px solid #10FF61'
  };

  const moveRouter = (data) => {
    if (data.isPhoneVerified) {
      router.push(`/two-factor-auth?userId=${data.id}&phone=${data.phone}`);
    } else {
      if (data.isEmailVerified) {
        router.push(
          `/profile?userName=${data.userName}&email=${data.email}&userId=${data.id}`
        );
      } else {
        router.push(`/verify-email?type=email-verification&email=${data.email}`);
      }
    }
  };

  const handleLogin = () => {
    if (typeof window === 'object') {
      // Check if the browser supports localStorage
      if (
        localStorage &&
        localStorage.getItem('rememberedUsername') &&
        localStorage.getItem('rememberedPassword')
      ) {
        const storedUsername = localStorage.getItem('rememberedUsername');
        const storedEncryptedPassword = localStorage.getItem('rememberedPassword');
        // Compare the entered password with the stored encrypted password
        const bytes = AES.decrypt(
          storedEncryptedPassword,
          process.env.NEXT_PUBLIC_MAIN_URL_SECRET_KEY
        );
        const decryptedPassword = bytes.toString(enc.Utf8);
        setValue('email', storedUsername);
        setValue('password', decryptedPassword);
      }
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  const onSubmit = async (values) => {
    setLoader(true);
    dispatch(login({ payload: { ...values }, successCallBack: moveRouter }));

    if (typeof window === 'object' && isChecked) {
      // Check if the browser supports localStorage
      if (localStorage) {
        // Encrypt the password
        const encryptedPassword = AES.encrypt(
          values.password,
          process.env.NEXT_PUBLIC_MAIN_URL_SECRET_KEY
        ).toString();
        localStorage.setItem('rememberedUsername', values.email);
        localStorage.setItem('rememberedPassword', encryptedPassword);
      }
    }
    if (isChecked === false) {
      localStorage.removeItem('rememberedUsername');
      localStorage.removeItem('rememberedPassword');
    }
  };

  const loginWithOAuth = (type, email) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_MAIN_URL}/auth/oauth-login`, {
        email,
        type
      })
      .then((response) => {
        if (response.data.status) {
          console.log(response.data);
          const { data } = response.data.result;
          moveRouter(data);
        } else {
          //   CustomAlert(response.data.message, 'error');
          // router.push('/login')
        }
      })
      .catch((err) => {
        if (err.message === 'Network Error') {
          //   CustomAlert(err.message, 'error');
        }
      });
  };

  return {
    onSubmit,
    borderStyle,
    borderSuc,
    showPassword,
    isChecked,
    setIsChecked,
    toggleShowPassword,
    router,
    loader,
    loginWithOAuth,
    register,
    handleSubmit,
    errors
  };
}
