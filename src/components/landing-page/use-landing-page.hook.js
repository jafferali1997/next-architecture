'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

/**
 * Does all the functionality used in landing page and return it as an object
 * @returns object
 */
export default function useLandingPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(false);

  return {
    open,
    setOpen,
    auth,
    setAuth,
    router
  };
}
