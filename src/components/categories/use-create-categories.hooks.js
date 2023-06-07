'use client';

/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createProductCategory,
  deleteProductCategory,
  getAllProductCategory,
  updateProductCategory
} from '@/provider/features/product-category/product-category.slice';

export default function useCreateCategories() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([
    {
      categoryToRender: 0,
      categoryLevel: 1,
      categories: []
    }
  ]);
  const [categoryLevelToGet, setCategoryLevelToGet] = useState();
  const [categoryToRender, setCategoryToRender] = useState(0);
  const allProductCategoryRes = useSelector((state) => state.productCategory.getAll);
  const createProductCategoryRes = useSelector((state) => state.productCategory.create);
  const updateProductCategoryRes = useSelector((state) => state.productCategory.update);
  const deleteProductCategoryRes = useSelector((state) => state.productCategory.delete);

  const handleCategories = (array) => {
    setCategories(array);
  };

  const getAllCategoryApi = (data) => {
    const { categoryLevelToGet, parentCategoryId, categoryLevel } = data;
    dispatch(
      getAllProductCategory({
        payload: {
          condition: {
            categoryLevel:
              categoryLevel === 1
                ? categoryLevel
                : categoryLevelToGet ?? categoryLevel - 1,
            ...(parentCategoryId && { parentCategoryId })
          }
        }
      })
    );
  };

  useEffect(() => {
    getAllCategoryApi({ categoryLevelToGet: 1 });
  }, [dispatch]);

  useEffect(() => {
    if (allProductCategoryRes.isSuccess) {
      if (
        categories.find(
          (item) => item.categoryLevel === allProductCategoryRes.data[0].categoryLevel
        )
      ) {
        handleCategories([
          ...categories.map((item) => {
            if (item.categoryLevel === allProductCategoryRes.data[0].categoryLevel) {
              return {
                ...item,
                categoryToRender: allProductCategoryRes.data[0].parentCategoryId ?? 0,
                categories: allProductCategoryRes.data
              };
            }
            return item;
          })
        ]);
      } else {
        handleCategories([
          ...categories,
          {
            categoryToRender: allProductCategoryRes.data[0].parentCategoryId,
            categoryLevel: allProductCategoryRes.data[0].categoryLevel,
            categories: allProductCategoryRes.data
          }
        ]);
      }
    }
    if (allProductCategoryRes.message === 'Record Not Found') {
      if (categories.find((item) => item.categoryLevel === categoryLevelToGet)) {
        handleCategories([
          ...categories.map((item) => {
            if (item.categoryLevel === categoryLevelToGet) {
              return {
                ...item,
                categoryToRender,
                categories: []
              };
            }
            return item;
          })
        ]);
      } else {
        handleCategories([
          ...categories,
          {
            categoryToRender,
            categoryLevel: categoryLevelToGet,
            categories: []
          }
        ]);
      }
    }
  }, [allProductCategoryRes]);

  const handleAddCategory = (parentCategoryId, categoryName) => {
    dispatch(
      createProductCategory({
        payload: { parentCategoryId, categoryName },
        successCallBack: getAllCategoryApi
      })
    );
  };

  const handleDeleteCategory = (id) => {
    dispatch(
      deleteProductCategory({
        payload: id,
        successCallBack: getAllCategoryApi
      })
    );
  };

  const handleUpdateCategory = (id, data) => {
    dispatch(
      updateProductCategory({
        payload: { id, data },
        successCallBack: getAllCategoryApi
      })
    );
  };

  const handleClickCategory = (id, categoryLevel) => {
    if (
      !categories.find(
        (category) =>
          category.categoryLevel === categoryLevel && category.categoryToRender === id
      )
    ) {
      setCategoryLevelToGet(categoryLevel);
      setCategoryToRender(id);
      getAllCategoryApi({ categoryLevelToGet: categoryLevel, parentCategoryId: id });
    }
    handleCategories([
      ...categories.filter((item) => item.categoryLevel <= categoryLevel)
    ]);
  };

  return {
    categories,
    handleClickCategory,
    handleAddCategory
  };
}
