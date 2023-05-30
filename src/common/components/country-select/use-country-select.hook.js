'use client';

import axios from 'axios';
import { useEffect } from 'react';

export default function useCountrySelect() {
  useEffect(() => {
    axios
      .get('https://api.countrystatecity.in/v1/countries')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return {};
}
