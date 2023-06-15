import { City } from 'country-state-city';
import { useState } from 'react';

export default function useCountryCity() {
  const [cities, setCities] = useState([]);

  const handleCountryChange = (e) => {
    // console.log(e.target.value);
    const _cities = City.getCitiesOfCountry(e.target.value);
    // console.log(cities);
    const cityOptions = _cities.map((cit) => ({
      label: cit.name,
      value: cit.name.toLowerCase()
    }));
    setCities(cityOptions);
  };

  return {
    handleCountryChange,
    cities
  };
}
