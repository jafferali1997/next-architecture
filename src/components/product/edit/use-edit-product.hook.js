'use client';

import React, { useState } from 'react';

export default function UseEditProduct() {
  const [inputValues, setInputValues] = useState(['']);
  const [priceInputValues, setPriceInputValues] = useState(['']);
  const [discountInputValues, setDiscountInputValues] = useState(['']);
  const [selectedTag, setSelectedTag] = useState(['papaya']);
  const handleAddInput = () => {
    setInputValues([...inputValues, '']);
  };
  const handleAddPriceInput = () => {
    setPriceInputValues([...priceInputValues, '']);
  };
  const handleAddDiscountInput = () => {
    setDiscountInputValues([...discountInputValues, '']);
  };

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };
  const handlePriceInputChange = (index, value) => {
    const newInputValues = [...priceInputValues];
    newInputValues[index] = value;
    setPriceInputValues(newInputValues);
  };
  const handleDiscountInputChange = (index, value) => {
    const newInputValues = [...discountInputValues];
    newInputValues[index] = value;
    setDiscountInputValues(newInputValues);
  };
  return {
    handleAddInput,
    handleInputChange,
    inputValues,
    setInputValues,
    priceInputValues,
    setPriceInputValues,
    handleAddPriceInput,
    handlePriceInputChange,
    discountInputValues,
    setDiscountInputValues,
    handleAddDiscountInput,
    handleDiscountInputChange,
    selectedTag,
    setSelectedTag
  };
}
