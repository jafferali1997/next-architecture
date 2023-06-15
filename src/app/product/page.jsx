'use client';

import { Suspense } from 'react';
import Product from '@/components/product/product.component';

/**
 * @returns lazy loaded component for home page
 */
export default function Home() {
  return (
    <Suspense fallback={<p>Loading product page...</p>}>
      <Product />
    </Suspense>
  );
}
