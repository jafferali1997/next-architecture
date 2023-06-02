/* eslint-disable react/jsx-props-no-spreading */
import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import FieldError from '@/common/components/field-error/field-error.component';
import FieldLabel from '../field-label/field-label.component';

export default function Select({
  options,
  placeholder,
  name = null,
  onChange = null,
  defaultValue = null,
  value = null,
  className = '',
  disabled = false,
  errors = null,
  register = null,
  label = null,
  isRequired = false,
  inlineLabel = false,
  labelClassName = ''
}) {
  return (
    <div
      className={`${inlineLabel ? 'tw-flex tw-w-full tw-flex-row tw-items-center' : ''}`}
    >
      {label && (
        <FieldLabel label={label} isRequired={isRequired} className={labelClassName} />
      )}

      <div className="tw-w-full">
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
          className={`select  ${className} ${disabled ? 'disabled-input' : ''} `}
          disabled={disabled}
          onChange={onChange}
          defaultValue={defaultValue}
          {...(value && { value })}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          renderInput={(params) => (
            <TextField
              {...params}
              className="default-input input-field tw-p-0"
              placeholder={placeholder}
            />
          )}
        />

        {errors && errors[name] && (
          <FieldError className="tw-mt-1" error={errors[name].message} />
        )}
      </div>
    </div>
  );
}

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
  disabled: PropTypes.bool,
  register: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  inlineLabel: PropTypes.bool,
  labelClassName: PropTypes.string
};
