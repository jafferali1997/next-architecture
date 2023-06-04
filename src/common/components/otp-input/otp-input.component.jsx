'use client';

/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import useOtpInput from './use-otp-input.hook';

export default function OtpInput({
  maxInput = 4,
  value = null,
  placeholder = '-',
  onChange,
  disabled = false,
  label = null,
  isRequired = false,
  inlineLabel = false,
  labelClassName = ''
}) {
  const { valueItems, inputChangeHandler, inputKeyDownHandler } = useOtpInput(
    maxInput,
    value,
    onChange
  );

  const getInputBorderClass = (index) => {
    if (index === 0) {
      return 'tw-rounded-r-none';
    } else if (index === maxInput - 1) {
      return 'tw-rounded-l-none';
    } else {
      return 'tw-rounded-none';
    }
  };

  return (
    <div className="tw-flex tw-flex-row">
      {valueItems.map((val, index) => (
        <input
          key={`${val} - ${index}`}
          id={index}
          type="number"
          className={`input-field default-input tw-flex tw-max-w-[51px] tw-items-center tw-justify-center tw-px-3 tw-text-center hover:tw-border-text-dark-gray
          ${getInputBorderClass(index)}`}
          placeholder={placeholder}
          defaultValue={val}
          maxLength={1}
          max={1}
          disabled={disabled}
          onChange={inputChangeHandler}
          onKeyDown={inputKeyDownHandler}
        />
      ))}
    </div>
  );
}

OtpInput.propTypes = {
  maxInput: PropTypes.number,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  inlineLabel: PropTypes.bool,
  labelClassName: PropTypes.string
};
