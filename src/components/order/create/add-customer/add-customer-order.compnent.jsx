'use client';

import PropTypes from 'prop-types';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import Select from '@/common/components/select/select.component';
import CustomSelect from '@/common/components/custom-select/custom-select.component';
import COUNTRIES from '@/common/constants/countries.constant';
import useAddCustomerOrder from './use-add-customer-order.hook';

export default function AddCustomerOrder({ handleTabClick, handleTabCompleted }) {
  const { isSubmit, setIsSubmit, onSubmit } = useAddCustomerOrder(
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
              {
                id: 'Sweets (Zack Night)',
                value: 'Sweets (Zack Night)',
                label: 'Sweets (Zack Night)'
              },
              {
                id: 'Michel (Justin Din)',
                value: 'Michel (Justin Din)',
                label: 'Michel (Justin Din)'
              },
              {
                id: 'Alfonso Bator (Umit Usla)',
                value: 'Alfonso Bator (Umit Usla)',
                label: 'Alfonso Bator (Umit Usla)'
              },
              {
                id: 'Coca-cola (John David)',
                value: 'Coca-cola (John David)',
                label: 'Coca-cola (John David)'
              }
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
              options={COUNTRIES}
              //   onChange={handleCountryChange}
              //   value={selectedCountry}
              //   isRequired={true}
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
                { id: 'DHA', value: 'DHA', label: 'DHA' },
                { id: 'Johar Town', value: 'Johar Town', label: 'Johar Town' },
                { id: 'Gulberg III', value: 'Gulberg III', label: 'Gulberg III' },
                { id: 'Model Town', value: 'Model Town', label: 'Model Town' }
              ]}
              placeholder="Select Address Label"
              label="Address Label"
            />
            <Select
              options={[
                {
                  id: 'Steel and Copper (Jack, 4140 Parker Rd. Allentown.....)',
                  value: 'Steel and Copper (Jack, 4140 Parker Rd. Allentown.....)',
                  label: 'Steel and Copper (Jack, 4140 Parker Rd. Allentown.....)'
                },
                {
                  id: 'Fork N Knife (John, 4140 Parker Rd. Allentown.....)',
                  value: 'Fork N Knife (John, 4140 Parker Rd. Allentown.....)',
                  label: 'Fork N Knife (John, 4140 Parker Rd. Allentown.....)'
                },
                {
                  id: 'Zapta Technology (Jack, 4140 Parker Rd. Allentown.....)',
                  value: 'Zapta Technology (Jack, 4140 Parker Rd. Allentown.....)',
                  label: 'Zapta Technology (Jack, 4140 Parker Rd. Allentown.....)'
                },
                {
                  id: 'Steel and Copper (Jack, 4140 Parker Rd. Allentown.....)',
                  value: 'Steel and Copper (Jack, 4140 Parker Rd. Allentown.....)',
                  label: 'Steel and Copper (Jack, 4140 Parker Rd. Allentown.....)'
                }
              ]}
              placeholder="Select Contact Person"
              label="Contact Person"
            />
          </div>

          <StepperFooter setIsSubmit={setIsSubmit} />
        </form>
      </div>
    </div>
  );
}
AddCustomerOrder.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
