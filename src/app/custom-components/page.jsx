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
        <CustomButton text="Submit" className="btn" />
        <p>Hello World</p>
      </div>
      <div>{/* <CustomButton text="Submit" onClick={clickHandler} /> */}</div>
    </Suspense>
  );
}
