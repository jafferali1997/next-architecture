'use client';

import CategoryColumn from './components/category-column/category-column.component';
import useCreateCategories from './use-create-categories.hooks';

export default function CreateCategories() {
  const {
    handleAddCategory,
    categories,
    handleClickCategory,
    handleDeleteCategory,
    handleUpdateCategory
  } = useCreateCategories();
  return (
    <>
      <div className="tw-flex tw-items-center tw-gap-[16px] tw-p-[24px]">
        <img src="/assets/images/back-btn.svg" alt="back" />
        <h2 className="admin-top-heading">Create Category</h2>
        <p className="admin-top-p">Category ID #</p>{' '}
        <span className="header-span">10075</span>
      </div>
      <div className="category-box-grid-4col common-box tw-m-auto tw-min-h-[100vh] tw-w-[95%] tw-overflow-y-auto tw-p-0">
        {categories.map((item) => (
          <CategoryColumn
            columnData={item.categories}
            categoryToRender={item.categoryToRender}
            categoryLevel={item.categoryLevel}
            handleClickCategory={handleClickCategory}
            handleAddCategory={handleAddCategory}
            handleDeleteCategory={handleDeleteCategory}
            handleUpdateCategory={handleUpdateCategory}
          />
        ))}
      </div>
    </>
  );
}
