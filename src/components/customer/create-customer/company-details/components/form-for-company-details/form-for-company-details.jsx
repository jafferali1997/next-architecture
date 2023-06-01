import PropTypes from 'prop-types';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import CustomSelect from '@/common/components/custom-select/custom-select.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';

export default function FormForCompanyDetails({
  register,
  handleSubmit,
  onSubmit,
  isAdditional,
  status,
  setStatus,
  isShowInPdf,
  setIsShowInPdf,
  isVatEnabled,
  setIsVatEnabled,
  handleCountryChange,
  selectedCountry,
  countries,
  cities,
  selectedCity,
  handleCityChange,
  handleTabClick,
  setIsSubmit,
  additionalHandles,
  errors,
  data = {}
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <CustomInput
          label="Company Name"
          placeholder="Company Name"
          type="text"
          isRequired={true}
          register={register}
          name="companyName"
          defaultValue={data.companyName}
          errors={errors}
        />

        <CustomInput
          label="Company Email Address"
          name="email"
          placeholder="Email Address"
          type="email"
          defaultValue={data.email}
          isRequired={true}
          register={register}
          errors={errors}
        />
        <CustomInput
          label="Company Phone Number"
          register={register}
          name="phoneNo"
          defaultValue={data.phoneNo}
          placeholder="Phone Number"
          type="number"
          isRequired={true}
          errors={errors}
        />
        <CustomInput
          label="Company Mobile Number"
          register={register}
          name="mobileNo"
          defaultValue={data.mobileNo}
          placeholder="Mobile Number"
          type="text"
          isRequired={true}
          errors={errors}
        />
        <CustomSelect
          label="Company Size"
          register={register}
          name="companySize"
          defaultValue={data.companySize}
          placeholder="Select Company Size"
          type="select"
          isRequired={true}
          options={[
            { id: '10-30', value: '10-30', label: '10-30' },
            { id: '40-100', value: '40-100', label: '40-100' },
            { id: 'above 100', value: 'above 100', label: 'above 100' }
          ]}
          errors={errors}
        />
        <CustomInput
          label="Company FAX Number"
          register={register}
          name="faxNumber"
          defaultValue={data.faxNumber}
          placeholder="FAX Number"
          type="text"
          isRequired={true}
          errors={errors}
        />

        <CustomInput
          label="TIN"
          register={register}
          name="taxNumber"
          defaultValue={data.taxNumber}
          placeholder="TAX Number"
          type="text"
          isRequired={true}
          errors={errors}
        />

        <CustomInput
          label="VAT Number"
          register={register}
          name="vatNumber"
          defaultValue={data.vatNumber}
          placeholder="VAT Number"
          type="text"
          isRequired={true}
          errors={errors}
        />
      </div>
      <div className="form-row-two-col-slide">
        <CustomInput
          label="Company URL"
          register={register}
          name="website"
          defaultValue={data.website}
          placeholder="URL"
          type="text"
          isRequired={false}
          errors={errors}
        />
        <CustomInput
          label="Current Status"
          register={register}
          name="status"
          type="switch"
          checked={status}
          onChange={(e) => setStatus(e.target.checked)}
          isRequired={false}
        />
        <CustomInput
          label="Do not show customer on PDF"
          register={register}
          name="isShowInPdf"
          type="switch"
          checked={isShowInPdf}
          onChange={(e) => setIsShowInPdf(e.target.checked)}
          isRequired={false}
        />
        <CustomInput
          label="VAT exempt"
          register={register}
          name="isVatEnabled"
          type="switch"
          checked={isVatEnabled}
          onChange={(e) => setIsVatEnabled(e.target.checked)}
          isRequired={false}
        />
      </div>
      <div className="form-additonals">
        <h3>Additional contact person</h3>
        {isAdditional ? (
          <img
            src="/assets/images/close_add.svg"
            alt="img"
            role="presentation"
            onClick={additionalHandles}
          />
        ) : (
          <img
            src="/assets/images/plus_btn.svg"
            alt="img"
            role="presentation"
            onClick={additionalHandles}
          />
        )}
      </div>
      {isAdditional ? (
        <div className="form-row">
          <CustomInput
            label="Gender"
            register={register}
            name="gender"
            defaultValue={data.gender}
            placeholder="John"
            type="select"
            errors={errors}
            options={[
              { id: 'male', value: 'male', label: 'Male' },
              { id: 'female', value: 'female', label: 'Female' }
            ]}
          />
          <CustomInput
            label="Designation"
            register={register}
            name="designation"
            defaultValue={data.designation}
            placeholder="Designation"
            type="text"
            errors={errors}
          />
          <CustomInput
            label="First Name"
            register={register}
            name="firstName"
            defaultValue={data.firstName}
            placeholder="First Name"
            type="text"
            errors={errors}
          />
          <CustomInput
            label="Last Name"
            register={register}
            name="lastName"
            defaultValue={data.lastName}
            placeholder="Last Name"
            type="text"
            errors={errors}
          />
          <CustomInput
            label="Address"
            register={register}
            name="address"
            defaultValue={data.address}
            placeholder="Address"
            type="text"
            errors={errors}
          />

          <CustomSelect
            label="Country"
            register={register}
            name="country"
            placeholder="Country"
            type="select"
            onChange={handleCountryChange}
            value={selectedCountry}
            isRequired={true}
            errors={errors}
            options={countries.map((item) => {
              return { label: item.name, value: item.isoCode, id: item.isoCode };
            })}
          />
          <CustomSelect
            label="City"
            register={register}
            name="city"
            placeholder="City"
            type="select"
            value={selectedCity}
            onChange={handleCityChange}
            errors={errors}
            options={cities.map((item) => {
              return { label: item.name, value: item.isoCode, id: item.isoCode };
            })}
          />
          <CustomInput
            label="Postal Code"
            register={register}
            name="postal"
            defaultValue={data.postal}
            placeholder="Postal Code"
            type="text"
            errors={errors}
          />
          <CustomInput
            label="Email Address"
            register={register}
            name="additionalEmail"
            defaultValue={data.additionalEmail}
            placeholder="Email Address"
            type="text"
            errors={errors}
          />
          <CustomInput
            label="Phone Number"
            register={register}
            name="phone"
            defaultValue={data.phone}
            placeholder="Phone Number"
            type="number"
            errors={errors}
          />
          <CustomInput
            label="Mobile Number"
            register={register}
            defaultValue={data.mobile}
            name="mobile"
            placeholder="Mobile Number"
            type="number"
            errors={errors}
          />
          <CustomInput
            label="Department"
            defaultValue={data.department}
            register={register}
            name="department"
            placeholder="Department"
            type="text"
            errors={errors}
          />
        </div>
      ) : null}
      <StepperFooter
        handleTabClick={handleTabClick}
        back="customer_details"
        setIsSubmit={setIsSubmit}
      />
    </form>
  );
}

FormForCompanyDetails.propTypes = {
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isAdditional: PropTypes.bool.isRequired,
  status: PropTypes.bool.isRequired,
  setStatus: PropTypes.func.isRequired,
  isShowInPdf: PropTypes.bool.isRequired,
  setIsShowInPdf: PropTypes.func.isRequired,
  isVatEnabled: PropTypes.bool.isRequired,
  setIsVatEnabled: PropTypes.func.isRequired,
  handleCountryChange: PropTypes.func.isRequired,
  selectedCountry: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.func.isRequired,
  handleCityChange: PropTypes.func.isRequired,
  handleTabClick: PropTypes.func.isRequired,
  setIsSubmit: PropTypes.func.isRequired,
  additionalHandles: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object
};