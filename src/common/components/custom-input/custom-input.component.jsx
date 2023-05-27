'use client';

import { Input, InputAdornment } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import PropTypes from 'prop-types';
import useCustonInput from './use-custon-input.hook';

/**
 * @param type - The type of input
 * @param placeholder - The placeholder text
 * @param onChange - The function to call when the input changes
 * @param value - The value of the input
 * @param className - The class name to apply to the input
 * @param endIcon - The icon to display at the end of the input
 * @param startIcon - The icon to display at the start of the input
 * @param disabled - Whether the input is disabled
 * @param regex - The regex to match the input against
 * @param matchRegex - Whether the input should match the regex and only allow matching input, or not match the regex and only allow non-matching input
 * @returns A custom input component
 */

export default function CustomInput({
  type,
  placeholder,
  onChange = null,
  value = '',
  className = '',
  endIcon = null,
  startIcon = null,
  disabled = false,
  regex = null,
  matchRegex = true
}) {
  const { customInputChangeHandler } = useCustonInput(onChange, regex, matchRegex);

  return (
    <Input
      type={type}
      placeholder={placeholder}
      className={`!tw-border-1 tw-flex-grow-1 tw-rounded tw-border-primary ${className}`}
      onChange={onChange}
      defaultValue={value}
      endAdornment={endIcon}
      startAdornment={<AccountCircle />}
    />
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
  matchRegex: PropTypes.bool
};
