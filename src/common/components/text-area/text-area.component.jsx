'use client';

/* eslint-disable react/jsx-props-no-spreading */
import { TextareaAutosize } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import FieldError from '../field-error/field-error.component';
import FieldLabel from '../field-label/field-label.component';

export default function TextArea({
  placeholder,
  name,
  label = null,
  className = '',
  minRows = 4,
  maxRows = 10,
  value = null,
  disabled = false,
  defaultValue = null,
  onChange = null,
  errors = null,
  isRequired = false,
  inlineLabel = false,
  labelClassName = '',
  readOnly = false
}) {
  return (
    <div
      className={`${inlineLabel ? 'tw-flex tw-w-full tw-flex-row tw-items-center' : ''}`}
    >
      {label && (
        <FieldLabel label={label} isRequired={isRequired} className={labelClassName} />
      )}

      <div className="tw-w-full">
        <TextareaAutosize
          minRows={minRows}
          maxRows={maxRows}
          placeholder={placeholder}
          className={`input-field default-input tw-min hover:tw-border-text-dark-gray focus:tw-border-[1px] focus:tw-border-text-dark-gray ${
            errors && 'error-field'
          } ${className} ${!disabled || 'disabled-input'} `}
          name={name}
          {...(defaultValue && { defaultValue })}
          {...(value && { value })}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disabled}
        />
        {errors && errors[name] && (
          <FieldError className="tw-mt-1" error={errors[name].message} />
        )}
      </div>
    </div>
  );
}

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  register: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  inlineLabel: PropTypes.bool,
  labelClassName: PropTypes.string,
  readOnly: PropTypes.bool
};
