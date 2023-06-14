'use client';

import React, { useState } from 'react';

export default function useCreateProfile() {
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
