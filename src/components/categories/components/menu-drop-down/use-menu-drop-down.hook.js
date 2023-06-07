'use client';

import { useState } from 'react';

export default function useMenuDropdown() {
  const [threeDot, setThreeDot] = useState(false);

  const handleThreeMenu = () => {
    setThreeDot(!threeDot);
  };

  return { handleThreeMenu, threeDot };
}
