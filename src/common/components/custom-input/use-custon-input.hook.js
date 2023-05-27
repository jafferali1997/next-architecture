import React from 'react';

export default function useCustonInput(onChange, regex, matchRegex) {
  const customInputChangeHandler = (e) => {
    // write the code to match regex with e.target.value
    if (e.target.value.match(/^[a-zA-Z0-9]+$/)) {
      if (onChange) {
        onChange();
      }
    }
  };
  return {
    customInputChangeHandler
  };
}
