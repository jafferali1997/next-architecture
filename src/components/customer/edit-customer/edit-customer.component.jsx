/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import FormInput from '@/common/components/form-input-old/form-input.component';
import UseEditCustomer from './use-edit-customer.hook';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import Select from '@/common/components/select/select.component';
import MultiSelect from '@/common/components/multi-select/multi-select.component';
import CustomSwitch from '@/common/components/custom-switch/custom-switch.component';
import TextArea from '@/common/components/text-area/text-area.component';
import CustomRadio from '@/common/components/custom-radio/custom-radio.component';

export default function EditCustomer() {
  const {
    isAdditional,
    setIsAdditional,
    additionalhandles,
    isAdress,
    setIsAdress,
    adressHandles
  } = UseEditCustomer();
  
  return (
    <div className="content">
      <div className="tw-min-h-[100vh] tw-w-full tw-bg-[#FBFBFB] tw-px-[23px] ">
        <div className="tw-flex tw-items-center tw-justify-between tw-py-[24px]">
          <div className="tw-flex tw-items-center tw-gap-[16px]">
            <img src="/assets/images/back-icon.svg" alt="img" />
            <h1 className="admin-top-heading ">Customer Edit</h1>
            <p className="admin-top-p">Customer # 10075</p>
          </div>
          <CustomButton className="btn-primary" text="Update" />
        </div>
        <div className="2bars tw-flex tw-gap-[24px]">
          <div className="main-content">
            <div className="form-box  tw-w-[759px] ">
              <h3 className="form-box-heading ">Personal Details</h3>
              <div className="form-box-grid">
                <Select
                  label="Gender"
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
                />
                <CustomInput
                  label="First Name"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  register={register}
                />
                <CustomInput
                  label="Last Name"
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                />
                <CustomInput
                  label="Address"
                  name="address"
                  placeholder="Address"
                  type="text"
                />

                <Select
                  label="Country"
                  name="country"
                  placeholder="Country"
                  type="select"

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
                />
                <div>
                  <label className="group-label">Price Group</label>
                  <MultiSelect
                    options={[
                      { id: '1', label: 'Test 1', value: 'test1' },
                      { id: '2', label: 'Test 2', value: 'test2' },
                      { id: '3', label: 'Test 3', value: 'test3' }
                    ]}
                    handleChange={() => {}}
                  />
                </div>
                <div>
                  <label className="group-label">Discount Group</label>
                  <MultiSelect
                    options={[
                      { id: '1', label: 'Test 1', value: 'test1' },
                      { id: '2', label: 'Test 2', value: 'test2' },
                      { id: '3', label: 'Test 3', value: 'test3' }
                    ]}
                    handleChange={() => {}}
                  />
                </div>
              </div>
            </div>
            <div className="form-box  tw-mt-[16px] tw-w-[759px]">
              <h3 className="form-box-heading ">Company Details</h3>

              <div className="form-box-grid">
                <CustomInput
                  label="Company Name"
                  placeholder="Company Name"
                  type="text"
                  name="companyName"
                />

                <CustomInput
                  label="Company Email Address"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                />
                <CustomInput
                  label="Company Phone Number"
                  name="phoneNo"
                  placeholder="Phone Number"
                  type="number"
                />
                <CustomInput
                  label="Company Mobile Number"
                  name="mobileNo"
                  placeholder="Mobile Number"
                  type="text"
                />
                <Select
                  label="Company Size"
                  name="companySize"
                  placeholder="Select Company Size"
                  type="select"
                  options={[
                    { id: '10-30', value: '10-30', label: '10-30' },
                    { id: '40-100', value: '40-100', label: '40-100' },
                    { id: 'above 100', value: 'above 100', label: 'above 100' }
                  ]}
                />
                <CustomInput
                  label="Company FAX Number"
                  name="faxNumber"
                  placeholder="FAX Number"
                  type="text"
                />

                <CustomInput
                  label="TIN"
                  name="taxNumber"
                  placeholder="TAX Number"
                  type="text"
                />

                <CustomInput
                  label="VAT Number"
                  name="vatNumber"
                  placeholder="VAT Number"
                  type="text"
                />
              </div>
              <div>
                <CustomInput
                  label="Company URL"
                  name="website"
                  placeholder="URL"
                  type="text"
                  isRequired={false}
                />
              </div>
              <div className="tw-grid tw-grid-cols-[repeat(auto-fill,minmax(175px,1fr))] tw-gap-[15px] tw-py-[16px]">
                <CustomSwitch label="Current Status" name="status" type="switch" />
                <CustomSwitch
                  label="Do not show customer on PDF"
                  name="isShowInPdf"
                  type="switch"
                />
                <CustomSwitch label="VAT exempt" name="isVatEnabled" type="switch" />
              </div>
              <div className="tw-flex tw-items-center  tw-justify-between">
                <div className="tw-flex tw-items-center tw-gap-[16px]">
                  <h3 className="form-box-heading">Company Addresses</h3>
                  {isAdress ? (
                    <img
                      src="/assets/images/close_add.svg"
                      alt="img"
                      onClick={adressHandles}
                    />
                  ) : (
                    <img
                      src="/assets/images/plus_btn.svg"
                      alt="img"
                      onClick={adressHandles}
                    />
                  )}
                </div>
                <span className="tw-font-dm tw-text-xs tw-font-medium tw-not-italic tw-leading-6 tw-text-blue-700 tw-underline">
                  Add more address
                </span>
              </div>
              {isAdress ? (
                <div className="form-box-grid">
                  <CustomInput
                    label="Company address 1"
                    name=""
                    placeholder="Company address 1"
                    type="text"
                    isRequired={false}
                  />
                  <CustomInput
                    label="Company address 1"
                    name=""
                    placeholder="Company address 1"
                    type="text"
                    isRequired={false}
                  />
                </div>
              ) : null}
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
                  <CustomInput
                    label="Gender"
                    name="gender"
                    placeholder="John"
                    type="select"
                    options={[
                      { id: 'male', value: 'male', label: 'Male' },
                      { id: 'female', value: 'female', label: 'Female' }
                    ]}
                  />
                  <CustomInput
                    label="Designation"
                    name="designation"
                    placeholder="Designation"
                    type="text"
                  />
                  <CustomInput
                    label="First Name"
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                  />
                  <CustomInput
                    label="Last Name"
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                  />
                  <CustomInput
                    label="Address"
                    name="address"
                    placeholder="Address"
                    type="text"
                  />

                  <Select
                    label="Country"
                    name="country"
                    placeholder="Country"
                    type="select"
                    // onChange={handleCountryChange}
                    // value={selectedCountry}
                    // isRequired={true}

                    // options={countries.map((item) => {
                    //   return { label: item.name, value: item.isoCode, id: item.isoCode };
                    // })}
                  />
                  <Select
                    label="City"
                    name="city"
                    placeholder="City"
                    type="select"
                    // value={selectedCity}
                    // onChange={handleCityChange}

                    // options={cities.map((item) => {
                    //   return { label: item.name, value: item.isoCode, id: item.isoCode };
                    // })}
                  />
                  <CustomInput
                    label="Postal Code"
                    name="postal"
                    placeholder="Postal Code"
                    type="text"
                  />
                  <CustomInput
                    label="Email Address"
                    name="additionalEmail"
                    placeholder="Email Address"
                    type="text"
                  />
                  <CustomInput
                    label="Phone Number"
                    name="phone"
                    placeholder="Phone Number"
                    type="number"
                  />
                  <CustomInput
                    label="Mobile Number"
                    name="mobile"
                    placeholder="Mobile Number"
                    type="number"
                  />
                  <CustomInput
                    label="Department"
                    name="department"
                    placeholder="Department"
                    type="text"
                  />
                </div>
              ) : null}
            </div>
            <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
              <h3 className="form-box-heading ">Payment Details (Bank details)</h3>
              <div className="tw-mb-6 tw-flex tw-flex-col tw-gap-[18px]">
                <label className="tw-font-dm tw-text-xs tw-font-medium tw-not-italic tw-leading-6 tw-text-secondary-black">
                  Payment By
                  <span className="tw-text-[red]">*</span>
                </label>
                <div className="payment-details-bank">
                  <CustomRadio
                    label="Bank Details"
                    name="same"
                    // checked={bankDetail}
                    // onChange={(e) => {
                    //   setBankDetail(e.target.checked);
                    //   setCreditCard(!e.target.checked);
                    // }}
                    placeholder="Company Name"
                    type="radio"
                  />
                </div>
                <div className="payment-details-card">
                  <CustomRadio
                    label="Credit Card Details"
                    name="same"
                    // checked={creditCard}
                    // onChange={(e) => {
                    //   setCreditCard(e.target.checked);
                    //   setBankDetail(!e.target.checked);
                    // }}
                    placeholder="Company Name"
                    type="radio"
                  />
                </div>
              </div>
              <div className="tw-w-full">
                <CustomInput
                  label="IBAN Number"
                  name="iban"
                  placeholder="IBAN Number"
                  type="text"
                />
              </div>
              <div className="form-box-grid">
                <CustomInput
                  label="Account owner name"
                  name="onwerName"
                  placeholder="Account owner name"
                  type="text"
                  isRequired={true}
                />

                <CustomInput
                  label="BIC Number"
                  name="bicNumber"
                  placeholder="BIC Number"
                  type="text"
                />
                <CustomInput
                  label="Mandate Reference"
                  name="mandateReference"
                  placeholder="Mandate Reference"
                  type="number"
                />
                <CustomInput
                  label="Mandate Date"
                  name="mandateDate"
                  placeholder="03/13/2023"
                  type="date"
                />
              </div>
            </div>
            <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
              <h3 className="form-box-heading ">Discount</h3>
              <div className="form-box-grid">
                <CustomInput
                  label="Discount Amount "
                  name="discount"
                  placeholder="Discount amount"
                  type="text"
                  isRequired={true}
                />
                <div>
                  <CustomInput
                    label="Cash Discount"
                    name="days"
                    placeholder="Cash Discount"
                    type="text"
                    isRequired={true}
                  />
                </div>
              </div>
            </div>
            <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
              <h3 className="form-box-heading ">Terms Of Payments</h3>
              <div className="tw-mt-[16px] tw-w-full">
                <CustomInput
                  label="Payment terms as date"
                  name="paymentDate"
                  placeholder="03/13/2023"
                  type="date"
                />
                <h3 className="tw-mt-[16px]">Terms of delivery</h3>
                <TextArea
                  name="deliveryTerm"
                  placeholder="Delivery Terms"
                  type="textarea"
                />
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="form-box tw-flex tw-h-[77px] tw-w-[336px] tw-items-center tw-justify-between ">
              <h3 className="form-box-heading ">Status</h3>
              <span className="status-active ">Active</span>
            </div>
            <div className="form-box  tw-mt-[16px]  tw-w-[336px]  ">
              <div className="tw-flex tw-items-center tw-justify-between">
                <h3 className="form-box-heading ">Uploaded files</h3>
                <CustomButton text="Upload" className="btn-secondary  " />
              </div>
              <div className=" tw-mt-[16px] tw-flex tw-flex-col tw-gap-[12px] ">
                <div className="tw-flex tw-items-center tw-gap-[20px]">
                  <div className="tw-flex tw-gap-[5px]">
                    <img src="/assets/images/file-icon.svg" alt="img" />
                    <p className="tw-font-dm tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
                      Design System.PNG
                    </p>
                  </div>
                  <div>
                    <img src="/assets/images/new-tab-icon.svg" alt="img" />
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-gap-[20px]">
                  <div className="tw-flex tw-gap-[5px]">
                    <img src="/assets/images/file-icon.svg" alt="img" />
                    <p className="tw-font-dm tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
                      Design System.PNG
                    </p>
                  </div>
                  <div>
                    <img src="/assets/images/new-tab-icon.svg" alt="img" />
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-gap-[20px]">
                  <div className="tw-flex tw-gap-[5px]">
                    <img src="/assets/images/file-icon.svg" alt="img" />
                    <p className="tw-font-dm tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
                      Design System.PNG
                    </p>
                  </div>
                  <div>
                    <img src="/assets/images/new-tab-icon.svg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-box tw-mt-[16px] tw-flex  tw-w-[336px] tw-flex-col tw-gap-[16px]  ">
              <h3 className="form-box-heading ">Comments</h3>
              <p className="tw-text-sm tw-font-normal tw-not-italic tw-leading-[21px] tw-text-text-light-gray ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
