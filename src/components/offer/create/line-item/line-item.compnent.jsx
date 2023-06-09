'use client';

import React from 'react';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import Select from '@/common/components/select/select.component';
import useLineItem from './use-line-item.hook';
import CustomButton from '@/common/components/custom-button/custom-button.component';

export default function LineItem() {
  const { isSubmit, setIsSubmit } = useLineItem();
  return (
    <div className="personal-details-wrapper">
      <div className="content-header tw-flex tw-items-center tw-justify-between ">
        <h3 className="form-inner-heading">Product Table</h3>
        <div className="tw-flex tw-min-w-[900px] tw-items-center tw-justify-between">
          <div className="tw-w-full tw-max-w-[523px] tw-bg-secondary-gray">
            <Select
              options={[
                { id: 'male', value: 'male', label: 'Male' },
                { id: 'female', value: 'female', label: 'Female' }
              ]}
              placeholder="John"
            />
          </div>
          <div className="tw-flex tw-h-10 tw-w-[191px] tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-rounded-md tw-border tw-border-solid tw-border-text-ultra-light-gray tw-px-4 tw-py-2">
            <p className=" tw-whitespace-nowrap tw-text-sm tw-font-medium tw-not-italic tw-leading-[21px] tw-text-text-light-gray">
              Import Bulk Products{' '}
            </p>
            <svg
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3100_84347)">
                <path
                  d="M5.49948 0.5C2.84604 0.5 0.695312 2.65073 0.695312 5.30416C0.695312 7.11937 1.7015 8.69706 3.18579 9.51453L3.12929 11.5L5.39609 10.1029C5.4303 10.1037 5.4645 10.1083 5.49948 10.1083C8.15291 10.1083 10.3036 7.9576 10.3036 5.30416C10.3036 2.65073 8.15291 0.5 5.49948 0.5ZM6.11133 8.10365H4.88032V4.14117H6.11133V8.10365ZM5.48756 3.65576C5.09823 3.65576 4.83919 3.37981 4.84765 3.03929C4.83958 2.68301 5.09823 2.41513 5.49563 2.41513C5.89265 2.41513 6.14477 2.68301 6.15284 3.03929C6.15246 3.37981 5.89188 3.65576 5.48756 3.65576Z"
                  fill="#BBBBBB"
                />
              </g>
              <defs>
                <clipPath id="clip0_3100_84347">
                  <rect
                    width="11"
                    height="11"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <CustomButton text="Add Product" className="btn-primary" />
        </div>
      </div>
      <div className="content-body">
        {' '}
        <form onSubmit="">
          <div className="form-box-grid-4col">
            <Select
              label="Gender"
              isRequired={true}
              options={[
                { id: 'male', value: 'male', label: 'Male' },
                { id: 'female', value: 'female', label: 'Female' }
              ]}
              placeholder="John"
            />
            <CustomInput
              label="Designation"
              name="designation"
              placeholder="Designation"
              type="text"
              isRequired={true}
            />
            <CustomInput
              label="First Name"
              name="firstName"
              placeholder="First Name"
              type="text"
              isRequired={true}
            />
            <CustomInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
              type="text"
              isRequired={true}
            />
            <CustomInput
              label="Company Name"
              name="Company_Name"
              placeholder="Enter Company Name "
              type="text"
              isRequired={true}
            />

            <Select
              label="Country"
              name="country"
              placeholder="Country"
              type="select"
              //   onChange={handleCountryChange}
              //   value={selectedCountry}
              //   isRequired={true}
              //   options={countries.map((item) => {
              //     return { label: item.name, value: item.isoCode, id: item.isoCode };
              //   })}
            />
            <Select
              label="City"
              name="city"
              placeholder="City"
              type="select"
              //   value={selectedCity}
              //   onChange={handleCityChange}
              //   options={cities.map((item) => {
              //     return { label: item.name, value: item.isoCode, id: item.isoCode };
              //   })}
            />
            <CustomInput
              label="Postal Code"
              name="postal"
              placeholder="Postal Code"
              type="text"
              isRequired={true}
            />
          </div>
          <div
            className="tw-grid tw-grid-cols-[338px_1fr] tw-gap-[15px] tw-py-[16px]"
            // key={index}
          >
            <CustomInput
              label="Address Label"
              placeholder="Enter label name"
              type="text"
            />
            <CustomInput
              label="Address"
              name="Address "
              placeholder="Enter company address"
              type="text"
            />
          </div>

          <StepperFooter setIsSubmit={setIsSubmit} />
        </form>
      </div>
    </div>
  );
}
