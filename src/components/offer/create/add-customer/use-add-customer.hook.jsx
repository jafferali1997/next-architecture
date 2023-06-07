'use client';

import React, { useState } from 'react';

export default function useAddCustomer() {
  const [isSubmit, setIsSubmit] = useState(false);
  return {
    isSubmit,
    setIsSubmit
  };
}
