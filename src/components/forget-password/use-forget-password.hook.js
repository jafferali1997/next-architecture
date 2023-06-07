import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { generateForgetPasswordLink } from '@/provider/features/user/user.slice';

const FormSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Email is invalid')
});
export default function useForgetPassword() {
  const dispatch = useDispatch();
  const router = useRouter(null);

  // hooks
  const [email, setEmail] = useState('');
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(FormSchema)
  });

  const borderStyle = {
    border: '1px solid red'
  };
  const borderSuc = {
    border: '1px solid #10FF61'
  };

  const onSubmit = (email) => {
    console.log(email);
    const data = {
      payload: email
    }
    // setLoader(true);
    dispatch(generateForgetPasswordLink(data));

    // const { email } = router.query;
    // console.log(router.query);
    // const data = {
    //   email,
    //   password: values.pass
    // };
    // console.log(data);
    // axios
    //   .post(`${process.env.NEXT_PUBLIC_MAIN_URL}/auth/change-password/`, data)
    //   .then((response) => {
    //     if (response.data.status === true) {
    //       //   CustomAlert('Password Updated Successfully.', 'success');
    //       router.push({
    //         pathname: '/login',
    //         query: { email }
    //       });
    //     } else {
    //       //   CustomAlert(response.data.message, 'error');
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     if (error.message === 'Network Error') {
    //       //   CustomAlert(popupMessages.networkError, 'error');
    //     }
    //   });
  };

  return {
    email,
    handleSubmit,
    onSubmit,
    register,
    errors,
    borderStyle,
    borderSuc,
    loader
  };
}
