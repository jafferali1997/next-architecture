import { Suspense } from 'react';
import LandingPage from '@/components/landing-page/landing-page.component';

/**
 * @returns lazy loaded component for home page
 */
export default function Home() {
  return (
    <Suspense fallback={<p>Loading home page...</p>}>
      <LandingPage />
    </Suspense>
  );
}
