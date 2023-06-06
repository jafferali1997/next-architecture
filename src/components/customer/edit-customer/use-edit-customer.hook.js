'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  getSingleCustomer,
  updateCustomer
} from '@/provider/features/customer/customer.slice';

export default function UseEditCustomer() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const customerId = useRef(searchParams.get('id'));

  const [isAdditional, setIsAdditional] = useState(false);
  const [isAdress, setIsAdress] = useState(true);
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
    // resolver: yupResolver(validationSchema)
  });

  async function fetchAndSetData() {
    // if (searchParams.get('id')) {
    //   // customerId.current = searchParams.get('id');
    //   const data = await dispatch(
    //     getSingleCustomer({ payload: searchParams.get('id') })
    //   );
    //   console.log('data', data);
    // }
    const data = {
      id: 6,
      accountOwnerName: null,
      iban: null,
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
      vatStatus: false,
      isDraft: true,
      discountTerms: 'string',
      discountAmount: 12,
      discountValidTill: '2023-06-05T13:25:03.177Z',
      termOfPayment: 'CASH_DISCOUNT_TARGET_AS_A_DATE',
      businessDetailId: 3,
      companyAddress: [],
      additionalContact: [],
      termOfDelivery: [],
      priceGroup: [],
      discountGroup: []
    };
    Object.keys(data).forEach((key) => setValue(key, data[key]));

    if (data.additionalContact?.length > 0) {
      Object.keys(data.additionalContact[0]).forEach((key) =>
        setValue(`ac_${key}`, data.additionalContact[0][key])
      );
    }
  }

  useEffect(() => {
    fetchAndSetData();
  }, [searchParams]);

  const onSubmit = (data) => {
    const payloadData = {
      ...data,
      additionalContact: [
        {
          gender: data.ac_gender,
          designation: data.ac_designation,
          firstName: data.ac_firstName,
          lastName: data.ac_lastName,
          postalCode: data.ac_postalCode,
          address: data.ac_address,
          country: data.ac_country,
          city: data.ac_city,
          email: data.ac_email,
          phone: data.ac_phone,
          department: data.ac_department,
          mobile: data.ac_mobile
        }
      ]
    };
    console.log(data);
    const res = dispatch(
      updateCustomer({ payload: { data: payloadData, id: customerId.current } })
    );
    console.log('res', res);
    if (res) {
      router.push('/customer');
    }
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
    onSubmit
  };
}
