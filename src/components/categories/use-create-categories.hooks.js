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
  const allProductCategoryRes = useSelector((state) => state.productCategory.getAll);
  const createProductCategoryRes = useSelector((state) => state.productCategory.create);
  const updateProductCategoryRes = useSelector((state) => state.productCategory.update);
  const deleteProductCategoryRes = useSelector((state) => state.productCategory.delete);

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
    console.log(allProductCategoryRes);
    if (allProductCategoryRes.isSuccess) {
      if (
        categories.find(
          (item) => item.categoryLevel === allProductCategoryRes.data[0].categoryLevel
        )
      ) {
        setCategories([
          ...categories.map((item) => {
            if (item.categoryLevel === allProductCategoryRes.data[0].categoryLevel) {
              return {
                ...item,
                categoryToRender: allProductCategoryRes.data[0].parentCategoryId,
                categories: allProductCategoryRes.data
              };
            }
            return item;
          })
        ]);
      } else {
        setCategories([
          ...categories,
          {
            categoryToRender: allProductCategoryRes.data[0].parentCategoryId,
            categoryLevel: allProductCategoryRes.data[0].categoryLevel,
            categories: allProductCategoryRes.data
          }
        ]);
      }
      if (allProductCategoryRes.message === 'Record Not Found') {
        setCategories([
          ...categories,
          {
            categoryToRender: 0,
            categoryLevel: categories[0].categories.length ? categories.length + 1 : 0,
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
        successCallback: getAllCategoryApi
      })
    );
  };

  const handleDeleteCategory = (id) => {
    dispatch(
      deleteProductCategory({
        payload: id,
        successCallback: getAllCategoryApi
      })
    );
  };

  const handleUpdateCategory = (id, data) => {
    dispatch(
      updateProductCategory({
        payload: { id, data },
        successCallback: getAllCategoryApi
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
      getAllCategoryApi({ categoryLevelToGet: categoryLevel, parentCategoryId: id });
    }
  };

  return {
    categories,
    handleClickCategory,
    handleAddCategory
  };
}
