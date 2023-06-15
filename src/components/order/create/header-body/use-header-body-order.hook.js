'use client';

import React, { useState } from 'react';

export default function useHeaderBodyOrder({ handleTabClick, handleTabCompleted }) {
  const [isSubmit, setIsSubmit] = useState(false);
  const onSubmit = () => {
    handleTabClick('lineItems');
    handleTabCompleted('headerBody');
  };
  return {
    isSubmit,
    setIsSubmit,
    onSubmit
  };
}
