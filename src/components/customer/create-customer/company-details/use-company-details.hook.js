'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  useForm,
  appendErrors,
  transformToNestObject,
  useFieldArray
} from 'react-hook-form';
import * as yup from 'yup';
import { Country, City } from 'country-state-city';
import { yupResolver } from '@hookform/resolvers/yup';
// import CustomAlert from '@/common/components/custom-alert';
import { useDispatch } from 'react-redux';
import {
  createCustomerCompanyDetail,
  getSingleCustomer
} from '@/provider/features/customer/customer.slice';
import useCountryCity from '@/common/hooks/use-country-city.hook';

const validationSchema = yup.object({
  // Define your validation rules here.
  companyName: yup
    .string()
    .required('Company name is required')
    .max(160, 'company name must be at most 160 characters long'),
  companyEmail: yup
    .string()
    .email('The Email doesn’t seem to be correct. Please write correct email')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address')
    .required('Email is required'),
  companyPhone: yup.string().required('Company phone is required'),
  companyMobile: yup.string().required('Company Mobile is required'),
  companySize: yup.string().required('Company Size is required'),
  companyFax: yup.string().required('Company Fax is required'),
  companyUrl: yup.string().required('Company Url is required'),
  tin: yup
    .string()
    .required('TIN is required')
    .max(10, 'TIN must be at must 10 characters long'),
  vat: yup
    .string()
    .required('VAT is required')
    .matches(/^[a-zA-Z]{2}\d{9}$/, 'Is not in correct format')
  // companyAddress: yup.array().of(
  //     yup.object().shape({
  //       address: yup.string().required('Address is required'),
  //       addressLabel: yup.string().required('Address Label is required'),
  //     })
  //   ).required('At least one company address is required')
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
  const [inputValues, setInputValues] = useState([{ id: '1' }]);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchemaState)
  });

  const {
    fields: companyAddressFields,
    append: appendCompanyAddress,
    remove: removeCompanyAddress
  } = useFieldArray({
    control,
    name: 'companyAddresses'
  });

  const { handleCountryChange, cities, error, setError, setCountry, country } =
    useCountryCity();

  const onCountryChange = (e) => {
    console.log(e.target.value);
    setValue('ac_country', e.target.value);
    setValue('ac_city', '');
    handleCountryChange(e);
  };

  useEffect(() => {
    if (searchParams.get('id')) {
      const id = Number(searchParams.get('id'));

      async function fetchMyAPI() {
        let data = await dispatch(getSingleCustomer({ payload: id }));
        if (data.payload) {
          data = data.payload;
          Object.keys(data).forEach((key) => setValue(key, data[key]));
          if (data?.additionalContact?.length > 0) {
            Object.keys(data.additionalContact[0]).forEach((key) =>
              setValue(`ac_${key}`, data.additionalContact[0][key])
            );
            handleCountryChange({ target: { value: data.additionalContact[0].country } });
          }
          if (data?.companyAddress?.length > 0) {
            const ids = companyAddressFields.map((item) => item.id);
            console.log(ids, 'ids');
            data.companyAddress.forEach((addressObj, index) => {
              if (!ids.includes(addressObj.id)) {
                appendCompanyAddress({
                  id: addressObj.id,
                  addressLabel: addressObj.addressLabel,
                  address: addressObj.address
                });
              }
            });
          }
          setCountry(data.country);
          setIsShowInPdf(data.isPDF);
          setStatus(data.isStatus);
          setIsVatEnabled(data.vatStatus);
        }
      }
      if (id) {
        fetchMyAPI();
      }
    }
    appendCompanyAddress({ addressLabel: '', address: '' });
  }, []);

  // useEffect(() => {
  //   if (isAdditional) {
  //     validationSchema = yup.object({
  //       // Define your validation rules here.
  //       // gender: yup.string().required('Gender is required'),
  //       // companyName: yup
  //       //   .string()
  //       //   .max(160, 'company name must be at most 160 characters long')
  //       //   .min(1, 'compnay name must be minimum 1 characters')
  //       //   .required('Company name is required'),
  //       // additionalEmail: yup
  //       //   .string()
  //       //   .email('The Email doesn’t seem to be correct. Please write correct email')
  //       //   .matches(
  //       //     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  //       //     'Invalid email address'
  //       //   )
  //       //   .required('Email is required'),
  //       // phone: yup.string().required('Company phone is required'),
  //       // mobile: yup.string().required('Company Mobile is required'),
  //       // companySize: yup.string().required('Company Size is required'),
  //       // faxNumber: yup.string().required('Company Fax is required'),
  //       // taxNumber: yup
  //       //   .number()
  //       //   .max(9999999999, 'TIN must be at most 10 characters long')
  //       //   .min(999999999, 'TIN must be minimum 10 characters')
  //       //   .required('TIN is required'),
  //       // vatNumber: yup
  //       //   .string()
  //       //   .matches(/^[a-zA-Z]{2}\d{9}$/, 'Is not in correct format')
  //       //   .required('VAT is required'),
  //       // firstName: yup
  //       //   .string()
  //       //   .max(50, 'first name must be at most 50 characters long')
  //       //   .min(1, 'first name must be minimum 1 characters')
  //       //   .required('First name is required'),
  //       // lastName: yup
  //       //   .string()
  //       //   .max(50, 'last name must be at most 50 characters long')
  //       //   .min(1, 'last name must be minimum 1 characters')
  //       //   .required('Last name is required'),
  //       // designation: yup
  //       //   .string()
  //       //   .max(100, 'designation must be at most 100 characters long')
  //       //   .min(1, 'designation must be minimum 1 characters')
  //       //   .matches(/^[^.]*$/, {
  //       //     message: 'Invalid designation'
  //       //   })
  //       //   .matches(/^[^!@#$%^&*+=<>:;|~(){}[\s\]]*$/, {
  //       //     message: 'Invalid designation'
  //       //   })
  //       //   .required('designation is required'),
  //       // postal: yup
  //       //   .string()
  //       //   .max(9999999999, 'postal code must be at most 10 characters long')
  //       //   .min(1, 'postal code must be minimum 1 characters')
  //       //   .matches(/^[^.]*$/, {
  //       //     message: 'No period'
  //       //   })
  //       //   .matches(/^[^.]*$/, {
  //       //     message: 'Invalid postal'
  //       //   })
  //       //   .matches(/^[^!@#$%^&*+=<>:;|~(){}[\s\]]*$/, {
  //       //     message: 'Invalid postal'
  //       //   })
  //       //   .required('postal code is required'),
  //       // address: yup
  //       //   .string()
  //       //   .max(95, 'address must be at most 95 characters long')
  //       //   .min(1, 'address must be minimum 1 characters')
  //       //   .required('address is required'),
  //       // country: yup.string().required('country is required')
  //     });
  //     setValidationSchemaState(validationSchema);
  //   } else {
  //     validationSchema = yup.object({
  //       // Define your validation rules here.
  //       // companyName: yup
  //       //   .string()
  //       //   .max(160, 'company name must be at most 160 characters long')
  //       //   .min(1, 'compnay name must be minimum 1 characters')
  //       //   .required('Company name is required'),
  //       // email: yup
  //       //   .string()
  //       //   .email('The Email doesn’t seem to be correct. Please write correct email')
  //       //   .matches(
  //       //     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  //       //     'Invalid email address'
  //       //   )
  //       //   .required('Email is required'),
  //       // phoneNo: yup.string().required('Company phone is required'),
  //       // mobileNo: yup.string().required('Company Mobile is required'),
  //       // companySize: yup.string().required('Company Size is required'),
  //       // faxNumber: yup.string().required('Company Fax is required'),
  //       // taxNumber: yup
  //       //   .number()
  //       //   .max(9999999999, 'TIN must be at most 10 characters long')
  //       //   .min(999999999, 'TIN must be minimum 10 characters')
  //       //   .required('TIN is required'),
  //       // vatNumber: yup
  //       //   .string()
  //       //   .matches(/^[a-zA-Z]{2}\d{9}$/, 'Is not in correct format')
  //       //   .required('VAT is required')
  //     });
  //     setValidationSchemaState(validationSchema);
  //   }
  // }, [isAdditional]);

  const additionalHandles = () => {
    setIsAdditional(!isAdditional);
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
      if (key === 'gender' && !['MALE', 'FEMALE'].includes(value[attr])) {
        return { ...accumulator };
      } else if (key === 'gender' && value[attr] === '') {
        return { ...accumulator };
      }
      return { ...accumulator, [key]: value[attr] };
    }, {});
    // const companyAddressesKeys = Object.keys(value).filter((attr) =>
    //   attr.startsWith('ca')
    // );
    // const companyAddresses = companyAddressesKeys.reduce((acc, curr, index, arr) => {
    //   if (index % 2 === 0) {
    //     const obj = {
    //       addressLabel: value[curr],
    //       address: value[arr[index + 1]]
    //     };
    //     acc.push(obj);
    //   }
    //   return acc;
    // }, []);
    const payload = {
      ...value,
      customerId: Number(searchParams.get('id')),
      additionalContact: [additionalContact],
      companyAddress: value.companyAddresses,
      tin: value.tin
    };
    console.log(payload);
    const res = await dispatch(createCustomerCompanyDetail({ payload }));
    console.log(res, 'Create Customer Company Detail Response');
    if (res.payload?.id) {
      handleTabClick('payment_details');
      handleTabCompleted('company_details');
    }
  };

  const handleAddInput = () => {
    // console.log(companyAddresses);
    // const id =
    //   companyAddresses.length > 0
    //     ? companyAddresses[companyAddresses.length - 1].id + 1
    //     : 1;
    console.log(companyAddressFields);
    appendCompanyAddress({ addressLabel: '', address: '' });
    // setCompanyAddresses([...companyAddresses, { id }]);
  };

  const handleRemoveInput = (index) => {
    console.log(index);
    removeCompanyAddress(index);
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
    setIsSubmit,
    additionalHandles,
    router,
    data,
    errors,
    handleAddInput,
    inputValues,
    setInputValues,
    control,
    cities,
    country,
    onCountryChange,
    error,
    companyAddressFields,
    handleRemoveInput
  };
}
