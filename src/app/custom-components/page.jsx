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
      <div className="tw-m-5">
        <h3 className="tw-text-2xl tw-font-bold">Buttons</h3>
        <hr />
        <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-5">
          <CustomButton text="Primary Button" className="tw-m-5" />
          <CustomButton text="Secondary Button" className="tw-m-5" variant="outlined" />
          <CustomButton text="Disabled Button" className="tw-m-5" disabled />
          <CustomButton text="Link Button" className="tw-m-5" href="#" />
          <CustomButton
            text="Link Button"
            className="tw-m-5"
            href="#"
            startIcon={<ErrorIcon />}
          />
          <CustomButton
            text="Link Button"
            className="tw-m-5"
            href="#"
            endIcon={<SuccessIcon />}
          />
          <CustomButton
            text="Link Button"
            className="tw-m-5"
            href="#"
            startIcon={<ErrorIcon />}
            endIcon={<SuccessIcon />}
          />
          <CustomButton
            text="Link Button"
            className="tw-m-5"
            href="#"
            startIcon={<ErrorIcon />}
            endIcon={<SuccessIcon />}
            disabled
          />
          <CustomButton
            text="Link Button"
            className="tw-m-5"
            href="#"
            startIcon={<ErrorIcon />}
            endIcon={<SuccessIcon />}
            disabled
            variant="outlined"
          />
          <CustomButton
            text="Link Button"
            className="tw-m-5"
            href="#"
            startIcon={<ErrorIcon />}
            endIcon={<SuccessIcon />}
            disabled
            variant="outlined"
          />
        </div>
      </div>
      <MultiSelect
        options={[
          { id: '1', label: 'test1', value: 'test1' },
          { id: '2', label: 'test2', value: 'test2' },
          { id: '3', label: 'test3', value: 'test3' }
        ]}
      />
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
