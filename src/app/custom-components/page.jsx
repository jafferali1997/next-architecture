'use client';

import React from 'react';
import CustomButton from '@/common/components/custom-button/custom-button.component';

export default function Page() {
  const clickHandler = () => {
    console.log('clicked');
  };
  return (
    <div>
      {/* <CustomButton text="Submit" onClick={clickHandler} /> */}
      <button type="submit" class="custom-button tw-bg-textLightGray tw-font-dm">
        Click me
      </button>
    </div>
  );
}
