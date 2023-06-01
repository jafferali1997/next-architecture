'use client';

import PropTypes from 'prop-types';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import CustomSelect from '@/common/components/custom-select/custom-select.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import MultiSelect from '@/common/components/multi-select/multi-select.component';

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
      <div className="form-row">
        <CustomSelect
          label="Gender"
          register={register}
          placeholder="John"
          type="select"
          isRequired={true}
          errors={errors}
          name="gender"
          defaultValue={data.gender}
          options={[
            { id: 'male', value: 'male', label: 'Male' },
            { id: 'female', value: 'female', label: 'Female' }
          ]}
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
        <CustomSelect
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

      <div className="form-row-two-col">
        <div>
          <label className="group-label">Price Group</label>
          {/* <MultiSelect
            options={priceGroup}
            handleChange={(value) => {
              setPriceOptions(value);
            }}
            placeholder="Select Price Group(s)"
            valueOfModel={addPrice}
            handleValueOfModel={(e) => {
              setAddPrice(e.target.value);
            }}
            handleModalOnSubmit={addPriceGroup}
            defaultValue={data?.priceGroups?.map((item) => {
              return priceGroup.find((price) => price.value === item);
            })}
          /> */}
        </div>
        <div>
          <label className="group-label">Discount Group</label>
          {/* <MultiSelect
            options={discountGroup}
            handleChange={(value) => {
              setDiscountOptions(value);
            }}
            placeholder="Select Discount Group(s)"
            valueOfModel={addDiscount}
            handleValueOfModel={(e) => {
              console.log(e);
              setAddDiscount(e.target.value);
            }}
            handleModalOnSubmit={addDiscountGroup}
            defaultValue={data?.discountGroups?.map((item) => {
              return discountGroup.find((price) => price.value === item);
            })}
          /> */}
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
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ).isRequired,
  addPrice: PropTypes.string.isRequired,
  setAddPrice: PropTypes.func.isRequired,
  setPriceOptions: PropTypes.func.isRequired,
  addPriceGroup: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
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
