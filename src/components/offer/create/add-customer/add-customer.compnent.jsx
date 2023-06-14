import PropTypes from 'prop-types';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import Select from '@/common/components/select/select.component';
import useAddCustomer from './use-add-customer.hook';
import CustomSelect from '@/common/components/custom-select/custom-select.component';

export default function AddCustomer({ handleTabClick, handleTabCompleted }) {
  const { isSubmit, setIsSubmit, onSubmit } = useAddCustomer(
    handleTabClick,
    handleTabCompleted
  );

  return (
    <div className="personal-details-wrapper">
      <div className="content-header tw-flex tw-items-center tw-justify-between ">
        <h3 className="form-inner-heading">Customer Details</h3>
        <div className="tw-w-full tw-max-w-[523px] tw-bg-secondary-gray">
          <CustomSelect
            options={[
              { id: 'male', value: 'male', label: 'Male' },
              { id: 'female', value: 'female', label: 'Female' }
            ]}
            placeholder="John"
          />
        </div>
      </div>
      <div className="content-body">
        {' '}
        <form onSubmit={onSubmit}>
          <div className="form-box-grid-4col">
            <CustomSelect
              label="Gender"
              isRequired={true}
              disabled={true}
              options={[
                { label: 'Male', value: 'MALE' },
                { label: 'Female', value: 'FEMALE' }
              ]}
              placeholder="male"
            />
            <CustomInput
              label="Designation"
              name="designation"
              placeholder="Designation"
              type="text"
              disabled={true}
              isRequired={true}
            />
            <CustomInput
              label="First Name"
              name="firstName"
              placeholder="First Name"
              type="text"
              disabled={true}
              isRequired={true}
            />
            <CustomInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
              type="text"
              disabled={true}
              isRequired={true}
            />
            <CustomInput
              label="Company Name"
              name="Company_Name"
              placeholder="Enter Company Name "
              type="text"
              disabled={true}
              isRequired={true}
            />
            <CustomInput
              label="Address Supplement"
              name="Address_Supplement"
              placeholder="Enter Address Supplement "
              type="text"
              disabled={true}
              isRequired={true}
            />

            <CustomSelect
              label="Country"
              name="country"
              disabled={true}
              placeholder="Country"
              type="select"
              //   onChange={handleCountryChange}
              //   value={selectedCountry}
              //   isRequired={true}
              //   options={countries.map((item) => {
              //     return { label: item.name, value: item.isoCode, id: item.isoCode };
              //   })}
            />
            <CustomSelect
              label="City"
              name="city"
              disabled={true}
              placeholder="City"
              type="select"
              //   value={selectedCity}
              //   onChange={handleCityChange}
              //   options={cities.map((item) => {
              //     return { label: item.name, value: item.isoCode, id: item.isoCode };
              //   })}
            />
          </div>
          <div className="form-box-grid-2col">
            <CustomInput
              label="Postal Code"
              name="postal"
              placeholder="Postal Code"
              type="text"
              disabled={true}
              isRequired={true}
            />
            <CustomInput
              label="Address"
              name="Address "
              disabled={true}
              placeholder="Enter company address"
              type="text"
            />
            <Select
              options={[
                { id: 'male', value: 'male', label: 'Male' },
                { id: 'female', value: 'female', label: 'Female' }
              ]}
              placeholder="Select Address Label"
              label="Address Label"
            />
            <Select
              options={[
                { id: 'male', value: 'male', label: 'Male' },
                { id: 'female', value: 'female', label: 'Female' }
              ]}
              placeholder="Select Contact Person"
              label="Contact Person"
            />
          </div>

          <StepperFooter back="customerDetails" setIsSubmit={setIsSubmit} />
        </form>
      </div>
    </div>
  );
}
AddCustomer.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
