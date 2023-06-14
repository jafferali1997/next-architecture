'use client';

import { Option } from '@mui/joy';
import Select, { selectClasses } from '@mui/joy/Select';
import { FormControl, MenuItem } from '@mui/material';
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
  defaultValue = null,
  register = null,
  name = null,
  errors = null,
  label = null,
  isRequired = false,
  inlineLabel = false,
  labelClassName = '',
  control = null
}) {
  return (
    <div
      className={`${inlineLabel ? 'tw-flex tw-w-full tw-flex-row tw-items-center' : ''}`}
    >
      {label && (
        <FieldLabel label={label} isRequired={isRequired} className={labelClassName} />
      )}

      <div className="tw-w-full">
        {control && (
          <Controller
            // {...(register && register(`${name}`))}
            control={control}
            name={name}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                // {...(register && register(`${name}`))}
                // name={name}
                // {...(value && { value })}
                // {...(onChange && { onChange })}
                className={`tw-w-full ${className}`}
                placeholder={placeholder}
                indicator={<KeyboardArrowDown />}
                sx={{
                  width: 240,
                  [`& .${selectClasses.indicator}`]: {
                    transition: '0.2s',
                    [`&.${selectClasses.expanded}`]: {
                      transform: 'rotate(-180deg)'
                    }
                  }
                }}
              >
                {options?.map((option) => (
                  <Option
                    // {...(register && { register })}
                    // name={name}
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </Option>
                ))}
              </Select>
            )}
          />
        )}

        {!control && (
          <Select
            // {...(register && register(`${name}`))}
            // name={name}
            {...(value && { value })}
            {...(defaultValue && { defaultValue })}
            {...(onChange && { onChange })}
            className={`tw-w-full ${className}`}
            placeholder={placeholder}
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 240,
              [`& .${selectClasses.indicator}`]: {
                transition: '0.2s',
                [`&.${selectClasses.expanded}`]: {
                  transform: 'rotate(-180deg)'
                }
              }
            }}
          >
            {options?.map((option) => (
              <Option
                // {...(register && { register })}
                // name={name}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </Option>
            ))}
          </Select>
        )}

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
