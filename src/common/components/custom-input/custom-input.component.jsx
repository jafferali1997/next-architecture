'use client';

import { Input, InputAdornment } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import PropTypes from 'prop-types';
import useCustomInput from './use-custom-input.hook';
import { RGX_ALL_CHARACTERS } from '@/common/constants/regex.constant';
import FieldError from '@/common/components/field-error/field-error.component';

/**
 * @param type - The type of input
 * @param placeholder - The placeholder text
 * @param onChange - The function to call when the input changes
 * @param defaultValue - The value that will be displayed on input field on first time
 * @param value - The value of the input
 * @param className - The class name to apply to the input
 * @param endIcon - The icon to display at the end of the input
 * @param startIcon - The icon to display at the start of the input
 * @param disabled - Whether the input is disabled
 * @param regex - The regex to match the input against
 * @param matchRegex - Whether the input should match the regex and only allow matching input, or not match the regex and only allow non-matching input
 * @param error - The error text message to be shown below input field
 * @returns A custom input component
 */

export default function CustomInput({
  type,
  placeholder,
  onChange = null,
  defaultValue = null,
  value = undefined,
  className = '',
  endIcon = null,
  startIcon = null,
  disabled = false,
  regex = RGX_ALL_CHARACTERS,
  matchRegex = true,
  errors = null,
  register = null,
  name,
  label = null,
  isRequired = false
}) {
  // const { inputChangeHandler, inputKeyDownHandler } = useCustomInput(
  //   onChange,
  //   regex,
  //   matchRegex
  // );

  return (
    <div>
      {label && (
        <label>
          {label} {isRequired && <span>*</span>}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className={`input-field default-input tw-min ${className} ${
          !disabled || 'disabled-input'
        } `}
        // onKeyDown={onChange}
        {...(defaultValue && { defaultValue })}
        {...(value && { value })}
        disabled={disabled}
        startAdornment={
          <InputAdornment position="start" className="">
            {startIcon}
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end" className="">
            {endIcon}
          </InputAdornment>
        }
        {...(register && register(`${name}`))}
        onChange={onChange}
      />
      {errors && errors[name] && (
        <FieldError className="tw-mt-1" error={errors[name].message} />
      )}
    </div>
  );
}

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  endIcon: PropTypes.element,
  startIcon: PropTypes.element,
  disabled: PropTypes.bool,
  regex: PropTypes.instanceOf(RegExp),
  matchRegex: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  register: PropTypes.func
};
