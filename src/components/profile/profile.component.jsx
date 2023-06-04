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

  return (
    <div className="profile-wrapper ">
      <div className="profile-container">
        <div className="header">
          <Link href="/">
            <img alt="img" src="/assets/images/logo.png" />
          </Link>
        </div>
        <h1 className="page-title">Profile Details</h1>
        <div className="profile-form-section tw-mb-5">
          <div className="profile-form-heading">
            <div className="color-width" />
            <h3>Personal Details</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} method="post">
            <div className="profile-form-content">
              <div className="input-group">
                <CustomInput
                  label="First Name"
                  name="firstName"
                  placeholder="John"
                  type="text"
                  register={register}
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
            <div className="profile-form-content">
              <div className="input-group">
                <CustomInput
                  label="UserName"
                  name="username"
                  placeholder="John Doe"
                  type="text"
                  register={register}
                  isRequired={true}
                  errors={errors}
                />
              </div>
              <div className="input-group">
                <CustomInput
                  label="Email"
                  name="email"
                  type="email"
                  register={register}
                  //   readOnly={true}
                  isRequired={true}
                  disabled={true}
                  // values={email}
                  // onChange={handleChange}
                />
              </div>
            </div>
            <div className="profile-form-content">
              <div className="input-group">
                <Select
                  label="Country"
                  name="country"
                  type="select"
                  options={[]}
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
                  options={[]}
                  register={register}
                  isRequired={true}
                  errors={errors}
                />
              </div>
            </div>
            <div className="profile-form-content">
              <div className="input-phone">
                <CountryPhoneInput
                  label="Phone Number"
                  inlineLabel={true}
                  name="phone"
                  value={phone}
                  onChange={setPhone}
                  isRequired={true}
                  register={register}
                />
                <CustomButton
                  text={sendOtpButtonText.current}
                  className="btn-outline"
                  onClick={sendOtp}
                  // disabled={isOtpVerified}
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
                  // disabled={isOtpVerified || !otp || otp?.length < 4}
                />
              </div>
            </div>
            <div className="profile-form-heading">
              <div className="color-width" />
              <h3>Financial Details</h3>
            </div>
            <div className="profile-form-content">
              <div className="input-group">
                <CustomInput
                  type="text"
                  label="IBAN Number"
                  name="ibanNumber"
                  placeholder="125837-48274872-47374"
                  register={register}
                />
              </div>
              <div className="input-group">
                <CustomInput
                  type="number"
                  label="VAT Number"
                  name="vatNumber"
                  placeholder="12"
                  register={register}
                />
                {/* <div className='profile-form-section'>Max: 15 digit</div> */}
              </div>
            </div>
            <div className="profile-form-heading">
              <div className="color-width" />
              <h3>Business Details</h3>
            </div>
            <div className="profile-form-content">
              <div className="input-group">
                <CustomInput
                  type="text"
                  label="Name"
                  name="companyName"
                  placeholder="Zapta Technology"
                  register={register}
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
                />
              </div>
            </div>
            <div className="profile-form-content">
              <div className="input-group onebythree">
                <CustomInput
                  type="text"
                  label="Address"
                  name="address"
                  placeholder="1234 Johr Town Berlin, Germany"
                  register={register}
                />
              </div>
            </div>
            <div className="profile-form-content">
              <div className="submit-button">
                <CustomButton
                  type="submit"
                  className="btn-primary"
                  text="Submit"
                  // disabled={!isOtpVerified}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
