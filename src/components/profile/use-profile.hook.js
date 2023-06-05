'use client';

import React, { useEffect, useRef, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  addPhoneAndGenerateOtp,
  generateOtp,
  verifyOtp
} from '@/provider/features/user/user.slice';
import { createProfile } from '@/provider/features/profile/profile.slice';
import { createFinancialDetail } from '@/provider/features/financial-detail/financial-detail.slice';
import { createBusinessDetail } from '@/provider/features/business-detail/business-detail.slice';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),

  username: Yup.string()
    .max(30, 'Username must be at most 30 characters long')
    .matches(/^[a-zA-Z0-9]+$/, 'Username can only contain alphanumeric characters')
    .required('User name is required'),

  country: Yup.string().required('Country name is required'),
  city: Yup.string().required('City name is required'),
  // phoneNumber: Yup.string().required("Phone number is required"),
  // otpNumber: Yup.string().required("OTP number is required"),
  ibanNumber: Yup.string()
    .min(15, 'IBAN number can contain minimum 15 alphanumeric')
    .max(34, 'IBAN number can contain maximum 34 alphanumeric')
    .matches(/^[a-zA-Z0-9]+$/, 'IBAN can only contain alphanumeric'),

  // .matches(/[0-9]/, 'IBAN number must be in digits'),
  vatNumber: Yup.string()
    .min(5, 'VAT number can contain minimum 5 digits')
    .max(15, 'VAT number can contain maximum 15 digits')
    .matches(/[0-9]/, 'VAT number must be in digits'),

  companyName: Yup.string()
    .max(150, 'Company name must be at most 30 characters long')
    .matches(/^[a-zA-Z0-9\s]*$/, 'Company name can only contain alphanumeric characters'),
  population: Yup.string(),
  address: Yup.string()
    .max(255, 'Address can contain maximum 255 characters')
    .matches(/^[a-zA-Z0-9\s]*$/, 'Address can only contain alphanumeric characters')
});

export default function useProfile() {
  const dispatch = useDispatch();

  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const sendOtpButtonText = useRef('Send OTP');

  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(otp, 'otp');
  }, [otp]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  useEffect(() => {
    // const { email, userId, username } = searchParams.get(email);
    console.log(searchParams.get('email'));
    setValue('email', searchParams.get('email'));
    setValue('username', searchParams.get('username'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // const router = useRouter();

  const moveRouter = (data) => {
    if (data) {
      // router.push('/dashboard');
    }
  };

  const onSubmit = (data) => {
    console.log(phone, 'phone');
    console.log(data);
    dispatch(createProfile({ payload: { ...data }, successCallBack: moveRouter }));
    dispatch(
      createBusinessDetail({
        payload: {
          businessName: data.businessName,
          population: data.population,
          address: data.address
        }
      })
    );
    dispatch(
      createFinancialDetail({ payload: { ibanNumber: data.ibanNumber, vat: data.vat } })
    );
  };

  const sendOtp = () => {
    if (sendOtpButtonText.current === 'Send OTP') {
      dispatch(addPhoneAndGenerateOtp({ payload: {phone} }));
      sendOtpButtonText.current = 'Resend OTP';
    } else {
      dispatch(generateOtp());
    }
  };

  const verifyOtpHandler = () => {
    dispatch(
      verifyOtp({ payload: Number(otp), successCallBack: setIsOtpVerified(true) })
    );
  };

  return {
    otp,
    setOtp,
    register,
    handleSubmit,
    setValue,
    errors,
    onSubmit,
    phone,
    setPhone,
    sendOtpButtonText,
    sendOtp,
    verifyOtpHandler,
    isOtpVerified,
    setIsOtpVerified
  };
}
