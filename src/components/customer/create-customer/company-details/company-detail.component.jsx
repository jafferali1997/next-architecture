import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Form, Formik } from 'formik';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Country, City } from 'country-state-city';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '@/common/components/form-input';
import StepperFooter from '@/common/components/form-stepper/stepper-footer';
import CustomAlert from '@/common/components/custom-alert';

let validationSchema = yup.object({
  // Define your validation rules here.
  companyName: yup
    .string()
    .max(160, 'company name must be at most 160 characters long')
    .min(1, 'compnay name must be minimum 1 characters')
    .required('Company name is required'),
  email: yup
    .string()
    .email('The Email doesn’t seem to be correct. Please write correct email')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address')
    .required('Email is required'),
  phoneNo: yup.string().required('Company phone is required'),
  mobileNo: yup.string().required('Company Mobile is required'),
  companySize: yup.string().required('Company Size is required'),
  faxNumber: yup.string().required('Company Fax is required'),
  taxNumber: yup
    .number()
    .max(9999999999, 'TIN must be at most 10 characters long')
    .min(999999999, 'TIN must be minimum 10 characters')
    .required('TIN is required'),
  vatNumber: yup
    .string()
    .matches(/^[a-zA-Z]{2}\d{9}$/, 'Is not in correct format')
    .required('VAT is required')
});

export default function CompanyDetials({ handleTabClick, handleTabCompleted }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchemaState)
  });
  const router = useRouter();
  const [data, setData] = useState();
  const [status, setStatus] = useState();
  const [isShowInPdf, setIsShowInPdf] = useState();
  const [isVatEnabled, setIsVatEnabled] = useState();
  const [isAdditional, setIsAdditional] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cities, setCities] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const countries = Country.getAllCountries();
  const [validationSchemaState, setValidationSchemaState] = useState(validationSchema);

  useEffect(() => {
    const { id } = router.query;

    async function fetchMyAPI() {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/${id}`
      );
      if (res.data.result.data.customer.companyDetails) {
        if (res.data.result.data.customer.companyDetails.additionalContactPerson) {
          setIsAdditional(true);
          const event = {
            target: {
              value:
                res.data.result.data.customer.companyDetails.additionalContactPerson
                  .country
            }
          };
          handleCountryChange(event);
        }
        setData({
          ...res.data.result.data.customer.companyDetails,
          ...(res.data.result.data.customer.companyDetails.additionalContactPerson && {
            additionalEmail:
              res.data.result.data.customer.companyDetails.additionalContactPerson.email,
            phone:
              res.data.result.data.customer.companyDetails.additionalContactPerson
                .phoneNo,
            mobile:
              res.data.result.data.customer.companyDetails.additionalContactPerson
                .mobileNo,
            gender:
              res.data.result.data.customer.companyDetails.additionalContactPerson.gender,
            designation:
              res.data.result.data.customer.companyDetails.additionalContactPerson
                .designation,
            firstName:
              res.data.result.data.customer.companyDetails.additionalContactPerson
                .firstName,
            lastName:
              res.data.result.data.customer.companyDetails.additionalContactPerson
                .lastName,
            address:
              res.data.result.data.customer.companyDetails.additionalContactPerson
                .address,
            country:
              res.data.result.data.customer.companyDetails.additionalContactPerson
                .country,
            city: res.data.result.data.customer.companyDetails.additionalContactPerson
              .city,
            postal:
              res.data.result.data.customer.companyDetails.additionalContactPerson.postal,
            department:
              res.data.result.data.customer.companyDetails.additionalContactPerson
                .department
          })
        });
        setIsShowInPdf(res.data.result.data.customer.companyDetails.IsShowInPdf);
        setStatus(res.data.result.data.customer.companyDetails.status);
        setIsVatEnabled(res.data.result.data.customer.companyDetails.isVatEnabled);
      } else {
        setData({});
      }
    }

    if (id) {
      fetchMyAPI();
    }
  }, [router]);

  useEffect(() => {
    if (isAdditional) {
      // validationSchema = yup.object({
      //   // Define your validation rules here.
      //   gender: yup.string().required('Gender is required'),
      //   companyName: yup
      //     .string()
      //     .max(160, 'company name must be at most 160 characters long')
      //     .min(1, 'compnay name must be minimum 1 characters')
      //     .required('Company name is required'),
      //   additionalEmail: yup
      //     .string()
      //     .email('The Email doesn’t seem to be correct. Please write correct email')
      //     .matches(
      //       /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      //       'Invalid email address'
      //     )
      //     .required('Email is required'),
      //   phone: yup.string().required('Company phone is required'),
      //   mobile: yup.string().required('Company Mobile is required'),
      //   companySize: yup.string().required('Company Size is required'),
      //   faxNumber: yup.string().required('Company Fax is required'),
      //   taxNumber: yup
      //     .number()
      //     .max(9999999999, 'TIN must be at most 10 characters long')
      //     .min(999999999, 'TIN must be minimum 10 characters')
      //     .required('TIN is required'),
      //   vatNumber: yup
      //     .string()
      //     .matches(/^[a-zA-Z]{2}\d{9}$/, 'Is not in correct format')
      //     .required('VAT is required'),
      //   firstName: yup
      //     .string()
      //     .max(50, 'first name must be at most 50 characters long')
      //     .min(1, 'first name must be minimum 1 characters')
      //     .required('First name is required'),
      //   lastName: yup
      //     .string()
      //     .max(50, 'last name must be at most 50 characters long')
      //     .min(1, 'last name must be minimum 1 characters')
      //     .required('Last name is required'),
      //   designation: yup
      //     .string()
      //     .max(100, 'designation must be at most 100 characters long')
      //     .min(1, 'designation must be minimum 1 characters')
      //     .matches(/^[^.]*$/, {
      //       message: 'Invalid designation'
      //     })
      //     .matches(/^[^!@#$%^&*+=<>:;|~(){}[\s\]]*$/, {
      //       message: 'Invalid designation'
      //     })
      //     .required('designation is required'),
      //   postal: yup
      //     .string()
      //     .max(9999999999, 'postal code must be at most 10 characters long')
      //     .min(1, 'postal code must be minimum 1 characters')
      //     .matches(/^[^.]*$/, {
      //       message: 'No period'
      //     })
      //     .matches(/^[^.]*$/, {
      //       message: 'Invalid postal'
      //     })
      //     .matches(/^[^!@#$%^&*+=<>:;|~(){}[\s\]]*$/, {
      //       message: 'Invalid postal'
      //     })
      //     .required('postal code is required'),
      //   address: yup
      //     .string()
      //     .max(95, 'address must be at most 95 characters long')
      //     .min(1, 'address must be minimum 1 characters')
      //     .required('address is required'),
      //   country: yup.string().required('country is required')
      // });
      // setValidationSchemaState(validationSchema);
    } else {
      validationSchema = yup.object({
        // Define your validation rules here.
        companyName: yup
          .string()
          .max(160, 'company name must be at most 160 characters long')
          .min(1, 'compnay name must be minimum 1 characters')
          .required('Company name is required'),
        email: yup
          .string()
          .email('The Email doesn’t seem to be correct. Please write correct email')
          .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Invalid email address'
          )
          .required('Email is required'),
        phoneNo: yup.string().required('Company phone is required'),
        mobileNo: yup.string().required('Company Mobile is required'),
        companySize: yup.string().required('Company Size is required'),
        faxNumber: yup.string().required('Company Fax is required'),
        taxNumber: yup
          .number()
          .max(9999999999, 'TIN must be at most 10 characters long')
          .min(999999999, 'TIN must be minimum 10 characters')
          .required('TIN is required'),
        vatNumber: yup
          .string()
          .matches(/^[a-zA-Z]{2}\d{9}$/, 'Is not in correct format')
          .required('VAT is required')
      });
      setValidationSchemaState(validationSchema);
    }
  }, [isAdditional]);

  const additionalhandles = () => {
    setIsAdditional(!isAdditional);
  };

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
    const cities = City.getCitiesOfCountry(countryCode);
    setCities(cities);
  };

  const handleCityChange = (event) => {
    const cityName = event.target.value;
    setSelectedCity(cityName);
  };

  const onSubmit = async (value) => {
    console.log(value);
    if (isAdditional) {
      value.additionalContactPerson = {
        gender: value.gender,
        designation: value.designation,
        firstName: value.firstName,
        lastName: value.lastName,
        address: value.address,
        country: value.country,
        city: value.city,
        postal: value.postal,
        email: value.additionalEmail,
        phoneNo: value.phone,
        mobileNo: value.mobile,
        department: value.department
      };
    }
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/company-detail`,
        {
          ...value,
          customerId: router.query.id,
          status,
          isShowInPdf,
          isVatEnabled
        }
      );
      if (res.data.status) {
        handleTabClick('payment_details');
        handleTabCompleted('company_details');
      } else {
        CustomAlert(res.data.message, 'Error');
      }
    } catch (e) {
      CustomAlert(e.response.data.error[0].msg, 'Error');
    }
  };

  return (
    <div className="company-details-wrapper">
      <div className="content-header ">
        <h3>Company Details</h3>
      </div>
      <div className="content-body">
        {router.query.id && data && (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <FormInput
                isSubmit={isSubmit}
                label="Company Name"
                placeholder="Company Name"
                type="text"
                isRequired={true}
                {...register('companyName')}
              />

              <FormInput
                isSubmit={isSubmit}
                label="Company Email Address"
                name="email"
                placeholder="Email Address"
                type="email"
                isRequired={true}
              />
              <FormInput
                isSubmit={isSubmit}
                label="Company Phone Number"
                name="phoneNo"
                placeholder="Phone Number"
                type="number"
                isRequired={true}
              />
              <FormInput
                isSubmit={isSubmit}
                label="Company Mobile Number"
                name="mobileNo"
                placeholder="Mobile Number"
                type="text"
                isRequired={true}
              />
              <FormInput
                isSubmit={isSubmit}
                label="Company Size"
                name="companySize"
                placeholder="Select Company Size"
                type="select"
                isRequired={true}
              >
                <option selected disabled>
                  Select Company Size
                </option>
                <option value="10-30">10-30</option>
                <option value="40-100">40-100</option>
                <option value="above 100">above 100</option>
              </FormInput>
              <FormInput
                isSubmit={isSubmit}
                label="Company FAX Number"
                name="faxNumber"
                placeholder="FAX Number"
                type="text"
                isRequired={true}
              />

              <FormInput
                isSubmit={isSubmit}
                label="TIN"
                name="taxNumber"
                placeholder="TAX Number"
                type="text"
                isRequired={true}
              />

              <FormInput
                isSubmit={isSubmit}
                label="VAT Number"
                name="vatNumber"
                placeholder="VAT Number"
                type="text"
                isRequired={true}
              />
            </div>
            <div className="form-row-two-col-slide">
              <FormInput
                isSubmit={isSubmit}
                label="Company URL"
                name="website"
                placeholder="URL"
                type="text"
                isRequired={false}
              />
              <FormInput
                isSubmit={isSubmit}
                label="Current Status"
                name="status"
                type="switch"
                checked={status}
                onChange={(e) => setStatus(e.target.checked)}
                isRequired={false}
              />
              <FormInput
                isSubmit={isSubmit}
                label="Do not show customer on PDF"
                name="isShowInPdf"
                type="switch"
                checked={isShowInPdf}
                onChange={(e) => setIsShowInPdf(e.target.checked)}
                isRequired={false}
              />
              <FormInput
                isSubmit={isSubmit}
                label="VAT exempt"
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
              <div className="form-row">
                <FormInput
                  isSubmit={isSubmit}
                  label="Gender"
                  name="gender"
                  placeholder="John"
                  type="select"
                >
                  <option disabled selected>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </FormInput>
                <FormInput
                  isSubmit={isSubmit}
                  label="Designation"
                  name="designation"
                  placeholder="Designation"
                  type="text"
                />
                <FormInput
                  isSubmit={isSubmit}
                  label="First Name"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                />
                <FormInput
                  isSubmit={isSubmit}
                  label="Last Name"
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                />
                <FormInput
                  isSubmit={isSubmit}
                  label="Address"
                  name="address"
                  placeholder="Address"
                  type="text"
                />

                <FormInput
                  isSubmit={isSubmit}
                  label="Country"
                  name="country"
                  placeholder="Country"
                  type="select"
                  onChange={handleCountryChange}
                  value={selectedCountry}
                  isRequired={true}
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </FormInput>
                <FormInput
                  isSubmit={isSubmit}
                  label="City"
                  name="city"
                  placeholder="City"
                  type="select"
                  value={selectedCity}
                  onChange={handleCityChange}
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </FormInput>
                <FormInput
                  isSubmit={isSubmit}
                  label="Postal Code"
                  name="postal"
                  placeholder="Postal Code"
                  type="text"
                />
                <FormInput
                  isSubmit={isSubmit}
                  label="Email Address"
                  name="additionalEmail"
                  placeholder="Email Address"
                  type="text"
                />
                <FormInput
                  isSubmit={isSubmit}
                  label="Phone Number"
                  name="phone"
                  placeholder="Phone Number"
                  type="number"
                />
                <FormInput
                  isSubmit={isSubmit}
                  label="Mobile Number"
                  name="mobile"
                  placeholder="Mobile Number"
                  type="number"
                />
                <FormInput
                  isSubmit={isSubmit}
                  label="Department"
                  name="department"
                  placeholder="Department"
                  type="text"
                />
              </div>
            ) : null}
            <StepperFooter
              handleTabClick={handleTabClick}
              back="customer_details"
              setIsSubmit={setIsSubmit}
            />
          </Form>
        )}
        {!router.query.id && (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <FormInput
                isSubmit={isSubmit}
                label="Company Name"
                name="companyName"
                placeholder="Company Name"
                type="text"
                isRequired={true}
              />

              <FormInput
                isSubmit={isSubmit}
                label="Company Email Address"
                name="email"
                placeholder="Email Address"
                type="email"
                isRequired={true}
              />
              <FormInput
                isSubmit={isSubmit}
                label="Company Phone Number"
                name="phoneNo"
                placeholder="Phone Number"
                type="number"
                isRequired={true}
              />
              <FormInput
                isSubmit={isSubmit}
                label="Company Mobile Number"
                name="mobileNo"
                placeholder="Mobile Number"
                type="text"
                isRequired={true}
              />
              <FormInput
                isSubmit={isSubmit}
                label="Company Size"
                name="companySize"
                placeholder="Select Company Size"
                type="select"
                isRequired={true}
              >
                <option selected disabled>
                  Select Company Size
                </option>
                <option value="10-30">10-30</option>
                <option value="40-100">40-100</option>
                <option value="above 100">above 100</option>
              </FormInput>
              <FormInput
                isSubmit={isSubmit}
                label="Company FAX Number"
                name="faxNumber"
                placeholder="FAX Number"
                type="text"
                isRequired={true}
              />

              <FormInput
                isSubmit={isSubmit}
                label="TIN"
                name="taxNumber"
                placeholder="TAX Number"
                type="text"
                isRequired={true}
              />

              <FormInput
                isSubmit={isSubmit}
                label="VAT Number"
                name="vatNumber"
                placeholder="VAT Number"
                type="text"
                isRequired={true}
              />
            </div>
            <div className="form-row-two-col-slide">
              <FormInput
                isSubmit={isSubmit}
                label="Company URL"
                name="website"
                placeholder="URL"
                type="text"
                isRequired={false}
              />
              <FormInput
                isSubmit={isSubmit}
                label="Current Status"
                name="status"
                type="switch"
                checked={status}
                onChange={(e) => setStatus(e.target.checked)}
                isRequired={false}
              />
              <FormInput
                isSubmit={isSubmit}
                label="Do not show customer on PDF"
                name="isShowInPdf"
                type="switch"
                checked={isShowInPdf}
                onChange={(e) => setIsShowInPdf(e.target.checked)}
                isRequired={false}
              />
              <FormInput
                isSubmit={isSubmit}
                label="VAT exempt"
                name="isVatEnabled"
                type="switch"
                checked={isVatEnabled}
                onChange={(e) => setIsVatEnabled(e.target.checked)}
                isRequired={false}
              />
            </div>
            <div className="form-additonals">
              <h3>Additional contact person</h3>
              {isAdditional ? null : (
                <img
                  src="/assets/images/plus_btn.svg"
                  alt="img"
                  onClick={additionalhandles}
                />
              )}
            </div>
            {isAdditional ? (
              <div className="form-row">
                <FormInput
                  isSubmit={isSubmit}
                  label="Gender"
                  name="gender"
                  placeholder="John"
                  type="select"
                >
                  <option disabled selected>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </FormInput>
                <FormInput
                  isSubmit={isSubmit}
                  label="Designation"
                  name="designation"
                  placeholder="Designation"
                  type="text"
                />
                <FormInput
                  isSubmit={isSubmit}
                  label="First Name"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                />
                <FormInput
                  isSubmit={isSubmit}
                  label="Last Name"
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                />
                <FormInput
                  isSubmit={isSubmit}
                  label="Address"
                  name="address"
                  placeholder="Address"
                  type="text"
                />

                <FormInput
                  isSubmit={isSubmit}
                  label="Country"
                  name="country"
                  placeholder="Country"
                  type="select"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </FormInput>
                <FormInput
                  isSubmit={isSubmit}
                  label="City"
                  name="city"
                  placeholder="City"
                  type="select"
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </FormInput>
                <FormInput
                  isSubmit={isSubmit}
                  label="Postal Code"
                  name="postal"
                  placeholder="Postal Code"
                  type="text"
                />
                <FormInput
                  isSubmit={isSubmit}
                  label="Email Address"
                  name="additionalEmail"
                  placeholder="Email Address"
                  type="text"
                />
                <FormInput
                  isSubmit={isSubmit}
                  label="Phone Number"
                  name="phone"
                  placeholder="Phone Number"
                  type="number"
                />
                <FormInput
                  isSubmit={isSubmit}
                  label="Mobile Number"
                  name="mobile"
                  placeholder="Mobile Number"
                  type="number"
                />
                <FormInput
                  isSubmit={isSubmit}
                  label="Department"
                  name="department"
                  placeholder="Department"
                  type="text"
                />
              </div>
            ) : null}
            <StepperFooter
              handleTabClick={handleTabClick}
              back="customer_details"
              setIsSubmit={setIsSubmit}
            />
          </Form>
        )}
      </div>
    </div>
  );
}
