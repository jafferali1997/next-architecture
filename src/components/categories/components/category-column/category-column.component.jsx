'use client';

import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { PropTypes } from 'prop-types';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import PlusIcon from '@/common/icons/plus.icon';
import SearchIcon from '@/common/icons/search-icon';
import MenuDropDown from '../menu-drop-down/menu-drop-down.component';
import useCategoryColumn from './use-category-column.hook';

export default function CategoryColumn({
  columnData,
  categoryLevel,
  handleClickCategory,
  categoryToRender,
  handleAddCategory,
  handleUpdateCategory,
  handleDeleteCategory
}) {
  const {
    handleButtonClick,
    showInput,
    value,
    handleAddButtonChange,
    search,
    handleSubmit,
    handleSearchButton,
    openPopup,
    setOpenPopup,
    handleButtonClickedit,
    idToUpdateCategory,
    setUpdateValue,
    updateValue,
    ref,
    clicked,
    setClicked
  } = useCategoryColumn({ handleAddCategory, categoryToRender });

  return (
    <div className="tw-flex tw-h-[600px] tw-w-[300px] tw-flex-col tw-gap-[16px] tw-overflow-y-auto tw-px-[20px] tw-py-[30px]">
      <div className="tw-flex tw-items-center tw-justify-between">
        <h3 className="h3 tw-whitespace-nowrap">Category Lvl {categoryLevel}</h3>
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
              onClick={(e) => {
                if (!e.target.id.includes('three-dot')) {
                  handleClickCategory(item.id, item.categoryLevel + 1);
                  setClicked({ id: item.id, parentCategoryId: item.parentCategoryId });
                }
              }}
              className={`${
                clicked.id === item.id &&
                clicked.parentCategoryId === item.parentCategoryId
                  ? 'tw-bg-slate-200'
                  : ''
              } cate-btn tw-flex tw-h-[34px] tw-w-full tw-items-center tw-justify-between tw-rounded-md tw-border tw-border-solid tw-border-disabled-input tw-bg-secondary-white tw-px-[12px] tw-py-[8px]`}
            >
              <h5 className="h5">{item.categoryName}</h5>
              <MenuDropDown
                handleButtonClickedit={handleButtonClickedit}
                id={item.id}
                value={item.categoryName}
                handleDeleteCategory={handleDeleteCategory}
              />
            </div>
          ))}
      <Dialog open={openPopup}>
        <div ref={ref} className="tw-w-[389px]">
          <div>
            <DialogTitle>Category</DialogTitle>
          </div>
          <DialogContent>
            <CustomInput
              placeholder="Category"
              label="Category Name"
              type="text"
              value={updateValue}
              onChange={(e) => setUpdateValue(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <CustomButton
              onClick={() => setOpenPopup(false)}
              className=" btn-cancel"
              text="Cancel"
            />
            <CustomButton
              className="btn btn-primary "
              text="Update"
              onClick={() => {
                setOpenPopup(false);
                handleUpdateCategory(idToUpdateCategory, updateValue);
                setUpdateValue('');
              }}
            />
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}

CategoryColumn.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  columnData: PropTypes.array.isRequired,
  categoryLevel: PropTypes.number.isRequired,
  handleClickCategory: PropTypes.func.isRequired,
  categoryToRender: PropTypes.number.isRequired,
  handleAddCategory: PropTypes.func.isRequired,
  handleDeleteCategory: PropTypes.func.isRequired,
  handleUpdateCategory: PropTypes.func.isRequired
};
