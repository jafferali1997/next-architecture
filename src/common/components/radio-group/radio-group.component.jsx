'use client';

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material';
import PropTypes from 'prop-types';

// need to update
export default function CustomRadioGroup({
  radioOptions,
  name,
  register = null,
  label = null,
  defaultValue = null
}) {
  return (
    <FormControl>
      <label>{label}</label>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        {...(register && register(`${name}`))}
        defaultValue={defaultValue}
        name={name}
      >
        {radioOptions?.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
            // defaultChecked={option.defaultChecked && false}
          />
        ))}
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
      </RadioGroup>
    </FormControl>
  );
}

CustomRadioGroup.propTypes = {
  radioOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  //   className: PropTypes.string,
  //   // eslint-disable-next-line react/forbid-prop-types
  //   errors: PropTypes.object,
  //   isRequired: PropTypes.bool,
  //   inlineLabel: PropTypes.bool,
  //   labelClassName: PropTypes.string
};
