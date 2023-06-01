'use client';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState } from 'react';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import FormInput from '@/common/components/form-input-old/form-input.component';
import PlusIcon from '@/common/icons/plus.icon';

export default function Page() {
  const [isAdditional, setIsAdditional] = useState(false);
  const additionalhandles = () => {
    setIsAdditional(!isAdditional);
  };
  return (
    <div className="tw-flex tw-w-full">
      <div className="tw-min-h-[100vh] tw-w-[273px] tw-bg-[#2563EB]">sidebar</div>
      <div className="content tw-w-full ">
        <div className="tw-h-[68px] tw-w-full tw-bg-[#BBBBBB1A]">header</div>
        <div className="tw-min-h-[100vh] tw-w-full tw-bg-[#FBFBFB] tw-px-[23px] ">
          <div className="tw-flex tw-items-center tw-justify-between tw-py-[24px]">
            <div className="tw-flex tw-items-center tw-gap-[16px]">
              <img src="/assets/images/back-icon.svg" alt="img" />
              <h1 className="admin-top-heading ">List of customer</h1>
              <p className="admin-top-p">Customer # 10075</p>
            </div>
            <CustomButton className="btn-outline" text="Edit" />
          </div>
          <div className="2bars tw-flex tw-gap-[24px]">
            <div className="main-content">
              <div className="form-box  tw-w-[759px] ">
                <h3 className="form-box-heading ">Personal Details</h3>
                <div className=" form-box-grid ">
                  <FormInput
                    label="Gender"
                    name="gender"
                    placeholder="John"
                    type="select"
                    isRequired={true}
                  >
                    <option disabled selected>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </FormInput>
                  <FormInput
                    label="Designation"
                    name="designation"
                    placeholder="Designation"
                    type="text"
                    isRequired={true}
                  />
                  <FormInput
                    label="First Name"
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    isRequired={true}
                  />
                  <FormInput
                    label="Last Name"
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    isRequired={true}
                  />
                  <FormInput
                    label="Address"
                    name="address"
                    placeholder="Address"
                    type="text"
                    isRequired={true}
                  />

                  <FormInput
                    label="Country"
                    name="country"
                    placeholder="Country"
                    type="select"
                    // onChange={handleCountryChange}
                    // value={selectedCountry}
                    isRequired={true}
                  >
                    <option value="">Select Country</option>
                    {/* {countries.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))} */}
                  </FormInput>
                  <FormInput
                    label="City"
                    name="city"
                    placeholder="City"
                    type="select"
                    // value={selectedCity}
                    // onChange={handleCityChange}
                  >
                    <option value="">Select City</option>
                    {/* {cities.map((city) => (
                    <option key={city.id} value={city.name}>
                      {city.name}
                    </option>
                  ))} */}
                  </FormInput>
                  <FormInput
                    label="Postal Code"
                    name="postal"
                    placeholder="Postal Code"
                    type="number"
                    isRequired={true}
                  />
                </div>
              </div>
              <div className="form-box  tw-mt-[16px] tw-w-[759px]">
                <h3 className="form-box-heading ">Company Details</h3>
                <div className="form-box-grid">
                  <FormInput
                    label="Company Name"
                    name="companyName"
                    placeholder="Company Name"
                    type="text"
                    isRequired={true}
                  />

                  <FormInput
                    label="Company Email Address"
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    isRequired={true}
                  />
                  <FormInput
                    label="Company Phone Number"
                    name="phoneNo"
                    placeholder="Phone Number"
                    type="number"
                    isRequired={true}
                  />
                  <FormInput
                    label="Company Mobile Number"
                    name="mobileNo"
                    placeholder="Mobile Number"
                    type="text"
                    isRequired={true}
                  />
                  <FormInput
                    label="Company Size"
                    name="companySize"
                    placeholder="Select Company Size"
                    type="select"
                    isRequired={true}
                  >
                    <option selected disabled>
                      Select Company Size
                    </option>
                    <option value="10-30">10-30</option>
                    <option value="40-100">40-100</option>
                    <option value="above 100">above 100</option>
                  </FormInput>
                  <FormInput
                    label="Company FAX Number"
                    name="faxNumber"
                    placeholder="FAX Number"
                    type="text"
                    isRequired={true}
                  />

                  <FormInput
                    label="TIN"
                    name="taxNumber"
                    placeholder="TAX Number"
                    type="text"
                    isRequired={true}
                  />

                  <FormInput
                    label="VAT Number"
                    name="vatNumber"
                    placeholder="VAT Number"
                    type="text"
                    isRequired={true}
                  />
                  <FormInput
                    label="Company URL"
                    name="website"
                    placeholder="URL"
                    type="text"
                    isRequired={false}
                  />
                  <FormInput
                    label="Current Status"
                    name="status"
                    type="switch"
                    isRequired={false}
                  />
                  <FormInput
                    label="Do not show customer on PDF"
                    name="isShowInPdf"
                    type="switch"
                    isRequired={false}
                  />
                  <FormInput
                    label="VAT exempt"
                    name="isVatEnabled"
                    type="switch"
                    isRequired={false}
                  />
                </div>
                <div className="tw-flex tw-items-center tw-gap-[16px]">
                  <h3 className="form-box-heading">Additional Contact Person</h3>
                  {isAdditional ? (
                    <img
                      src="/assets/images/close_add.svg"
                      alt="img"
                      onClick={additionalhandles}
                    />
                  ) : (
                    <img
                      src="/assets/images/plus_btn.svg"
                      alt="img"
                      onClick={additionalhandles}
                    />
                  )}
                </div>
                {isAdditional ? (
                  <div className="form-box-grid">
                    <FormInput
                      label="Gender"
                      name="gender"
                      placeholder="John"
                      type="select"
                    >
                      <option disabled selected>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </FormInput>
                    <FormInput
                      label="Designation"
                      name="designation"
                      placeholder="Designation"
                      type="text"
                    />
                    <FormInput
                      label="First Name"
                      name="firstName"
                      placeholder="First Name"
                      type="text"
                    />
                    <FormInput
                      label="Last Name"
                      name="lastName"
                      placeholder="Last Name"
                      type="text"
                    />
                    <FormInput
                      label="Address"
                      name="address"
                      placeholder="Address"
                      type="text"
                    />

                    <FormInput
                      label="Country"
                      name="country"
                      placeholder="Country"
                      type="select"
                      // onChange={handleCountryChange}
                      // value={selectedCountry}
                      isRequired={true}
                    >
                      <option value="">Select Country</option>
                      {/* {countries.map((country) => (
                        <option key={country.isoCode} value={country.isoCode}>
                          {country.name}
                        </option>
                      ))} */}
                    </FormInput>
                    <FormInput
                      label="City"
                      name="city"
                      placeholder="City"
                      type="select"
                      // value={selectedCity}
                      // onChange={handleCityChange}
                    >
                      <option value="">Select City</option>
                      {/* {cities.map((city) => (
                        <option key={city.id} value={city.name}>
                          {city.name}
                        </option>
                      ))} */}
                    </FormInput>
                    <FormInput
                      label="Postal Code"
                      name="postal"
                      placeholder="Postal Code"
                      type="text"
                    />
                    <FormInput
                      label="Email Address"
                      name="additionalEmail"
                      placeholder="Email Address"
                      type="text"
                    />
                    <FormInput
                      label="Phone Number"
                      name="phone"
                      placeholder="Phone Number"
                      type="number"
                    />
                    <FormInput
                      label="Mobile Number"
                      name="mobile"
                      placeholder="Mobile Number"
                      type="number"
                    />
                    <FormInput
                      label="Department"
                      name="department"
                      placeholder="Department"
                      type="text"
                    />
                  </div>
                ) : null}
              </div>
            </div>
            <div className="right-side">
              <div className="form-box tw-h-[77px] tw-w-[336px] ">
                <h3 className="form-box-heading ">Company Details</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
