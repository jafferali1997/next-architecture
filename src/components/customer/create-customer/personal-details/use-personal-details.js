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
import {
  createDiscountGroup,
  getAllDiscountGroup
} from '@/provider/features/discount-group/discount-group.slice';
import {
  createPriceGroup,
  getAllPriceGroup
} from '@/provider/features/price-group/price-group.slice';

const validationSchema = yup.object({
  // Define your validation rules here.
  // gender: yup.string().required('Gender is required'),
  // firstName: yup
  //   .string()
  //   .max(50, 'first name must be at most 50 characters long')
  //   .min(1, 'first name must be minimum 1 characters')
  //   .required('First name is required'),
  // lastName: yup
  //   .string()
  //   .max(50, 'last name must be at most 50 characters long')
  //   .min(1, 'last name must be minimum 1 characters')
  //   .required('Last name is required'),
  // designation: yup
  //   .string()
  //   .max(100, 'designation must be at most 100 characters long')
  //   .min(1, 'designation must be minimum 1 characters')
  //   .matches(/^[^.]*$/, {
  //     message: 'Invalid designation'
  //   })
  //   .matches(/^[^!@#$%^&*+=<>:;|~(){}[\]]*$/, {
  //     message: 'Invalid designation'
  //   })
  //   .required('designation is required'),
  // postal: yup
  //   .number()
  //   .max(9999999999, 'postal code must be at most 10 characters long')
  //   .min(1, 'postal code must be minimum 1 characters')
  // .matches(/^[^.]*$/, {
  //   message: 'No period'
  // })
  // .matches(/^[^.]*$/, {
  //   message: 'Invalid postal'
  // })
  // .matches(/^[^!@#$%^&*+=<>:;|~(){}[\s\]]*$/, {
  //   message: 'Invalid postal'
  // })
  //   .required('postal code is required'),
  // address: yup
  //   .string()
  //   .max(95, 'address must be at most 95 characters long')
  //   .min(1, 'address must be minimum 1 characters')
  //   .required('address is required'),
  // country: yup.string().required('country is required')
});

export default function usePersonalDetails({ handleTabClick, handleTabCompleted }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [data, setData] = useState();
  const [discountGroup, setDiscountGroup] = useState();
  const [priceGroup, setPriceGroup] = useState();
  const [addDiscount, setAddDiscount] = useState();
  const [addPrice, setAddPrice] = useState();
  const [priceOptions, setPriceOptions] = useState([]);
  const [discountOptions, setDiscountOptions] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
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
      let data = await dispatch(getSingleCustomer({ payload: id }));
      if (data.payload) {
        data = data.payload;
        Object.keys(data).forEach((key) => setValue(key, data[key]));
        // const event = {
        //   target: {
        //     value: data?.country
        //   }
        // };
        // handleCountryChange(event);
        setPriceOptions(
          data.priceGroup.map((item) => {
            return priceGroup.find((price) => price.id === item.id);
          })
        );
        setDiscountOptions(
          data.discountGroup.map((item) => {
            return discountGroup.find((price) => price.value.id === item.id);
          })
        );
      }
    },
    [priceGroup, discountGroup]
  );

  const fetchPriceGroup = async () => {
    const groups = await dispatch(getAllPriceGroup());
    console.log(groups, 'Price Groups');
    setPriceGroup(
      groups.map((item) => {
        return { id: item.id, value: item.id, label: item.priceGroupName };
      })
    );
  };

  const fetchDiscountGroup = async () => {
    const groups = await dispatch(getAllDiscountGroup());
    console.log(groups, 'Discount Groups');
    setDiscountGroup(
      groups.map((item) => {
        return { id: item.id, value: item.id, label: item.discountGroupName };
      })
    );
  };

  const addPriceGroup = async (data) => {
    // NOTE: I need this data to be sent to the backend
    // data = {
    //   "priceGroupName": "string",
    //   "price": 0
    // }
    dispatch(createPriceGroup({ payload: data }));
    fetchPriceGroup();
  };

  const addDiscountGroup = async (data) => {
    // NOTE: I need this data to be sent to the backend
    // data = {
    //   "discountGroupName": "Group 2",
    //   "discount": 500
    // }

    dispatch(createDiscountGroup({ payload: data }));
    fetchDiscountGroup();
  };

  useEffect(() => {
    fetchPriceGroup();
    fetchDiscountGroup();
  }, []);

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      fetchData(id);
    }
  }, [router, searchParams, priceGroup, discountGroup, fetchData]);

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
      ...(searchParams.get('id') && { customerId: searchParams.get('id') }),
      priceGroups: [
        ...priceOptions.map((item) => {
          return item.value;
        })
      ],
      discountGroups: [
        ...discountOptions.map((item) => {
          return item.value;
        })
      ]
    };
    const res = await dispatch(createCustomerPersonalDetail({ payload: data }));
    console.log(res, 'Create Customer Personal Detail Response');
    if (res.payload) {
      router.push(`/customer/create?id=${res.payload.id}`);
      handleTabClick('company_details');
      handleTabCompleted('customer_details');
    }
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
    cities,
    priceGroup,
    addPrice,
    setAddPrice,
    setPriceOptions,
    addPriceGroup,
    data,
    discountGroup,
    setDiscountOptions,
    addDiscount,
    setAddDiscount,
    addDiscountGroup,
    setIsSubmit,
    router,
    errors
  };
}
