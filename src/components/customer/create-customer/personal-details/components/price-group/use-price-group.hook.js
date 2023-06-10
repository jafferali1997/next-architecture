'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useCallback, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  createPriceGroup,
  getAllPriceGroup
} from '@/provider/features/price-group/price-group.slice';

export default function usePriceGroup(setPriceGroup, validationSchema = {}) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    methods,
    formState: { errors }
  } = useForm();
  // {
  //   resolver: yupResolver(validationSchema),
  //   mode: 'onBlur'
  // }
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchPriceGroup();
  }, []);

  const modalCloseHandler = () => {
    setOpen(false);
    reset();
  };

  const priceGroupSubmit = (data) => {
    addPriceGroup({ ...data, price: 0 });
    modalCloseHandler();
  };

  const fetchPriceGroup = async () => {
    const groups = await dispatch(getAllPriceGroup());
    console.log(groups);
    setPriceGroup(
      groups.payload.map((item) => {
        return { id: `${item.id}`, value: item.id, label: item.priceGroupName };
      })
    );
  };

  const addPriceGroup = async (data) => {
    const res = await dispatch(createPriceGroup({ payload: data }));
    if (res?.payload) {
      fetchPriceGroup();
    }
  };

  return {
    register,
    handleSubmit,
    methods,
    errors,
    open,
    setOpen,
    modalCloseHandler,
    priceGroupSubmit,
    addPriceGroup,
    setPriceGroup
  };
}
