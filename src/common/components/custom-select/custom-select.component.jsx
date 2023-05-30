/* eslint-disable react/jsx-props-no-spreading */
import { Select, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

export default function CustomSelect({
  options,
  value = null,
  onChange = null,
  defaultValue = null
}) {
  return (
    <Select
      id="demo-simple-select"
      onChange={onChange}
      className="tw-w-[300px]"
      {...(defaultValue && { defaultValue })}
      {...(value && { value })}
    >
      {options?.map((option) => (
        <MenuItem key={option.id} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
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
  defaultValue: PropTypes.string
};
