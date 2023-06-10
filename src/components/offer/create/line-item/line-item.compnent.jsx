import CustomInput from '@/common/components/custom-input/custom-input.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import Select from '@/common/components/select/select.component';
import useLineItem from './use-line-item.hook';

export default function LineItem() {
  const { isSubmit, setIsSubmit } = useLineItem();
  return (
    <div className="personal-details-wrapper">
      <div className="content-header tw-flex tw-items-center tw-justify-between ">
        <h3 className="form-inner-heading">Add Customer</h3>
        <div className="">
          <div className="tw-w-full tw-max-w-[523px] tw-bg-secondary-gray">
            <Select
              options={[
                { id: 'male', value: 'male', label: 'Male' },
                { id: 'female', value: 'female', label: 'Female' }
              ]}
              placeholder="John"
            />
          </div>
        </div>
      </div>
      <div className="content-body">
        {' '}
        <form onSubmit="">
          <div className="form-box-grid-4col">
            <Select
              label="Gender"
              isRequired={true}
              options={[
                { id: 'male', value: 'male', label: 'Male' },
                { id: 'female', value: 'female', label: 'Female' }
              ]}
              placeholder="John"
            />
            <CustomInput
              label="Designation"
              name="designation"
              placeholder="Designation"
              type="text"
              isRequired={true}
            />
            <CustomInput
              label="First Name"
              name="firstName"
              placeholder="First Name"
              type="text"
              isRequired={true}
            />
            <CustomInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
              type="text"
              isRequired={true}
            />
            <CustomInput
              label="Company Name"
              name="Company_Name"
              placeholder="Enter Company Name "
              type="text"
              isRequired={true}
            />

            <Select
              label="Country"
              name="country"
              placeholder="Country"
              type="select"
              //   onChange={handleCountryChange}
              //   value={selectedCountry}
              //   isRequired={true}
              //   options={countries.map((item) => {
              //     return { label: item.name, value: item.isoCode, id: item.isoCode };
              //   })}
            />
            <Select
              label="City"
              name="city"
              placeholder="City"
              type="select"
              //   value={selectedCity}
              //   onChange={handleCityChange}
              //   options={cities.map((item) => {
              //     return { label: item.name, value: item.isoCode, id: item.isoCode };
              //   })}
            />
            <CustomInput
              label="Postal Code"
              name="postal"
              placeholder="Postal Code"
              type="text"
              isRequired={true}
            />
          </div>
          <div
            className="tw-grid tw-grid-cols-[338px_1fr] tw-gap-[15px] tw-py-[16px]"
            // key={index}
          >
            <CustomInput
              label="Address Label"
              placeholder="Enter label name"
              type="text"
            />
            <CustomInput
              label="Address"
              name="Address "
              placeholder="Enter company address"
              type="text"
            />
          </div>

          <StepperFooter setIsSubmit={setIsSubmit} />
        </form>
      </div>
    </div>
  );
}
