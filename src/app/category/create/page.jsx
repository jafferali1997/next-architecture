import React from 'react';
import Auth from '@/auth/auth.component';
import CreateCategories from '@/components/categories/create-categories.component';
import AUTH from '@/common/constants/auth.constant';

export default function Page() {
  return <Auth component={<CreateCategories />} type={AUTH.PRIVATE} />;
}
