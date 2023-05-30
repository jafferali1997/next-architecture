'use client';

/* eslint-disable react/jsx-props-no-spreading */
import { Input, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import useCustomInput from './use-custom-input.hook';
import { RGX_ALL_CHARACTERS } from '@/common/constants/regex.constant';
import FieldError from '@/common/components/field-error/field-error.component';

/**
 * @param type - The type of input
 * @param placeholder - The placeholder text
 * @param onChange - The function to call when the input changes
 * @param name - The name of input to get value in onSubmit
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
  name = null,
  onChange = null,
  defaultValue = null,
  value = null,
  className = '',
  endIcon = null,
  startIcon = null,
  disabled = false,
  regex = RGX_ALL_CHARACTERS,
  matchRegex = true,
  error = null
}) {
  const { inputChangeHandler, inputKeyDownHandler } = useCustomInput(
    onChange,
    regex,
    matchRegex
  );

  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        className={`input-field default-input tw-min ${className} ${
          !disabled || 'disabled-input'
        } `}
        name={name}
        {...(defaultValue && { defaultValue })}
        {...(value && { value })}
        onChange={inputChangeHandler}
        onKeyDown={inputKeyDownHandler}
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
      />
      {error && error?.length > 0 && <FieldError className="tw-mt-1" error={error} />}
    </>
  );
}

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  endIcon: PropTypes.element,
  startIcon: PropTypes.element,
  disabled: PropTypes.bool,
  regex: PropTypes.instanceOf(RegExp),
  matchRegex: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string
};
