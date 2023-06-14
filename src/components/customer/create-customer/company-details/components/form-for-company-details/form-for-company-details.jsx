import PropTypes from 'prop-types';
import { IconButton } from '@mui/material/node';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import CustomSelect from '@/common/components/custom-select/custom-select.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import Select from '@/common/components/select/select.component';
import CustomSwitch from '@/common/components/custom-switch/custom-switch.component';
import useCompanyDetails from '../../use-company-details.hook';
import DeleteIcon from '@/common/icons/delete.icon';

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
  handleAddInput,
  handleInputChange,
  inputValues = [''],
  data = {},
  control
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-box-grid-4col">
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
          name="companyEmail"
          placeholder="Email Address"
          type="email"
          isRequired={true}
          register={register}
          errors={errors}
        />
        <CustomInput
          label="Company Phone Number"
          register={register}
          name="companyPhone"
          placeholder="Phone Number"
          type="number"
          isRequired={true}
          errors={errors}
        />
        <CustomInput
          label="Company Mobile Number"
          register={register}
          name="companyMobile"
          placeholder="Mobile Number"
          type="text"
          isRequired={true}
          errors={errors}
        />
        <CustomSelect
          label="Company Size"
          register={register}
          name="companySize"
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
          name="companyFax"
          placeholder="FAX Number"
          type="text"
          isRequired={true}
          errors={errors}
        />

        <CustomInput
          label="TIN"
          register={register}
          name="tin"
          placeholder="TAX Number"
          type="text"
          isRequired={true}
          errors={errors}
        />

        <CustomInput
          label="VAT Number"
          register={register}
          name="vat"
          placeholder="VAT Number"
          type="text"
          isRequired={true}
          errors={errors}
        />

        <CustomInput
          label="Company URL"
          register={register}
          name="companyUrl"
          placeholder="URL"
          type="text"
          isRequired={false}
          errors={errors}
        />
        <CustomSwitch
          label="Current Status"
          register={register}
          name="isStatus"
          type="switch"
          checked={status}
          onChange={(e) => setStatus(e.target.checked)}
          isRequired={false}
        />
        <CustomSwitch
          label="Do not show customer on PDF"
          register={register}
          name="isPDF"
          type="switch"
          checked={isShowInPdf}
          onChange={(e) => setIsShowInPdf(e.target.checked)}
          isRequired={false}
        />
        <CustomSwitch
          label="VAT exempt"
          register={register}
          name="vatStatus"
          type="switch"
          checked={isVatEnabled}
          onChange={(e) => setIsVatEnabled(e.target.checked)}
          isRequired={false}
        />
      </div>
      <div className="tw-flex tw-justify-between">
        <label className="tw-font-dm tw-text-sm tw-font-medium tw-not-italic tw-leading-6 tw-text-secondary-black">
          Company addresses
        </label>

        <span className="inner-link" onClick={handleAddInput}>
          Add more address
        </span>
      </div>
      <div>
        {inputValues.map((value, index) => (
          <div
            className="tw-grid tw-grid-cols-[338px_1fr] tw-gap-[15px] tw-py-[16px]"
            key={value.id}
          >
            <CustomInput
              placeholder="Enter label name"
              type="text"
              name={`ca_addressLabel_${index + 1}`}
              register={register}
              errors={errors}
            />
            <CustomInput
              placeholder="Enter company address"
              type="text"
              name={`ca_address_${index + 1}`}
              register={register}
              errors={errors}
            />
            <IconButton
              aria-label="delete"
              color="danger"
              onClick={() => {
                console.log('index', value.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </div>
      <div className="form-additonals tw-flex tw-gap-[16px]">
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
            register={register}
            name="ac_designation"
            placeholder="Designation"
            type="text"
            errors={errors}
          />
          <CustomInput
            label="First Name"
            register={register}
            name="ac_firstName"
            placeholder="First Name"
            type="text"
            errors={errors}
          />
          <CustomInput
            label="Last Name"
            register={register}
            name="ac_lastName"
            placeholder="Last Name"
            type="text"
            errors={errors}
          />
          <CustomInput
            label="Address"
            register={register}
            name="ac_address"
            placeholder="Address"
            type="text"
            errors={errors}
          />

          <CustomSelect
            label="Country"
            register={register}
            name="ac_country"
            placeholder="Country"
            type="select"
            onChange={handleCountryChange}
            value={selectedCountry}
            isRequired={true}
            errors={errors}
            options={countries}
          />
          <CustomSelect
            label="City"
            register={register}
            name="ac_city"
            placeholder="City"
            type="select"
            value={selectedCity}
            onChange={handleCityChange}
            errors={errors}
            options={cities}
          />
          <CustomInput
            label="Postal Code"
            register={register}
            name="ac_postalCode"
            placeholder="Postal Code"
            type="text"
            errors={errors}
          />
          <CustomInput
            label="Email Address"
            register={register}
            name="ac_email"
            placeholder="Email Address"
            type="text"
            errors={errors}
          />
          <CustomInput
            label="Phone Number"
            register={register}
            name="ac_phone"
            placeholder="Phone Number"
            type="number"
            errors={errors}
          />
          <CustomInput
            label="Mobile Number"
            register={register}
            name="ac_mobile"
            placeholder="Mobile Number"
            type="number"
            errors={errors}
          />
          <CustomInput
            label="Department"
            register={register}
            name="ac_department"
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
  errors: PropTypes.object,
  handleAddInput: PropTypes.func,
  handleInputChange: PropTypes.func,
  inputValues: PropTypes.arrayOf,
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.any
};
