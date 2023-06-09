import { Suspense } from 'react';
import Auth from '@/auth/auth.component';
import AUTH from '@/common/constants/auth.constant';
import CreateOffer from '@/components/offer/create/create-offer.component';

/**
 * @returns lazy loaded component for home page
 */
export default function Page() {
  return (
    // <Suspense fallback={<p>Loading customer page...</p>}>
    //   <CreateCustomer />
    // </Suspense>
    <Auth component={<CreateOffer />} type={AUTH.PRIVATE} />
  );
}
