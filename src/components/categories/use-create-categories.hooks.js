'use client';

import React, { useState } from 'react';

export default function useCreateCtegories() {
  const [showInput, setShowInput] = useState(false);

  const handleButtonClick = () => {
    setShowInput(true);
  };
  return {
    showInput,
    setShowInput,
    handleButtonClick
  };
}
