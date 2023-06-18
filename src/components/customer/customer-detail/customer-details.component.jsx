'use client';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import Link from 'next/link';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import Select from '@/common/components/select/select.component';
import MultiSelect from '@/common/components/multi-select/multi-select.component';
import CustomSwitch from '@/common/components/custom-switch/custom-switch.component';
import TextArea from '@/common/components/text-area/text-area.component';
import CustomRadio from '@/common/components/custom-radio/custom-radio.component';
import useCustomerDetails from './use-customer-details.hook';

export default function CustomerDetails() {
  const {
    isAdditional,
    setIsAdditional,
    additionalhandles,
    isAdress,
    setIsAdress,
    adressHandles,
    register,
    handleSubmit,
    id,
    onSubmit,
    companyAddresses,
    allPriceGroup,
    selectedPriceGroup,
    allDiscountGroup,
    selectedDiscountGroup,
    defaultData
  } = useCustomerDetails();

  return (
    <div className="content">
      <div className="tw-min-h-[100vh] tw-w-full tw-bg-[#FBFBFB] tw-px-[23px] ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="tw-flex tw-items-center tw-justify-between tw-py-[24px]">
            <div className="tw-flex tw-items-center tw-gap-[16px]">
              <Link href="/customer">
                <img src="/assets/images/back-icon.svg" alt="img" />
              </Link>
              <h1 className="admin-top-heading ">Customer Details</h1>
              <p className="admin-top-p">Customer # {id}</p>
            </div>
            <CustomButton
              className="btn-primary"
              text="Edit"
              href={`/customer/edit?id=${id}`}
            />
          </div>
          <div className="2bars tw-flex tw-gap-[24px]">
            <div className="main-content">
              <div className="form-box tw-w-[759px] ">
                <h3 className="form-box-heading ">Personal Details</h3>
                <div className="form-box-grid">
                  <CustomInput
                    label="Gender"
                    placeholder="Select Gender"
                    name="gender"
                    register={register}
                    readOnly
                  />
                  <CustomInput
                    label="Designation"
                    name="designation"
                    placeholder="Designation"
                    type="text"
                    register={register}
                    readOnly
                  />
                  <CustomInput
                    label="First Name"
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    register={register}
                    readOnly
                  />
                  <CustomInput
                    label="Last Name"
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    register={register}
                    readOnly
                  />
                  <CustomInput
                    label="Address"
                    name="address"
                    placeholder="Address"
                    type="text"
                    register={register}
                    readOnly
                  />
                  <CustomInput
                    label="Country"
                    name="country"
                    placeholder="Country"
                    register={register}
                    readOnly
                  />
                  <CustomInput
                    label="City"
                    name="city"
                    placeholder="City"
                    register={register}
                    readOnly
                  />
                  <CustomInput
                    label="Postal Code"
                    name="postalCode"
                    placeholder="Postal Code"
                    type="text"
                    register={register}
                    readOnly
                  />
                  <div>
                    <label className="group-label">Price Group</label>
                    <MultiSelect
                      options={allPriceGroup}
                      defaultOptions={selectedPriceGroup}
                      handleChange={() => {}}
                      placeholder={`${
                        selectedPriceGroup.length === 0
                          ? 'No option selected'
                          : 'Select price group(s)'
                      }`}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="group-label">Discount Group</label>
                    <MultiSelect
                      options={allDiscountGroup}
                      defaultOptions={selectedDiscountGroup}
                      handleChange={() => {}}
                      placeholder={`${
                        selectedPriceGroup.length === 0
                          ? 'No option selected'
                          : 'Select discount group(s)'
                      }`}
                      readOnly
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
                    register={register}
                    readOnly
                  />

                  <CustomInput
                    label="Company Email Address"
                    name="companyEmail"
                    placeholder="Email Address"
                    type="email"
                    register={register}
                    readOnly
                  />
                  <CustomInput
                    label="Company Phone Number"
                    name="companyPhone"
                    placeholder="Phone Number"
                    type="number"
                    register={register}
                    readOnly
                  />
                  <CustomInput
                    label="Company Mobile Number"
                    name="companyMobile"
                    placeholder="Mobile Number"
                    type="text"
                    register={register}
                    readOnly
                  />
                  <CustomInput
                    label="Company Size"
                    name="companySize"
                    placeholder="Select Company Size"
                    type="select"
                    register={register}
                    readOnly
                  />
                  <CustomInput
                    label="Company FAX Number"
                    name="companyFax"
                    placeholder="FAX Number"
                    type="text"
                    register={register}
                    readOnly
                  />

                  <CustomInput
                    label="TIN"
                    name="tin"
                    placeholder="TAX Number"
                    type="text"
                    register={register}
                    readOnly
                  />

                  <CustomInput
                    label="VAT Number"
                    name="vat"
                    placeholder="VAT Number"
                    type="text"
                    register={register}
                    readOnly
                  />
                </div>
                <div>
                  <CustomInput
                    label="Company URL"
                    name="companyUrl"
                    placeholder="URL"
                    type="text"
                    isRequired={false}
                    register={register}
                    readOnly
                  />
                </div>
                <div className="tw-grid tw-grid-cols-[repeat(auto-fill,minmax(175px,1fr))] tw-gap-[15px] tw-py-[16px]">
                  <CustomSwitch
                    label="Current Status"
                    type="switch"
                    checked={defaultData.isStatus}
                    readOnly
                    disabled={!defaultData.isStatus}
                  />
                  <CustomSwitch
                    label="Do not show customer on PDF"
                    type="switch"
                    checked={defaultData.isPDF}
                    readOnly
                    disabled={!defaultData.isPDF}
                  />
                  <CustomSwitch
                    label="VAT exempt"
                    type="switch"
                    checked={defaultData.vatStatus}
                    readOnly
                    disabled={!defaultData.vatStatus}
                  />
                </div>
                <div className="tw-mb-2 tw-flex tw-items-center tw-justify-between">
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
                </div>
                {isAdress &&
                  companyAddresses.map((value, index) => (
                    <div className="form-box-grid" key={value}>
                      <CustomInput
                        placeholder="Enter label name"
                        type="text"
                        name={`ca_addressLabel_${index + 1}`}
                        register={register}
                        // onChange={(e) => handleInputChange(index, e.target.value)}
                      />
                      <CustomInput
                        placeholder="Enter company address"
                        type="text"
                        name={`ca_address_${index + 1}`}
                        register={register}
                      />
                    </div>
                  ))}
                {isAdress && companyAddresses?.length === 0 && (
                  <p className="tw-text-center">No address found.</p>
                )}
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
                      name="ac_gender"
                      placeholder="John"
                      register={register}
                      readOnly
                    />
                    <CustomInput
                      label="Designation"
                      name="ac_designation"
                      placeholder="Designation"
                      type="text"
                      register={register}
                      readOnly
                    />
                    <CustomInput
                      label="First Name"
                      name="ac_firstName"
                      placeholder="First Name"
                      type="text"
                      register={register}
                      readOnly
                    />
                    <CustomInput
                      label="Last Name"
                      name="ac_lastName"
                      placeholder="Last Name"
                      type="text"
                      register={register}
                      readOnly
                    />
                    <CustomInput
                      label="Address"
                      name="ac_address"
                      placeholder="Address"
                      type="text"
                      register={register}
                      readOnly
                    />

                    <CustomInput
                      label="Country"
                      name="ac_country"
                      placeholder="Country"
                      type="select"
                      register={register}
                      readOnly
                    />
                    <CustomInput
                      label="City"
                      name="ac_city"
                      placeholder="City"
                      register={register}
                      readOnly
                    />
                    <CustomInput
                      label="Postal Code"
                      name="ac_postalCode"
                      placeholder="Postal Code"
                      type="text"
                      register={register}
                      readOnly
                    />
                    <CustomInput
                      label="Email Address"
                      name="ac_email"
                      placeholder="Email Address"
                      type="text"
                      register={register}
                      readOnly
                    />
                    <CustomInput
                      label="Phone Number"
                      name="ac_phone"
                      placeholder="Phone Number"
                      type="number"
                      register={register}
                      readOnly
                    />
                    <CustomInput
                      label="Mobile Number"
                      name="ac_mobile"
                      placeholder="Mobile Number"
                      type="number"
                      register={register}
                      readOnly
                    />
                    <CustomInput
                      label="Department"
                      name="ac_department"
                      placeholder="Department"
                      type="text"
                      register={register}
                      readOnly
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
                      checked={defaultData.paymentType === 'bankDetail'}
                      type="radio"
                      register={register}
                      readOnly
                    />
                  </div>
                  <div className="payment-details-card">
                    <CustomRadio
                      label="Credit Card Details"
                      name="same"
                      checked={defaultData.paymentType === 'creditCard'}
                      type="radio"
                      register={register}
                      readOnly
                    />
                  </div>
                </div>
                {defaultData.paymentType === 'bankDetail' && (
                  <>
                    <div className="tw-w-full">
                      <CustomInput
                        label="IBAN Number"
                        name="iban"
                        placeholder="IBAN Number"
                        type="text"
                        register={register}
                        readOnly
                      />
                    </div>
                    <div className="form-box-grid">
                      <CustomInput
                        label="Account owner name"
                        name="accountOwnerName"
                        placeholder="Account owner name"
                        type="text"
                        isRequired={true}
                        register={register}
                        readOnly
                      />
                      <CustomInput
                        label="BIC Number"
                        name="bic"
                        placeholder="BIC Number"
                        type="text"
                        register={register}
                        readOnly
                      />
                      <CustomInput
                        label="Mandate Reference"
                        name="mendateReferance"
                        placeholder="Mandate Reference"
                        type="number"
                        register={register}
                        readOnly
                      />
                      <CustomInput
                        label="Mandate Date"
                        name="mandateGenerateDate"
                        placeholder="03/13/2023"
                        type="date"
                        register={register}
                        readOnly
                      />
                    </div>
                  </>
                )}
                {defaultData.paymentType === 'creditCard' && (
                  <div className="form-box-grid-4col">
                    <CustomInput
                      label="Credit Card Name"
                      name="nameOfCreditCard"
                      placeholder="Credit Card Name"
                      type="text"
                      register={register}
                      isRequired={true}
                    />
                    <CustomInput
                      label="Credit Card Number"
                      name="creditCardNumber"
                      placeholder="Credit Card Number"
                      type="number"
                      register={register}
                      isRequired={true}
                    />
                    <CustomInput
                      label="Expiry Date"
                      name="creditCardExpiry"
                      placeholder="03/13/2023"
                      type="month"
                      register={register}
                      isRequired={true}
                    />
                    <CustomInput
                      label="CVV"
                      name="creditCardCVV"
                      placeholder="CVV"
                      type="number"
                      register={register}
                      isRequired={true}
                    />
                  </div>
                )}
              </div>
              <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
                <h3 className="form-box-heading ">Discount</h3>
                <div className="form-box-grid">
                  <CustomInput
                    label="Discount Amount"
                    name="discountAmount"
                    placeholder="Discount amount"
                    type="text"
                    isRequired={true}
                    register={register}
                    readOnly
                  />
                  <div>
                    <CustomInput
                      label="Cash Discount"
                      name="discountDays"
                      placeholder="Cash Discount"
                      type="text"
                      isRequired={true}
                      register={register}
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
                <div className="tw-mt-[16px] tw-w-full">
                  <h3 className="form-box-heading ">Terms Of Payments</h3>
                  <FormControl>
                    <RadioGroup
                      name="termOfPayment"
                      value={defaultData.termOfPayment}
                      register={register}
                      readOnly
                    >
                      <FormControlLabel
                        value="PAYMENT_TERMS_AS_DATE"
                        control={
                          <Radio
                            checked={
                              defaultData.termOfPayment === 'PAYMENT_TERMS_AS_DATE'
                            }
                          />
                        }
                        label="Payment Terms as date"
                      />
                      {defaultData.termOfPayment === 'PAYMENT_TERMS_AS_DATE' && (
                        <div className="radio-expanded">
                          <CustomInput
                            name="PAYMENT_TERMS_AS_DATE_DATA"
                            placeholder="03/13/2023"
                            type="date"
                            isRequired={false}
                            register={register}
                            readOnly
                          />
                        </div>
                      )}
                      <FormControlLabel
                        value="PAYMENT_TERMS_IN_DAYS"
                        control={
                          <Radio
                            checked={
                              defaultData.termOfPayment === 'PAYMENT_TERMS_IN_DAYS'
                            }
                          />
                        }
                        label="Payment terms in days"
                      />
                      {defaultData.termOfPayment === 'PAYMENT_TERMS_IN_DAYS' && (
                        <div className="radio-expanded">
                          <CustomInput
                            name="PAYMENT_TERMS_IN_DAYS_DATA"
                            placeholder="Payment terms"
                            type="days"
                            isRequired={false}
                            register={register}
                            readOnly
                          />
                        </div>
                      )}
                      <FormControlLabel
                        value="CASH_DISCOUNT_TARGET_AS_A_DATE"
                        control={
                          <Radio
                            checked={
                              defaultData.termOfPayment ===
                              'CASH_DISCOUNT_TARGET_AS_A_DATE'
                            }
                          />
                        }
                        label="Cash discount target as a date"
                      />
                      {defaultData.termOfPayment === 'CASH_DISCOUNT_TARGET_AS_A_DATE' && (
                        <div className="radio-expanded">
                          <CustomInput
                            name="CASH_DISCOUNT_TARGET_AS_A_DATE_DATA"
                            placeholder="13/03/2023"
                            type="date"
                            isRequired={false}
                            register={register}
                            readOnly
                          />
                        </div>
                      )}
                      <FormControlLabel
                        value="DISCOUNT_AND_PERCENTAGE"
                        control={
                          <Radio
                            checked={
                              defaultData.termOfPayment === 'DISCOUNT_AND_PERCENTAGE'
                            }
                          />
                        }
                        label="Discount and %"
                      />
                      {defaultData.termOfPayment === 'DISCOUNT_AND_PERCENTAGE' && (
                        <div className="radio-expanded">
                          <CustomInput
                            name="DISCOUNT_AND_PERCENTAGE_DATA"
                            placeholder="Discount and %"
                            type="text"
                            isRequired={false}
                            register={register}
                            readOnly
                          />
                        </div>
                      )}
                      <FormControlLabel
                        value="DISCOUNT_AMOUNT"
                        control={
                          <Radio
                            checked={defaultData.termOfPayment === 'DISCOUNT_AMOUNT'}
                          />
                        }
                        label="Discount amount"
                      />
                      {defaultData.termOfPayment === 'DISCOUNT_AMOUNT' && (
                        <div className="radio-expanded">
                          <CustomInput
                            name="DISCOUNT_AMOUNT_DATA"
                            placeholder="Discount amount"
                            type="text"
                            isRequired={false}
                            register={register}
                            readOnly
                          />
                        </div>
                      )}
                      <FormControlLabel
                        value="TOTAL_AMOUNT_MINUS_DISCOUNT"
                        control={
                          <Radio
                            checked={
                              defaultData.termOfPayment === 'TOTAL_AMOUNT_MINUS_DISCOUNT'
                            }
                          />
                        }
                        label="Total amount minus discount"
                      />
                      {defaultData.termOfPayment === 'TOTAL_AMOUNT_MINUS_DISCOUNT' && (
                        <div className="radio-expanded">
                          <CustomInput
                            name="TOTAL_AMOUNT_MINUS_DISCOUNT_DATA"
                            placeholder="Total amount minus discount"
                            type="text"
                            isRequired={false}
                            register={register}
                            readOnly
                          />
                        </div>
                      )}
                    </RadioGroup>
                  </FormControl>
                  <h3 className="tw-mt-[16px]">Terms of delivery</h3>
                  <TextArea
                    name="termOfDelivery"
                    placeholder="Delivery Terms"
                    type="textarea"
                    register={register}
                    readOnly
                  />
                </div>
                {/* <div className="tw-mt-[16px] tw-w-full">
                  <CustomInput
                    label="Payment terms as date"
                    name="paymentDate"
                    placeholder="03/13/2023"
                    type="date"
                    register={register}
                    readOnly
                  />
                  <h3 className="tw-mt-[16px]">Terms of delivery</h3>
                  <TextArea
                    name="termOfDelivery"
                    placeholder="Delivery Terms"
                    type="textarea"
                    register={register}
                    readOnly
                  />
                </div> */}
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
              <div className="form-box tw-mt-[16px] tw-flex tw-w-[336px] tw-flex-col tw-gap-[16px]  ">
                <h3 className="form-box-heading ">Comments</h3>
                <p className="tw-text-sm tw-font-normal tw-not-italic tw-leading-[21px] tw-text-text-light-gray ">
                  In next change request.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
