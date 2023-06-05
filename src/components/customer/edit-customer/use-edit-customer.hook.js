'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  getSingleCustomer,
  updateCustomer
} from '@/provider/features/customer/customer.slice';

export default function UseEditCustomer() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const customerId = useRef(searchParams.get('id'));

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
        // customerId.current = searchParams.get('id');
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

  const onSubmit = (data) => {
    console.log(data);
    const res = dispatch(
      updateCustomer({ payload: { data: { ...data }, id: customerId.current } })
    );
    console.log('data', res);
    if (res) {
      router.push('/customer');
    }
  };

  return {
    isAdditional,
    setIsAdditional,
    additionalhandles,
    isAdress,
    setIsAdress,
    adressHandles,
    register,
    handleSubmit,
    errors,
    id: customerId.current,
    onSubmit
  };
}
