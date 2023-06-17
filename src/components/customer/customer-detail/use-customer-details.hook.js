'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getSingleCustomer } from '@/provider/features/customer/customer.slice';

export default function useCustomerDetails() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const customerId = useRef(searchParams.get('id'));
  const [companyAddresses, setCompanyAddresses] = useState([]);

  const [isAdditional, setIsAdditional] = useState(true);
  const [isAdress, setIsAdress] = useState(true);

  const [allPriceGroup, setAllPriceGroup] = useState([]);
  const [selectedPriceGroup, setSelectedPriceGroup] = useState([]);
  const [allDiscountGroup, setAllDiscountGroup] = useState([]);
  const [selectedDiscountGroup, setSelectedDiscountGroup] = useState([]);

  const [defaultData, setDefaultData] = useState({});

  const additionalhandles = () => {
    setIsAdditional(!isAdditional);
  };
  const adressHandles = () => {
    setIsAdress(!isAdress);
  };

  const { register, handleSubmit, setValue } = useForm();

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
      const defaultValues = { ...data, paymentType: 'creditCard' };
      if (data?.paymentDetailType === 'BANK') {
        defaultValues.paymentType = 'bankDetail';
      }
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
      setValue('termOfDelivery', data?.termOfDelivery[0].termOfDelivery);
    }
  }

  useEffect(() => {
    fetchAndSetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return {
    isAdditional,
    setIsAdditional,
    additionalhandles,
    isAdress,
    setIsAdress,
    adressHandles,
    register,
    handleSubmit,
    id: customerId.current,
    companyAddresses,
    selectedDiscountGroup,
    selectedPriceGroup,
    allDiscountGroup,
    allPriceGroup,
    defaultData
  };
}
