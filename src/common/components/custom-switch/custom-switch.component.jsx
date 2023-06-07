import { Switch } from '@mui/material';
import PropTypes from 'prop-types';
import FieldLabel from '../field-label/field-label.component';
import FieldError from '../field-error/field-error.component';

export default function CustomSwitch({
  label = null,
  defaultChecked = false,
  checked = false,
  onChange = null,
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
        <Switch
          {...(register && register(`${name}`))}
          name={name}
          className={`${className}`}
          {...(checked && checked)}
          {...(onChange && { onChange })}
          readOnly={readOnly}
          defaultChecked={defaultChecked}
          disabled={disabled}
          sx={{
            '--Switch-trackRadius': '153px',
            '--Switch-trackWidth': '56px',
            '--Switch-trackHeight': '34px',
            '--Switch-gap': '8px'
          }}
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

CustomSwitch.propTypes = {
  label: PropTypes.string,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object,
  register: PropTypes.func,
  name: PropTypes.string,
  isRequired: PropTypes.bool,
  inlineLabel: PropTypes.bool,
  labelClassName: PropTypes.string,
  readOnly: PropTypes.bool
};
