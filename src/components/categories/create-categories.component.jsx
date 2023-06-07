'use client';

import { PropTypes } from 'prop-types';
import { useState } from 'react';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import PlusIcon from '@/common/icons/plus.icon';
import SearchIcon from '@/common/icons/search-icon';
import useCreateCategories from './use-create-categories.hooks';

export default function CreateCategories() {
  const { handleAddCategory, categories, handleClickCategory } = useCreateCategories();
  
  return (
    <>
      <div className="tw-flex tw-items-center tw-gap-[16px] tw-p-[24px]">
        <img src="/assets/images/back-btn.svg" alt="back" />
        <h2 className="admin-top-heading">Create Category</h2>
        <p className="admin-top-p">Category ID #</p>{' '}
        <span className="header-span">10075</span>
      </div>
      <div className="category-box-grid-4col common-box tw-m-auto tw-h-[100vh] tw-w-[95%] tw-p-0">
        {categories.map((item) => (
          <CategoryColumn
            columnData={item.categories}
            categoryToRender={item.categoryToRender}
            categoryLevel={item.categoryLevel}
            handleClickCategory={handleClickCategory}
            handleAddCategory={handleAddCategory}
          />
        ))}
        {/* <div className="tw-flex tw-flex-col tw-gap-[16px]  tw-px-[20px] tw-py-[30px]">
          <div className="tw-flex tw-items-center tw-justify-between  ">
            <h3 className="h3 tw-whitespace-nowrap">Product Category</h3>
            <CustomButton
              text="Add"
              startIcon={<PlusIcon />}
              onClick={handleButtonClick}
              className="btn-secondary tw-w-[72px]"
            />
          </div>
          {showInput && (
            <>
              <CustomInput type="text" placeholder="Enter Category" />
              <CustomButton
                text="Add"
                startIcon={<PlusIcon />}
                onClick={handleButtonClick}
                className="btn-primary"
              />
            </>
          )}
          <div>
            <CustomInput
              startIcon={<SearchIcon />}
              className="tw-bg-secondary-light-blue"
              placeholder="Search"
              type="text"
            />
          </div>
          <div>
            <h4 className="h4">All Categories</h4>
          </div>
          <div className="tw-flex tw-h-[34px] tw-w-full tw-items-center tw-justify-between tw-rounded-md tw-border tw-border-solid tw-border-disabled-input tw-bg-secondary-white tw-px-[12px] tw-py-[8px]">
            <h5 className="h5">Shirts</h5>
            <img src="/assets/images/arwo-icon.svg" alt="arwo-icon" />
          </div>
        </div>
        <div className="tw-border-l tw-border-solid tw-border-l-disabled-input tw-px-[20px]">
          2
        </div>
        <div className="tw-border-l tw-border-solid tw-border-l-disabled-input tw-px-[20px]">
          3
        </div>
        <div className="tw-border-l tw-border-solid tw-border-l-disabled-input tw-px-[20px]">
          4
        </div> */}
      </div>
    </>
  );
}

function CategoryColumn({
  columnData,
  categoryLevel,
  handleClickCategory,
  categoryToRender,
  handleAddCategory
}) {
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState();
  const handleButtonClick = () => {
    setShowInput(true);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    handleAddCategory(categoryToRender, value);
  };

  return (
    <div className="tw-flex tw-flex-col tw-gap-[16px]  tw-px-[20px] tw-py-[30px]">
      <div className="tw-flex tw-items-center tw-justify-between  ">
        <h3 className="h3 tw-whitespace-nowrap">{categoryLevel}</h3>
        <CustomButton
          text="Add"
          startIcon={<PlusIcon />}
          onClick={handleButtonClick}
          className="btn-secondary tw-w-[72px]"
        />
      </div>
      {showInput && (
        <>
          <CustomInput
            value={value}
            onChange={onChange}
            type="text"
            placeholder="Enter Category"
          />
          <CustomButton
            text="Add"
            startIcon={<PlusIcon />}
            onClick={handleSubmit}
            className="btn-primary"
          />
        </>
      )}
      <div>
        <CustomInput
          startIcon={<SearchIcon />}
          className="tw-bg-secondary-light-blue"
          placeholder="Search"
          type="text"
        />
      </div>
      <div>
        <h4 className="h4">All Categories</h4>
      </div>
      {columnData.length &&
        columnData.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleClickCategory(item.id, item.categoryLevel + 1)}
            className="tw-flex tw-h-[34px] tw-w-full tw-items-center tw-justify-between tw-rounded-md tw-border tw-border-solid tw-border-disabled-input tw-bg-secondary-white tw-px-[12px] tw-py-[8px]"
          >
            <h5 className="h5">{item.categoryName}</h5>
            <img src="/assets/images/arwo-icon.svg" alt="arwo-icon" />
          </div>
        ))}
    </div>
  );
}

CategoryColumn.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  columnData: PropTypes.array.isRequired,
  categoryLevel: PropTypes.number.isRequired,
  handleClickCategory: PropTypes.func.isRequired,
  categoryToRender: PropTypes.number.isRequired,
  handleAddCategory: PropTypes.func.isRequired
};
