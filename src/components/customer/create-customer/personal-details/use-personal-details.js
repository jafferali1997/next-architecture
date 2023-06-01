import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { City, Country } from 'country-state-city';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// import CustomAlert from '@/common/components/custom-alert';

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

export default function usePersonalDetails({ handleTabClick, handleTabCompleted }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
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

  const fetchData = useCallback(
    async (id) => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/${id}`
      );
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
    },
    [priceGroup, discountGroup]
  );

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
    if (priceGroup?.length && discountGroup?.length && router.query) {
      const { id } = router.query;
      if (id) {
        fetchData(id);
      }
    }
  }, [router, priceGroup, discountGroup, fetchData]);

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
    handleTabClick('company_details');
    handleTabCompleted('customer_details');
    // try {
    //   const res = await axios.post(
    //     `${process.env.NEXT_PUBLIC_MAIN_URL}/administration/customer/personal-detail`,
    //     {
    //       ...value,
    //       ...(router.query.id && { customerId: router.query.id }),
    //       priceGroups: [
    //         ...priceOptions.map((item) => {
    //           return item.value;
    //         })
    //       ],
    //       discountGroups: [
    //         ...discountOptions.map((item) => {
    //           return item.value;
    //         })
    //       ]
    //     }
    //   );
    //   if (res.data.status) {
    //     router.query.id = res.data.result.data._id;
    //     router.push(router);
    //     handleTabClick('company_details');
    //     handleTabCompleted('customer_details');
    //   } else {
    //     // CustomAlert(res.data.message, 'Error');
    //   }
    // } catch (e) {
    //   //   CustomAlert(e.response.data.error[0].msg, 'Error');
    // }
  };

  return {
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
    data,
    discountGroup,
    setDiscountOptions,
    addDiscount,
    setAddDiscount,
    addDiscountGroup,
    setIsSubmit,
    router,
    errors
  };
}
