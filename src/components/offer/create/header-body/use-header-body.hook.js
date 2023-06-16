'use client';

import React, { useState } from 'react';

export default function useHeaderBody({ handleTabClick, handleTabCompleted }) {
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
