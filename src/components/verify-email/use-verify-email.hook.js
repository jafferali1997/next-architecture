import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useVerifyEmail() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [type, setType] = useState();
  // const { email, signUp, forgetPassword, token } = router.query;
  useEffect(() => {
    console.log(router.query);
    if (router.query) {
      setEmail(router.query.email);
      setType(router.query.type);
    }
  }, [router.query]);

  const resendLinkHandler = () => {
    let newEmail = email;
    if (newEmail.includes('%2B')) newEmail = newEmail.replace('%2B', '+');
    let apiType = 'resend-reset-password-link';
    if (type === 'email-verification') {
      apiType = 'resend-verification-link';
    }
    console.log(`${process.env.NEXT_PUBLIC_MAIN_URL}/auth/${apiType}`);
    axios
      .post(`${process.env.NEXT_PUBLIC_MAIN_URL}/auth/${apiType}`, {
        newEmail
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          //   CustomAlert(response.data.message, 'success');
        } else {
          //   CustomAlert(response.data.message, 'error');
        }
      })
      .catch((error) => {
        console.log(error);
        // CustomAlert('Network Error', 'error');
      });
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
