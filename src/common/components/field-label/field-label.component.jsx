import PropTypes from 'prop-types';

export default function FieldLabel({ label, isRequired = false, className = '' }) {
  return (
    <label
      className={`tw-mr-1 tw-flex tw-min-w-fit tw-flex-row tw-text-secondary-black ${className}`}
    >
      {label} {isRequired && <span className="tw-text-danger">*</span>}
    </label>
  );
}

FieldLabel.propTypes = {
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  className: PropTypes.string
};
