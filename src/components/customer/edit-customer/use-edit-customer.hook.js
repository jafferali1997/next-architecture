'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getSingleCustomer } from '@/provider/features/customer/customer.slice';

export default function UseEditCustomer() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  const [isAdditional, setIsAdditional] = useState(false);
  const [isAdress, setIsAdress] = useState(true);
  const additionalhandles = () => {
    setIsAdditional(!isAdditional);
  };
  const adressHandles = () => {
    setIsAdress(!isAdress);
  };

  useEffect(() => {
    async function fetchData() {
      if (searchParams.get('id')) {
        const data = await dispatch(
          getSingleCustomer({ payload: searchParams.get('id') })
        );
        console.log('data', data);
      }
    }

    fetchData();
  }, [dispatch, searchParams]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    // resolver: yupResolver(validationSchema)
  });

  return {
    isAdditional,
    setIsAdditional,
    additionalhandles,
    isAdress,
    setIsAdress,
    adressHandles,
    register,
    handleSubmit,
    errors
  };
}
