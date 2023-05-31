/* eslint-disable react/jsx-props-no-spreading */
import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

export default function Select({
  options,
  placeholder,
  name = null,
  onChange = null,
  defaultValue = null,
  value = null,
  className = '',
  disabled = false
}) {
  return (
    <Autocomplete
      disablePortal
      disableClearable
      options={options ?? []}
      renderOption={(props, option) => (
        <li {...props} key={option?.label}>
          {option?.label}
        </li>
      )}
      name={name}
      className={`${className} ${disabled ? 'disabled-input' : ''} `}
      disabled={disabled}
      onChange={onChange}
      defaultValue={defaultValue}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      renderInput={(params) => (
        <TextField
          {...params}
          className="default-input tw-p-0"
          placeholder={placeholder}
        />
      )}
    />
  );
}

// const top100Films = [
//   { label: 'The Shawshank Redemption', year: 1994 },
//   { label: 'The Godfather', year: 1972 }
// ];

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired, // label should be unique because by default mui use label as key
      value: PropTypes.string
      //   Besides label we can send anything in the object, onChange value will give us the whole object
    })
  ).isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string
  }),
  value: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool
};
