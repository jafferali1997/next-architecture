import PropTypes from 'prop-types';

/**
 * @param className will accept the css classes
 * @returns functional component of SVG icon
 */

export default function DatabaseIcon({ className }) {
  return (
    <svg
      width="15"
      height="17"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M7.03125 5.21191C10.4177 5.21191 14.0625 4.47851 14.0625 2.86816C14.0625 1.25782 10.4177 0.493164 7.03125 0.493164C3.64478 0.493164 0 1.25782 0 2.86816C0 4.47851 3.64478 5.21191 7.03125 5.21191Z"
        fill="white"
      />
      <path
        d="M7.03125 6.14939C5.09241 6.14939 1.50072 5.83726 0.0188125 4.60251C0.00940625 4.60251 0.00940625 4.59314 0 4.59314C0 6.48314 3.69069 6.91489 5.625 7.04001V7.97751C3.9375 7.87439 1.36875 7.53683 0 6.48689V6.61814C0 8.47433 4.60313 8.96189 7.03125 8.96189C9.45938 8.96189 14.0625 8.47433 14.0625 6.61814V4.59314C12.2984 5.8542 9.18616 6.14939 7.03125 6.14939ZM7.5 8.02439H6.5625V7.08689H7.5V8.02439Z"
        fill="white"
      />
      <path
        d="M7.03125 9.89941C5.0985 9.89941 1.48156 9.58066 0.0188125 8.36191C0.00940625 8.36191 0.00940625 8.35254 0 8.35254C0 10.2302 3.72228 10.667 5.625 10.79V11.7275C3.9375 11.6244 1.36875 11.2869 0 10.2369C0 12.3651 4.97106 12.7119 7.03125 12.7119C9.45938 12.7119 14.0625 12.2244 14.0625 10.3682V8.35254C12.307 9.60607 9.14112 9.89941 7.03125 9.89941ZM7.5 11.7744H6.5625V10.8369H7.5V11.7744Z"
        fill="white"
      />
      <path
        d="M0.0188125 12.1119C0.00940625 12.1119 0.00940625 12.1025 0 12.1025C0 13.9802 3.72228 14.417 5.625 14.54V15.4775C3.9375 15.3744 1.36875 15.0369 0 13.9869C0 16.1178 4.92003 16.4932 7.03125 16.4932C10.4156 16.4932 14.0625 15.7306 14.0625 14.1182V12.1025C12.1875 13.5557 8.05313 13.6494 7.03125 13.6494C6.00938 13.6494 1.90319 13.5557 0.0188125 12.1119ZM7.5 15.5244H6.5625V14.5869H7.5V15.5244Z"
        fill="white"
      />
    </svg>
  );
}

DatabaseIcon.propTypes = {
  className: PropTypes.string
};
