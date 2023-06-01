'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import ErrorIcon from '@/common/icons/error.icon';
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
import CustomPagination from '@/common/components/paginations/pagination.component';
import FormStepper from '@/common/components/form-stepper/form-stapper.component';
import AddressList from '@/common/components/tests/multiAdres';
import MultiSelect from '@/common/components/multi-select/multi-select.component';
import Toaster from '@/common/components/toaster/toaster.component';
import CustomSelect from '@/common/components/custom-select/custom-select.component';
import TextArea from '@/common/components/text-area/text-area.component';
import Select from '@/common/components/select/select.component';

export default function Page() {
  const [showSuccessToaster, setShowSuccessToaster] = useState(false);
  const [showErrorToaster, setShowErrorToaster] = useState(false);
  useEffect(() => {
    // axios
    //   .get('https://ipapi.co/json/')
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // axios
    //   .get('http://ip-api.com/json')
    //   .then(function (response) {
    //     response.json().then((jsonData) => {
    //       console.log(jsonData);
    //     });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }, []);

  return (
    <>
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
        <h3 className="tw-text-2xl tw-font-bold">Toasters</h3>
        <hr />
        <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-5">
          <CustomButton
            text="Show Success Toaster"
            onClick={() => setShowSuccessToaster(true)}
            className="btn-primary tw-m-5"
          />
          <Toaster
            show={showSuccessToaster}
            onClose={() => setShowSuccessToaster(false)}
            type="success"
            text="This is a success toaster — check it out!"
          />
          <CustomButton
            text="Show Error Toaster"
            onClick={() => setShowErrorToaster(true)}
            className="btn-outline tw-m-5 tw-border-danger tw-text-danger hover:tw-bg-danger hover:tw-text-white hover:tw-opacity-25"
          />
          <Toaster
            show={showErrorToaster}
            onClose={() => setShowErrorToaster(false)}
            type="error"
            text="This is a error toaster — check it out!"
          />
        </div>
      </div>
      <div className="tw-m-5">
        <h3 className="tw-text-2xl tw-font-bold">Multi Select</h3>
        <hr />
        <MultiSelect
          options={[
            { id: '1', label: 'Test 1', value: 'test1' },
            { id: '2', label: 'Test 2', value: 'test2' },
            { id: '3', label: 'Test 3', value: 'test3' }
          ]}
          handleChange={() => {}}
        />
      </div>
      <div className="tw-m-5">
        <h3 className="tw-text-2xl tw-font-bold">Input Fields</h3>
        <hr />
        <div className="tw-m-5">
          <Select
            options={[
              { label: 'Test 1', value: 'test1' },
              { label: 'Test 2', value: 'test2' },
              { label: 'Test 3', value: 'test3' }
            ]}
            // defaultValue={{ label: 'Test 3', value: 'test3' }}
            placeholder="Single Select with Search Option"
          />
        </div>
        <div className="tw-m-5">
          {/* <CustomSelect
            options={[
              { id: '1', label: 'test1', value: 'test1' },
              { id: '2', label: 'test2', value: 'test2' },
              { id: '3', label: 'test3', value: 'test3' }
            ]}
          /> */}
        </div>
        <div className="tw-m-5">
          <label>Simple Input Field:</label>
          <CustomInput type="text" placeholder="Simple Input Field" name="firstName" />
        </div>
        <div className="tw-m-5">
          <label>Input Field With Error:</label>
          <CustomInput
            type="text"
            placeholder="Input Field With Error:"
            error="Wrong Input"
          />
        </div>
        <div className="tw-m-5">
          <TextArea placeholder="Text Area" />
        </div>
      </div>
    </>
  );
}
