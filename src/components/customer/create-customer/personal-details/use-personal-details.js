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
  getSingleCustomer
} from '@/provider/features/customer/customer.slice';

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
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur'
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [data, setData] = useState();

  const [allPriceGroup, setAllPriceGroup] = useState([]);
  const [selectedPriceGroup, setSelectedPriceGroup] = useState([]);

  const [selectedDiscountGroup, setSelectedDiscountGroup] = useState([]);
  const [allDiscountGroup, setAllDiscountGroup] = useState([]);

  const [isSubmit, setIsSubmit] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  // const countries = Country.getAllCountries();
  const countries = [
    { label: 'Pakistan', value: 'pakistan' },
    { label: 'Turkey', value: 'turkey' }
  ];
  const cities = [
    { label: 'Lahore', value: 'lahore' },
    { label: 'Gujranwala', value: 'gujranwala' }
  ];
  const dispatch = useDispatch();

  const fetchData = useCallback(
    async (id) => {
      let data = await dispatch(getSingleCustomer({ payload: Number(id) }));
      if (data.payload) {
        data = data.payload;
        Object.keys(data).forEach((key) => setValue(key, data[key]));

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

  useEffect(() => {
    const id = Number(searchParams.get('id'));
    if (id) {
      fetchData(id);
    }
  }, [searchParams, allPriceGroup, allDiscountGroup, fetchData]);

  const handleCountryChange = (event) => {
    // const countryCode = event.target.value;
    // setSelectedCountry(countryCode);
    // const cities = City.getCitiesOfCountry(countryCode);
    // setCities(cities);
  };

  const handleCityChange = (event) => {
    // const cityName = event.target.value;
    // setSelectedCity(cityName);
  };

  const onSubmit = async (value) => {
    console.log(value);
    const data = {
      ...value,
      postalCode: Number(value.postalCode),
      ...(searchParams.get('id') && { customerId: Number(searchParams.get('id')) }),
      priceGroups: [
        ...selectedPriceGroup.map((item) => {
          return Number(item.value);
        })
      ],
      discountGroups: [
        ...selectedDiscountGroup.map((item) => {
          return Number(item.value);
        })
      ]
    };
    const res = await dispatch(createCustomerPersonalDetail({ payload: data }));
    console.log(res, 'Create Customer Personal Detail Response');
    if (res.payload && res.payload.id) {
      router.push(`/customer/create?id=${res.payload.id}`);
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
    handleCountryChange,
    selectedCity,
    selectedCountry,
    handleCityChange,
    countries,
    data,
    cities,
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
    handleButtonClickedit
  };
}
