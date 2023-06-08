'use client';

import React, { useState } from 'react';

export default function useHeaderBody() {
  const [isSubmit, setIsSubmit] = useState(false);
  return {
    isSubmit,
    setIsSubmit
  };
}
