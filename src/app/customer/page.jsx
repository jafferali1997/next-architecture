'use client';

import { Suspense } from 'react';
import CreateCustomer from '@/components/customer/create-customer/create-customer.component';

/**
 * @returns lazy loaded component for home page
 */
export default function Page() {
  return (
    <Suspense fallback={<p>Loading customer page...</p>}>
      <CreateCustomer />
    </Suspense>
  );
}
