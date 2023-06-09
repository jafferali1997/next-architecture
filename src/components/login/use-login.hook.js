import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessToken } from '@/common/utils/access-token.util';
import { login } from '@/provider/features/auth/auth.slice';
import { generateOtp } from '@/provider/features/user/user.slice';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .max(30, 'Username must be at most 30 characters long')
    .min(5, 'Username must be minimum 5 characters')
    .required('Username or Email is required'),
  // email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    // .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
});

export default function useLogin() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema)
  });

  const [showPassword, setShowPassword] = useState(false);

  const [loader, setLoader] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      router.push('/customer');
    }
  }, [router]);

  // functions
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const borderStyle = {
    border: '1px solid red'
  };
  const borderSuc = {
    border: '1px solid #10FF61'
  };

  const moveRouterGenOtp = (data) => {
    router.push(`/two-factor-auth?userId=${data.id}&phone=${data.phone}`);
  };
  const moveRouter = (data) => {
    if (data.isPhoneVerified) {
      dispatch(
        generateOtp({ payload: { ...data }, successCallBack: moveRouterGenOtp(data) })
      );
    } else {
      router.push(
        `/profile?username=${data.userName}&email=${data.email}&userId=${data.id}`
      );
    }
  };

  const onSubmit = async (values) => {
    setLoader(true);
    dispatch(login({ payload: { ...values }, successCallBack: moveRouter }));
  };

  const loginWithOAuth = (type, email) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_MAIN_URL}/auth/oauth-login`, {
        email,
        type
      })
      .then((response) => {
        if (response.data.status) {
          console.log(response.data);
          const { data } = response.data.result;

          //   CustomAlert(response.data.message, 'success');
          moveRouter(data);
        } else {
          //   CustomAlert(response.data.message, 'error');
          // router.push('/login')
        }
      })
      .catch((err) => {
        if (err.message === 'Network Error') {
          //   CustomAlert(err.message, 'error');
        }
      });
  };

  return {
    onSubmit,
    borderStyle,
    borderSuc,
    showPassword,
    toggleShowPassword,
    router,
    loader,
    loginWithOAuth,
    register,
    handleSubmit,
    errors
  };
}
