import PropTypes from 'prop-types';

/**
 * @param className will accept the css classes
 * @returns functional component of SVG icon
 */

export default function ArrowIcon({ className }) {
  return (
    <svg
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464467C11.9763 0.269205 11.6597 0.269205 11.4645 0.464467C11.2692 0.659729 11.2692 0.976312 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM1 4.5L15 4.5L15 3.5L1 3.5L1 4.5Z"
        fill="#E4E4E4"
      />
    </svg>
  );
}

ArrowIcon.propTypes = {
  className: PropTypes.string
};
