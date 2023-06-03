import PropTypes from 'prop-types';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';

export default function FormForDiscount({
  register,
  handleSubmit,
  onSubmit,
  handleTabClick,
  setIsSubmit,
  errors,
  data = {}
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-box-grid-2col">
        <CustomInput
          label="Discount Amount "
          errors={errors}
          defaultValue={data.discount}
          register={register}
          name="discount"
          placeholder="Discount amount"
          type="text"
          isRequired={true}
        />
        <div>
          <CustomInput
            label="Cash Discount"
            defaultValue={data.days}
            errors={errors}
            register={register}
            name="days"
            placeholder="Cash Discount"
            type="text"
            isRequired={true}
          />
          <div className="tw-flex tw-items-center tw-gap-2 tw-pt-5">
            <h4 className="tw-font-dm tw-text-[14px] tw-font-normal tw-not-italic tw-leading-[21px] tw-text-text-ultra-light-gray">
              Suggestions
            </h4>
            <div className="tw-flex tw-gap-2">
              <div className="singe-day">2 days</div>
              <div className="singe-day">7 days</div>
              <div className="singe-day">10 days</div>
            </div>
          </div>
        </div>
      </div>

      <StepperFooter
        handleTabClick={handleTabClick}
        back="payment_details"
        setIsSubmit={setIsSubmit}
      />
    </form>
  );
}

FormForDiscount.propTypes = {
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleTabClick: PropTypes.func.isRequired,
  setIsSubmit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired
};
