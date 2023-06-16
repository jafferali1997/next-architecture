'use client';

import React, { useState } from 'react';

export default function useAddCustomerOrder(handleTabClick, handleTabCompleted) {
  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = () => {
    handleTabClick('headerBody');
    handleTabCompleted('customerDetails');
  };

  return {
    isSubmit,
    setIsSubmit,
    onSubmit
  };
}
