import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function useVerify() {
  const router = useRouter(null);

  const apiResponseRef = useRef({
    res: null
  });

  const verify = (email, type, token) => {
    const body = {
      accessToken: token,
      email
    };
    let url = `${process.env.NEXT_PUBLIC_MAIN_URL}/auth/verify-reset-password`;
    if (type === 'email-verification') {
      url = `${process.env.NEXT_PUBLIC_MAIN_URL}/auth/verify-email`;
    }
    axios
      .post(url, body)
      .then((response) => {
        // console.log('API Response', response);
        // console.log(response.data.status);
        let newRoute = {
          pathname: '/create-new-password',
          query: { email }
        };
        if (type === 'email-verification' && response.data.status) {
          newRoute = {
            pathname: '/profile',
            query: {
              email,
              userId: response.data.result.data.user.userId,
              username: response.data.result.data.user.username
            }
          };
        }
        if (response.data.status) {
          // CustomAlert(response.data.message, 'success');
          router.push(newRoute);
        } else {
          // CustomAlert(response.data.message, 'error');
          router.push({
            pathname: '/auth/verification-expire',
            query: { email, type }
          });
        }
      })
      .catch((error) => {
        console.log('API Error', error);
      });
  };

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const email = params.get('email'); // is the string "Jonathan
    const type = params.get('type'); // is the string "Jonathan"
    const token = params.get('token'); // is the string "Jonathan"

    if (!apiResponseRef.current.res) {
      apiResponseRef.current.res = true;
      verify(email, type, token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
