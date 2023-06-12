'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function UseCreateProduct() {
  const [inputValues, setInputValues] = useState(['']);
  const [priceInputValues, setPriceInputValues] = useState(['']);
  const [discountInputValues, setDiscountInputValues] = useState(['']);
  const [selectedTag, setSelectedTag] = useState(['papaya']);
  const [openPopup, setOpenPopup] = useState(false);
  const [priceMenuPopup, setpriceMenuPopup] = useState(false);
  const [discountMenuPopup, setdiscountMenuPopup] = useState(false);
  const [threeDot, setThreeDot] = useState(false);
  const [priceValues, setPriceValues] = useState([]);
  const [priceInputValue, setPriceInputValue] = useState('');
  const [discountValues, setDiscountValues] = useState([]);
  const [discountInputValue, setDiscountInputValue] = useState('');

  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setThreeDot(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const handlePriceMenu = () => {
    setpriceMenuPopup(!priceMenuPopup);
  };
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

  function handleAddPriceClick() {
    setPriceValues([...priceValues, priceInputValue]);
    setPriceInputValues([]);
    setPriceInputValue('');
  }
  function handleAddDiscountClick() {
    setDiscountValues([...discountValues, discountInputValue]);
    setDiscountInputValues([]);
    setDiscountInputValue('');
  }
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
    setSelectedTag,
    handlePriceMenu,
    threeDot,
    ref,
    priceInputValue,
    setPriceInputValue,
    priceValues,
    setPriceValues,
    handleAddPriceClick,
    openPopup,
    setOpenPopup,
    discountValues,
    setDiscountValues,
    discountInputValue,
    setDiscountInputValue,
    handleAddDiscountClick,
    priceMenuPopup,
    setpriceMenuPopup,
    discountMenuPopup,
    setdiscountMenuPopup
  };
}
