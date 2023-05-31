import { Select, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import FieldError from '../field-error/field-error.component';

export default function CustomSelect({
  options,
  value = null,
  onChange = null,
  defaultValue = null,
  register = null,
  isRequired = false,
  label = null,
  name = null,
  errors = null
}) {
  return (
    <div>
      {label && (
        <label>
          {label} {isRequired && <span>*</span>}
        </label>
      )}
      <select
        className="tw-w-[300px]"
        {...(register && register(`${name}`))}
        {...(defaultValue && { defaultValue })}
        {...(value && { value })}
        onChange={onChange}
      >
        <option value="">Select</option>
        {options?.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <FieldError className="tw-mt-1" error={errors[name].message} />
      )}
    </div>
  );
}

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object,
  isRequired: PropTypes.bool,
  register: PropTypes.func
};
