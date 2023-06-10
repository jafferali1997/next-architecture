'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getSingleCustomer } from '@/provider/features/customer/customer.slice';

export default function UseCustomerDetails() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const customerId = useRef(searchParams.get('id'));
  const [companyAddresses, setCompanyAddresses] = useState([]);

  const [isAdditional, setIsAdditional] = useState(false);
  const [isAdress, setIsAdress] = useState(true);
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
      Object.keys(data).forEach((key) => setValue(key, data[key]));

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
    }
    const data = {
      id: 6,
      accountOwnerName: null,
      iban: null,
      gender: 'MALE',
      city: 'Lahore',
      country: 'Pakistan',
      address: '56yujh',
      postalCode: 120,
      firstName: 'ALI',
      lastName: 'Raza',
      bic: null,
      mendateReferance: null,
      mandateGenerateDate: null,
      nameOfCreditCard: null,
      creditCardNumber: null,
      creditCardExpiry: null,
      creditCardCVV: null,
      companyName: null,
      companyEmail: null,
      companyPhone: null,
      companyFax: null,
      companyMobile: null,
      companyUrl: null,
      companySize: null,
      tin: null,
      vat: null,
      vatStatus: true,
      isDraft: true,
      discountTerms: 'string',
      discountAmount: 12,
      discountValidTill: '2023-06-05T13:25:03.177Z',
      termOfPayment: 'CASH_DISCOUNT_TARGET_AS_A_DATE',
      businessDetailId: 3,
      companyAddress: [],
      additionalContact: [
        {
          ac_gender: 'FEMALE',
          ac_designation: 'SE',
          ac_firstName: 'Ayesha',
          ac_lastName: 'Ali',
          ac_postalCode: 12122,
          ac_address: 'Somewher in the earth',
          ac_country: 'Pakistan',
          ac_city: 'Lahore',
          ac_email: 'example@gmail.com',
          ac_phone: '12312312312',
          ac_department: 'IT',
          ac_mobile: null
        }
      ],
      termOfDelivery: [],
      priceGroup: [],
      discountGroup: []
    };
  }

  useEffect(() => {
    fetchAndSetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const onSubmit = (data) => {};

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
    onSubmit,
    companyAddresses
  };
}
