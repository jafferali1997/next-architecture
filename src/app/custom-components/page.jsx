'use client';

import React, { Suspense } from 'react';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import MultiSelect from '@/common/components/multi-select/multi-select.component';

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
      <MultiSelect options={[{ id: '1', label: 'test', value: 'test' }]} />
    </Suspense>
  );
}
