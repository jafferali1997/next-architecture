import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { verifyEmail } from '@/provider/features/user/user.slice';

export default function useVerify() {
  const dispatch = useDispatch();
  const router = useRouter(null);

  const apiResponseRef = useRef({
    res: null
  });

  const moveRouterEmail = (data) => {
    router.push(
      `/profile?email=${data.email}&userId=${data.id}&userName=${data.userName}`
    );
  };

  const moveRouterPassword = (data) => {
    console.log(data);
    router.push(`/create-new-password?email=${data.email}&token=${data.token}`);
  };

  const moveRouterError = (email, type) => {
    const _email = email;
    const _type = type;
    return () => router.push(`/auth/verification-expire?email=${_email}&type=${_type}`);
  };

  const verify = (email, type, token) => {
    const body = {
      accessToken: token,
      email
    };
    if (type === 'email-verification') {
      dispatch(
        verifyEmail({
          payload: body,
          successCallBack: moveRouterEmail,
          errorCallBack: moveRouterError(email, type)
        })
      );
    } else {
      moveRouterPassword({ email, token });
    }
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
