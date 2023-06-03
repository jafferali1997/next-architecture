import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function useVerifyEmail() {
  const router = useRouter(null);
  // const { email, signUp, forgetPassword, token } = router.query;
  let { email } = router.query;
  const resendLinkHandler = () => {
    // eslint-disable-next-line prefer-const
    let { type } = router.query;
    if (email.includes('%2B')) email = email.replace('%2B', '+');
    let apiType = 'resend-reset-password-link';
    if (type === 'email-verification') {
      apiType = 'resend-verification-link';
    }
    console.log(`${process.env.NEXT_PUBLIC_MAIN_URL}/auth/${apiType}`);
    axios
      .post(`${process.env.NEXT_PUBLIC_MAIN_URL}/auth/${apiType}`, {
        email
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
