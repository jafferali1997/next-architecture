'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDiscountGroup } from '@/provider/features/discount-group/discount-group.slice';
import { getAllPriceGroup } from '@/provider/features/price-group/price-group.slice';

export default function useProductForm(
  categories,
  handleDiscountInput,
  handlePriceInput,
  setSelectedCategory,
  selectedCategory,
  handleClickCategory
) {
  const [modalData, setModalData] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const [categoryToMap, setCategoryToMap] = useState([]);
  const [parentCategory, setParentCategory] = useState([]);
  const dispatch = useDispatch();
  const priceGroupList = useSelector((state) => state.priceGroup.getAll);
  const discountGroupList = useSelector((state) => state.discountGroup.getAll);

  useEffect(() => {
    dispatch(getAllPriceGroup());
    dispatch(getAllDiscountGroup());
  }, []);

  useEffect(() => {
    if (categories?.length >= 1) {
      if (
        categoryId &&
        categories.find((category) => category.categoryToRender === categoryId)
      ) {
        setCategoryToMap([
          ...categories.find((category) => category.categoryToRender === categoryId)
            .categories
        ]);
      } else {
        setCategoryToMap([...categories[0].categories]);
      }
    }
  }, [categories, categoryId]);

  const handleModalData = (type, index = null, data = null) => {
    switch (type) {
      case 'updatePrice':
        setModalData([
          {
            button: 'Update',
            id: index,
            label: 'Group Name',
            type: 'select',
            value: data.id,
            options: priceGroupList?.data?.map((item) => {
              return { label: item.priceGroupName, value: item.id };
            })
          },
          { id: index, label: 'price', value: data.price, type: 'number' }
        ]);
        break;
      case 'createPrice':
        setModalData([
          {
            button: 'Create',
            label: 'Group Name',
            type: 'select',
            options: priceGroupList?.data?.map((item) => {
              return { label: item.priceGroupName, value: item.id };
            }),
            value: ''
          },
          { label: 'price', value: 0, type: 'number' }
        ]);
        break;
      case 'updateDiscount':
        setModalData([
          {
            button: 'Update',
            id: index,
            label: 'Group Name',
            type: 'select',
            options: discountGroupList?.data?.map((item) => {
              return { label: item.discountGroupName, value: item.id };
            }),
            value: data.id
          },
          { id: index, label: 'discount', value: data.discount }
        ]);
        break;
      case 'createDiscount':
        setModalData([
          {
            button: 'Create',
            label: 'Group Name',
            type: 'select',
            value: '',
            options: discountGroupList?.data?.map((item) => {
              return { label: item.discountGroupName, value: item.id };
            })
          },
          { label: 'discount', value: '' }
        ]);
        break;
    }
    setOpenPopup(true);
  };

  const handleModalSubmit = (data) => {
    console.log(data);
    if (data[0].id && data[1].label === 'discount') {
      handleDiscountInput(
        {
          id: data[0].value,
          discountGroupName: data[0].options.find((item) => item.value === data[0].value)
            .label,
          discount: data[1].value
        },
        data[0].id
      );
    }

    if (data[0].id && data[1].label === 'price') {
      handlePriceInput(
        {
          id: data[0].value,
          priceGroupName: data[0].options.find((item) => item.value === data[0].value)
            .label,
          price: data[1].value
        },
        data[0].id
      );
    }
    if (!data[0].id && data[1].label === 'discount') {
      handleDiscountInput({
        id: data[0].value,
        discountGroupName: data[0].options.find((item) => item.value === data[0].value)
          .label,
        discount: data[1].value
      });
    }

    if (!data[0].id && data[1].label === 'price') {
      handlePriceInput({
        id: data[0].value,
        priceGroupName: data[0].options.find((item) => item.value === data[0].value)
          .label,
        price: data[1].value
      });
    }
  };

  const handleParentCategory = (item) => {
    setParentCategory([...parentCategory, item]);
  };

  const handleClickSubCategory = (item) => {
    setCategoryId(item.id);
    handleParentCategory(item);
    handleClickCategory(item.id, item.categoryLevel + 1);
  };

  const handleSelectCategory = (data) => {
    setSelectedCategory([...selectedCategory, [...parentCategory, data]]);
  };

  const handleClickParentCategory = (item) => {
    setCategoryId(item.parentCategoryId ? item.parentCategoryId : 0);
    setParentCategory([...parentCategory.slice(0, -1)]);
  };

  const handleRemoveSelectedCategory = (categoryIndex) => {
    setSelectedCategory([
      ...selectedCategory.filter((item, index) => index !== categoryIndex)
    ]);
  };

  return {
    parentCategory,
    handleClickParentCategory,
    handleClickSubCategory,
    categoryToMap,
    handleSelectCategory,
    handleRemoveSelectedCategory,
    handleModalData,
    modalData,
    openPopup,
    setOpenPopup,
    handleModalSubmit
  };
}
