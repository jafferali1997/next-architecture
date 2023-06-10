/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import CustomButton from '@/common/components/custom-button/custom-button.component';
import FormInput from '@/common/components/form-input-old/form-input.component';
import UseEditCustomer from './use-edit-customer.hook';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import Select from '@/common/components/select/select.component';
import MultiSelect from '@/common/components/multi-select/multi-select.component';
import CustomSwitch from '@/common/components/custom-switch/custom-switch.component';
import TextArea from '@/common/components/text-area/text-area.component';
import CustomRadio from '@/common/components/custom-radio/custom-radio.component';

export default function EditCustomer() {
  const {
    isAdditional,
    setIsAdditional,
    additionalhandles,
    isAdress,
    setIsAdress,
    adressHandles,
    register,
    handleSubmit,
    errors,
    id,
    onSubmit,
    handleInputChange,
    companyAddresses,
    handleAddInput
  } = UseEditCustomer();

  return (
    <div className="content">
      <div className="tw-min-h-[100vh] tw-w-full tw-bg-[#FBFBFB] tw-px-[23px] ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="tw-flex tw-items-center tw-justify-between tw-py-[24px]">
            <div className="tw-flex tw-items-center tw-gap-[16px]">
              <img src="/assets/images/back-icon.svg" alt="img" />
              <h1 className="admin-top-heading ">Customer Edit</h1>
              <p className="admin-top-p">Customer # {id}</p>
            </div>
            <CustomButton className="btn-primary" text="Update" type="Submit" />
          </div>
          <div className="2bars tw-flex tw-gap-[24px]">
            <div className="main-content">
              <div className="form-box tw-w-[759px] ">
                <h3 className="form-box-heading ">Personal Details</h3>
                <div className="form-box-grid">
                  <Select
                    label="Gender"
                    options={[
                      { id: 'male', value: 'MALE', label: 'Male' },
                      { id: 'female', value: 'FEMALE', label: 'Female' }
                    ]}
                    placeholder="Select Gender"
                    name="gender"
                    register={register}
                    errors={errors}
                  />
                  <CustomInput
                    label="Designation"
                    name="designation"
                    placeholder="Designation"
                    type="text"
                    register={register}
                    errors={errors}
                  />
                  <CustomInput
                    label="First Name"
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    register={register}
                    errors={errors}
                  />
                  <CustomInput
                    label="Last Name"
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    register={register}
                    errors={errors}
                  />
                  <CustomInput
                    label="Address"
                    name="address"
                    placeholder="Address"
                    type="text"
                    register={register}
                    errors={errors}
                  />
                  <Select
                    label="Country"
                    name="country"
                    placeholder="Country"
                    type="select"
                    register={register}
                    errors={errors}
                  />
                  <Select
                    label="City"
                    name="city"
                    placeholder="City"
                    type="select"
                    register={register}
                    errors={errors}
                  />
                  <CustomInput
                    label="Postal Code"
                    name="postalCode"
                    placeholder="Postal Code"
                    type="text"
                    register={register}
                    errors={errors}
                  />
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
              </div>
              <div className="form-box  tw-mt-[16px] tw-w-[759px]">
                <h3 className="form-box-heading ">Company Details</h3>

                <div className="form-box-grid">
                  <CustomInput
                    label="Company Name"
                    placeholder="Company Name"
                    type="text"
                    name="companyName"
                    register={register}
                    errors={errors}
                  />

                  <CustomInput
                    label="Company Email Address"
                    name="companyEmail"
                    placeholder="Email Address"
                    type="email"
                    register={register}
                    errors={errors}
                  />
                  <CustomInput
                    label="Company Phone Number"
                    name="companyPhone"
                    placeholder="Phone Number"
                    type="number"
                    register={register}
                    errors={errors}
                  />
                  <CustomInput
                    label="Company Mobile Number"
                    name="companyMobile"
                    placeholder="Mobile Number"
                    type="text"
                    register={register}
                    errors={errors}
                  />
                  <Select
                    label="Company Size"
                    name="companySize"
                    placeholder="Select Company Size"
                    type="select"
                    options={[
                      { id: '10-30', value: '10-30', label: '10-30' },
                      { id: '40-100', value: '40-100', label: '40-100' },
                      { id: 'above 100', value: 'above 100', label: 'above 100' }
                    ]}
                    register={register}
                    errors={errors}
                  />
                  <CustomInput
                    label="Company FAX Number"
                    name="companyFax"
                    placeholder="FAX Number"
                    type="text"
                    register={register}
                    errors={errors}
                  />

                  <CustomInput
                    label="TIN"
                    name="tin"
                    placeholder="TAX Number"
                    type="text"
                    register={register}
                    errors={errors}
                  />

                  <CustomInput
                    label="VAT Number"
                    name="vat"
                    placeholder="VAT Number"
                    type="text"
                    register={register}
                    errors={errors}
                  />
                </div>
                <div>
                  <CustomInput
                    label="Company URL"
                    name="conpanyUrl"
                    placeholder="URL"
                    type="text"
                    isRequired={false}
                    register={register}
                    errors={errors}
                  />
                </div>
                <div className="tw-grid tw-grid-cols-[repeat(auto-fill,minmax(175px,1fr))] tw-gap-[15px] tw-py-[16px]">
                  <CustomSwitch
                    label="Current Status"
                    name="isStatus"
                    type="switch"
                    register={register}
                    errors={errors}
                  />
                  <CustomSwitch
                    label="Do not show customer on PDF"
                    name="isPDF"
                    type="switch"
                    register={register}
                    errors={errors}
                  />
                  <CustomSwitch
                    label="VAT exempt"
                    name="vatStatus"
                    type="switch"
                    register={register}
                    errors={errors}
                  />
                </div>
                <div className="tw-flex tw-items-center  tw-justify-between">
                  <div className="tw-flex tw-items-center tw-gap-[16px]">
                    <h3 className="form-box-heading">Company Addresses</h3>
                    {isAdress ? (
                      <img
                        src="/assets/images/close_add.svg"
                        alt="img"
                        onClick={adressHandles}
                      />
                    ) : (
                      <img
                        src="/assets/images/plus_btn.svg"
                        alt="img"
                        onClick={adressHandles}
                      />
                    )}
                  </div>
                  <span className="inner-link" onClick={handleAddInput}>
                    Add more address
                  </span>
                </div>
                {companyAddresses.map((value, index) => (
                  <div className="form-box-grid " key={value}>
                    <CustomInput
                      placeholder="Enter label name"
                      type="text"
                      errors={errors}
                      name={`ca_addressLabel_${index + 1}`}
                      register={register}
                      // onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                    <CustomInput
                      placeholder="Enter company address"
                      type="text"
                      name={`ca_address_${index + 1}`}
                      errors={errors}
                      register={register}
                    />
                  </div>
                ))}
                <div className="tw-flex tw-items-center tw-gap-[16px]">
                  <h3 className="form-box-heading">Additional Contact Person</h3>
                  {isAdditional ? (
                    <img
                      src="/assets/images/close_add.svg"
                      alt="img"
                      onClick={additionalhandles}
                    />
                  ) : (
                    <img
                      src="/assets/images/plus_btn.svg"
                      alt="img"
                      onClick={additionalhandles}
                    />
                  )}
                </div>
                {isAdditional ? (
                  <div className="form-box-grid">
                    <CustomInput
                      label="Gender"
                      name="ac_gender"
                      placeholder="John"
                      type="select"
                      options={[
                        { id: 'male', value: 'MALE', label: 'Male' },
                        { id: 'female', value: 'FEMALE', label: 'Female' }
                      ]}
                      register={register}
                      errors={errors}
                    />
                    <CustomInput
                      label="Designation"
                      name="ac_designation"
                      placeholder="Designation"
                      type="text"
                      register={register}
                      errors={errors}
                    />
                    <CustomInput
                      label="First Name"
                      name="ac_firstName"
                      placeholder="First Name"
                      type="text"
                      register={register}
                      errors={errors}
                    />
                    <CustomInput
                      label="Last Name"
                      name="ac_lastName"
                      placeholder="Last Name"
                      type="text"
                      register={register}
                      errors={errors}
                    />
                    <CustomInput
                      label="Address"
                      name="ac_address"
                      placeholder="Address"
                      type="text"
                      register={register}
                      errors={errors}
                    />

                    <Select
                      label="Country"
                      name="ac_country"
                      placeholder="Country"
                      type="select"
                      register={register}
                      errors={errors}
                      // onChange={handleCountryChange}
                      // value={selectedCountry}
                      // isRequired={true}

                      // options={countries.map((item) => {
                      //   return { label: item.name, value: item.isoCode, id: item.isoCode };
                      // })}
                    />
                    <Select
                      label="City"
                      name="ac_city"
                      placeholder="City"
                      type="select"
                      register={register}
                      errors={errors}
                      // value={selectedCity}
                      // onChange={handleCityChange}

                      // options={cities.map((item) => {
                      //   return { label: item.name, value: item.isoCode, id: item.isoCode };
                      // })}
                    />
                    <CustomInput
                      label="Postal Code"
                      name="ac_postalCode"
                      placeholder="Postal Code"
                      type="text"
                      register={register}
                      errors={errors}
                    />
                    <CustomInput
                      label="Email Address"
                      name="ac_email"
                      placeholder="Email Address"
                      type="text"
                      register={register}
                      errors={errors}
                    />
                    <CustomInput
                      label="Phone Number"
                      name="ac_phone"
                      placeholder="Phone Number"
                      type="number"
                      register={register}
                      errors={errors}
                    />
                    <CustomInput
                      label="Mobile Number"
                      name="ac_mobile"
                      placeholder="Mobile Number"
                      type="number"
                      register={register}
                      errors={errors}
                    />
                    <CustomInput
                      label="Department"
                      name="ac_department"
                      placeholder="Department"
                      type="text"
                      register={register}
                      errors={errors}
                    />
                  </div>
                ) : null}
              </div>
              <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
                <h3 className="form-box-heading ">Payment Details (Bank details)</h3>
                <div className="tw-mb-6 tw-flex tw-flex-col tw-gap-[18px]">
                  <label className="tw-font-dm tw-text-xs tw-font-medium tw-not-italic tw-leading-6 tw-text-secondary-black">
                    Payment By
                    <span className="tw-text-[red]">*</span>
                  </label>
                  <div className="payment-details-bank">
                    <CustomRadio
                      label="Bank Details"
                      name="same"
                      // checked={bankDetail}
                      // onChange={(e) => {
                      //   setBankDetail(e.target.checked);
                      //   setCreditCard(!e.target.checked);
                      // }}
                      placeholder="Company Name"
                      type="radio"
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <div className="payment-details-card">
                    <CustomRadio
                      label="Credit Card Details"
                      name="same"
                      // checked={creditCard}
                      // onChange={(e) => {
                      //   setCreditCard(e.target.checked);
                      //   setBankDetail(!e.target.checked);
                      // }}
                      placeholder="Company Name"
                      type="radio"
                      register={register}
                      error={errors}
                    />
                  </div>
                </div>
                <div className="tw-w-full">
                  <CustomInput
                    label="IBAN Number"
                    name="iban"
                    placeholder="IBAN Number"
                    type="text"
                    register={register}
                    errors={errors}
                  />
                </div>
                <div className="form-box-grid">
                  <CustomInput
                    label="Account owner name"
                    name="accountOwnerName"
                    placeholder="Account owner name"
                    type="text"
                    isRequired={true}
                    register={register}
                    errors={errors}
                  />

                  <CustomInput
                    label="BIC Number"
                    name="bic"
                    placeholder="BIC Number"
                    type="text"
                    register={register}
                    errors={errors}
                  />
                  <CustomInput
                    label="Mandate Reference"
                    name="mendateReferance"
                    placeholder="Mandate Reference"
                    type="number"
                    register={register}
                    errors={errors}
                  />
                  <CustomInput
                    label="Mandate Date"
                    name="mandateGenerateDate"
                    placeholder="03/13/2023"
                    type="date"
                    register={register}
                    errors={errors}
                  />
                </div>
              </div>
              <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
                <h3 className="form-box-heading ">Discount</h3>
                <div className="form-box-grid">
                  <CustomInput
                    label="Discount Amount "
                    name="discountAmount"
                    placeholder="Discount amount"
                    type="text"
                    isRequired={true}
                    register={register}
                    errors={errors}
                  />
                  <div>
                    <CustomInput
                      label="Cash Discount"
                      name="days"
                      placeholder="Cash Discount"
                      type="text"
                      isRequired={true}
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>
              </div>
              <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
                <h3 className="form-box-heading ">Terms Of Payments</h3>
                <div className="tw-mt-[16px] tw-w-full">
                  <CustomInput
                    label="Payment terms as date"
                    name="paymentDate"
                    placeholder="03/13/2023"
                    type="date"
                    register={register}
                    errors={errors}
                  />
                  <h3 className="tw-mt-[16px]">Terms of delivery</h3>
                  <TextArea
                    name="deliveryTerm"
                    placeholder="Delivery Terms"
                    type="textarea"
                    register={register}
                    errors={errors}
                  />
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="form-box tw-flex tw-h-[77px] tw-w-[336px] tw-items-center tw-justify-between ">
                <h3 className="form-box-heading ">Status</h3>
                <span className="status-active ">Active</span>
              </div>
              <div className="form-box  tw-mt-[16px]  tw-w-[336px]  ">
                <div className="tw-flex tw-items-center tw-justify-between">
                  <h3 className="form-box-heading ">Uploaded files</h3>
                  <CustomButton text="Upload" className="btn-secondary  " />
                </div>
                <div className=" tw-mt-[16px] tw-flex tw-flex-col tw-gap-[12px] ">
                  <div className="tw-flex tw-items-center tw-gap-[20px]">
                    <div className="tw-flex tw-gap-[5px]">
                      <img src="/assets/images/file-icon.svg" alt="img" />
                      <p className="tw-font-dm tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
                        Design System.PNG
                      </p>
                    </div>
                    <div>
                      <img src="/assets/images/new-tab-icon.svg" alt="img" />
                    </div>
                  </div>
                  <div className="tw-flex tw-items-center tw-gap-[20px]">
                    <div className="tw-flex tw-gap-[5px]">
                      <img src="/assets/images/file-icon.svg" alt="img" />
                      <p className="tw-font-dm tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
                        Design System.PNG
                      </p>
                    </div>
                    <div>
                      <img src="/assets/images/new-tab-icon.svg" alt="img" />
                    </div>
                  </div>
                  <div className="tw-flex tw-items-center tw-gap-[20px]">
                    <div className="tw-flex tw-gap-[5px]">
                      <img src="/assets/images/file-icon.svg" alt="img" />
                      <p className="tw-font-dm tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
                        Design System.PNG
                      </p>
                    </div>
                    <div>
                      <img src="/assets/images/new-tab-icon.svg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-box tw-mt-[16px] tw-flex  tw-w-[336px] tw-flex-col tw-gap-[16px]  ">
                <h3 className="form-box-heading ">Comments</h3>
                <p className="tw-text-sm tw-font-normal tw-not-italic tw-leading-[21px] tw-text-text-light-gray ">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
