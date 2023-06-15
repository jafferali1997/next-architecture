'use client';

import PropTypes from 'prop-types';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import MultiSelect from '@/common/components/multi-select/multi-select.component';
import Select from '@/common/components/select/select.component';
import PriceGroup from '../price-group/price-group.component';
import DiscountGroup from '../discount-group/discount-group.component';
import CustomSelect from '@/common/components/custom-select/custom-select.component';
import COUNTRIES from '@/common/constants/countries.constant';
import useCountryCity from '@/common/hooks/use-country-city.hook';

export default function FormForPersonalDetails({
  register,
  handleSubmit,
  onSubmit,
  data = {},
  handleButtonClickedit,
  setIsSubmit,
  errors = {},
  allPriceGroup,
  setAllPriceGroup,
  selectedPriceGroup,
  setSelectedPriceGroup,
  allDiscountGroup,
  setAllDiscountGroup,
  selectedDiscountGroup,
  setSelectedDiscountGroup,
  control
}) {
  const { cities, handleCountryChange } = useCountryCity();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-box-grid-4col">
        <CustomSelect
          label="Gender"
          placeholder="Select Gender"
          name="gender"
          options={[
            { label: 'Male', value: 'MALE' },
            { label: 'Female', value: 'FEMALE' }
          ]}
          control={control}
          errors={errors}
        />
        <CustomInput
          label="Designation"
          name="designation"
          defaultValue={data.designation}
          register={register}
          placeholder="Designation"
          type="text"
          isRequired={true}
          errors={errors}
        />
        <CustomInput
          label="First Name"
          name="firstName"
          defaultValue={data.firstName}
          register={register}
          placeholder="First Name"
          type="text"
          isRequired={true}
          errors={errors}
        />
        <CustomInput
          label="Last Name"
          name="lastName"
          defaultValue={data.lastName}
          register={register}
          placeholder="Last Name"
          type="text"
          isRequired={true}
          errors={errors}
        />
        <CustomInput
          label="Address"
          name="address"
          defaultValue={data.address}
          register={register}
          placeholder="Address"
          type="text"
          errors={errors}
          isRequired={true}
        />

        <CustomSelect
          label="Country"
          name="country"
          control={control}
          errors={errors}
          placeholder="Country"
          onChange={handleCountryChange}
          type="select"
          isRequired={true}
          options={COUNTRIES}
        />
        <CustomSelect
          label="City"
          name="city"
          control={control}
          placeholder="City"
          type="select"
          isRequired={true}
          options={cities}
          errors={errors}
        />
        <CustomInput
          label="Postal Code"
          name="postalCode"
          defaultValue={data.postalCode}
          register={register}
          placeholder="Postal Code"
          type="text"
          isRequired={true}
          errors={errors}
        />
      </div>

      <div className="form-box-grid-2col">
        <div>
          <PriceGroup
            options={allPriceGroup}
            setOptions={setAllPriceGroup}
            selectedOptions={selectedPriceGroup}
            setSelectedOptions={setSelectedPriceGroup}
          />
        </div>
        <div>
          <DiscountGroup
            options={allDiscountGroup}
            setOptions={setAllDiscountGroup}
            selectedOptions={selectedDiscountGroup}
            setSelectedOptions={setSelectedDiscountGroup}
          />
        </div>
      </div>
      <StepperFooter setIsSubmit={setIsSubmit} />
    </form>
  );
}

const groupShape = PropTypes.shape({
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string
});

FormForPersonalDetails.propTypes = {
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  allPriceGroup: PropTypes.arrayOf(groupShape).isRequired,
  setAllPriceGroup: PropTypes.func.isRequired,
  selectedPriceGroup: PropTypes.arrayOf(groupShape).isRequired,
  setSelectedPriceGroup: PropTypes.func.isRequired,
  allDiscountGroup: PropTypes.arrayOf(groupShape).isRequired,
  setAllDiscountGroup: PropTypes.func.isRequired,
  selectedDiscountGroup: PropTypes.arrayOf(groupShape).isRequired,
  setSelectedDiscountGroup: PropTypes.func.isRequired,
  setIsSubmit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object,
  handleButtonClickedit: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.any
};
