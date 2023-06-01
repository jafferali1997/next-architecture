'use client';

import Auth from '@/common/HOC/auth/index.hoc';

export default function Page() {
  return (
    <Auth component={<div className="tw-p-6">Content Here</div>} authType="private" />
  );
}
