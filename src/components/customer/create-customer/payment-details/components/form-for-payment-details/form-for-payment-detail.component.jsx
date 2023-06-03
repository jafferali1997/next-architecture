import PropTypes from 'prop-types';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import FormInput from '@/common/components/form-input-old/form-input.component';

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
  errors
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="tw-mb-6 tw-flex tw-flex-col tw-gap-[18px]">
        <label className="tw-font-dm tw-text-xs tw-font-medium tw-not-italic tw-leading-6 tw-text-secondary-black">
          Payment By
          <span className="tw-text-[red]">*</span>
        </label>
        <div className="payment-details-bank">
          <FormInput
            label="Bank Details"
            name="bankDetail"
            checked={bankDetail}
            handleChangeRadio={(e) => {
              setBankDetail(e.target.checked);
              setCreditCard(!e.target.checked);
            }}
            placeholder="Company Name"
            type="radio"
          />
        </div>
        <div className="payment-details-card">
          <FormInput
            label="Credit Card Details"
            name="creditDetail"
            checked={creditCard}
            handleChangeRadio={(e) => {
              setCreditCard(e.target.checked);
              setBankDetail(!e.target.checked);
            }}
            placeholder="Company Name"
            type="radio"
          />
        </div>
      </div>

      {bankDetail && (
        <>
          <div className="tw-w-full">
            <CustomInput
              label="IBAN Number"
              name="iban"
              defaultValue={data.iban}
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
              name="onwerName"
              defaultValue={data.onwerName}
              placeholder="Account owner name"
              type="text"
              register={register}
              error={errors}
              isRequired={true}
            />

            <CustomInput
              label="BIC Number"
              name="bicNumber"
              defaultValue={data.bicNumber}
              placeholder="BIC Number"
              type="text"
              register={register}
              error={errors}
              isRequired={true}
            />
            <CustomInput
              label="Mandate Reference"
              name="mandateReference"
              defaultValue={data.mandateReference}
              placeholder="Mandate Reference"
              type="number"
              register={register}
              error={errors}
              isRequired={true}
            />
            <CustomInput
              label="Mandate Date"
              name="mandateDate"
              defaultValue={data.mandateDate}
              placeholder="03/13/2023"
              type="date"
              register={register}
              error={errors}
              isRequired={true}
            />
          </div>
        </>
      )}
      {!bankDetail && (
        <div className="form-box-grid-4col">
          <CustomInput
            label="Credit Card Name"
            name="creditCardName"
            placeholder="Credit Card Name"
            type="text"
            defaultValue={data.creditCardName}
            register={register}
            error={errors}
            isRequired={true}
          />
          <CustomInput
            label="Credit Card Number"
            name="creditCardNo"
            placeholder="Credit Card Number"
            type="number"
            defaultValue={data.creditCardNo}
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
            defaultValue={data.creditCardExpiry}
            error={errors}
            isRequired={true}
          />
          <CustomInput
            label="CVV"
            name="cvv"
            placeholder="CVV"
            type="number"
            register={register}
            error={errors}
            defaultValue={data.cvv}
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
  errors: PropTypes.object.isRequired
};
