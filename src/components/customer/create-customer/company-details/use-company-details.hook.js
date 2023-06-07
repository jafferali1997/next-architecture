'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useForm, appendErrors, transformToNestObject } from 'react-hook-form';
import * as yup from 'yup';
import { Country, City } from 'country-state-city';
import { yupResolver } from '@hookform/resolvers/yup';
// import CustomAlert from '@/common/components/custom-alert';
import { useDispatch } from 'react-redux';

let validationSchema = yup.object({
  // Define your validation rules here.
  // companyName: yup
  //   .string()
  //   .max(160, 'company name must be at most 160 characters long')
  //   .min(1, 'compnay name must be minimum 1 characters')
  //   .required('Company name is required'),
  // email: yup
  //   .string()
  //   .email('The Email doesn’t seem to be correct. Please write correct email')
  //   .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address')
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

export default function useCompanyDetails({ handleTabClick, handleTabCompleted }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [data, setData] = useState();
  const [status, setStatus] = useState();
  const [isShowInPdf, setIsShowInPdf] = useState();
  const [isVatEnabled, setIsVatEnabled] = useState();
  const [isAdditional, setIsAdditional] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cities, setCities] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const countries = Country.getAllCountries();
  const [validationSchemaState, setValidationSchemaState] = useState(validationSchema);
  const [inputValues, setInputValues] = useState(['']);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchemaState)
  });

  useEffect(() => {
    if (router?.query) {
      const { id } = router.query;

      async function fetchMyAPI() {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/${id}`
        );
        if (res.data.result.data.customer.companyDetails) {
          if (res.data.result.data.customer.companyDetails.additionalContactPerson) {
            setIsAdditional(true);
            const event = {
              target: {
                value:
                  res.data.result.data.customer.companyDetails.additionalContactPerson
                    .country
              }
            };
            handleCountryChange(event);
          }
          setData({
            ...res.data.result.data.customer.companyDetails,
            ...(res.data.result.data.customer.companyDetails.additionalContactPerson && {
              additionalEmail:
                res.data.result.data.customer.companyDetails.additionalContactPerson
                  .email,
              phone:
                res.data.result.data.customer.companyDetails.additionalContactPerson
                  .phoneNo,
              mobile:
                res.data.result.data.customer.companyDetails.additionalContactPerson
                  .mobileNo,
              gender:
                res.data.result.data.customer.companyDetails.additionalContactPerson
                  .gender,
              designation:
                res.data.result.data.customer.companyDetails.additionalContactPerson
                  .designation,
              firstName:
                res.data.result.data.customer.companyDetails.additionalContactPerson
                  .firstName,
              lastName:
                res.data.result.data.customer.companyDetails.additionalContactPerson
                  .lastName,
              address:
                res.data.result.data.customer.companyDetails.additionalContactPerson
                  .address,
              country:
                res.data.result.data.customer.companyDetails.additionalContactPerson
                  .country,
              city: res.data.result.data.customer.companyDetails.additionalContactPerson
                .city,
              postal:
                res.data.result.data.customer.companyDetails.additionalContactPerson
                  .postal,
              department:
                res.data.result.data.customer.companyDetails.additionalContactPerson
                  .department
            })
          });
          setIsShowInPdf(res.data.result.data.customer.companyDetails.IsShowInPdf);
          setStatus(res.data.result.data.customer.companyDetails.status);
          setIsVatEnabled(res.data.result.data.customer.companyDetails.isVatEnabled);
        } else {
          setData({});
        }
      }

      if (id) {
        fetchMyAPI();
      }
    }
  }, [router?.query]);

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
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
    const cities = City.getCitiesOfCountry(countryCode);
    setCities(cities);
  };

  const handleCityChange = (event) => {
    const cityName = event.target.value;
    setSelectedCity(cityName);
  };

  const onSubmit = async (value) => {
    console.log(value);
    handleTabClick('payment_details');
    handleTabCompleted('company_details');

    // if (isAdditional) {
    //   value.additionalContactPerson = {
    //     gender: value.gender,
    //     designation: value.designation,
    //     firstName: value.firstName,
    //     lastName: value.lastName,
    //     address: value.address,
    //     country: value.country,
    //     city: value.city,
    //     postal: value.postal,
    //     email: value.additionalEmail,
    //     phoneNo: value.phone,
    //     mobileNo: value.mobile,
    //     department: value.department
    //   };
    // }
    // try {
    //   const res = await axios.post(
    //     `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/company-detail`,
    //     {
    //       ...value,
    //       customerId: router.query.id,
    //       status,
    //       isShowInPdf,
    //       isVatEnabled
    //     }
    //   );
    //   if (res.data.status) {
    //     handleTabClick('payment_details');
    //     handleTabCompleted('company_details');
    //   } else {
    //     // CustomAlert(res.data.message, 'Error');
    //   }
    // } catch (e) {
    //   // CustomAlert(e.response.data.error[0].msg, 'Error');
    // }
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
