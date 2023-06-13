'use client';

import { MenuItem, Select } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import FieldError from '../field-error/field-error.component';
import FieldLabel from '../field-label/field-label.component';

export default function CustomSelect({
  options,
  placeholder = '',
  className = '',
  value = null,
  onChange = null,
  defaultValue = '',
  register = null,
  name,
  errors = null,
  label = null,
  isRequired = false,
  inlineLabel = false,
  labelClassName = '',
  control
}) {
  return (
    <div
      className={`${inlineLabel ? 'tw-flex tw-w-full tw-flex-row tw-items-center' : ''}`}
    >
      {label && (
        <FieldLabel label={label} isRequired={isRequired} className={labelClassName} />
      )}

      <div className="tw-w-full">
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          className="default-input input-field"
          render={({ field }) => (
            <Select {...field}>
              {options.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />

        {errors && errors[name] && (
          <FieldError className="tw-mt-1" error={errors[name].message} />
        )}
      </div>
    </div>
  );
}

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object,
  isRequired: PropTypes.bool,
  register: PropTypes.func,
  inlineLabel: PropTypes.bool,
  labelClassName: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.any
};
