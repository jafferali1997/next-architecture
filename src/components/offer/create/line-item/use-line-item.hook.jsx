'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function useLineItem({ handleTabClick, handleTabCompleted }) {
  const [isSubmit, setIsSubmit] = useState(false);
  const handleClik = () => {
    handleTabClick('HeaderBody');
    handleTabCompleted('customer_details');
  };
  return {
    isSubmit,
    setIsSubmit,
    handleClik
  };
}

useLineItem.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
