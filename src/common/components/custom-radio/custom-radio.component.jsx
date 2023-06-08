import { Radio } from '@mui/material';
import PropTypes from 'prop-types';
import FieldError from '../field-error/field-error.component';
import FieldLabel from '../field-label/field-label.component';

export default function CustomRadio({
  label = null,
  defaultChecked = false,
  checked = null,
  onChange = null,
  value = null,
  className = '',
  size = null,
  disabled = false,
  errors = null,
  register = null,
  name = null,
  isRequired = false,
  inlineLabel = true,
  labelClassName = '',
  readOnly = false
}) {
  return (
    <div className="">
      <div
        className={`${
          inlineLabel ? 'tw-flex tw-w-full tw-flex-row tw-items-center' : ''
        }`}
      >
        <Radio
          // {...(register && register(`${name}`))}
          name={name}
          className={`${className}`}
          disabled={disabled}
          readOnly={readOnly}
          {...(checked && { checked })}
          {...(value && { value })}
          {...(onChange && { onChange })}
          defaultChecked={defaultChecked}
        />
        {label && (
          <FieldLabel label={label} isRequired={isRequired} className={labelClassName} />
        )}
      </div>
      {errors && errors[name] && (
        <FieldError className="tw-mt-1" error={errors[name].message} />
      )}
    </div>
  );
}

CustomRadio.propTypes = {
  label: PropTypes.string,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  value: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object,
  register: PropTypes.func,
  name: PropTypes.string,
  isRequired: PropTypes.bool,
  inlineLabel: PropTypes.bool,
  labelClassName: PropTypes.string,
  readOnly: PropTypes.bool
};
