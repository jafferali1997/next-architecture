'use client';

import React, { Suspense } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import MultiSelect from '@/common/components/multi-select/multi-select.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import ErrorIcon from '@/common/icons/error-icon';
import SuccessIcon from '@/common/icons/success-icon';
import CustomTable from '@/common/components/custom-table/custom-table.component';
import { RGX_DIGITS } from '@/common/constants/regex.constant';

export default function Page() {
  const clickHandler = () => {
    console.log('clicked');
  };
  return (
    <Suspense fallback={<p>Loading page...</p>}>
      {/* <MultiSelect options={[{ id: '1', label: 'test', value: 'test' }]} /> */}
      <div className="tw-m-5">
        <CustomInput
          type="text"
          placeholder="Enter name"
          // defaultValue="Hello"
          regex={RGX_DIGITS}
          // onChange={() => {}}
        />
      </div>
    </Suspense>
  );
}
