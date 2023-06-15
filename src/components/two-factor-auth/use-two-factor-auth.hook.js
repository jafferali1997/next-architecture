'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { generateOtp, verifyOtp } from '@/provider/features/user/user.slice';

export default function useTwoFactorAuth() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const [isTimerStop, setIsTimerStop] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const otpNumber1 = useRef();
  const otpNumber2 = useRef();
  const otpNumber3 = useRef();
  const otpNumber4 = useRef();
  const [userId, setUserId] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    localStorage.setItem('userId', searchParams.get('userId'));
    localStorage.setItem('phone', searchParams.get('phone'));
    setUserId(searchParams.get('userId'));
    setPhone(searchParams.get('phone'));
  }, [searchParams]);

  const moveRouterGenOtp = () => {
    enqueueSnackbar('OTP generated', {
      variant: 'success'
    });
  };

  const resendOtpHandler = () => {
    dispatch(generateOtp({ successCallBack: moveRouterGenOtp() }));
  };
  const moveRouter = (data) => {
    setIsOtpVerified(true);
    router.push('/customer');
  };

  const verifyOtpHandler = () => {
    const otp = Number(
      `${otpNumber1.current.value}${otpNumber2.current.value}${otpNumber3.current.value}${otpNumber4.current.value}`
    );
    if (otp > 0) {
      dispatch(verifyOtp({ payload: { otp }, successCallBack: moveRouter }));
    }
  };

  const otpNumberChangeHandler = (e) => {
    const currentOtpNumberId = e.target.id;
    // eslint-disable-next-line no-eval
    const currentOtpNumberRef = eval(`otpNumber${currentOtpNumberId}`);
    currentOtpNumberRef.current.value = e.target.value;
    if (currentOtpNumberId < 4 && e.target.value.length === 1) {
      currentOtpNumberRef.current.nextSibling.focus();
    } else if (currentOtpNumberId > 1 && e.target.value.length === 0) {
      currentOtpNumberRef.current.previousSibling.focus();
    }
    currentOtpNumberRef.current.value = e.target.value;
  };

  return {
    phone,
    otpNumberChangeHandler,
    otpNumber1,
    otpNumber2,
    otpNumber3,
    otpNumber4,
    setIsTimerStop,
    verifyOtpHandler,
    resendOtpHandler,
    isTimerStop
  };
}
