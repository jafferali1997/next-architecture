'use client';

import React, { Suspense } from 'react';
import CustomButton from '@/common/components/custom-button/custom-button.component';

export default function Page() {
  const clickHandler = () => {
    console.log('clicked');
  };
  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <div>
        <CustomButton text="Submit" />
        <p>Hello World</p>
      </div>
      <div>
        {/* <CustomButton text="Submit" onClick={clickHandler} /> */}
        <button type="submit" class="custom-button tw-bg-textLightGray tw-font-dm">
          Click me
        </button>
      </div>
    </Suspense>
  );
}
