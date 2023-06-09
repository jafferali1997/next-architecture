'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import Select from '@/common/components/select/select.component';
import OtpInput from '@/common/components/otp-input/otp-input.component';
import CountryPhoneInput from '@/common/components/country-phone-input/country-phone-input.component';
import useProfile from './use-profile.hook';

export default function Profile() {
  const {
    otp,
    setOtp,
    register,
    handleSubmit,
    onSubmit,
    setValue,
    errors,
    phone,
    setPhone,
    sendOtp,
    verifyOtpHandler,
    sendOtpButtonText,
    isOtpVerified,
    setIsOtpVerified
  } = useProfile();
  const cities = [
    { id: 1, label: 'Lahore', value: 'Lahore' },
    { id: 2, label: 'Rawalpindi', value: 'Rawalpindi' }
  ];
  return (
    <div className=" tw-min-h-[1090px]">
      <div className="tw-m-auto tw-max-w-[1311px] tw-px-[7.5px] tw-py-0">
        <div className="tw-mx-0 tw-mb-0 tw-mt-6">
          <Link href="/">
            <img alt="img" src="/assets/images/logo.png" />
          </Link>
        </div>
        <h1 className="tw-pt-10 tw-font-dm tw-text-[24px] tw-font-bold tw-not-italic tw-leading-[52px] tw-text-[#494949]">
          Profile Details
        </h1>
        <div className="profile-form-section tw-mb-5 tw-mt-[34px]">
          <div className="profile-form-heading tw-flex tw-gap-3 tw-pt-[34px]">
            <div className="color-width tw-min-h-[28px] tw-min-w-[6px] tw-rounded tw-bg-primary" />
            <h3 className="tw-font-dm tw-text-[18px] tw-font-medium tw-not-italic tw-leading-[24px] tw-text-[#050707]">
              Personal Details
            </h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="tw-grid tw-w-full tw-grid-cols-[repeat(auto-fill,minmax(616px,1fr))] tw-gap-16">
              <div className="input-group">
                <CustomInput
                  label="First Name"
                  name="firstName"
                  placeholder="John"
                  type="text"
                  register={register}
                  inlineLabel
                  errors={errors}
                  isRequired={true}
                />
              </div>
              <div className="input-group">
                <CustomInput
                  label="Last Name"
                  name="lastName"
                  placeholder="Deo"
                  type="text"
                  register={register}
                  isRequired={true}
                  errors={errors}
                />
              </div>
            </div>
            <div className="tw-grid tw-w-full tw-grid-cols-[repeat(auto-fill,minmax(616px,1fr))] tw-gap-16">
              <div className="input-group">
                <CustomInput
                  label="UserName"
                  name="userName"
                  type="text"
                  register={register}
                  isRequired={true}
                  disabled={true}
                />
              </div>
              <div className="input-group">
                <CustomInput
                  label="Email"
                  name="email"
                  type="email"
                  register={register}
                  isRequired={true}
                  disabled={true}
                />
              </div>
            </div>
            <div className="tw-grid tw-w-full tw-grid-cols-[repeat(auto-fill,minmax(616px,1fr))] tw-gap-16">
              <div className="input-group">
                <Select
                  label="Country"
                  name="country"
                  type="select"
                  options={cities.map((item) => {
                    return { label: item.label, value: item.value, id: item.id };
                  })}
                  register={register}
                  isRequired={true}
                  errors={errors}
                />
              </div>
              <div className="input-group">
                <Select
                  label="City"
                  name="city"
                  type="select"
                  options={cities.map((item) => {
                    return { label: item.label, value: item.value, id: item.id };
                  })}
                  register={register}
                  isRequired={true}
                  errors={errors}
                />
              </div>
            </div>
            <div className="tw-grid tw-w-full tw-grid-cols-[repeat(auto-fill,minmax(616px,1fr))] tw-gap-16">
              <div className="input-phone">
                <CountryPhoneInput
                  label="Phone Number"
                  inlineLabel={true}
                  name="phone"
                  value={phone}
                  onChange={setPhone}
                  isRequired={true}
                  register={register}
                  errors={errors}
                />
                <CustomButton
                  text={sendOtpButtonText.current}
                  className="btn-outline"
                  onClick={sendOtp}
                  disabled={isOtpVerified}
                />
              </div>
            </div>
            <div className="input-phone">
              <label>OTP Number</label>
              <div className="input-inner">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  disabled={isOtpVerified}
                  label="OTP"
                />
              </div>
              <div>
                <CustomButton
                  onClick={verifyOtpHandler}
                  text="Verify OTP"
                  className="btn-primary"
                  disabled={isOtpVerified || !otp || otp?.length < 4}
                />
              </div>
            </div>
            <div className="profile-form-heading">
              <div className="color-width" />
              <h3>Financial Details</h3>
            </div>
            <div className="tw-grid tw-w-full tw-grid-cols-[repeat(auto-fill,minmax(616px,1fr))] tw-gap-16">
              <div className="input-group">
                <CustomInput
                  type="text"
                  label="IBAN Number"
                  name="iban"
                  placeholder="125837-48274872-47374"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="input-group">
                <CustomInput
                  type="number"
                  label="VAT Number"
                  name="vat"
                  placeholder="12"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <div className="profile-form-heading">
              <div className="color-width" />
              <h3>Business Details</h3>
            </div>
            <div className="tw-grid tw-w-full tw-grid-cols-[repeat(auto-fill,minmax(616px,1fr))] tw-gap-16">
              <div className="input-group">
                <CustomInput
                  type="text"
                  label="Name"
                  name="businessName"
                  placeholder="Zapta Technology"
                  register={register}
                  errors={errors}
                  isRequired={true}
                />
              </div>
              <div className="input-group">
                <Select
                  label="Population"
                  name="population"
                  placeholder="Select Population"
                  options={[
                    { value: '10-20', label: '10 - 20' },
                    { value: '30-50', label: '30 - 50' },
                    { value: '5-100', label: '50 - 100' }
                  ]}
                  register={register}
                  errors={errors}
                  isRequired={true}
                />
              </div>
            </div>
            <div className="tw-grid tw-w-full tw-grid-cols-[repeat(auto-fill,minmax(616px,1fr))] tw-gap-16">
              <div className="input-group onebythree tw-col-[0.3333333333]">
                <CustomInput
                  type="text"
                  label="Address"
                  name="address"
                  placeholder="1234 Johr Town Berlin, Germany"
                  register={register}
                  errors={errors}
                  isRequired={true}
                />
              </div>
            </div>
            <div className="tw-grid tw-w-full tw-grid-cols-[repeat(auto-fill,minmax(616px,1fr))] tw-gap-16">
              <div className="submit-button">
                <CustomButton
                  type="Submit"
                  className="btn-primary"
                  text="Submit"
                  disabled={!isOtpVerified}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
