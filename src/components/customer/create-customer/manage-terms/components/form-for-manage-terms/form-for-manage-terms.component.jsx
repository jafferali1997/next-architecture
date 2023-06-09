import PropTypes from 'prop-types';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import CustomRadio from '@/common/components/custom-radio/custom-radio.component';
import TextArea from '@/common/components/text-area/text-area.component';

export default function FormForManageTerms({
  handleSubmit,
  onSubmit,
  register,
  errors,
  selectedValue,
  handleChangeRadio,
  handleTabClick,
  setIsSubmit,
  handleReset,
  data = {}
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="tw-mb-5 tw-flex tw-flex-col tw-gap-[18px]">
        <div className="payment-details-bank">
          <CustomRadio
            label="payment terms as date"
            name="radio"
            type="radio"
            checked={selectedValue === 'PAYMENT_TERMS_AS_DATE'}
            onClick={() => {
              if (selectedValue !== 'PAYMENT_TERMS_AS_DATE') handleReset();
            }}
            value="PAYMENT_TERMS_AS_DATE"
            handleChangeRadio={handleChangeRadio}
          />
          {selectedValue === 'PAYMENT_TERMS_AS_DATE' && (
            <div className="radio-expanded">
              <CustomInput
                name="termOfPaymentData"
                defaultValue={data.paymentDate}
                placeholder="03/13/2023"
                type="date"
                isRequired={false}
                register={register}
                errors={errors}
              />
            </div>
          )}
        </div>
        <div className="payment-details-card">
          <CustomRadio
            label="Payment terms in days"
            name="radio"
            type="radio"
            onClick={() => {
              if (selectedValue !== 'PAYMENT_TERMS_AS_DATE') handleReset();
            }}
            checked={selectedValue === 'PAYMENT_TERMS_IN_DAYS'}
            value="PAYMENT_TERMS_IN_DAYS"
            handleChangeRadio={handleChangeRadio}
          />
          {selectedValue === 'PAYMENT_TERMS_IN_DAYS' && (
            <div className="radio-expanded">
              <CustomInput
                name="termOfPaymentData"
                defaultValue={data.paymentDays}
                placeholder="Payment terms"
                type="days"
                isRequired={false}
                register={register}
                errors={errors}
              />
            </div>
          )}
        </div>
        <div className="payment-details-bank">
          <CustomRadio
            label="Cash discount target as a date"
            name="radio"
            type="radio"
            onClick={() => {
              if (selectedValue !== 'PAYMENT_TERMS_AS_DATE') handleReset();
            }}
            checked={selectedValue === 'CASH_DISCOUNT_TARGET_AS_A_DATE'}
            value="CASH_DISCOUNT_TARGET_AS_A_DATE"
            handleChangeRadio={handleChangeRadio}
          />
          {selectedValue === 'CASH_DISCOUNT_TARGET_AS_A_DATE' && (
            <div className="radio-expanded">
              <CustomInput
                name="termOfPaymentData"
                defaultValue={data.cashDiscount}
                placeholder="13/03/2023"
                type="date"
                isRequired={false}
                register={register}
                errors={errors}
              />
            </div>
          )}
        </div>
        <div className="payment-details-card">
          <CustomRadio
            label="Discount and %"
            name="radio"
            type="radio"
            onClick={() => {
              if (selectedValue !== 'PAYMENT_TERMS_AS_DATE') handleReset();
            }}
            checked={selectedValue === 'DISCOUNT_AND_PERCENTAGE'}
            value="DISCOUNT_AND_PERCENTAGE"
            handleChangeRadio={handleChangeRadio}
          />
          {selectedValue === 'DISCOUNT_AND_PERCENTAGE' && (
            <div className="radio-expanded">
              <CustomInput
                name="termOfPaymentData"
                defaultValue={data.discount}
                placeholder="Discount and %"
                type="text"
                isRequired={false}
                register={register}
                errors={errors}
              />
            </div>
          )}
        </div>
        <div className="payment-details-bank">
          <CustomRadio
            label="Discount amount"
            name="radio"
            type="radio"
            onClick={() => {
              if (selectedValue !== 'PAYMENT_TERMS_AS_DATE') handleReset();
            }}
            checked={selectedValue === 'DISCOUNT_AMOUNT'}
            value="DISCOUNT_AMOUNT"
            handleChangeRadio={handleChangeRadio}
          />
          {selectedValue === 'DISCOUNT_AMOUNT' && (
            <div className="radio-expanded">
              <CustomInput
                name="termOfPaymentData"
                defaultValue={data.discountAmount}
                placeholder="Discount amount"
                type="text"
                isRequired={false}
                register={register}
                errors={errors}
              />
            </div>
          )}
        </div>
        <div className="payment-details-card">
          <CustomRadio
            label="Total amount minus discount"
            name="radio"
            type="radio"
            onClick={() => {
              if (selectedValue !== 'PAYMENT_TERMS_AS_DATE') handleReset();
            }}
            checked={selectedValue === 'TOTAL_AMOUNT_MINUS_DISCOUNT'}
            value="TOTAL_AMOUNT_MINUS_DISCOUNT"
            handleChangeRadio={handleChangeRadio}
          />
          {selectedValue === 'TOTAL_AMOUNT_MINUS_DISCOUNT' && (
            <div className="radio-expanded">
              <CustomInput
                name="termOfPaymentData"
                defaultValue={data.minusDiscount}
                placeholder="Total amount minus discount"
                type="text"
                isRequired={false}
                register={register}
                errors={errors}
              />
            </div>
          )}
        </div>
      </div>
      <h3>Terms of delivery</h3>
      <div className="form-row-two-col">
        <TextArea
          name="termOfDelivery"
          defaultValue={data.deliveryTerm}
          placeholder="Delivery Terms"
          type="textarea"
          isRequired={true}
          register={register}
          errors={errors}
        />
        {/* <CustomInput
          name="paymentTerm"
          placeholder="IBAN Number"
          type="textarea"
          isRequired={true}
        /> */}
      </div>
      <StepperFooter
        handleTabClick={handleTabClick}
        back="discount"
        setIsSubmit={setIsSubmit}
        submitText="Submit"
      />
    </form>
  );
}

FormForManageTerms.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
  selectedValue: PropTypes.string.isRequired,
  handleChangeRadio: PropTypes.func.isRequired,
  handleTabClick: PropTypes.func.isRequired,
  setIsSubmit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  handleReset: PropTypes.func.isRequired
};
