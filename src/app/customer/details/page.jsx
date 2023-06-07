'use client';

import React from 'react';
import AUTH from '@/common/constants/auth.constant';
import CustomerDetails from '@/components/customer/customer-detail/customer-details.component';
import Auth from '@/auth/auth.component';
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

export default function Page() {
  return <Auth component={<CustomerDetails />} type={AUTH.PRIVATE} />;
}
