'use client';

/* eslint-disable react/jsx-props-no-spreading */
import { TextareaAutosize } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import FieldError from '../field-error/field-error.component';

export default function TextArea({
  placeholder,
  className = '',
  name = null,
  minRows = 4,
  maxRows = 10,
  value = null,
  disabled = false,
  defaultValue = null,
  onChange = null,
  error = null
}) {
  return (
    <>
      <TextareaAutosize
        minRows={minRows}
        maxRows={maxRows}
        placeholder={placeholder}
        className={`input-field default-input tw-min hover:tw-border-text-dark-gray focus:tw-border-[1px] focus:tw-border-text-dark-gray ${
          error && 'error-field'
        } ${className} ${!disabled || 'disabled-input'} `}
        name={name}
        {...(defaultValue && { defaultValue })}
        {...(value && { value })}
        onChange={onChange}
        disabled={disabled}
      />
      {error && error?.length > 0 && <FieldError className="tw-mt-1" error={error} />}
    </>
  );
}

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
};
