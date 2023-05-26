'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

export default function CustomButton({
  text,
  onClick,
  className = '',
  type = 'button',
  variant = 'contained',
  disabled = false,
  href = null
}) {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant={variant}
      className={`${className}`}
      href={href}
    >
      {text}
    </Button>
  );
}

// CustomButton.defaultProps = {
//   className: '',
//   type: 'button',
//   variant: 'contained',
//   disabled: false,
//   href: '#'
//   //   endIcon: null,
//   //   startIcon: null,
// };

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string
  //   endIcon: PropTypes.element,
  //   startIcon: PropTypes.element
};
