'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import {
  generateForgetPasswordLink,
  regenerateEmailLink
} from '@/provider/features/user/user.slice';

export default function useVerifyEmail() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [type, setType] = useState();
  const searchParams = useSearchParams();
  // const { email, signUp, forgetPassword, token } = router.query;
  useEffect(() => {
    // const urlSearchParams = new URLSearchParams(window.location.search);
    setEmail(searchParams.get('email'));
    setType(searchParams.get('type'));
  }, [searchParams]);

  const resendLinkHandler = () => {
    let newEmail = email;
    if (newEmail.includes('%2B')) newEmail = newEmail.replace('%2B', '+');
    if (type === 'email-verification') {
      dispatch(regenerateEmailLink({ payload: { email: newEmail } }));
    } else {
      dispatch(generateForgetPasswordLink({ payload: { email: newEmail } }));
    }
  };

  // const verifyAccount = async () => {
  //   console.log(email + token);
  //   const data = {
  //     email
  //   };
  //   if (signUp) {
  //     axios
  //       .post(`${process.env.NEXT_PUBLIC_MAIN_URL}/auth/resend-verification-link/`, data)
  //       .then((response) => {
  //         if (response.data.status === true) {
  //           CustomAlert(response.data.message, 'success');
  //         } else {
  //           CustomAlert(response.data.message, 'error');
  //         }
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         if (error.message === 'Network Error') {
  //           CustomAlert(popupMessages.networkError, 'error');
  //         }
  //       });
  //   } else if (forgetPassword) {
  //     axios
  //       .post(
  //         `${process.env.NEXT_PUBLIC_MAIN_URL}/auth/resend-reset-password-link/`,
  //         data
  //       )
  //       .then((response) => {
  //         if (response.data.status === true) {
  //           CustomAlert(response.data.message, 'success');
  //         } else {
  //           CustomAlert(response.data.message, 'error');
  //         }
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         if (error.message === 'Network Error') {
  //           CustomAlert(popupMessages.networkError, 'error');
  //         }
  //       });
  //   }
  // };

  return { resendLinkHandler, email };
}
