'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import * as yup from 'yup';
import { enqueueSnackbar } from 'notistack';
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
import FormStepper from '@/common/components/form-stepper/form-stepper.component';
import AddressList from '@/common/components/tests/multiAdres';
import MultiSelect from '@/common/components/multi-select/multi-select.component';
import Toaster from '@/common/components/toaster/toaster.component';
import CustomSelect from '@/common/components/custom-select/custom-select.component';
import TextArea from '@/common/components/text-area/text-area.component';
import Select from '@/common/components/select/select.component';
import CustomCheckbox from '@/common/components/custom-checkbox/custom-checkbox.component';
import CustomSwitch from '@/common/components/custom-switch/custom-switch.component';
import CustomRadio from '@/common/components/custom-radio/custom-radio.component';
import CustomRadioGroup from '@/common/components/radio-group/radio-group.component';
import OtpInput from '@/common/components/otp-input/otp-input.component';

const validationSchema = yup.object({
  firstName: yup.string().max(5, 'company name must be at most 5 characters long')
});

export default function Page() {
  const [showSuccessToaster, setShowSuccessToaster] = useState(false);
  const [showErrorToaster, setShowErrorToaster] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onChange'
  });

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
  console.log(errors);

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
            onClick={() =>
              enqueueSnackbar('message', {
                variant: 'success'
              })
            }
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
        <div className="tw-m-5 tw-flex tw-flex-row tw-gap-2">
          <div className="tw-w-1/2">
            <CustomSelect
              label="Simple Select"
              placeholder="Select Gender"
              options={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Other', value: 'other' }
              ]}
            />
          </div>
          <div className="tw-w-1/2">
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
        </div>
        <div className="tw-m-5">
          <CustomInput
            type="text"
            name="firstName"
            label="Simple Field:"
            placeholder="Simple Input Field with required"
            isRequired
          />
        </div>
        <div className="tw-m-5">
          <CustomInput
            type="text"
            name="inlineLabelField"
            label="Input Field With Inline Label:"
            placeholder="Input Field With Inline Label:"
            inlineLabel
          />
        </div>
        <div className="tw-m-5 tw-flex tw-flex-row tw-gap-2">
          <div className="tw-w-1/2">
            <CustomInput
              type="text"
              name="firstName"
              label="Input Field with Start Icon:"
              placeholder="First Name"
              className="tw-mr-2"
              isRequired
              startIcon={<SuccessIcon />}
            />
          </div>
          <div className="tw-w-1/2">
            <CustomInput
              type="text"
              name="firstName"
              label="Input Field with End Icon:"
              placeholder="First Name"
              isRequired
              startIcon={<SuccessIcon />}
            />
          </div>
        </div>
        <div className="tw-m-5 tw-flex tw-flex-row">
          <div className="tw-w-1/2">
            <CustomInput
              type="text"
              name="firstName"
              label="Input Field with Start Icon:"
              placeholder="First Name"
              isRequired
              inlineLabel
              startIcon={<SuccessIcon />}
              endIcon={<ErrorIcon />}
            />
          </div>
        </div>
        <div className="tw-m-5">
          <CustomInput
            type="password"
            name="passwordField"
            label="Password:"
            placeholder="password"
          />
        </div>
        <div className="tw-m-5">
          <CustomInput
            type="text"
            name="errorField"
            label="Input Field With Error:"
            placeholder="Input Field With Error:"
            errors={{ errorField: { message: 'Wrong Input' } }}
          />
        </div>
        <div className="tw-m-5">
          <TextArea label="Text Area" placeholder="Text Area" />
        </div>
      </div>
      <div className="tw-m-5">
        <h3 className="tw-text-2xl tw-font-bold">Checkbox</h3>
        <hr />
        <div className="tw-m-5">
          <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-2">
            <CustomCheckbox label="Small Checkbox" size="small" />
            <CustomCheckbox label="Default Checkbox" />
            <CustomCheckbox label="Large Checkbox" size="large" />
            <CustomCheckbox label="Checked Checkbox" defaultChecked />
            <CustomCheckbox label="Disabled Checkbox" disabled />
            <CustomCheckbox label="Disabled Checked Checkbox" defaultChecked disabled />
          </div>
        </div>
      </div>
      <div className="tw-m-5">
        <h3 className="tw-text-2xl tw-font-bold">Switch</h3>
        <hr />
        <div className="tw-m-5">
          <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-2">
            <CustomSwitch label="Small Switch" size="sm" />
            <CustomSwitch label="Default Switch" defaultChecked />
            <CustomSwitch label="Disabled Switch" disabled />
            <CustomSwitch label="Disabled Checked Switch" defaultChecked disabled />
          </div>
        </div>
      </div>
      <div className="tw-m-5">
        <h3 className="tw-text-2xl tw-font-bold">Radio</h3>
        <hr />
        <div className="tw-m-5">
          <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-2">
            <CustomRadio value="v1" name="radio" label="Small Radio" size="sm" />
            <CustomRadio value="v2" name="radio" label="Default Radio" defaultChecked />
            <CustomRadio value="v3" name="radio" label="Disabled Radio" disabled />
            <CustomRadio
              value="v4"
              name="radio4"
              label="Disabled Checked Switch"
              defaultChecked
              disabled
            />
          </div>
          <hr />
          <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-2">
            <CustomRadioGroup
              radioOptions={[
                { label: 'Radio 1', value: 'radio1', defaultChecked: true },
                { label: 'Radio 2', value: 'radio2' },
                { label: 'Radio 3', value: 'radio3' }
              ]}
              label="Radio Group (Select One):"
            />
          </div>
        </div>
      </div>
      <div className="tw-m-5">
        <h3 className="tw-text-2xl tw-font-bold">Otp Input</h3>
        <hr />
        <div className="tw-m-5">
          <OtpInput value="1234" onChange={(e) => console.log(e)} maxInput={4} />
        </div>
      </div>

      <div className="tw-m-5">
        <h3 className="tw-text-2xl tw-font-bold">React Hook Form</h3>
        <hr />
        <div className="tw-m-5 tw-border-text-dark-gray">
          <form
            onSubmit={handleSubmit((data) => {
              // alert(JSON.stringify(errors))
              alert(JSON.stringify(data));
            })}
          >
            <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-1">
              <div className="tw-w-1/2">
                <CustomInput
                  type="text"
                  name="firstName"
                  label="First Name:"
                  placeholder="First Name"
                  register={register}
                  errors={errors}
                  isRequired
                />
              </div>
              <div className="tw-w-1/2">
                <CustomInput
                  type="text"
                  name="lastName"
                  label="Last Name:"
                  placeholder="Last Name"
                  register={register}
                  isRequired
                />
              </div>
            </div>
            <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-1">
              <div className="tw-w-1/2">
                <CustomSelect
                  label="Select Education"
                  placeholder="Select Education"
                  name="education"
                  options={[
                    { label: 'Matric', value: 'matric' },
                    { label: 'Intermediate', value: 'intermediate' },
                    { label: 'Graduation', value: 'graduation' },
                    { label: 'Masters', value: 'masters' }
                  ]}
                  register={register}
                />
              </div>
              <div className="tw-w-1/2">
                <Select
                  label="Select User"
                  placeholder="Select User"
                  name="user"
                  options={[
                    { label: 'Hamza', value: 'hamza' },
                    { label: 'Areeb', value: 'areeb' },
                    { label: 'Jaffer', value: 'jaffer' }
                  ]}
                  register={register}
                />
              </div>
            </div>
            <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-1">
              <div className="tw-w-1/2">
                <CustomCheckbox
                  name="checkbox"
                  label="Checkbox"
                  register={register}
                  isRequired
                />
              </div>
              <div className="tw-w-1/2">
                <CustomSwitch
                  name="switch"
                  label="Switch"
                  register={register}
                  isRequired
                />
              </div>
              <div className="tw-w-1/2">
                <CustomRadioGroup
                  register={register}
                  name="radio"
                  label="Select Gender"
                  radioOptions={[
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' },
                    { label: 'Other', value: 'other' }
                  ]}
                  defaultValue="other"
                />
              </div>
              <CustomButton type="Submit" className="btn-primary" text="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
