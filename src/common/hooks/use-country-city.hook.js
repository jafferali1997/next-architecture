import { City } from 'country-state-city';
import { useEffect, useState } from 'react';

export default function useCountryCity() {
  const [cities, setCities] = useState([]);
  // const [countryCode, setCountryCode] = useState(null);

  const handleCountryChange = (e) => {
    const [name, code] = e.target.value.split('-');
    console.log(name, code, e.target.value);
    // console.log(City.getAllCities('BD'));
    // console.log(City.getCitiesOfCountry('BM'));
    const _cities = City.getCitiesOfCountry(code);
    // console.log(cities);
    const cityOptions = _cities.map((cit) => ({
      label: cit.name,
      value: cit.name.toLowerCase()
    }));
    setCities(cityOptions);
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
    cities
    // setCountryCode,
    // countryCode
  };
}
