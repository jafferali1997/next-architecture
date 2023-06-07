'use client';

import { PropTypes } from 'prop-types';
import { useState } from 'react';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import PlusIcon from '@/common/icons/plus.icon';
import SearchIcon from '@/common/icons/search-icon';
import useCategoryColumn from './use-category-column.hook';

export default function CategoryColumn({
  columnData,
  categoryLevel,
  handleClickCategory,
  categoryToRender,
  handleAddCategory
}) {
  const {
    handleButtonClick,
    showInput,
    value,
    handleAddButtonChange,
    search,
    handleSubmit,
    handleSearchButton
  } = useCategoryColumn({ handleAddCategory, categoryToRender });

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
            onChange={handleAddButtonChange}
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
          onChange={handleSearchButton}
          type="text"
        />
      </div>
      <div>
        <h4 className="h4">All Categories</h4>
      </div>
      {columnData.length !== 0 &&
        columnData
          .filter((item) => item.categoryName.includes(search))
          .map((item, index) => (
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
