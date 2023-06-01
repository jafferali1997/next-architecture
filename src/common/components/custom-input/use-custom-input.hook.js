'use client';

import { useState } from 'react';
import {
  ALL_CHARACTER_ARRAY,
  ALL_CONTROLS
} from '@/common/constants/characters-array.constant';

export default function useCustomInput(onChange, regex, matchRegex) {
  const [showPassword, setShowPassword] = useState(false);

  const passwordMouseDownHandler = (event) => {
    event.preventDefault();
  };

  const inputChangeHandler = (e) => {
    if (onChange) {
      onChange();
    }
    // if (!e.target.value.match(regex)) {
    // }
    // console.log(regex.test(e.target.value));
    // if (!regex.test(e.target.value)) {
    //   console.log(e.target.value);
    //   e.target.value = e.target.value.slice(0, -1);
    // }
  };

  const inputKeyDownHandler = (e) => {
    // if (![...ALL_CONTROLS, ...ALL_CHARACTER_ARRAY].includes(e.key)) {
    //   e.preventDefault();
    // }
  };

  return {
    inputChangeHandler,
    inputKeyDownHandler,
    showPassword,
    setShowPassword,
    passwordMouseDownHandler
  };
}
