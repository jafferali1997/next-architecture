'use client';

import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useSearchParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  addPhoneAndGenerateOtp,
  generateOtp,
  getCurrentUser,
  verifyOtp
} from '@/provider/features/user/user.slice';
import { createProfile } from '@/provider/features/profile/profile.slice';
import { createFinancialDetail } from '@/provider/features/financial-detail/financial-detail.slice';
import { createBusinessDetail } from '@/provider/features/business-detail/business-detail.slice';
import { profileFinancialBusiness } from '@/provider/features/profile-financial-business/profile-financial-business.slice';
import useCountryCity from '@/common/hooks/use-country-city.hook';
import { logout } from '@/provider/features/auth/auth.slice';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().required('Email is required'),
  userName: Yup.string()
    .required('User name is required')
    .max(30, 'Username must be at most 30 characters long')
    .matches(/^[a-zA-Z0-9]+$/, 'Username can only contain alphanumeric characters'),
  country: Yup.string(),
  city: Yup.string().required('City name is required'),
  iban: Yup.string()
    .nullable()
    .transform((value) => (value === '' ? null : value))
    .matches(/^[a-zA-Z0-9]+$/, 'IBAN can only contain alphanumeric')
    .min(15, 'IBAN number can contain minimum 15 alphanumeric')
    .max(34, 'IBAN number can contain maximum 34 alphanumeric')
    .required('IBAN is required'),
  vat: Yup.string()
    .nullable()
    .transform((value) => (value === '' ? null : value))
    .matches(/[0-9]/, 'VAT number must be in digits')
    .min(5, 'VAT number can contain minimum 5 digits')
    .max(15, 'VAT number can contain maximum 15 digits')
    .required('VAT number is required'),
  businessName: Yup.string()
    .required('Company Name is required')
    .max(150, 'Company name must be 150 characters long')
    .matches(/^[a-zA-Z0-9\s]*$/, 'Company name can only contain alphanumeric characters'),
  population: Yup.string().required('Population is required'),
  address: Yup.string()
    .required('Address is required')
    .max(255, 'Address can contain maximum 255 characters')
    .matches(/^[a-zA-Z0-9\s]*$/, 'Address can only contain alphanumeric characters')
});

export default function useProfile() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const sendOtpButtonText = useRef('Send OTP');
  const [defaultCountry, setDefaultCountry] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    control,
    resetField,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur'
  });

  const { handleCountryChange, cities, error, setError, setCountry, country } =
    useCountryCity();

  useEffect(() => {
    if (localStorage.getItem('userProfile')) {
      const userProfile = JSON.parse(localStorage.getItem('userProfile'));
      if (userProfile.isOtpVerified) {
        setOtp(userProfile.otp);
        setPhone(userProfile.phone);
        setIsOtpVerified(userProfile.isOtpVerified);
      } else {
        localStorage.removeItem('userProfile');
      }
    }
    localStorage.setItem('isCountryChange', false);

    setValue('email', searchParams.get('email'));
    setValue('userName', searchParams.get('userName'));
    if (typeof window !== 'undefined' && !window.location.origin.includes('localhost')) {
      axios.get('https://ipapi.co/json/').then((res) => {
        console.log(res);
        const _country = `${res.data.country_name.toLowerCase()}-${
          res.data.country_code
        }`;
        setCountry(_country);
        // setValue('country', country);
        // setDefaultCountry(country);
        const event = {
          target: {
            value: _country
          }
        };
        handleCountryChange(event);
        setValue('city', res.data.city.toLowerCase());
      });
    } else {
      axios.get('http://ip-api.com/json').then((res) => {
        console.log(res);
        const _country = `${res.data.country.toLowerCase()}-${res.data.countryCode}`;
        // setValue('country', country);
        setCountry(_country);
        const event = {
          target: {
            value: _country
          }
        };
        handleCountryChange(event);
        setValue('city', res.data.city.toLowerCase());
      });
    }
  }, []);

  const moveRouter = (data) => {
    console.log('move router');
  };

  const onCountryChange = (e) => {
    console.log(e);
    // resetField('country');
    // setCountry('country', e.target.value);
    setValue('city', '');
    handleCountryChange(e);
  };

  const onSubmit = async (data) => {
    if (!country) {
      setError('Country is required');
      return;
    }
    const res = await dispatch(
      profileFinancialBusiness({ payload: { ...data, country } })
    );
    if (res.payload === 'Profile created successfully') {
      const user = await dispatch(getCurrentUser());
      if (user?.payload?.id) {
        router.push('/customer');
      }
    }
  };

  const sendOtp = () => {
    if (
      sendOtpButtonText.current === 'Send OTP' ||
      sendOtpButtonText.current === 'Resend'
    ) {
      if (phone) {
        sendOtpButtonText.current = 'Resend';
        dispatch(addPhoneAndGenerateOtp({ payload: { phone } }));
      }
    } else {
      dispatch(generateOtp());
    }
  };
  const handleOtpVerif = (data) => {
    if (data) {
      setIsOtpVerified(true);
      localStorage.setItem(
        'userProfile',
        JSON.stringify({
          userName: searchParams.get('userName'),
          email: searchParams.get('email'),
          isOtpVerified: true,
          phone,
          otp
        })
      );
    }
  };

  const logoutClickHandler = async () => {
    dispatch(logout());
  };

  const verifyOtpHandler = () => {
    if (otp > 0) {
      const otpData = {
        otp: Number(otp)
      };
      dispatch(verifyOtp({ payload: otpData, successCallBack: handleOtpVerif }));
    }
  };

  return {
    otp,
    setOtp,
    register,
    handleSubmit,
    control,
    setValue,
    errors,
    onSubmit,
    phone,
    setPhone,
    sendOtpButtonText,
    sendOtp,
    verifyOtpHandler,
    isOtpVerified,
    setIsOtpVerified,
    cities,
    logoutClickHandler,
    onCountryChange,
    country,
    error
  };
}
