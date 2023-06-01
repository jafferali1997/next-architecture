'use client';

import Auth from '@/common/HOC/auth/index.hoc';

export default function Page() {
  return <Auth component={<div>Dashboard</div>} authType="private" />;
}
