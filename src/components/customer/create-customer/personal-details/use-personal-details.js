'use client';

import axios from 'axios';
import { City, Country } from 'country-state-city';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  createCustomerPersonalDetail,
  getSingleCustomer,
  updateCustomer
} from '@/provider/features/customer/customer.slice';
import useCountryCity from '@/common/hooks/use-country-city.hook';

const validationSchema = yup.object({
  // Define your validation rules here.
  gender: yup.string().required('Gender is required'),
  firstName: yup
    .string()
    .max(50, 'first name must be at most 50 characters long')
    .required('First name is required'),
  lastName: yup
    .string()
    .max(50, 'last name must be at most 50 characters long')
    .required('Last name is required'),
  designation: yup
    .string()
    .max(100, 'designation must be at most 100 characters long')
    .required('Designation is required'),
  postalCode: yup
    .string()
    .required('Postal Code is required')
    .matches(/[0-9]/, 'Postal must be in digits')
    .max(10, 'postal code must be maximum 10 characters'),
  address: yup
    .string()
    .max(95, 'address must be at most 95 characters long')
    .required('Address is required'),
  country: yup.string().required('Country is required'),
  city: yup.string().required('City is required')
});

export default function usePersonalDetails({ handleTabClick, handleTabCompleted }) {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur'
  });
  const { handleCountryChange, cities, error, setError, setCountry, country } =
    useCountryCity();

  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState();

  const [allPriceGroup, setAllPriceGroup] = useState([]);
  const [selectedPriceGroup, setSelectedPriceGroup] = useState([]);

  const [selectedDiscountGroup, setSelectedDiscountGroup] = useState([]);
  const [allDiscountGroup, setAllDiscountGroup] = useState([]);

  const [isSubmit, setIsSubmit] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const dispatch = useDispatch();

  const fetchData = useCallback(
    async (id) => {
      let data = await dispatch(getSingleCustomer({ payload: Number(id) }));
      if (data.payload) {
        data = data.payload;
        Object.keys(data).forEach((key) => setValue(key, data[key]));
        handleCountryChange({ target: { value: data.country } });
        setCountry(data.country);
        setValue('city', data.city);
        setSelectedPriceGroup(
          data.priceGroup.map((item) => {
            return allPriceGroup.find((price) => Number(price.id) === item.id);
          })
        );
        setSelectedDiscountGroup(
          data.discountGroup.map((item) => {
            return allDiscountGroup.find((price) => Number(price.id) === item.id);
          })
        );
      }
    },
    [allPriceGroup, allDiscountGroup]
  );

  const onCountryChange = (e) => {
    console.log(e.target.value);
    setValue('country', e.target.value);
    setValue('city', '');
    handleCountryChange(e);
  };

  useEffect(() => {
    const id = Number(searchParams.get('id'));
    if (id) {
      fetchData(id);
    }
  }, [searchParams, allPriceGroup, allDiscountGroup, fetchData]);

  const onSubmit = async (value) => {
    if (!country) {
      setError('Country is required');
      return;
    }
    const priceGroups = [
      ...selectedPriceGroup.map((item) => {
        return Number(item.value);
      })
    ];
    const discountGroups = [
      ...selectedDiscountGroup.map((item) => {
        return Number(item.value);
      })
    ];
    const payloadData = {
      gender: value.gender,
      firstName: value.firstName,
      lastName: value.lastName,
      designation: value.designation,
      address: value.address,
      city: value.city,
      country: value.country,
      postalCode: value.postalCode
    };
    let response = null;
    if (searchParams.get('id')) {
      response = await dispatch(
        updateCustomer({
          payload: {
            data: {
              ...payloadData,
              priceGroup: priceGroups,
              discountGroup: discountGroups
            },
            id: Number(searchParams.get('id'))
          }
        })
      );
    } else {
      response = await dispatch(
        createCustomerPersonalDetail({
          payload: { ...payloadData, priceGroups, discountGroups }
        })
      );
    }
    console.log(response, 'Create Customer Personal Detail Response');
    if (response.payload && response.payload.id) {
      router.push(`/customer/create?id=${response.payload.id}`);
      handleTabClick('company_details');
      handleTabCompleted('customer_details');
    }
  };

  const handleButtonClickedit = () => {
    setOpenPopup(!openPopup);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    data,
    allPriceGroup,
    setAllPriceGroup,
    selectedPriceGroup,
    setSelectedPriceGroup,
    allDiscountGroup,
    setAllDiscountGroup,
    selectedDiscountGroup,
    setSelectedDiscountGroup,
    setIsSubmit,
    router,
    errors,
    handleButtonClickedit,
    control,
    cities,
    country,
    onCountryChange,
    error
  };
}
