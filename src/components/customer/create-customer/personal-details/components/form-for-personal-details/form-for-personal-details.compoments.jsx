'use client';

import PropTypes from 'prop-types';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import MultiSelect from '@/common/components/multi-select/multi-select.component';
import Select from '@/common/components/select/select.component';
import PriceGroup from '../price-group/price-group.component';
import DiscountGroup from '../discount-group/discount-group.component';

export default function FormForPersonalDetails({
  register,
  handleSubmit,
  onSubmit,
  handleCountryChange,
  selectedCity,
  selectedCountry,
  handleCityChange,
  // countries,
  cities,
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
  setSelectedDiscountGroup
}) {
  const countries = [
    { id: 1, name: 'Pakistan', label: 'Pakistan' },
    { id: 2, name: 'India', label: 'India' }
  ];
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-box-grid-4col">
        <Select
          register={register}
          label="Gender"
          isRequired={true}
          name="gender"
          options={[
            { id: 'MALE', value: 'MALE', label: 'MALE' },
            { id: 'FEMALE', value: 'FEMALE', label: 'FEMALE' }
          ]}
          placeholder="Gender"
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

        <Select
          label="Country"
          name="country"
          register={register}
          errors={errors}
          placeholder="Country"
          type="select"
          // onChange={handleCountryChange}
          // value={selectedCountry}
          isRequired={true}
          // options={countries.map((item) => {
          //   return { label: item.name, value: item.isoCode, id: item.isoCode };
          // })}
          options={countries}
        />
        <Select
          label="City"
          name="city"
          register={register}
          placeholder="City"
          type="select"
          value={selectedCity}
          isRequired={true}
          onChange={handleCityChange}
          // options={cities.map((item) => {
          //   return { label: item.name, value: item.isoCode, id: item.isoCode };
          // })}
          options={cities}
          errors={errors}
        />
        <CustomInput
          label="Postal Code"
          name="postalCode"
          defaultValue={data.postalCode}
          register={register}
          placeholder="Postal Code"
          type="number"
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
  handleCountryChange: PropTypes.func,
  selectedCity: PropTypes.func,
  selectedCountry: PropTypes.func,
  handleCityChange: PropTypes.func,
  // countries: PropTypes.arrayOf(PropTypes.string).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  cities: PropTypes.arrayOf(PropTypes.any).isRequired,
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
  data: PropTypes.object
};
