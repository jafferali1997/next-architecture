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
  handleDeleteCategory,
  handleRemoveColumn,
  borderClass
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
    <div
      className={`${borderClass} tw-flex tw-h-[600px] tw-w-[300px] tw-flex-col tw-gap-[16px] tw-overflow-y-auto tw-px-[20px] tw-py-[30px]`}
    >
      <div className="tw-flex tw-items-center tw-justify-between">
        <div className="tw-flex tw-items-center tw-gap-3">
          {borderClass && (
            <div className="tw-p-1 hover:tw-cursor-pointer hover:tw-border hover:tw-border-solid hover:tw-border-disabled-input">
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  handleRemoveColumn(categoryLevel);
                }}
              >
                <path
                  d="M6.00283 11.2293C5.90408 11.2299 5.80619 11.211 5.71478 11.1736C5.62336 11.1363 5.54021 11.0813 5.4701 11.0117L0.968187 6.50981C0.828439 6.36923 0.75 6.17906 0.75 5.98084C0.75 5.78262 0.828439 5.59245 0.968187 5.45186L5.4701 0.949951C5.61364 0.827029 5.79827 0.762797 5.98711 0.770091C6.17595 0.777385 6.35508 0.855667 6.48871 0.989295C6.62233 1.12292 6.70062 1.30205 6.70791 1.49089C6.7152 1.67973 6.65097 1.86436 6.52805 2.0079L2.55886 5.97709L6.52805 9.94627C6.63341 10.0508 6.70542 10.1842 6.73497 10.3296C6.76452 10.475 6.75029 10.6259 6.69407 10.7633C6.63785 10.9006 6.54218 11.0182 6.41914 11.1011C6.2961 11.1841 6.15122 11.2287 6.00283 11.2293Z"
                  fill="#7E7D7D"
                />
              </svg>
            </div>
          )}

          <h3 className="h3 tw-whitespace-nowrap">Category Lvl {categoryLevel}</h3>
        </div>
        {showInput ? (
          <div className="hover:tw-cursor-pointer" onClick={handleButtonClick}>
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3751_91735)">
                <path
                  d="M17.5323 12.0322H9.46774C8.93548 12.0322 8.5 12.4677 8.5 13C8.5 13.5322 8.93548 13.9677 9.46774 13.9677H17.5323C18.0645 13.9677 18.5 13.5322 18.5 13C18.5 12.4677 18.0645 12.0322 17.5323 12.0322Z"
                  fill="#047857"
                />
              </g>
              <rect
                x="0.952148"
                y="0.75"
                width="25.0953"
                height="24.5"
                rx="3.25"
                stroke="#047857"
                stroke-width="1.5"
              />
              <defs>
                <clipPath id="clip0_3751_91735">
                  <rect
                    width="10"
                    height="10"
                    fill="white"
                    transform="translate(8.5 8)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        ) : (
          <div onClick={handleButtonClick}>
            <img
              src="/assets/icons/add_button.svg"
              alt=""
              className="tw-2-[26px] tw-h-[26px] hover:tw-cursor-pointer"
            />
          </div>
        )}
      </div>
      {showInput && (
        <>
          <CustomInput
            value={value}
            onChange={handleAddButtonChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
            type="text"
            placeholder="Enter Category"
          />
          <CustomButton
            text="Add Category"
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
      <Dialog open={openPopup ?? false}>
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
  handleUpdateCategory: PropTypes.func.isRequired,
  handleRemoveColumn: PropTypes.func.isRequired,
  borderClass: PropTypes.string
};
