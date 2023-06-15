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
  defaultValue = null,
  inlineRadioButtons = false
}) {
  return (
    <FormControl>
      <FormLabel id="radio-buttons-group">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="radio-buttons-group"
        {...(register && register(`${name}`))}
        name={name}
        {...(defaultValue && { defaultValue })}
        row={inlineRadioButtons}
      >
        {radioOptions?.map((option) => (
          <FormControlLabel
            {...(register && register(`${name}`))}
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
  inlineRadioButtons: PropTypes.bool
  //   className: PropTypes.string,
  //   // eslint-disable-next-line react/forbid-prop-types
  //   errors: PropTypes.object,
  //   isRequired: PropTypes.bool,
  //   inlineLabel: PropTypes.bool,
  //   labelClassName: PropTypes.string
};
