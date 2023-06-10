'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import Radio from '@mui/material/Radio';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import FormInput from '@/common/components/form-input-old/form-input.component';
import CustomRadio from '@/common/components/custom-radio/custom-radio.component';
import FieldLabel from '@/common/components/field-label/field-label.component';

export default function FormForPaymentDetails({
  handleSubmit,
  onSubmit,
  register,
  bankDetail,
  setBankDetail,
  setCreditCard,
  creditCard,
  setIsSubmit,
  handleTabClick,
  data = {},
  errors,
  paymentType,
  setPaymentType
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="tw-mb-6 tw-flex tw-flex-col tw-gap-[18px]">
        <label className="tw-font-dm tw-text-xs tw-font-medium tw-not-italic tw-leading-6 tw-text-secondary-black">
          Payment By
          <span className="tw-text-[red]">*</span>
        </label>
        <div className="payment-details-bank">
          <div className="tw-flex tw-w-full tw-flex-row tw-items-center">
            <Radio
              label="Bank Details"
              checked={paymentType === 'bankDetails'}
              value="bankDetails"
              name="paymentType"
              onChange={(e) => {
                // setBankDetail(true);
                // setCreditCard(false);
                console.log(e.target.value, paymentType === 'bankDetails');
                setPaymentType(e.target.value);
              }}
            />
            <FieldLabel label="Bank Details" />
          </div>
        </div>
        <div className="payment-details-card">
          <div className="tw-flex tw-w-full tw-flex-row tw-items-center">
            <Radio
              label="Credit Card Details"
              checked={paymentType === 'creditCardDetails'}
              value="creditCardDetails"
              name="paymentType"
              onChange={(e) => {
                // setCreditCard(true);
                // setBankDetail(false);
                console.log(e.target.value, paymentType === 'creditCardDetails');
                setPaymentType(e.target.value);
              }}
            />
            <FieldLabel label="Credit Card Details" />
          </div>
        </div>
      </div>

      {paymentType === 'bankDetails' && (
        <>
          <div className="tw-w-full">
            <CustomInput
              label="IBAN Number"
              name="iban"
              placeholder="IBAN Number"
              type="text"
              register={register}
              error={errors}
              isRequired={true}
            />
          </div>
          <div className="form-box-grid-4col">
            <CustomInput
              label="Account owner name"
              name="accountOwnerName"
              placeholder="Account owner name"
              type="text"
              register={register}
              error={errors}
              isRequired={true}
            />

            <CustomInput
              label="BIC Number"
              name="bic"
              placeholder="BIC Number"
              type="text"
              register={register}
              error={errors}
              isRequired={true}
            />
            <CustomInput
              label="Mandate Reference"
              name="mendateReferance"
              placeholder="Mandate Reference"
              type="number"
              register={register}
              error={errors}
              isRequired={true}
            />
            <CustomInput
              label="Mandate Date"
              name="mandateGenerateDate"
              placeholder="03/13/2023"
              type="date"
              register={register}
              error={errors}
              isRequired={true}
            />
          </div>
        </>
      )}
      {paymentType === 'creditCardDetails' && (
        <div className="form-box-grid-4col">
          <CustomInput
            label="Credit Card Name"
            name="nameOfCreditCard"
            placeholder="Credit Card Name"
            type="text"
            register={register}
            error={errors}
            isRequired={true}
          />
          <CustomInput
            label="Credit Card Number"
            name="creditCardNumber"
            placeholder="Credit Card Number"
            type="number"
            register={register}
            error={errors}
            isRequired={true}
          />
          <CustomInput
            label="Expiry Date"
            name="creditCardExpiry"
            placeholder="03/13/2023"
            type="date"
            register={register}
            error={errors}
            isRequired={true}
          />
          <CustomInput
            label="CVV"
            name="creditCardCVV"
            placeholder="CVV"
            type="number"
            register={register}
            error={errors}
            isRequired={true}
          />
        </div>
      )}

      <StepperFooter
        handleTabClick={handleTabClick}
        back="company_details"
        setIsSubmit={setIsSubmit}
      />
    </form>
  );
}

FormForPaymentDetails.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  bankDetail: PropTypes.bool.isRequired,
  setBankDetail: PropTypes.func.isRequired,
  setCreditCard: PropTypes.func.isRequired,
  creditCard: PropTypes.bool.isRequired,
  setIsSubmit: PropTypes.func.isRequired,
  handleTabClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
  paymentType: PropTypes.string,
  setPaymentType: PropTypes.func
};
