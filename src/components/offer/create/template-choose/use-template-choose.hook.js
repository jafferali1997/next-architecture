'use client';

import React, { useState } from 'react';

export default function useTemplateChoose(handleTabClick, handleTabCompleted) {
  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = () => {
    handleTabClick('preview');
    handleTabCompleted('chooseTemplate');
  };

  return {
    isSubmit,
    setIsSubmit,
    onSubmit
  };
}
