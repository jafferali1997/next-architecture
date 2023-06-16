'use client';

import { enqueueSnackbar } from 'notistack';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPriceGroup } from '@/provider/features/price-group/price-group.slice';
import { getAllDiscountGroup } from '@/provider/features/discount-group/discount-group.slice';

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
  const [openDropdown, setOpenDropdown] = useState(false);
  const [search, setSearch] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [categoryToMap, setCategoryToMap] = useState([]);
  const [parentCategory, setParentCategory] = useState([]);
  const [filteredPriceGroup, setFilteredPriceGroup] = useState([]);
  const [filteredDiscountGroup, setFilteredDiscountGroup] = useState([]);
  const dispatch = useDispatch();
  const ref = useRef();
  const priceGroupList = useSelector((state) => state.priceGroup.getAll);
  const discountGroupList = useSelector((state) => state.discountGroup.getAll);

  useEffect(() => {
    if (priceGroupList.isSuccess) {
      setFilteredPriceGroup([
        ...priceGroupList.data.map((item) => {
          return { label: item.priceGroupName, value: item.id };
        })
      ]);
    }
  }, [priceGroupList]);

  useEffect(() => {
    if (discountGroupList.isSuccess) {
      setFilteredDiscountGroup([
        ...discountGroupList.data.map((item) => {
          return { label: item.discountGroupName, value: item.id };
        })
      ]);
    }
  }, [discountGroupList]);

  useEffect(() => {
    dispatch(getAllPriceGroup());
    dispatch(getAllDiscountGroup());
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

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
            options: [
              ...filteredPriceGroup,
              { label: data.priceGroupName, value: data.id }
            ]
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
            options: filteredPriceGroup,
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
            options: [
              ...filteredDiscountGroup,
              { label: data.discountGroupName, value: data.id }
            ],
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
            options: filteredDiscountGroup
          },
          { label: 'discount', value: '' }
        ]);
        break;
    }
    setOpenPopup(true);
  };

  const handleFilteredPriceGroup = (type, id) => {
    if (type === 'Create') {
      setFilteredPriceGroup([...filteredPriceGroup.filter((item) => item.value !== id)]);
    }
    if (type === 'Delete') {
      setFilteredPriceGroup([
        ...filteredPriceGroup,
        ...priceGroupList.data.filter((item) => item.value === id)
      ]);
    }
  };

  const handleFilteredDiscountGroup = (type, id) => {
    if (type === 'Create') {
      setFilteredDiscountGroup([
        ...filteredDiscountGroup.filter((item) => item.value !== id)
      ]);
    }
    if (type === 'Delete') {
      setFilteredDiscountGroup([
        ...filteredDiscountGroup,
        ...discountGroupList.data.filter((item) => item.value === id)
      ]);
    }
  };

  const handleModalSubmit = (data) => {
    if (data[0].id >= 0 && data[1].label === 'discount') {
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

    if (data[0].id >= 0 && data[1].label === 'price') {
      handlePriceInput(
        {
          id: data[0].value,
          priceGroupName: data[0].options.find((item) => item.value === data[0].value)
            .label,
          price: Number(data[1].value)
        },
        data[0].id
      );
    }
    if (
      (data[0].id === null || data[0].id === undefined) &&
      data[1].label === 'discount'
    ) {
      handleFilteredDiscountGroup('Create', data[0].value);
      handleDiscountInput({
        id: data[0].value,
        discountGroupName: data[0].options.find((item) => item.value === data[0].value)
          .label,
        discount: data[1].value
      });
    }

    if ((data[0].id === null || data[0].id === undefined) && data[1].label === 'price') {
      handleFilteredPriceGroup('Create', data[0].value);
      handlePriceInput({
        id: data[0].value,
        priceGroupName: data[0].options.find((item) => item.value === data[0].value)
          .label,
        price: Number(data[1].value)
      });
    }
  };

  const handleDeleteGroup = (index, data) => {
    if (data.price !== undefined) {
      handleFilteredPriceGroup('Delete', data.id);
      handlePriceInput(null, index, true);
    }
    if (data.discount !== undefined) {
      handleFilteredDiscountGroup('Delete', data.id);
      handleDiscountInput(null, index, true);
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
    if (!selectedCategory.find((item) => item[item.length - 1].id === data.id)) {
      setSelectedCategory([...selectedCategory, [...parentCategory, data]]);
    } else {
      enqueueSnackbar('Category already selected', {
        variant: 'error'
      });
    }
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
    handleModalSubmit,
    handleDeleteGroup,
    ref,
    openDropdown,
    setOpenDropdown,
    setSearch,
    search
  };
}
