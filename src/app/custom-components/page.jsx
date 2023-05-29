'use client';

import React, { Suspense } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import MultiSelect from '@/common/components/multi-select/multi-select.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import ErrorIcon from '@/common/icons/error-icon';
import SuccessIcon from '@/common/icons/success.icon';
import CustomTable from '@/common/components/custom-table/custom-table.component';
import {
  RGX_DECIMAL,
  RGX_DIGITS,
  RGX_POSITIVE_DECIMAL,
  RGX_POSITIVE_NEGATIVE_DECIMAL
} from '@/common/constants/regex.constant';
import ArrowUpIcon from '@/common/icons/arrow-up.icon';
import ArrowLeftIcon from '@/common/icons/arrow-left.icon';

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
          <CustomButton text="Primary Button" className="btn-primary tw-m-5" />
          <CustomButton
            text="Secondary Button"
            className="btn-secondary tw-m-5"
            onClick={() => {
              console.log('clicked');
            }}
          />
          <CustomButton
            text="Disabled Button"
            className="btn-primary tw-m-5"
            onClick={() => {
              console.log('clicked');
            }}
            disabled
          />
          <CustomButton text="Outline Button" className="btn-outline tw-m-5" />
          <CustomButton
            text="Disabled Outline Button"
            className="btn-outline tw-m-5"
            disabled
          />
        </div>
        <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-5">
          <CustomButton
            text="Link Primary Button"
            className="btn-primary tw-m-5"
            href="#"
          />
          <CustomButton
            text="Link Secondary Button"
            className="btn-secondary tw-m-5"
            href="#"
          />
          <CustomButton
            text="Link Outline Button"
            className="btn-outline tw-m-5"
            href="#"
          />
        </div>
        <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-5">
          <CustomButton
            text="Left Icon Button"
            className="btn-primary tw-m-5"
            startIcon={<SuccessIcon />}
          />
          <CustomButton
            text="Right Icon Button"
            className="btn-secondary tw-m-5"
            endIcon={<ArrowLeftIcon className="tw-text-white" />}
          />
          <CustomButton
            text="Both Icon Button"
            className="btn-outline tw-m-5"
            href="#"
            startIcon={<ErrorIcon />}
            endIcon={<SuccessIcon />}
          />
        </div>
      </div>
      <div className="tw-m-5">
        <h3 className="tw-text-2xl tw-font-bold">Multi Select</h3>
        <hr />
        <MultiSelect
          options={[
            { id: '1', label: 'test1', value: 'test1' },
            { id: '2', label: 'test2', value: 'test2' },
            { id: '3', label: 'test3', value: 'test3' }
          ]}
          handleChange={() => {}}
        />
      </div>
      <div className="tw-m-5">
        <h3 className="tw-text-2xl tw-font-bold">Input Fields</h3>
        <hr />
        <div className="tw-m-5">
          <CustomInput
            type="text"
            placeholder="Enter name"
            // defaultValue="Hello"
            regex={RGX_DECIMAL}
            // onChange={() => {}}
          />
        </div>
      </div>
    </Suspense>
  );
}
