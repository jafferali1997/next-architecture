'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { set, useForm } from 'react-hook-form';
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
  city: yup.string().required('City is required')
});

export default function UseEditCustomer() {
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
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur'
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
        const newcompanyAddresses = data.companyAddress.map((addressObj, index) => {
          setValue(`ca_addressLabel_${index + 1}`, addressObj.addressLabel);
          setValue(`ca_address_${index + 1}`, addressObj.address);
          return { id: index + 1 };
        });
        setCompanyAddresses(newcompanyAddresses);
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
      setValue(`${data?.termOfPayment}_DATA`, data?.termOfPaymentData);
    }
  }

  useEffect(() => {
    fetchAndSetData();
  }, [searchParams, allPriceGroup, allDiscountGroup]);

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
    const newCompanyAddresses = companyAddressesKeys.reduce((acc, curr, index, arr) => {
      if (index % 2 === 1) {
        const obj = {
          id: data[curr],
          addressLabel: data[arr[index + 1]],
          address: data[arr[index + 2]]
        };
        acc.push(obj);
      }
      return acc;
    }, []);
    const payloadData = {
      ...data,
      additionalContact: [additionalContact],
      companyAddress: newCompanyAddresses
    };

    console.log(payloadData);
    const res = await dispatch(
      updateCustomer({ payload: { data: payloadData, id: customerId.current } })
    );
    console.log('res', res);
    if (res.payload) {
      router.push('/customer');
    }
  };

  const handleAddInput = () => {
    setCompanyAddresses([...companyAddresses, { id: companyAddresses[-1].id + 1 }]);
  };

  const handleRemoveInput = (index) => {
    const newcompanyAddresses = [...companyAddresses];
    newcompanyAddresses.splice(index, 1);
    setCompanyAddresses(newcompanyAddresses);
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
    cities
  };
}
