'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

/**
 * Create custom button using mui button
 * @param text to be displayed on button
 * @param onClick function to be called on click
 * @param className class name to be applied on button
 * @param type type of button
 * @param variant variant of button (primary, outline, etc)
 * @param disabled to button disabled
 * @param href to be used as link
 * @param endIcon icon to be displayed at end of button
 * @param startIcon icon to be displayed at start of button
 * @returns component
 */

/**
 * btn-primary: display the primary button
 * btn-secondary: display the secondary button
 * btn-secondary: display the secondary button
 * btn-outline: display the outline button
 */
export default function CustomButton({
  text,
  onClick = null,
  className = '',
  type = 'button',
  variant = '',
  disabled = false,
  href = null,
  endIcon = null,
  startIcon = null
}) {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant={variant}
      className={`btn ${className}`}
      href={href}
      disabled={disabled}
      endIcon={endIcon}
      startIcon={startIcon}
    >
      {text}
    </Button>
  );
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  endIcon: PropTypes.element,
  startIcon: PropTypes.element
};
