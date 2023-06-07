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
            checked={selectedValue === 'paymentDateSelect'}
            onClick={() => {
              if (selectedValue !== 'paymentDateSelect') handleReset();
            }}
            value="paymentDateSelect"
            handleChangeRadio={handleChangeRadio}
          />
          {selectedValue === 'paymentDateSelect' && (
            <div className="radio-expanded">
              <CustomInput
                name="paymentDate"
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
              if (selectedValue !== 'paymentDateSelect') handleReset();
            }}
            checked={selectedValue === 'paymentDaysSelect'}
            value="paymentDaysSelect"
            handleChangeRadio={handleChangeRadio}
          />
          {selectedValue === 'paymentDaysSelect' && (
            <div className="radio-expanded">
              <CustomInput
                name="paymentDays"
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
              if (selectedValue !== 'paymentDateSelect') handleReset();
            }}
            checked={selectedValue === 'cashDiscountSelect'}
            value="cashDiscountSelect"
            handleChangeRadio={handleChangeRadio}
          />
          {selectedValue === 'cashDiscountSelect' && (
            <div className="radio-expanded">
              <CustomInput
                name="cashDiscount"
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
              if (selectedValue !== 'paymentDateSelect') handleReset();
            }}
            checked={selectedValue === 'discountSelect'}
            value="discountSelect"
            handleChangeRadio={handleChangeRadio}
          />
          {selectedValue === 'discountSelect' && (
            <div className="radio-expanded">
              <CustomInput
                name="discount"
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
              if (selectedValue !== 'paymentDateSelect') handleReset();
            }}
            checked={selectedValue === 'discountAmountSelect'}
            value="discountAmountSelect"
            handleChangeRadio={handleChangeRadio}
          />
          {selectedValue === 'discountAmountSelect' && (
            <div className="radio-expanded">
              <CustomInput
                name="discountAmount"
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
              if (selectedValue !== 'paymentDateSelect') handleReset();
            }}
            checked={selectedValue === 'minusDiscountSelect'}
            value="minusDiscountSelect"
            handleChangeRadio={handleChangeRadio}
          />
          {selectedValue === 'minusDiscountSelect' && (
            <div className="radio-expanded">
              <CustomInput
                name="minusDiscount"
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
          name="deliveryTerm"
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
