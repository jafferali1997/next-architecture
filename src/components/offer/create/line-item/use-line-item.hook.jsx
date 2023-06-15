'use client';

import React, { useState } from 'react';

export default function useLineItem() {
  const [isSubmit, setIsSubmit] = useState(false);
  return {
    isSubmit,
    setIsSubmit
  };
}
