'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getOrCreateTag } from '@/provider/features/tag/tag.slice';
import useCreateCategories from '@/components/categories/use-create-categories.hooks';

export default function UseCreateProduct() {
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState(['']);
  const [priceInputValues, setPriceInputValues] = useState(['']);
  const [discountInputValues, setDiscountInputValues] = useState(['']);
  const [selectedTag, setSelectedTag] = useState([]);

  const { categories, handleClickCategory } = useCreateCategories();

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

  const handleSelectedTags = (data) => {
    setSelectedTag([...selectedTag, data]);
  };

  const handleTags = (data) => {
    dispatch(
      getOrCreateTag({ payload: { tagName: data }, successCallback: handleSelectedTags })
    );
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
    handleTags
  };
}
