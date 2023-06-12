/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import FormInput from '@/common/components/form-input-old/form-input.component';
import UseEditCustomer from './use-edit-customer.hook';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import Select from '@/common/components/select/select.component';
import MultiSelect from '@/common/components/multi-select/multi-select.component';
import CustomSwitch from '@/common/components/custom-switch/custom-switch.component';
import TextArea from '@/common/components/text-area/text-area.component';
import CustomRadio from '@/common/components/custom-radio/custom-radio.component';
import PriceGroup from '../create-customer/personal-details/components/price-group/price-group.component';
import DiscountGroup from '../create-customer/personal-details/components/discount-group/discount-group.component';

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
    handleAddInput,
    allPriceGroup,
    setAllPriceGroup,
    selectedPriceGroup,
    setSelectedPriceGroup,
    allDiscountGroup,
    setAllDiscountGroup,
    selectedDiscountGroup,
    setSelectedDiscountGroup,
    paymentType,
    setPaymentType,
    paymentTermValue,
    setPaymentTermValue,
    defaultData,
    countries,
    cities
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
                      { id: 'MALE', value: 'MALE', label: 'MALE' },
                      { id: 'FEMALE', value: 'FEMALE', label: 'FEMALE' }
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
                    <PriceGroup
                      options={allPriceGroup}
                      setOptions={setAllPriceGroup}
                      selectedOptions={selectedPriceGroup}
                      setSelectedOptions={setSelectedPriceGroup}
                    />
                  </div>
                  <div>
                    <label className="group-label">Discount Group</label>
                    <DiscountGroup
                      options={allDiscountGroup}
                      setOptions={setAllDiscountGroup}
                      selectedOptions={selectedDiscountGroup}
                      setSelectedOptions={setSelectedDiscountGroup}
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
                    name="companyUrl"
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
                    checked={defaultData.isStatus}
                  />
                  <CustomSwitch
                    label="Do not show customer on PDF"
                    name="isPDF"
                    type="switch"
                    register={register}
                    errors={errors}
                    checked={defaultData.isPDF}
                  />
                  <CustomSwitch
                    label="VAT exempt"
                    name="vatStatus"
                    type="switch"
                    register={register}
                    errors={errors}
                    checked={defaultData.vatStatus}
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
                    <input
                      name={`ca_id_${index + 1}`}
                      type="number"
                      className="tw-hidden"
                      register={register}
                    />
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
                    <Select
                      label="Gender"
                      options={[
                        { id: 'MALE', value: 'MALE', label: 'MALE' },
                        { id: 'FEMALE', value: 'FEMALE', label: 'FEMALE' }
                      ]}
                      placeholder="Select Gender"
                      name="ac_gender"
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
                      options={countries}
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
                      options={cities}
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

                  <FormControl>
                    <RadioGroup
                      name="paymentType"
                      value={paymentType}
                      onChange={(e) => setPaymentType(e.target.value)}
                    >
                      <FormControlLabel
                        value="bankDetails"
                        control={<Radio />}
                        label="Bank Details"
                      />
                      <FormControlLabel
                        value="creditCardDetails"
                        control={<Radio />}
                        label="Credit Card Details"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                {paymentType === 'bankDetails' && (
                  <>
                    <div className="tw-w-full">
                      <CustomInput
                        label="IBAN Number"
                        name="iban"
                        placeholder="IBAN Number"
                        type="text"
                        register={register}
                        errors={errors}
                        isRequired={true}
                      />
                    </div>
                    <div className="form-box-grid-4col">
                      <CustomInput
                        label="Account owner name"
                        name="accountOwnerName"
                        placeholder="Account owner name"
                        type="text"
                        register={register}
                        errors={errors}
                        isRequired={true}
                      />

                      <CustomInput
                        label="BIC Number"
                        name="bic"
                        placeholder="BIC Number"
                        type="text"
                        register={register}
                        errors={errors}
                        isRequired={true}
                      />
                      <CustomInput
                        label="Mandate Reference"
                        name="mendateReferance"
                        placeholder="Mandate Reference"
                        type="number"
                        register={register}
                        errors={errors}
                        isRequired={true}
                      />
                      <CustomInput
                        label="Mandate Date"
                        name="mandateGenerateDate"
                        placeholder="03/13/2023"
                        type="date"
                        register={register}
                        errors={errors}
                        isRequired={true}
                      />
                    </div>
                  </>
                )}
                {paymentType === 'creditCardDetails' && (
                  <div className="form-box-grid-4col">
                    <CustomInput
                      label="Credit Card Name"
                      name="nameOfCreditCard"
                      placeholder="Credit Card Name"
                      type="text"
                      register={register}
                      errors={errors}
                      isRequired={true}
                    />
                    <CustomInput
                      label="Credit Card Number"
                      name="creditCardNumber"
                      placeholder="Credit Card Number"
                      type="number"
                      register={register}
                      errors={errors}
                      isRequired={true}
                    />
                    <CustomInput
                      label="Expiry Date"
                      name="creditCardExpiry"
                      placeholder="03/13/2023"
                      type="month"
                      register={register}
                      errors={errors}
                      isRequired={true}
                    />
                    <CustomInput
                      label="CVV"
                      name="creditCardCVV"
                      placeholder="CVV"
                      type="text"
                      register={register}
                      errors={errors}
                      isRequired={true}
                    />
                  </div>
                )}
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
                  <FormControl>
                    <RadioGroup
                      name="termOfPayment"
                      value={paymentTermValue}
                      register={register}
                      errors={errors}
                      onChange={(e) => setPaymentTermValue(e.target.value)}
                    >
                      <FormControlLabel
                        value="PAYMENT_TERMS_AS_DATE"
                        control={<Radio />}
                        label="Payment Terms as date"
                      />
                      {paymentTermValue === 'PAYMENT_TERMS_AS_DATE' && (
                        <div className="radio-expanded">
                          <CustomInput
                            name="PAYMENT_TERMS_AS_DATE_DATA"
                            placeholder="03/13/2023"
                            type="date"
                            isRequired={false}
                            register={register}
                            errors={errors}
                          />
                        </div>
                      )}
                      <FormControlLabel
                        value="PAYMENT_TERMS_IN_DAYS"
                        control={<Radio />}
                        label="Payment terms in days"
                      />
                      {paymentTermValue === 'PAYMENT_TERMS_IN_DAYS' && (
                        <div className="radio-expanded">
                          <CustomInput
                            name="PAYMENT_TERMS_IN_DAYS_DATA"
                            placeholder="Payment terms"
                            type="days"
                            isRequired={false}
                            register={register}
                            errors={errors}
                          />
                        </div>
                      )}
                      <FormControlLabel
                        value="CASH_DISCOUNT_TARGET_AS_A_DATE"
                        control={<Radio />}
                        label="Cash discount target as a date"
                      />
                      {paymentTermValue === 'CASH_DISCOUNT_TARGET_AS_A_DATE' && (
                        <div className="radio-expanded">
                          <CustomInput
                            name="CASH_DISCOUNT_TARGET_AS_A_DATE_DATA"
                            placeholder="13/03/2023"
                            type="date"
                            isRequired={false}
                            register={register}
                            errors={errors}
                          />
                        </div>
                      )}
                      <FormControlLabel
                        value="DISCOUNT_AND_PERCENTAGE"
                        control={<Radio />}
                        label="Discount and %"
                      />
                      {paymentTermValue === 'DISCOUNT_AND_PERCENTAGE' && (
                        <div className="radio-expanded">
                          <CustomInput
                            name="DISCOUNT_AND_PERCENTAGE_DATA"
                            placeholder="Discount and %"
                            type="text"
                            isRequired={false}
                            register={register}
                            errors={errors}
                          />
                        </div>
                      )}
                      <FormControlLabel
                        value="DISCOUNT_AMOUNT"
                        control={<Radio />}
                        label="Discount amount"
                      />
                      {paymentTermValue === 'DISCOUNT_AMOUNT' && (
                        <div className="radio-expanded">
                          <CustomInput
                            name="DISCOUNT_AMOUNT_DATA"
                            placeholder="Discount amount"
                            type="text"
                            isRequired={false}
                            register={register}
                            errors={errors}
                          />
                        </div>
                      )}
                      <FormControlLabel
                        value="TOTAL_AMOUNT_MINUS_DISCOUNT"
                        control={<Radio />}
                        label="Total amount minus discount"
                      />
                      {paymentTermValue === 'TOTAL_AMOUNT_MINUS_DISCOUNT' && (
                        <div className="radio-expanded">
                          <CustomInput
                            name="TOTAL_AMOUNT_MINUS_DISCOUNT_DATA"
                            placeholder="Total amount minus discount"
                            type="text"
                            isRequired={false}
                            register={register}
                            errors={errors}
                          />
                        </div>
                      )}
                    </RadioGroup>
                  </FormControl>
                  <h3 className="tw-mt-[16px]">Terms of delivery</h3>
                  <TextArea
                    name="termOfDelivery"
                    placeholder="Delivery Terms"
                    type="textarea"
                    isRequired={true}
                    register={register}
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
