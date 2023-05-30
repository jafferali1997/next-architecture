/* eslint-disable react/jsx-props-no-spreading */
import { Select, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

export default function CustomSelect({ options, value, onChange, defaultValue = null }) {
  return (
    <Select
      id="demo-simple-select"
      label="Age"
      onChange={onChange}
      {...(defaultValue && { defaultValue })}
      {...(value && { value })}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  );
}

CustomSelect.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string
};
