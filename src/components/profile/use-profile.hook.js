'use client';

import React, { useEffect, useRef, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function useProfile() {
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
    // resolver: yupResolver(),
  });

  useEffect(() => {
    // const { email, userId, username } = searchParams.get(email);
    console.log(searchParams.get('email'));
    setValue('email', searchParams.get('email'));
    setValue('username', searchParams.get('username'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const onSubmit = (data) => {
    console.log(data);
  };

  const sendOtp = () => {};

  const verifyOtp = () => {};

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
    verifyOtp,
    isOtpVerified,
    setIsOtpVerified
  };
}
