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
    handleSortClick
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
                    { id: 'male', value: 'MALE', label: 'Male' },
                    { id: 'female', value: 'FEMALE', label: 'Female' }
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
        <StepperFooter back="customerDetails" setIsSubmit={setIsSubmit} />
      </form>
    </div>
  );
}
LineItem.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
