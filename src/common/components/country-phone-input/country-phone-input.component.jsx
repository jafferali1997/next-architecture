'use client';

import PhoneInput from 'react-phone-input-2';
import PropTypes from 'prop-types';
import FieldError from '@/common/components/field-error/field-error.component';
import FieldLabel from '../field-label/field-label.component';
import useCountryPhoneInput from './use-country-phone-input.hook';

export default function CountryPhoneInput({
  placeholder,
  name,
  onChange = null,
  defaultValue = null,
  value = null,
  className = '',
  disabled = false,
  error = null,
  label = null,
  isRequired = false,
  inlineLabel = false,
  labelClassName = ''
}) {
  const { inputChangeHandler, isValidPhoneNumber } = useCountryPhoneInput(onChange);

  return (
    <div
      className={`${inlineLabel ? 'tw-flex  tw-w-full tw-flex-row tw-items-center' : ''}`}
    >
      {label && (
        <FieldLabel label={label} isRequired={isRequired} className={labelClassName} />
      )}

      <div className="tw-w-full">
        <PhoneInput
          name={name}
          country={defaultValue || 'us'}
          {...(placeholder && { placeholder })}
          {...(value && { value })}
          className={`${error ? 'tw-border-danger' : ''} ${className} tw-bg-gray-300 tw-w-full`}
          autoFormat={true}
          autocompleteSearch={true}
          onChange={inputChangeHandler}
          disabled={disabled}
        />
        {(error || !isValidPhoneNumber) && (
          <FieldError
            className="tw-mt-1"
            error={!isValidPhoneNumber ? 'Please enter valid phone number' : error}
          />
        )}
      </div>
    </div>
  );
}

CountryPhoneInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  endIcon: PropTypes.element,
  startIcon: PropTypes.element,
  disabled: PropTypes.bool,
  matchRegex: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  register: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.object,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  inlineLabel: PropTypes.bool,
  labelClassName: PropTypes.string
};
