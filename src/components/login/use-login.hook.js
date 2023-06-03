import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { getAccessToken } from '@/common/utils/access-token.util';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .max(30, 'Username must be at most 30 characters long')
    .min(5, 'Username must be minimum 5 characters')
    .required('Username or Email is required'),
  // email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
});

export default function useLogin() {
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

  const moveRouter = (data) => {
    if (data.user.isProfileCompleted) {
      router.push({
        pathname: '/two-factor-auth',
        query: { userId: data.user.userId, phone: data.user.phone }
      });
    } else {
      router.push({
        pathname: '/profile',
        query: {
          username: data.user.username,
          email: data.user.email,
          userId: data.user.userId
        }
      });
    }
  };

  const onSubmit = async (values) => {
    setLoader(true);
    try {
      axios
        .post(`${process.env.NEXT_PUBLIC_MAIN_URL}/auth/login`, { ...values })
        .then((response) => {
          if (response.data.status) {
            const { data } = response.data.result;
            // CustomAlert(response.data.message, 'success');
            moveRouter(data);
          } else {
            // CustomAlert(response.data.message, 'error');
          }
          setLoader(false);
        })
        .catch((error) => {
          if (error.message === 'Failed to fetch') {
            // CustomAlert(popupMessages.networkError, 'error');
          }
        });
    } catch (error) {
      console.error(error);
    }
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
