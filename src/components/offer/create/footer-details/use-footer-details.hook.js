'use client';

import React, { useState } from 'react';

export default function useFooterDetails(handleTabClick, handleTabCompleted) {
  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = () => {
    handleTabClick('chooseTemplate');
    handleTabCompleted('footerDetails');
  };

  return {
    isSubmit,
    setIsSubmit,
    onSubmit
  };
}
