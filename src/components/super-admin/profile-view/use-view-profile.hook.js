'use client';

import React, { useState } from 'react';

export default function useViewProfile() {
  const [passOpen, setPassOpen] = useState(false);
  const handleOpenUpdate = () => {
    setPassOpen(true);
  };
  return {
    passOpen,
    setPassOpen,
    handleOpenUpdate
  };
}
