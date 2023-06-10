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
      <div className="common-box tw-m-4 tw-max-h-[650px] tw-max-w-[95%] tw-p-4">
        <div className="tw-overflow-x-auto">
          <div className="tw-grid-rows tw-m-auto tw-grid tw-auto-cols-min tw-grid-flow-col tw-p-0">
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
        </div>
      </div>
    </>
  );
}
