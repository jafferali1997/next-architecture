import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function useVerificationExpire() {
  const router = useRouter(null);

  const resendLinkHandler = () => {
    // eslint-disable-next-line prefer-const
    let { email, type } = router.query;
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

  return { resendLinkHandler };
}
