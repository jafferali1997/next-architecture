'use client';

import AUTH from '@/common/constants/auth.constant';
import Auth from '@/auth/auth.component';
import EditCustomer from '@/components/customer/edit-customer/edit-customer.component';
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

export default function Page() {
  return <Auth component={<EditCustomer />} type={AUTH.PRIVATE} />;
}
