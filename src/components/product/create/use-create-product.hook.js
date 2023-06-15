'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getOrCreateTag } from '@/provider/features/tag/tag.slice';
import useCreateCategories from '@/components/categories/use-create-categories.hooks';
import { createProduct, updateProduct } from '@/provider/features/product/product.slice';

const validationSchema = yup.object({
  // Define your validation rules here.
  productName: yup.string().required('Product name is required'),
  description: yup.string().required('Description is required'),
  grossPrice: yup.number().required('Gross price is required'),
  netPrice: yup.number().required('Net price is required'),
  minSellingPrice: yup.number().required('Min selling price is required'),
  manufacturer: yup.string().required('Manufacture is required'),
  unit: yup.string().required('Unit is required'),
  purchasePrice: yup.number().required('Purchase price is required'),
  quantity: yup.number().required('Number of pieces is required')
});

export default function useCreateProduct(id = null) {
  const dispatch = useDispatch();
  const getOrCreateTagData = useSelector((state) => state.tag.getOrCreate);
  const [priceInputValues, setPriceInputValues] = useState([]);
  const [discountInputValues, setDiscountInputValues] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const { categories, handleClickCategory } = useCreateCategories();
  const {
    handleSubmit,
    register,
    setError,
    control,
    formState: { errors },
    clearErrors
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  useEffect(() => {
    if (getOrCreateTagData?.isError) {
      setSelectedTag([...selectedTag]);
    }
  }, [getOrCreateTagData]);

  useEffect(() => {
    if (selectedCategory.length && errors.category) {
      clearErrors('category');
    }
  }, [selectedCategory]);

  const handlePriceInput = (data, indexToChange = null, toDelete = false) => {
    if (indexToChange !== null && indexToChange !== undefined) {
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
    if (indexToChange !== null && indexToChange !== undefined) {
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
    if (selectedCategory.length) {
      const payload = {
        ...data,
        productCategorys: selectedCategory.map((item) => item[item.length - 1].id),
        priceGroups: priceInputValues.map((item) => {
          return { id: item.id, price: item.price };
        }),
        discountGroups: discountInputValues.map((item) => {
          return { id: item.id, discount: item.discount };
        }),
        tags: selectedTag.map((item) => item.id)
      };
      if (id) {
        dispatch(updateProduct({ payload: { data: payload, id } }));
      } else {
        dispatch(createProduct({ payload }));
      }
    } else {
      setError('category', { message: 'category is required' });
    }
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
    selectedCategory,
    setSelectedCategory,
    setPriceInputValues,
    setDiscountInputValues,
    handleClickCategory,
    setSelectedTag,
    control
  };
}
