'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm, appendErrors, transformToNestObject } from 'react-hook-form';
import * as yup from 'yup';
import { Country, City } from 'country-state-city';
import { yupResolver } from '@hookform/resolvers/yup';
// import CustomAlert from '@/common/components/custom-alert';
import { useDispatch } from 'react-redux';
import {
  createCustomerCompanyDetail,
  getSingleCustomer
} from '@/provider/features/customer/customer.slice';

let validationSchema = yup.object({
  // Define your validation rules here.
  companyName: yup
    .string()
    .max(160, 'company name must be at most 160 characters long')
    .min(1, 'compnay name must be minimum 1 characters')
    .required('Company name is required'),
  email: yup
    .string()
    .email('The Email doesn’t seem to be correct. Please write correct email')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address')
    .required('Email is required'),
  companyPhone: yup.string().required('Company phone is required'),
  companyMobile: yup.string().required('Company Mobile is required'),
  companySize: yup.string().required('Company Size is required'),
  companyFax: yup.string().required('Company Fax is required'),
  tin: yup
    .number()
    .max(9999999999, 'TIN must be at most 10 characters long')
    .min(999999999, 'TIN must be minimum 10 characters')
    .required('TIN is required'),
  vat: yup
    .string()
    .matches(/^[a-zA-Z]{2}\d{9}$/, 'Is not in correct format')
    .required('VAT is required')
});

export default function useCompanyDetails({ handleTabClick, handleTabCompleted }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  const [data, setData] = useState();
  const [status, setStatus] = useState();
  const [isShowInPdf, setIsShowInPdf] = useState();
  const [isVatEnabled, setIsVatEnabled] = useState();
  const [isAdditional, setIsAdditional] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [validationSchemaState, setValidationSchemaState] = useState(validationSchema);
  const [inputValues, setInputValues] = useState(['']);

  const countries = [
    { label: 'Pakistan', value: 'pakistan' },
    { label: 'Turkey', value: 'turkey' }
  ];
  const cities = [
    { label: 'Lahore', value: 'lahore' },
    { label: 'Gujranwala', value: 'gujranwala' }
  ];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchemaState)
  });

  useEffect(() => {
    if (searchParams.get('id')) {
      const id = searchParams.get('id');

      async function fetchMyAPI() {
        let data = await dispatch(getSingleCustomer({ payload: id }));
        if (data.payload) {
          data = data.payload;
          Object.keys(data).forEach((key) => setValue(key, data[key]));
          if (data?.additionalContact?.length > 0) {
            Object.keys(data.additionalContact[0]).forEach((key) =>
              setValue(`ac_${key}`, data.additionalContact[0][key])
            );
          }
          if (data?.companyAddress?.length > 0) {
            const newInputValues = data.companyAddress.map((addressObj, idx) => {
              setValue(`ca_addressLabel_${idx + 1}`, addressObj.addressLabel);
              setValue(`ca_address_${idx + 1}`, addressObj.address);
              return '';
            });
            setInputValues(newInputValues);
          }
          setIsShowInPdf(data.isPDF);
          setStatus(data.isStatus);
          setIsVatEnabled(data.vatStatus);
        }
      }
      if (id) {
        fetchMyAPI();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    if (isAdditional) {
      validationSchema = yup.object({
        // Define your validation rules here.
        // gender: yup.string().required('Gender is required'),
        // companyName: yup
        //   .string()
        //   .max(160, 'company name must be at most 160 characters long')
        //   .min(1, 'compnay name must be minimum 1 characters')
        //   .required('Company name is required'),
        // additionalEmail: yup
        //   .string()
        //   .email('The Email doesn’t seem to be correct. Please write correct email')
        //   .matches(
        //     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        //     'Invalid email address'
        //   )
        //   .required('Email is required'),
        // phone: yup.string().required('Company phone is required'),
        // mobile: yup.string().required('Company Mobile is required'),
        // companySize: yup.string().required('Company Size is required'),
        // faxNumber: yup.string().required('Company Fax is required'),
        // taxNumber: yup
        //   .number()
        //   .max(9999999999, 'TIN must be at most 10 characters long')
        //   .min(999999999, 'TIN must be minimum 10 characters')
        //   .required('TIN is required'),
        // vatNumber: yup
        //   .string()
        //   .matches(/^[a-zA-Z]{2}\d{9}$/, 'Is not in correct format')
        //   .required('VAT is required'),
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
        //   .matches(/^[^!@#$%^&*+=<>:;|~(){}[\s\]]*$/, {
        //     message: 'Invalid designation'
        //   })
        //   .required('designation is required'),
        // postal: yup
        //   .string()
        //   .max(9999999999, 'postal code must be at most 10 characters long')
        //   .min(1, 'postal code must be minimum 1 characters')
        //   .matches(/^[^.]*$/, {
        //     message: 'No period'
        //   })
        //   .matches(/^[^.]*$/, {
        //     message: 'Invalid postal'
        //   })
        //   .matches(/^[^!@#$%^&*+=<>:;|~(){}[\s\]]*$/, {
        //     message: 'Invalid postal'
        //   })
        //   .required('postal code is required'),
        // address: yup
        //   .string()
        //   .max(95, 'address must be at most 95 characters long')
        //   .min(1, 'address must be minimum 1 characters')
        //   .required('address is required'),
        // country: yup.string().required('country is required')
      });
      setValidationSchemaState(validationSchema);
    } else {
      validationSchema = yup.object({
        // Define your validation rules here.
        // companyName: yup
        //   .string()
        //   .max(160, 'company name must be at most 160 characters long')
        //   .min(1, 'compnay name must be minimum 1 characters')
        //   .required('Company name is required'),
        // email: yup
        //   .string()
        //   .email('The Email doesn’t seem to be correct. Please write correct email')
        //   .matches(
        //     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        //     'Invalid email address'
        //   )
        //   .required('Email is required'),
        // phoneNo: yup.string().required('Company phone is required'),
        // mobileNo: yup.string().required('Company Mobile is required'),
        // companySize: yup.string().required('Company Size is required'),
        // faxNumber: yup.string().required('Company Fax is required'),
        // taxNumber: yup
        //   .number()
        //   .max(9999999999, 'TIN must be at most 10 characters long')
        //   .min(999999999, 'TIN must be minimum 10 characters')
        //   .required('TIN is required'),
        // vatNumber: yup
        //   .string()
        //   .matches(/^[a-zA-Z]{2}\d{9}$/, 'Is not in correct format')
        //   .required('VAT is required')
      });
      setValidationSchemaState(validationSchema);
    }
  }, [isAdditional]);

  const additionalHandles = () => {
    setIsAdditional(!isAdditional);
  };

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
    const additionalContactKeys = Object.keys(value).filter((attr) =>
      attr.startsWith('ac')
    );
    const additionalContact = additionalContactKeys.reduce((accumulator, attr) => {
      const key = attr.replace('ac_', '');
      return { ...accumulator, [key]: value[attr] };
    }, {});
    const companyAddressesKeys = Object.keys(value).filter((attr) =>
      attr.startsWith('ca')
    );
    const companyAddresses = companyAddressesKeys.reduce((acc, curr, index, arr) => {
      if (index % 2 === 0) {
        const obj = {
          addressLabel: value[curr],
          address: value[arr[index + 1]]
        };
        acc.push(obj);
      }
      return acc;
    }, []);
    const payload = {
      ...value,
      customerId: searchParams.get('id'),
      additionalContact: [additionalContact],
      companyAddress: companyAddresses
    };
    console.log(payload);
    const res = await dispatch(createCustomerCompanyDetail({ payload }));
    console.log(res, 'Create Customer Company Detail Response');
    if (res.payload) {
      handleTabClick('payment_details');
      handleTabCompleted('company_details');
    }
  };

  const handleAddInput = () => {
    setInputValues([...inputValues, '']);
  };

  const handleRemoveInput = (index) => {
    const newInputValues = [...inputValues];
    newInputValues.splice(index, 1);
    setInputValues(newInputValues);
  };

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    console.log(newInputValues);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    isAdditional,
    status,
    setStatus,
    isShowInPdf,
    setIsShowInPdf,
    isVatEnabled,
    setIsVatEnabled,
    handleCountryChange,
    selectedCountry,
    countries,
    cities,
    selectedCity,
    handleCityChange,
    setIsSubmit,
    additionalHandles,
    router,
    data,
    errors,
    handleAddInput,
    handleInputChange,
    inputValues,
    setInputValues
  };
}
