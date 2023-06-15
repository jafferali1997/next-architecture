'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function useAddCustomer({ handleTabClick, handleTabCompleted }) {
  const [isSubmit, setIsSubmit] = useState(false);
  const handleClik = () => {
    handleTabClick('header_body');
    handleTabCompleted('customer_details');
  };
  return {
    isSubmit,
    setIsSubmit,
    handleClik
  };
}
useAddCustomer.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
