'use client';

import React, { Suspense } from 'react';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import MultiSelect from '@/common/components/multi-select/multi-select.component';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import ErrorIcon from '@/common/icons/error-icon';
import SuccessIcon from '@/common/icons/success-icon';
import CustomTable from '@/common/components/custom-table/custom-table.component';

export default function Page() {
  const clickHandler = () => {
    console.log('clicked');
  };
  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <div>
        <CustomButton text="Submit" className="btn btn-secondary" />
        <Alert icon={<ErrorIcon />} className="alert-error" onClose={() => {}}>
          This is a success alert — check it out!
        </Alert>
        <Alert icon={<SuccessIcon />} className="alert-success" onClose={() => {}}>
          This is a success alert — check it out!
        </Alert>

        <p>Hello World</p>
      </div>
      <MultiSelect options={[{ id: 1, label: 'test' }]} />
      <CustomTable />
    </Suspense>
  );
}
