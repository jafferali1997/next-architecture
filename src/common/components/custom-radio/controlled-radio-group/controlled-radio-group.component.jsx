import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import PropTypes from 'prop-types';

export default function ControlledRadioGroup({
  radioOptions,
  selectedValue,
  setSelectedValue,
  register,
  name
  //   errors
}) {
  return (
    <div>
      <FormControl>
        <RadioGroup
          name={name}
          value={selectedValue}
          //   register={register}
          //   errors={errors}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          {radioOptions.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

ControlledRadioGroup.propTypes = {
  radioOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  selectedValue: PropTypes.string.isRequired,
  setSelectedValue: PropTypes.func.isRequired,
  register: PropTypes.func,
  name: PropTypes.string
  //   errors: PropTypes.object.isRequired
};
