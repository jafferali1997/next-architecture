'use client';

import { Suspense } from 'react';
import Auth from '@/auth/auth.component';
import AUTH from '@/common/constants/auth.constant';
import ViewOffer from '@/components/offer/view/view-offer.component';

/**
 * @returns lazy loaded component for home page
 */
export default function Page() {
  return (
    // <Suspense fallback={<p>Loading customer page...</p>}>
    //   <CreateCustomer />
    // </Suspense>
    <Auth component={<ViewOffer />} type={AUTH.PRIVATE} />
  );
}
