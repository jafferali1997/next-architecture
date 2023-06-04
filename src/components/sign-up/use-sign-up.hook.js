import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { signUp } from '@/provider/features/auth/auth.slice';

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .max(30, 'Username must be at most 30 characters long')
    .min(5, 'Username must be minimum 5 characters')
    .matches(/^[a-zA-Z0-9]+$/, 'Username can only contain alphanumeric characters')
    .required('Username is required'),
  // email: Yup.string()
  //   .email('The Email doesn’t seem to be correct. Please write correct email')
  //   .required('Email is required'),
  email: Yup.string()
    .email('The Email doesn’t seem to be correct. Please write correct email')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address')
    .required('Email is required'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions.'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Use Special Character like @ # etc')
});

export default function useSignUp() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema)
  });

  // hooks
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isEnableButton, setEnableButton] = useState(false);
  const [error, setError] = useState({});

  const router = useRouter(null);

  // functions
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    setEnableButton(false);
    setError({});
    setIsChecked(false);
    setShowPassword(false);
  }, [router]);

  useEffect(() => {
    if (Object.keys(error).length === 0 && isChecked === true) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  }, [isChecked, error]);
  const borderStyle = {
    border: '1px solid red'
  };
  const borderSuc = {
    border: '1px solid #10FF61'
  };
  const moveRouter = (data) => {
    router.push(`/verify-email?type=email-verification&email=${data.email}`);
  };
  const onSubmit = async (values) => {
    setLoader(true);
    dispatch(
      signUp({ payload: { ...values, role: 'SUPER_ADMIN' }, successCallBack: moveRouter })
    );
    // try {
    //   await fetch(`${process.env.NEXT_PUBLIC_MAIN_URL}/auth/register`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json'
    //     },
    //     body: JSON.stringify(values)
    //   })
    //     .then(async (response) => {
    //       setLoader(false);
    //       if (!response.ok) {
    //         const errors = await response.json();
    //         // CustomAlert(errors.error[0].msg, 'error');
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       // console.log('data', data.result.data.user);
    //       // CustomAlert('You have been registered successfully', 'success');
    //       // setAccessToken(data.result.data.accessToken);

    //       router.push({
    //         pathname: '/verify-email',
    //         query: {
    //           type: 'email-verification',
    //           email: data.result.data.user.email
    //         }
    //       });
    //     })
    //     .catch((err) => {
    //       if (err.message === 'Failed to fetch') {
    //         // CustomAlert(err.message, 'error');
    //       }
    //     });
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const signUpWithOAuth = (type, email) => {
    fetch(`${process.env.NEXT_PUBLIC_MAIN_URL}/auth/oauth-sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ email, type })
    })
      .then(async (response) => {
        setLoader(false);
        if (!response.ok) {
          const errors = await response.json();
          //   CustomAlert(errors.error[0].msg, 'error');
        }
        return response.json();
      })
      .then((response) => {
        if (response.status) {
          const { data } = response.result;
          //   CustomAlert(response.message, 'success');
          router.push({
            pathname: '/profile',
            query: {
              username: data.user.username,
              email: data.user.email,
              userId: data.user.userId
            }
          });
        } else {
          //   CustomAlert(response.message, 'error');
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
    isEnableButton,
    handleSubmit,
    onSubmit,
    register,
    errors,
    borderStyle,
    borderSuc,
    showPassword,
    toggleShowPassword,
    isChecked,
    loader,
    signUpWithOAuth,
    router
  };
}
