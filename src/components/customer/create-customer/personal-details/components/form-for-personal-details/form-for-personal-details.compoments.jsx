'use client';

import PropTypes from 'prop-types';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import MultiSelect from '@/common/components/multi-select/multi-select.component';
import Select from '@/common/components/select/select.component';

export default function FormForPersonalDetails({
  register,
  handleSubmit,
  onSubmit,
  handleCountryChange,
  selectedCity,
  selectedCountry,
  handleCityChange,
  countries,
  cities,
  priceGroup,
  addPrice,
  setAddPrice,
  setPriceOptions,
  addPriceGroup,
  data = {},
  discountGroup,
  setDiscountOptions,
  addDiscount,
  setAddDiscount,
  addDiscountGroup,
  setIsSubmit,
  errors = {}
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-box-grid-4col">
        <Select
          label="Gender"
          isRequired={true}
          options={[
            { id: 'male', value: 'MALE', label: 'Male' },
            { id: 'female', value: 'FEMALE', label: 'Female' }
          ]}
          placeholder="John"
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
          onChange={handleCountryChange}
          value={selectedCountry}
          isRequired={true}
          options={countries.map((item) => {
            return { label: item.name, value: item.isoCode, id: item.isoCode };
          })}
        />
        <Select
          label="City"
          name="city"
          register={register}
          placeholder="City"
          type="select"
          value={selectedCity}
          onChange={handleCityChange}
          options={cities.map((item) => {
            return { label: item.name, value: item.isoCode, id: item.isoCode };
          })}
          errors={errors}
        />
        <CustomInput
          label="Postal Code"
          name="postal"
          defaultValue={data.postal}
          register={register}
          placeholder="Postal Code"
          type="text"
          isRequired={true}
          errors={errors}
        />
      </div>

      <div className="form-box-grid-2col">
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
      <StepperFooter setIsSubmit={setIsSubmit} />
    </form>
  );
}

FormForPersonalDetails.propTypes = {
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleCountryChange: PropTypes.func.isRequired,
  selectedCity: PropTypes.func.isRequired,
  selectedCountry: PropTypes.func.isRequired,
  handleCityChange: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  priceGroup: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, label: PropTypes.string, value: PropTypes.string })
  ).isRequired,
  addPrice: PropTypes.string.isRequired,
  setAddPrice: PropTypes.func.isRequired,
  setPriceOptions: PropTypes.func.isRequired,
  addPriceGroup: PropTypes.arrayOf(
    PropTypes.shape({  id: PropTypes.number, label: PropTypes.string, value: PropTypes.string })
  ).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  discountGroup: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ).isRequired,
  setDiscountOptions: PropTypes.func.isRequired,
  addDiscount: PropTypes.string.isRequired,
  setAddDiscount: PropTypes.func.isRequired,
  addDiscountGroup: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ).isRequired,
  setIsSubmit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object
};
