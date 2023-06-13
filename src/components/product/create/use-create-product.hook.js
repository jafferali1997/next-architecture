'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getOrCreateTag } from '@/provider/features/tag/tag.slice';
import useCreateCategories from '@/components/categories/use-create-categories.hooks';

export default function useCreateProduct() {
  const dispatch = useDispatch();
  const getOrCreateTagData = useSelector((state) => state.tag.getOrCreate);
  const [priceInputValues, setPriceInputValues] = useState([]);
  const [discountInputValues, setDiscountInputValues] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);

  const { categories, handleClickCategory } = useCreateCategories();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    if (getOrCreateTagData?.isError) {
      setSelectedTag([...selectedTag]);
    }
  }, [getOrCreateTagData]);

  const handlePriceInput = (data, indexToChange = null, toDelete = false) => {
    if (indexToChange !== null || indexToChange !== undefined) {
      if (toDelete) {
        setPriceInputValues([
          ...priceInputValues.filter((item, index) => index !== indexToChange)
        ]);
      } else {
        setPriceInputValues([
          ...priceInputValues.map((item, index) => {
            if (index === indexToChange) {
              return data;
            }
            return item;
          })
        ]);
      }
    } else {
      setPriceInputValues([...priceInputValues, data]);
    }
  };
  const handleDiscountInput = (data, indexToChange = null, toDelete = false) => {
    if (indexToChange !== null || indexToChange !== undefined) {
      if (toDelete) {
        setDiscountInputValues([
          ...discountInputValues.filter((item, index) => index !== indexToChange)
        ]);
      } else {
        setDiscountInputValues([
          ...discountInputValues.map((item, index) => {
            if (index === indexToChange) {
              return data;
            }
            return item;
          })
        ]);
      }
    } else {
      setDiscountInputValues([...discountInputValues, data]);
    }
  };

  const handleSelectedTags = (data) => {
    setSelectedTag([...selectedTag, data]);
  };

  const handleTags = (data) => {
    if (data.length > selectedTag.length) {
      dispatch(
        getOrCreateTag({
          payload: { tagName: data[data.length - 1] },
          successCallback: handleSelectedTags
        })
      );
    }
    if (data.length < selectedTag.length) {
      setSelectedTag([...selectedTag.filter((item) => data.includes(item.tagName))]);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return {
    priceInputValues,
    handlePriceInput,
    discountInputValues,
    handleDiscountInput,
    selectedTag,
    handleTags,
    onSubmit,
    handleSubmit,
    register,
    categories,
    errors,
    handleClickCategory
  };
}
