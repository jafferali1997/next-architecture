import { City } from 'country-state-city';
import { useEffect, useState } from 'react';

export default function useCountryCity() {
  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState('');
  const [error, setError] = useState({ country: '' });
  // const [countryCode, setCountryCode] = useState(null);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setError('');
    if (e.target.value) {
      const [name, code] = e.target.value.split('-');
      console.log(name, code, e.target.value);
      // console.log(City.getAllCities('BD'));
      // console.log(City.getCitiesOfCountry('BM'));
      const _cities = City.getCitiesOfCountry(code);
      console.log(_cities);
      const cityOptions = _cities.map((cit) => ({
        label: cit.name,
        value: cit.name.toLowerCase()
      }));
      console.log(cityOptions);
      setCities(cityOptions);
    }
  };

  // useEffect(() => {
  //   if (countryCode) {
  //     const event = {
  //       target: {
  //         value: countryCode
  //       }
  //     };
  //     handleCountryChange(event);
  //   }
  // }, [countryCode]);

  return {
    handleCountryChange,
    cities,
    country,
    setCountry,
    error,
    setError
    // setCountryCode,
    // countryCode
  };
}
