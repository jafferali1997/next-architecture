import { Select, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import FieldError from '../field-error/field-error.component';
import FieldLabel from '../field-label/field-label.component';

export default function CustomSelect({
  options,
  placeholder = '',
  className= '',
  value = null,
  onChange = null,
  defaultValue = null,
  register = null,
  name = null,
  errors = null,
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
        <Select
          {...(register && register(`${name}`))}
          {...(defaultValue && { defaultValue })}
          {...(value && { value })}
          {...(onChange && { onChange })}
          className={`tw-w-full ${className}`}
          placeholder={placeholder}
        >
          {options?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
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
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object,
  isRequired: PropTypes.bool,
  register: PropTypes.func,
  inlineLabel: PropTypes.bool,
  labelClassName: PropTypes.string
};
