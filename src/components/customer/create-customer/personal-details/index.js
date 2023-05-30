import axios from 'axios';
import { Country, City } from 'country-state-city';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import MultiSelect from '@/common/components/multiselector';
import StepperFooter from '@/common/components/form-stepper/stepper-footer';
import FormInput from '@/common/components/form-input';
import CustomAlert from '@/common/components/custom-alert';

const validationSchema = yup.object({
  // Define your validation rules here.
  gender: yup.string().required('Gender is required'),
  firstName: yup
    .string()
    .max(50, 'first name must be at most 50 characters long')
    .min(1, 'first name must be minimum 1 characters')
    .required('First name is required'),
  lastName: yup
    .string()
    .max(50, 'last name must be at most 50 characters long')
    .min(1, 'last name must be minimum 1 characters')
    .required('Last name is required'),
  designation: yup
    .string()
    .max(100, 'designation must be at most 100 characters long')
    .min(1, 'designation must be minimum 1 characters')
    .matches(/^[^.]*$/, {
      message: 'Invalid designation'
    })
    .matches(/^[^!@#$%^&*+=<>:;|~(){}[\]]*$/, {
      message: 'Invalid designation'
    })
    .required('designation is required'),
  postal: yup
    .number()
    .max(9999999999, 'postal code must be at most 10 characters long')
    .min(1, 'postal code must be minimum 1 characters')
    // .matches(/^[^.]*$/, {
    //   message: 'No period'
    // })
    // .matches(/^[^.]*$/, {
    //   message: 'Invalid postal'
    // })
    // .matches(/^[^!@#$%^&*+=<>:;|~(){}[\s\]]*$/, {
    //   message: 'Invalid postal'
    // })
    .required('postal code is required'),
  address: yup
    .string()
    .max(95, 'address must be at most 95 characters long')
    .min(1, 'address must be minimum 1 characters')
    .required('address is required'),
  country: yup.string().required('country is required')
});

export default function PersonalDetails({ handleTabClick, handleTabCompleted }) {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cities, setCities] = useState([]);
  const [data, setData] = useState();
  const [discountGroup, setDiscountGroup] = useState();
  const [priceGroup, setPriceGroup] = useState();
  const [addDiscount, setAddDiscount] = useState();
  const [addPrice, setAddPrice] = useState();
  const [priceOptions, setPriceOptions] = useState([]);
  const [discountOptions, setDiscountOptions] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const countries = Country.getAllCountries();

  const fetchData = async (id) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/${id}`
    );
    console.log(res.data.result?.data.customer);
    setData(res.data.result?.data.customer);
    const event = {
      target: {
        value: res.data.result?.data.customer.country
      }
    };
    handleCountryChange(event);
    setPriceOptions(
      res.data.result?.data.customer.priceGroups.map((item) => {
        return priceGroup.find((price) => price.value === item);
      })
    );
    setDiscountOptions(
      res.data.result?.data.customer.discountGroups.map((item) => {
        return discountGroup.find((price) => price.value === item);
      })
    );
  };

  const fetchPriceGroup = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/price-group/get-all`
    );
    setPriceGroup(
      res.data.result.data.priceGroup.map((item) => {
        return { value: item._id, label: item.name };
      })
    );
  };

  const fetchDiscountGroup = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/discount-group/get-all`
    );
    setDiscountGroup(
      res.data.result.data.discountGroup.map((item) => {
        return { value: item._id, label: item.name };
      })
    );
  };

  const addPriceGroup = async (data) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/price-group/create`,
      data
    );
    fetchPriceGroup();
  };

  const addDiscountGroup = async (data) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/discount-group/create`,
      data
    );
    fetchDiscountGroup();
  };

  useEffect(() => {
    fetchPriceGroup();
    fetchDiscountGroup();
  }, []);

  useEffect(() => {
    if (priceGroup?.length && discountGroup?.length) {
      const { id } = router.query;
      if (id) {
        fetchData(id);
      }
    }
  }, [router, priceGroup, discountGroup]);

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
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/personal-detail`,
        {
          ...value,
          ...(router.query.id && { customerId: router.query.id }),
          priceGroups: [
            ...priceOptions.map((item) => {
              return item.value;
            })
          ],
          discountGroups: [
            ...discountOptions.map((item) => {
              return item.value;
            })
          ]
        }
      );
      if (res.data.status) {
        router.query.id = res.data.result.data._id;
        router.push(router);
        handleTabClick('company_details');
        handleTabCompleted('customer_details');
      } else {
        CustomAlert(res.data.message, 'Error');
      }
    } catch (e) {
      CustomAlert(e.response.data.error[0].msg, 'Error');
    }
  };

  return (
    <div className="personal-details-wrapper">
      <div className="content-header ">
        <h3>Personal Details</h3>
      </div>
      <div className="content-body">
        {router.query.id && data && priceGroup && discountGroup && (
          <Formik
            initialValues={{ ...data }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="form-row">
                  <FormInput
                    isSubmit={isSubmit}
                    label="Gender"
                    name="gender"
                    placeholder="John"
                    type="select"
                    isRequired={true}
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
                    isRequired={true}
                  />
                  <FormInput
                    isSubmit={isSubmit}
                    label="First Name"
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    isRequired={true}
                  />
                  <FormInput
                    isSubmit={isSubmit}
                    label="Last Name"
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    isRequired={true}
                  />
                  <FormInput
                    isSubmit={isSubmit}
                    label="Address"
                    name="address"
                    placeholder="Address"
                    type="text"
                    isRequired={true}
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
                    isRequired={true}
                  />
                </div>

                <div className="form-row-two-col">
                  <div>
                    <label className="group-label">Price Group</label>
                    <MultiSelect
                      isSubmit={isSubmit}
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
                      defaultValue={data.priceGroups.map((item) => {
                        return priceGroup.find((price) => price.value === item);
                      })}
                    />
                  </div>
                  <div>
                    <label className="group-label">Discount Group</label>
                    <MultiSelect
                      isSubmit={isSubmit}
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
                      defaultValue={data.discountGroups.map((item) => {
                        return discountGroup.find((price) => price.value === item);
                      })}
                    />
                  </div>
                </div>
                <StepperFooter setIsSubmit={setIsSubmit} />
              </Form>
            )}
          </Formik>
        )}
        {!router.query.id && (
          <Formik
            initialValues={{ ...data }}
            validationSchema={validationSchema}
            validateOnChange={false}
            onSubmit={onSubmit}
          >
            {({ errors, isSubmitting, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="form-row">
                  <FormInput
                    isSubmit={isSubmit}
                    label="Gender"
                    name="gender"
                    placeholder="John"
                    type="select"
                    isRequired={true}
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
                    isRequired={true}
                  />
                  <FormInput
                    isSubmit={isSubmit}
                    label="First Name"
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    isRequired={true}
                  />
                  <FormInput
                    isSubmit={isSubmit}
                    label="Last Name"
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    isRequired={true}
                  />
                  <FormInput
                    isSubmit={isSubmit}
                    label="Address"
                    name="address"
                    placeholder="Address"
                    type="text"
                    isRequired={true}
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
                    <option disabled selected>
                      Select Country
                    </option>
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
                    <option disabled selected>
                      Select City
                    </option>
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
                    isRequired={true}
                  />
                </div>
                <div className="form-row-two-col">
                  <div>
                    <label className="group-label">Price Group</label>
                    <MultiSelect
                      isSubmit={isSubmit}
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
                    />
                  </div>
                  <div>
                    <label className="group-label">Discount Group</label>
                    <MultiSelect
                      isSubmit={isSubmit}
                      options={discountGroup}
                      handleChange={(value) => {
                        setDiscountOptions(value);
                      }}
                      placeholder="Select Discount Group(s)"
                      valueOfModel={addDiscount}
                      handleValueOfModel={(e) => {
                        setAddDiscount(e.target.value);
                      }}
                      handleModalOnSubmit={addDiscountGroup}
                    />
                  </div>
                </div>
                <StepperFooter setIsSubmit={setIsSubmit} />
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
}
