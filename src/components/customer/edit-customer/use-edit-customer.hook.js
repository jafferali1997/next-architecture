'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { set, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  getSingleCustomer,
  updateCustomer
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
  city: yup.string().required('City is required'),
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
    .max(8, 'TIN must be at most 10 characters long'),
  vat: yup
    .string()
    .required('VAT is required')
    .matches(/^[a-zA-Z]{2}\d{9}$/, 'Is not in correct format'),
  termOfDelivery: yup.string(),
  termOfPayment: yup.string(),
  discountAmount: yup
    .string()
    .max(10, 'Discount must be at most 10 characters long')
    .required('Discount is required'),
  discountDays: yup.string().required('day is required')
});

const bankDetailValidationSchema = yup.object({
  accountOwnerName: yup
    .string()
    .max(100, 'Account must be at most 100 characters long')
    .required('Account is required'),
  iban: yup
    .string()
    .max(34, 'IBAN must be at most 34 characters long')
    .min(15, 'IBAN must be minimum 15 characters')
    // .matches(/^[^.]*$/, {
    //   message: 'No period'
    // })
    // .matches(/^[^.]*$/, {
    //   message: 'Invalid postal'
    // })
    // .matches(/^[^!@#$%^&*+=<>:;|~(){}[\s\]]*$/, {
    //   message: 'Invalid postal'
    // })
    .required('IBAN is required'),
  bic: yup
    .string()
    .max(11, 'BIC must be at most 11 characters long')
    .min(8, 'BIC must be minimum 8 characters')
    .required('bic is required'),
  mendateReferance: yup
    .string()
    .max(18, 'Mandate Reference must be at most 18 characters long')
    .min(6, 'Mandate Reference must be minimum 6 characters')
    .required('Mandate Reference is required'),
  mandateGenerateDate: yup.string().required('Mandate Date is required')
});

const creditCardValidationSchema = yup.object({
  nameOfCreditCard: yup
    .string()
    .max(50, 'Credit Card Name must be at most 50 characters long')
    .min(1, 'Credit Card Name must be minimum 1 characters')
    .required('Credit Card Name is required'),
  creditCardNumber: yup
    .number()
    // .test(
    //   'test-number',
    //   'Credit Card number is invalid',
    //   (value) => cardValidator.number(value).isValid
    // )
    .required('Credit Card Number is required'),
  creditCardCVV: yup
    .string()
    .matches(/^[0-9]{3}$/, 'CVV must be at most 3 characters long')
    .required('CVV is required'),
  creditCardExpiry: yup.string().required('Credit Card Expiry is required')
});

export default function useEditCustomer() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const [companyAddresses, setCompanyAddresses] = useState([{ id: 1 }]);

  const [allPriceGroup, setAllPriceGroup] = useState([]);
  const [selectedPriceGroup, setSelectedPriceGroup] = useState([]);

  const [selectedDiscountGroup, setSelectedDiscountGroup] = useState([]);
  const [allDiscountGroup, setAllDiscountGroup] = useState([]);

  const customerId = useRef(searchParams.get('id'));

  const [isAdditional, setIsAdditional] = useState(false);
  const [isAdress, setIsAdress] = useState(true);

  const [paymentType, setPaymentType] = useState('bankDetails');
  const [paymentTermValue, setPaymentTermValue] = useState('PAYMENT_TERMS_AS_DATE');
  const [defaultData, setDefaultData] = useState({});

  const [validationSchemaState, setValidationSchemaState] = useState(validationSchema);
  const [isActive, setIsActive] = useState(false);

  const countries = [
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' }
  ];

  const cities = [
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Mumbai', label: 'Mumbai' }
  ];

  const additionalhandles = () => {
    setIsAdditional(!isAdditional);
  };
  const adressHandles = () => {
    setIsAdress(!isAdress);
  };

  const {
    register,
    handleSubmit,
    setValue,
    unregister,
    resetField,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchemaState),
    mode: 'onBlur'
  });

  const { fields, append, prepend, remove, swap, move, insert, replace } = useFieldArray({
    control,
    name: 'companyAddresses'
  });

  async function fetchAndSetData() {
    if (searchParams.get('id')) {
      let data = await dispatch(
        getSingleCustomer({ payload: Number(searchParams.get('id')) })
      );
      console.log('data', data);
      data = data.payload;
      Object.keys(data).forEach((key) => {
        if (
          key !== 'updatedBy' &&
          key.toLowerCase().includes('date') &&
          data[key] !== '' &&
          data[key] !== null
        ) {
          setValue(key, data[key]?.split('T')[0]);
        } else {
          setValue(key, data[key]);
        }
      });

      if (data?.additionalContact?.length > 0) {
        Object.keys(data.additionalContact[0]).forEach((key) =>
          setValue(`ac_${key}`, data.additionalContact[0][key])
        );
      }

      if (data?.companyAddress?.length > 0) {
        // const newcompanyAddresses = data.companyAddress.map((addressObj, index) => {
        //   setValue(`ca_id_${index + 1}`, addressObj.id);
        //   setValue(`ca_addressLabel_${index + 1}`, addressObj.addressLabel);
        //   setValue(`ca_address_${index + 1}`, addressObj.address);
        //   return { id: index + 1 };
        // });
        // setCompanyAddresses(newcompanyAddresses);
        data.companyAddress.forEach((addressObj, index) => {
          append({
            id: addressObj.id,
            addressLabel: addressObj.addressLabel,
            address: addressObj.address
          });
        });
        // setCompanyAddresses([]);
      }

      const defaultValues = { ...data };
      setPaymentType(
        data?.paymentDetailType === 'BANK' ? 'bankDetails' : 'creditCardDetails'
      );
      setDefaultData(defaultValues);
      setValue(`${data?.termOfPayment}_DATA`, data?.termOfPaymentData);

      if (data?.priceGroup?.length > 0) {
        setSelectedPriceGroup(
          data.priceGroup.map((item) => ({
            id: `${item.id}`,
            value: `${item.id}`,
            label: item.priceGroupName
          }))
        );
      }
      if (data?.discountGroup?.length > 0) {
        setSelectedDiscountGroup(
          data.discountGroup.map((item) => ({
            id: `${item.id}`,
            value: `${item.id}`,
            label: item.discountGroupName
          }))
        );
      }
      if (data?.termOfDelivery?.length > 0) {
        setValue('termOfDelivery', data.termOfDelivery[0].termOfDelivery);
      }
      setPaymentTermValue(data?.termOfPayment || 'PAYMENT_TERMS_AS_DATE');
      setIsActive(data?.isActive);
      setValue(`${data?.termOfPayment}_DATA`, data?.termOfPaymentData);
    }
  }

  useEffect(() => {
    fetchAndSetData();
  }, [searchParams, allPriceGroup, allDiscountGroup]);

  useEffect(() => {
    let yupObject = yup.object({
      ...validationSchema.fields,
      ...creditCardValidationSchema.fields
    });
    if (paymentType === 'bankDetails') {
      yupObject = yup.object({
        ...validationSchema.fields,
        ...bankDetailValidationSchema.fields
      });
    }
    setValidationSchemaState(yupObject);
  }, [paymentType]);

  const onSubmit = async (data) => {
    console.log(data, '=> data');
    const additionalContactKeys = Object.keys(data).filter((attr) =>
      attr.startsWith('ac')
    );
    const additionalContact = additionalContactKeys.reduce((accumulator, attr) => {
      const key = attr.replace('ac_', '');
      if (key === 'gender' && !['MALE', 'FEMALE'].includes(data[attr])) {
        return { ...accumulator };
      }
      return { ...accumulator, [key]: data[attr] };
    }, {});
    const companyAddressesKeys = Object.keys(data).filter((attr) =>
      attr.startsWith('ca')
    );

    let newCompanyAddresses = companyAddressesKeys.reduce((acc, curr) => {
      const [prefix, type, suffix] = curr.split('_');

      if (!acc[suffix]) {
        acc[suffix] = {};
      }

      acc[suffix][type] = data[acc];

      return acc;
    }, {});

    newCompanyAddresses = Object.values(newCompanyAddresses);

    const payloadData = {
      ...data,
      isActive,
      additionalContact: [additionalContact],
      companyAddress: newCompanyAddresses
    };

    console.log(payloadData);
    const res = await dispatch(
      updateCustomer({ payload: { data: payloadData, id: customerId.current } })
    );
    console.log('res', res);
    if (res?.payload?.id) {
      router.push('/customer');
    }
  };

  const handleAddInput = () => {
    // console.log(companyAddresses);
    // const id =
    //   companyAddresses.length > 0
    //     ? companyAddresses[companyAddresses.length - 1].id + 1
    //     : 1;
    console.log(fields);
    append({addressLabel: '', address: '' });
    // setCompanyAddresses([...companyAddresses, { id }]);
  };

  const handleRemoveInput = (index) => {
    console.log(index);
    remove(index);

    // unregister([
    //   `ca_id_${index + 1}`,
    //   `ca_addressLabel_${index + 1}`,
    //   `ca_address_${index + 1}`
    // ]);
    // resetField(`ca_id_${index + 1}`);
    // resetField(`ca_addressLabel_${index + 1}`);
    // resetField(`ca_address_${index + 1}`);
    // const newCompanyAddresses = companyAddresses.filter((item) => item.id !== id);
    // // const newcompanyAddresses = [...companyAddresses];
    // // newcompanyAddresses.splice(index, 1);
    // setCompanyAddresses(newCompanyAddresses);
  };

  const handleInputChange = (index, value) => {
    const newcompanyAddresses = [...companyAddresses];
    newcompanyAddresses[index] = value;
    setCompanyAddresses(newcompanyAddresses);
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
    onSubmit,
    handleAddInput,
    handleInputChange,
    companyAddresses,
    setCompanyAddresses,
    allPriceGroup,
    setAllPriceGroup,
    selectedPriceGroup,
    setSelectedPriceGroup,
    allDiscountGroup,
    setAllDiscountGroup,
    selectedDiscountGroup,
    setSelectedDiscountGroup,
    paymentType,
    setPaymentType,
    paymentTermValue,
    setPaymentTermValue,
    defaultData,
    countries,
    cities,
    handleRemoveInput,
    fields,
    isActive,
    setIsActive
  };
}
