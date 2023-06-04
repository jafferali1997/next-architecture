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
      .then((data) => {
        // console.log('API Response', response);
        // console.log(response.data.status);
        let newRoute = `/create-new-password?email=&${email}`;
        if (type === 'email-verification' && data.Succeeded) {
          newRoute = `/profile?email=&${email}&userId=${data.id}&userName=${data.userName}`;
        }
        if (data.Succeeded) {
          router.push(newRoute);
        } else {
          router.push(`/auth/verification-expire?email=${email}&type=${type}`);
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
