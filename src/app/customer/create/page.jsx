import { Suspense } from 'react';
import CreateCustomer from '@/components/customer/create-customer/create-customer.component';
import Auth from '@/auth/auth.component';
import AUTH from '@/common/constants/auth.constant';

/**
 * @returns lazy loaded component for home page
 */
export default function Page() {
  return (
    // <Suspense fallback={<p>Loading customer page...</p>}>
    //   <CreateCustomer />
    // </Suspense>
    <Auth component={<CreateCustomer />} type={AUTH.PRIVATE} />
  );
}
