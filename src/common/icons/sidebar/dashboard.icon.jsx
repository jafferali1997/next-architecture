import PropTypes from 'prop-types';

/**
 * @param className will accept the css classes
 * @returns functional component of SVG icon
 */

export default function DashboardIcon({ className }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1112 17.8332C11.1112 18.2748 11.2987 18.6991 11.632 19.0115C11.9653 19.324 12.4179 19.4998 12.8889 19.4998H18.2221C18.6932 19.4998 19.1458 19.324 19.479 19.0115C19.8123 18.6991 19.9999 18.2748 19.9999 17.8332V14.4998C19.9999 14.0582 19.8123 13.6339 19.479 13.3215C19.1458 13.009 18.6932 12.8332 18.2221 12.8332H12.8889C12.4179 12.8332 11.9653 13.0091 11.632 13.3215C11.2987 13.6339 11.1112 14.0582 11.1112 14.4998V17.8332ZM7.55556 12.8334H5.77776C5.30652 12.8334 4.8541 13.0092 4.52084 13.3216C4.18738 13.6341 4 14.0584 4 14.5V17.8334C4 18.275 4.18741 18.6993 4.52084 19.0117C4.85412 19.3242 5.30652 19.5 5.77776 19.5H7.55556C8.02662 19.5 8.47904 19.3241 8.81248 19.0117C9.14576 18.6993 9.33332 18.275 9.33332 17.8334V14.5C9.33332 14.0584 9.14574 13.6341 8.81248 13.3216C8.47902 13.0092 8.02662 12.8334 7.55556 12.8334ZM20 6.16664C20 5.72485 19.8124 5.30072 19.4791 4.98828C19.1458 4.67567 18.6933 4.5 18.2222 4.5H5.7778C5.30656 4.5 4.85415 4.67569 4.52089 4.98828C4.18743 5.30073 4.00005 5.72485 4.00005 6.16664V9.5C4.00005 9.94162 4.18745 10.3658 4.52089 10.6784C4.85417 10.9908 5.30656 11.1666 5.7778 11.1666H18.2222C19.2045 11.1666 20 10.4208 20 9.49996L20 6.16664Z"
        fill="white"
      />
    </svg>
  );
}

DashboardIcon.propTypes = {
  className: PropTypes.string
};