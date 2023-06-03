import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { setAccessToken } from '@/common/utils/storage-token';

export default function useTwoFactorAuth() {
  const router = useRouter(null);
  const [isTimerStop, setIsTimerStop] = useState(false);
  // const otpNumber = useRef(initialOtpNumber);
  const otpNumber1 = useRef();
  const otpNumber2 = useRef();
  const otpNumber3 = useRef();
  const otpNumber4 = useRef();
  const [userId, setUserId] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    localStorage.setItem('userId', router.query.userId);
    localStorage.setItem('phone', router.query.phone);
    setUserId(router.query.userId);
    setPhone(router.query.phone);
    // userId.current = router.query.userId;
    // phone.current = router.query.phone;
  }, [router.query]);

  // useEffect(() => {
  //   const id = localStorage.getItem('userId');
  //   const userPhone = localStorage.getItem('phone');
  //   if (id && userPhone) {
  //     userId.current = id;
  //     phone.current = userPhone;
  //   }
  // }, []);
  // auth/resend-2fa
  // auth/verify-2fa
  const resendOtpHandler = () => {
    if (isTimerStop) {
      console.log('resend otp');
      console.log(userId);
      axios
        .post(`${process.env.NEXT_PUBLIC_MAIN_URL}/auth/resend-2fa`, {
          userId
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.status) {
            // CustomAlert(response.data.message, 'success');
            setIsTimerStop(false);
            otpNumber1.current.value = '';
            otpNumber2.current.value = '';
            otpNumber3.current.value = '';
            otpNumber4.current.value = '';
          } else {
            // CustomAlert(response.data.message, 'error');
          }
        })
        .catch((error) => {
          console.log(error);
          //   CustomAlert('Network Error', 'error');
        });
    }
  };

  const verifyOtpHandler = () => {
    const otp = Number(
      `${otpNumber1.current.value}${otpNumber2.current.value}${otpNumber3.current.value}${otpNumber4.current.value}`
    );
    if (otp > 0) {
      axios
        .post(`${process.env.NEXT_PUBLIC_MAIN_URL}/auth/verify-2fa`, {
          userId,
          totp: otp
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.status) {
            const { data } = response.data.result;
            // CustomAlert(response.data.message, 'success');
            setAccessToken(data.accessToken);
            localStorage.setItem('userId', data.user.userId);
            localStorage.setItem('businessId', data.user.businessId);
            router.push('/customer');
          } else {
            // CustomAlert(response.data.message, 'error');
          }
        })
        .catch((error) => {
          console.log(error);
          //   CustomAlert('Network Error', 'error');
        });
    } else {
      //   CustomAlert('Please enter otp.', 'error');
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