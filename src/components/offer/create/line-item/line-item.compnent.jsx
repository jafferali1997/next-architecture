/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material/node';
import PropTypes from 'prop-types';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import Select from '@/common/components/select/select.component';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomSelect from '@/common/components/custom-select/custom-select.component';
import SearchIcon from '@/common/icons/search-icon';
import DeleteIcon from '@/common/icons/delete.icon';
import CustomSwitch from '@/common/components/custom-switch/custom-switch.component';
import TextArea from '@/common/components/text-area/text-area.component';
import EuroIcon from '@/common/icons/euro.icon';
import useLineItem from './use-line-item.hook';
import DynamicPagination from '@/common/components/pagination/pagination.component';

export default function LineItem({ handleTabClick, handleTabCompleted }) {
  const {
    isSubmit,
    setIsSubmit,
    columns,
    data,
    ids,
    isIdAdded,
    allCheckboxHandler,
    checkBoxHandler,
    handleClik,
    openPopup,
    setOpenPopup,
    handleActionClick,
    handleSaveClick,
    handleInputChangee,
    selectedRow,
    inputValue,
    ref,
    sortDirection,
    setSortDirection,
    handleDuplicate,
    handleRemove,
    onSubmit,
    handleSortClick,
    setData
  } = useLineItem({ handleTabClick, handleTabCompleted });

  return (
    <div className="personal-details-wrapper">
      <form onSubmit={onSubmit}>
        <div className="tw-flex tw-min-h-[351px]  tw-flex-col tw-items-start tw-gap-4 tw-rounded-[20px] tw-border tw-border-solid tw-border-[#E2E2E2] tw-p-4">
          <div className="content-header tw-flex tw-w-full tw-items-center tw-justify-between ">
            <h3 className="form-inner-heading">Product Table</h3>
            <div className="tw-flex tw-min-w-[900px] tw-items-center tw-justify-between">
              {ids.length !== 0 && (
                <div className="tw-w-[42px] tw-gap-2.5 tw-rounded-md tw-border tw-border-solid tw-border-disabled-input tw-px-3.5 tw-py-3">
                  <img src="/assets/icons/copy.svg" alt="" />
                </div>
              )}
              <div className="tw-w-full tw-max-w-[523px] tw-bg-secondary-gray">
                <CustomSelect
                  options={[
                    { label: 'Test 1', value: 'test1' },
                    { label: 'Test 2', value: 'test2' },
                    { label: 'Test 3', value: 'test3' }
                  ]}
                  placeholder="John"
                />
              </div>
              <div className="tw-flex tw-h-10 tw-w-[191px] tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-rounded-md tw-border tw-border-solid tw-border-text-ultra-light-gray tw-px-4 tw-py-2">
                <p className=" tw-whitespace-nowrap tw-text-sm tw-font-medium tw-not-italic tw-leading-[21px] tw-text-text-light-gray">
                  Import Bulk Products{' '}
                </p>
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3100_84347)">
                    <path
                      d="M5.49948 0.5C2.84604 0.5 0.695312 2.65073 0.695312 5.30416C0.695312 7.11937 1.7015 8.69706 3.18579 9.51453L3.12929 11.5L5.39609 10.1029C5.4303 10.1037 5.4645 10.1083 5.49948 10.1083C8.15291 10.1083 10.3036 7.9576 10.3036 5.30416C10.3036 2.65073 8.15291 0.5 5.49948 0.5ZM6.11133 8.10365H4.88032V4.14117H6.11133V8.10365ZM5.48756 3.65576C5.09823 3.65576 4.83919 3.37981 4.84765 3.03929C4.83958 2.68301 5.09823 2.41513 5.49563 2.41513C5.89265 2.41513 6.14477 2.68301 6.15284 3.03929C6.15246 3.37981 5.89188 3.65576 5.48756 3.65576Z"
                      fill="#BBBBBB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3100_84347">
                      <rect
                        width="11"
                        height="11"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <CustomButton
                onClick={() => setOpenPopup(true)}
                text="Add Product"
                className="btn-primary"
              />
              <Dialog className="scrol-bar" ref={ref} open={openPopup}>
                <div className="tw-max-h-full tw-w-[909px] tw-max-w-full ">
                  <div className="tw-flex tw-h-14 tw-items-center tw-justify-between tw-bg-[#e3ecf4]">
                    <DialogTitle className=" tw-text-xl tw-font-medium tw-not-italic tw-leading-[30px] tw-text-text-dark-gray">
                      Create New Product
                    </DialogTitle>
                    <div
                      className="hover:tw-cursor-pointer"
                      onClick={() => setOpenPopup(false)}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.46582 8.01169L15.696 1.78141C16.1014 1.37615 16.1014 0.720878 15.696 0.315665C15.2907 -0.0895966 14.6355 -0.0895966 14.2303 0.315665L7.99993 6.5459L1.76984 0.315665C1.36438 -0.0895966 0.709353 -0.0895966 0.304092 0.315665C-0.101364 0.720926 -0.101364 1.37615 0.304092 1.78141L6.53413 8.01169L0.30414 14.2419C-0.101315 14.6472 -0.101315 15.3025 0.30414 15.7077C0.40027 15.8041 0.514502 15.8805 0.640272 15.9327C0.766042 15.9848 0.900871 16.0115 1.03701 16.0114C1.30233 16.0114 1.56774 15.9098 1.76988 15.7077L7.99993 9.47744L14.2303 15.7077C14.3264 15.8041 14.4406 15.8805 14.5664 15.9326C14.6922 15.9847 14.827 16.0115 14.9631 16.0114C15.2284 16.0114 15.4939 15.9098 15.696 15.7077C16.1014 15.3024 16.1014 14.6472 15.696 14.2419L9.46582 8.01169Z"
                          fill="#7E7D7D"
                        />
                      </svg>
                    </div>
                  </div>
                  <DialogContent>
                    <div className="tw-w-full">
                      <CustomInput
                        label="Product Name"
                        name="Product Name "
                        placeholder="Enter Product Name"
                        type="tex"
                      />
                      <TextArea
                        label="Description"
                        name="Description "
                        placeholder="Enter Description"
                        type="tex"
                      />
                      <div className="model-box-grid-4col">
                        <CustomInput
                          label="Net price "
                          name="netPrice"
                          placeholder="Enter net price "
                          type="text"
                          // register={register}
                          // errors={errors}
                          endIcon={<EuroIcon />}
                        />
                        <CustomInput
                          label="Gross price "
                          name="grossPrice"
                          placeholder="Enter Gross price "
                          type="text"
                          // register={register}
                          // errors={errors}
                          endIcon={<EuroIcon />}
                        />
                        <CustomInput
                          label="Purchase price "
                          name="purchasePrice"
                          placeholder="Enter Purchase price "
                          type="text"
                          // register={register}
                          // errors={errors}
                          endIcon={<EuroIcon />}
                        />

                        <Select
                          label="Units"
                          name="unit"
                          // register={register}
                          // errors={errors}
                          placeholder="Units "
                          options={[
                            { label: 'Test 1', value: 'test1' },
                            { label: 'Test 2', value: 'test2' },
                            { label: 'Test 3', value: 'test3' }
                          ]}
                        />
                      </div>
                      <div className="tw-flex tw-justify-end tw-gap-[20px]">
                        <CustomButton
                          onClick={() => setOpenPopup(false)}
                          text="cancel"
                          className="btn-cancel"
                        />
                        <CustomButton
                          onClick={() => setOpenPopup(false)}
                          text="Add Product"
                          className="btn-primary"
                        />
                      </div>
                    </div>
                  </DialogContent>
                </div>
              </Dialog>
            </div>
          </div>
          <table class="... tw-mt-[18px] tw-w-full tw-border-collapse tw-rounded-[20px_0px_0px_0px] ">
            <thead>
              <tr>
                <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
                  <input
                    id="test"
                    type="checkbox"
                    checked={data.length === ids.length}
                    onChange={allCheckboxHandler}
                    className={` tw-h-4 tw-w-4 tw-appearance-none tw-rounded-sm tw-border tw-border-solid tw-border-[1px_solid_lightgray] tw-bg-center tw-bg-no-repeat ${
                      data.length === ids.length && 'tw-border-primary tw-bg-checked'
                    }`}
                  />
                  <label htmlFor="test"></label>
                </th>
                {columns.map((col, index) => (
                  <th
                    className="...  rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4"
                    key={index}
                  >
                    <div className="tw-flex tw-items-center tw-gap-2">
                      {col.headerName}
                      {col.field === 'pp' || col.field === 'action' ? null : (
                        <img
                          src="/assets/icons/sort.svg"
                          alt=""
                          className="tw-cursor-pointer"
                          onClick={() => handleSortClick(col.field)}
                        />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((rowData, ind) => {
                const data_id = isIdAdded(ind);
                return (
                  <>
                    <tr key={ind}>
                      <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                        <input
                          id="test"
                          type="checkbox"
                          checked={data_id}
                          value={ind}
                          onChange={checkBoxHandler}
                          className={` tw-h-4 tw-w-4 tw-appearance-none tw-rounded-sm tw-border tw-border-solid tw-border-[1px_solid_lightgray] tw-bg-center tw-bg-no-repeat ${
                            ids.includes(rowData.id) && 'tw-border-primary tw-bg-checked'
                          }`}
                        />
                        <label htmlFor="test"></label>
                      </td>
                      {columns.map((column) => {
                        return (
                          <td
                            className="tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center"
                            key={ind}
                          >
                            {rowData[column.field] === 'pp-icon' ? (
                              <div className="tw-flex tw-justify-center hover:tw-cursor-pointer">
                                <img
                                  src="/assets/icons/add-pp.blue.svg"
                                  alt=""
                                  onClick={() => handleActionClick(rowData)}
                                />
                              </div>
                            ) : rowData[column.field].includes('action') ? (
                              <div className="tw-flex tw-gap-[27px]">
                                <img
                                  onClick={() => handleDuplicate(ind)}
                                  src="/assets/icons/delete.red.svg"
                                  alt=""
                                  className="hover:tw-cursor-pointer"
                                />
                                <img
                                  onClick={() => handleRemove(ind)}
                                  src="/assets/icons/copy.svg"
                                  alt=""
                                  className="hover:tw-cursor-pointer"
                                />
                              </div>
                            ) : (
                              rowData[column.field]
                            )}
                          </td>
                        );
                      })}
                    </tr>
                    {selectedRow && selectedRow.id === rowData.id && (
                      <tr className="tw-h-[88px] tw-w-full  tw-bg-[#E7EAEE]">
                        <td colSpan={columns.length + 1}>
                          <div className="tw-grid tw-grid-cols-[316px_1fr] tw-items-center tw-gap-[24px] ">
                            <div className="tw-flex tw-flex-col tw-border-r tw-border-solid tw-border-r-[#E7EAEE] tw-px-2 tw-py-4">
                              <CustomInput
                                id="name-input"
                                type="text"
                                placeholder="Enter Purchasing Price"
                                // value={inputValue}
                                // onChange={handleInputChangee}
                              />
                            </div>
                            <div className="tw-px-2 tw-py-4">
                              <CustomInput
                                id="name-input"
                                type="text"
                                placeholder="Enter Notes"
                                // value={inputValue}
                                // onChange={handleInputChangee}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="tw-mt-[24px] tw-flex">
          <div className="tw-flex tw-w-[312px] tw-flex-col tw-gap-2">
            <CustomInput
              label="Delivery Date"
              name="Delivery Date "
              placeholder="26.01.2023"
              type="date"
              className="tw-flex tw-flex-col tw-gap-2"
            />
          </div>
          <CustomSwitch
            className="tw-flex tw-flex-row"
            label="Default Switch"
            defaultChecked
          />
        </div>
        <StepperFooter
          back="headerBody"
          handleTabClick={handleTabClick}
          setIsSubmit={setIsSubmit}
        />
      </form>
    </div>
  );
}
LineItem.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
{
  /* <div className="jut tw-mt-[16px] tw-flex tw-gap-[10px] tw-rounded-[9px_0px_0px_9px] tw-border tw-border-solid tw-border-[#E7EAEE] tw-bg-[#fbfbfb] tw-px-[11px] tw-py-4">
  <div className="tw-border-r tw-border-solid tw-border-r-disabled-input tw-p-4">
    <h5 className="tw-text-xs tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-dark-gray">
      Comments
    </h5>
    <div className="tw-mt-1 tw-w-[276px] tw-rounded-md tw-border tw-border-solid tw-border-disabled-input tw-p-2 tw-px-0">
      <p className="tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-medium-gray">
        <span className="tw-text-text-black"> Created at </span> 13 Feb 2023, 12:05:14
      </p>
      <p className="tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-medium-gray">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's
      </p>
    </div>
  </div>
  <div className="tw-border-r tw-border-solid tw-border-r-disabled-input tw-p-4">
    <h5 className="tw-text-xs tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-dark-gray">
      History
    </h5>
    <div>
      <p className="tw-mt-2 tw-border-b tw-border-solid tw-border-b-disabled-input tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-medium-gray">
        David <span className="tw-text-text-black"> offer Created at </span> 13 Feb 2023,
        12:05:14
      </p>
      <p className="tw-mt-1 tw-border-b tw-border-solid tw-border-b-disabled-input tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-medium-gray">
        David <span className="tw-text-text-black"> offer Created at </span> 13 Feb 2023,
        12:05:14
      </p>
      <p className="tw-mt-1 tw-border-b tw-border-solid tw-border-b-disabled-input tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-medium-gray">
        David <span className="tw-text-text-black"> offer Created at </span> 13 Feb 2023,
        12:05:14
      </p>
    </div>
  </div>
  <div className="tw-border-r tw-border-solid tw-border-r-disabled-input tw-p-4">
    <h5 className="tw-text-xs tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-dark-gray">
      Attachments
      <div className="tw-flex tw-items-center tw-gap-4">
        <svg
          width="9"
          height="12"
          viewBox="0 0 9 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.30343 11.0864H7.85731C8.22323 11.0864 8.52022 10.7894 8.52022 10.4235V1.10773C8.52022 0.741817 8.22323 0.444824 7.85731 0.444824H3.12173V0.664123C3.12422 0.686679 3.12548 0.710488 3.12548 0.734298V2.55009C3.12548 3.06513 2.70694 3.48367 2.1919 3.48367H0.376111C0.357314 3.48367 0.337264 3.48242 0.318467 3.48117H0.0878906V10.4235C0.0878906 10.7894 0.384883 11.0864 0.750798 11.0864H4.30343ZM4.43751 8.8333H2.12047C1.94754 8.8333 1.80719 8.69293 1.80719 8.52001C1.80719 8.34707 1.94754 8.20673 2.12047 8.20673H4.43877C4.6117 8.20673 4.75205 8.34707 4.75205 8.52001C4.75205 8.69293 4.61045 8.8333 4.43751 8.8333ZM6.75581 7.23431H2.12047C1.94754 7.23431 1.80719 7.09395 1.80719 6.92103C1.80719 6.74808 1.94754 6.60775 2.12047 6.60775H6.75581C6.92874 6.60775 7.06909 6.74808 7.06909 6.92103C7.06909 7.09395 6.92874 7.23431 6.75581 7.23431ZM2.12047 4.90974H6.75581C6.92874 4.90974 7.06909 5.05009 7.06909 5.22302C7.06909 5.39595 6.92874 5.5363 6.75581 5.5363H2.12047C1.94754 5.5363 1.80719 5.39595 1.80719 5.22302C1.80719 5.05009 1.94754 4.90974 2.12047 4.90974Z"
            fill="#7E7D7D"
          />
        </svg>
        <p className="tw-flex tw-items-center tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
          Design System.PNG
        </p>
        <svg
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.16602 4.08317V8.20817C9.16602 8.32973 9.11773 8.44631 9.03177 8.53226C8.94582 8.61822 8.82924 8.6665 8.70768 8.6665H2.29102C2.16946 8.6665 2.05288 8.61822 1.96693 8.53226C1.88097 8.44631 1.83268 8.32973 1.83268 8.20817V1.7915C1.83268 1.66995 1.88097 1.55337 1.96693 1.46741C2.05288 1.38146 2.16946 1.33317 2.29102 1.33317H6.41602C6.53757 1.33317 6.65415 1.28488 6.74011 1.19893C6.82606 1.11297 6.87435 0.996395 6.87435 0.874837C6.87435 0.75328 6.82606 0.636701 6.74011 0.550747C6.65415 0.464792 6.53757 0.416504 6.41602 0.416504H2.29102C1.92634 0.416504 1.57661 0.56137 1.31874 0.819232C1.06088 1.07709 0.916016 1.42683 0.916016 1.7915V8.20817C0.916016 8.57284 1.06088 8.92258 1.31874 9.18044C1.57661 9.4383 1.92634 9.58317 2.29102 9.58317H8.70768C9.07236 9.58317 9.42209 9.4383 9.67995 9.18044C9.93782 8.92258 10.0827 8.57284 10.0827 8.20817V4.08317C10.0827 3.96161 10.0344 3.84503 9.94844 3.75908C9.86249 3.67313 9.74591 3.62484 9.62435 3.62484C9.50279 3.62484 9.38621 3.67313 9.30026 3.75908C9.2143 3.84503 9.16602 3.96161 9.16602 4.08317Z"
            fill="#7E7D7D"
          />
          <path
            d="M9.62427 0.416504H8.24927C8.12771 0.416504 8.01113 0.464792 7.92518 0.550747C7.83923 0.636701 7.79094 0.75328 7.79094 0.874837C7.79094 0.996395 7.83923 1.11297 7.92518 1.19893C8.01113 1.28488 8.12771 1.33317 8.24927 1.33317H8.51969L5.17385 4.67442C5.08755 4.76073 5.03906 4.87778 5.03906 4.99984C5.03906 5.12189 5.08755 5.23895 5.17385 5.32525C5.26016 5.41156 5.37722 5.46005 5.49927 5.46005C5.62133 5.46005 5.73838 5.41156 5.82469 5.32525L9.16594 1.97942V2.24984C9.16594 2.37139 9.21423 2.48797 9.30018 2.57393C9.38613 2.65988 9.50271 2.70817 9.62427 2.70817C9.74583 2.70817 9.86241 2.65988 9.94836 2.57393C10.0343 2.48797 10.0826 2.37139 10.0826 2.24984V0.874837C10.0826 0.75328 10.0343 0.636701 9.94836 0.550747C9.86241 0.464792 9.74583 0.416504 9.62427 0.416504Z"
            fill="#7E7D7D"
          />
        </svg>
      </div>
    </h5>
  </div>
  <div className=" tw-p-4">
    <h5 className="tw-text-xs tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-dark-gray">
      Reason
    </h5>
    <p className="tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-medium-gray">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's /
    </p>
  </div>
</div>; */
}
