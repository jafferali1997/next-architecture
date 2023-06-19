/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material/node';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Breadscrumb from '@/common/components/breadscrumb/breadscrumb.component';
import PlusIcon from '@/common/icons/plus.icon';
import DownloadDropdownBtn from '@/common/components/download-dropdown-button/download-dropdown-button.component';
import TableFilterTabs from '@/common/components/table-filter-tabs/table-filter-table.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import useViewOffer from './use-view-order.hook';

import CustomSelect from '@/common/components/custom-select/custom-select.component';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import useViewOrder from './use-view-order.hook';

const breadscrumbs = [
  { id: 1, name: 'Documents', link: '/documents' },
  { id: 2, name: 'Orders', link: '/Order' }
];

const dropdownoptions = [
  { id: 1, name: 'option1', link: '/option1' },
  { id: 2, name: 'option2', link: '/option2' },
  { id: 3, name: 'option3', link: '/option3' }
];

const customoptions = [
  { value: 'open', label: 'Open' },
  { value: 'accepted', label: 'Accepted' },
  { value: 'rejected', label: 'Rejected' },
  { value: 'invoiced', label: 'Invoiced' }
];

const offers = [
  {
    id: 1,
    status: 'Open',
    value: '€94,628.67',
    icon: '/assets/images/offers/open.svg'
  },
  {
    id: 2,
    status: 'Invoiced',
    value: '€94,628.67',
    icon: '/assets/images/offers/invoiced.svg'
  },
  {
    id: 3,
    status: 'Profit',
    value: '€94,628.67',
    icon: '/assets/images/offers/profit.svg'
  }
];

const filteropions = [
  { id: 1, name: 'filter', label: 'Overview' },
  { id: 2, name: 'filter', label: 'Draft' },
  { id: 3, name: 'filter', label: 'Rejected' },
  { id: 4, name: 'filter', label: 'Template' }
];

export default function ViewOrder() {
  const [selectvalue, setSelectValue] = React.useState('');

  // const handleChange = (event) => {
  //   setSelectValue(event.target.value);
  // };

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
    handleSortClick,
    setData,
    MyOptions,
    anchorEl,
    handleClick,
    open,
    handleClose,
    handleSelectChange,
    selectedValue,
    dropDownOptions,
    selectedId,
    handleTabsFilter,
    handleChange,
    getOptionClassName,
    selectValue,
    selectedValues
  } = useViewOrder();

  return (
    <div className="tw-w-full tw-bg-[#FBFBFB] tw-px-[23px] tw-pb-8 tw-pt-3">
      <Breadscrumb breadscrumbs={breadscrumbs} current="Overview" />

      <div className="tw-mt-2 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-2">
        <h2 className="tw-font-dm tw-text-[22px] tw-font-medium tw-capitalize tw-leading-8 tw-text-text-dark-gray">
          Orders
        </h2>

        <div className="tw-flex tw-flex-wrap tw-items-center tw-gap-4">
          <DownloadDropdownBtn text="Download Orders" dropdownoptions={dropdownoptions} />
          <a
            href="/order/view"
            className="btn-primary-blue tw-flex tw-items-center tw-gap-1 tw-rounded-md tw-border-none tw-p-3 tw-text-sm tw-font-medium"
          >
            <PlusIcon /> Create
          </a>
        </div>
      </div>

      <div className="tw-mt-4 tw-flex tw-flex-wrap tw-gap-5">
        {offers.map((item) => {
          return (
            <div
              key={item.id}
              className="tw-box-border tw-flex tw-flex-1 tw-items-center tw-justify-between tw-gap-3 tw-rounded-[10px] tw-border-[1px] tw-border-solid tw-border-border-gray tw-bg-white !tw-px-5 !tw-py-2"
            >
              <div className="tw-flex tw-items-center tw-gap-3">
                <span className="tw-font-dm tw-text-[12px] tw-font-normal tw-text-text-medium-gray">
                  {item.status}
                </span>
                <span className="tw-font-dm tw-text-[14px] tw-font-normal tw-leading-5 tw-text-text-black">
                  {item.value}
                </span>
              </div>
              <img
                className="tw-h-[42px] tw-w-[42px] tw-rounded-full"
                src={item.icon}
                alt="open icon"
              />
            </div>
          );
        })}
      </div>

      <div className="tw-mt-4 tw-rounded-[10px] tw-border-[1px] tw-border-border-gray tw-bg-white tw-py-5">
        <TableFilterTabs filteropions={filteropions} action={handleTabsFilter} />

        <table class="... tw-mt-[18px] tw-w-full tw-border-collapse tw-rounded-[20px_0px_0px_0px] ">
          <thead>
            <tr>
              <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
                <input
                  id="test"
                  type="checkbox"
                  checked={
                    data.length === ids.length && data.length !== 0 && ids.length !== 0
                  }
                  onChange={allCheckboxHandler}
                  className={` tw-h-4 tw-w-4 tw-appearance-none tw-rounded-sm tw-border tw-border-solid tw-border-[1px_solid_lightgray] tw-bg-center tw-bg-no-repeat ${
                    data.length === ids.length && data.length !== 0 && ids.length !== 0
                      ? 'tw-border-primary tw-bg-checked'
                      : null
                  }`}
                />
                <label htmlFor="test" />
              </th>
              {columns.map((col, index) => (
                <th
                  className="...  rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4"
                  key={index}
                >
                  <div className="tw-flex tw-items-center tw-justify-center tw-gap-2">
                    {col.headerName}
                    {col.field === 'status' ||
                    col.field === 'action' ||
                    col.field === 'data' ? null : (
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
                      <label htmlFor="test" />
                    </td>
                    {columns.map((column, columnIndex) => {
                      return (
                        <td
                          className="tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center"
                          key={columnIndex}
                        >
                          {rowData[column.field] === 'dataIcon' ? (
                            <div className="tw-flex tw-justify-center hover:tw-cursor-pointer">
                              <img
                                src="/assets/icons/add_button.svg"
                                alt=""
                                onClick={() => handleActionClick(rowData)}
                                className="tw-2-[26px] tw-h-[26px] "
                              />
                            </div>
                          ) : rowData[column.field] === 'action' ? (
                            <>
                              <IconButton
                                aria-label="more"
                                onClick={handleClick}
                                aria-haspopup="true"
                                aria-controls="long-menu"
                              >
                                <div className="tw-flex tw-justify-center hover:tw-cursor-pointer">
                                  <img
                                    src="/assets/icons/more_vert.svg"
                                    alt=""
                                    className="tw-2-[4.5px] tw-h-[19.5px]"
                                  />
                                </div>
                              </IconButton>
                              <Menu
                                anchorEl={anchorEl}
                                keepMounted
                                onClose={handleClose}
                                open={open}
                              >
                                {MyOptions.map((option, i) => (
                                  <MenuItem key={i} onClick={handleClose}>
                                    <div className="tw-flex tw-items-center tw-gap-2">
                                      {option.icon}
                                      {option.label}
                                    </div>
                                  </MenuItem>
                                ))}
                              </Menu>
                            </>
                          ) : typeof rowData[column.field] === 'object' ? (
                            <CustomSelect
                              options={customoptions}
                              id={rowData.id}
                              defaultValue={customoptions[0].value}
                              onChange={(event) =>
                                handleChange(rowData.id, event.target.value)
                              }
                              className={getOptionClassName(
                                rowData.id,
                                selectedValues[rowData.id]
                              )}
                            />
                          ) : (
                            rowData[column.field]
                          )}
                        </td>
                      );
                    })}
                  </tr>
                  {selectedRow && selectedRow.id === rowData.id && (
                    <tr>
                      <td colSpan={columns.length + 1}>
                        <div className="jut tw-grid tw-grid-cols-[299px_300px_237px_187px] tw-gap-[10px] tw-rounded-[9px_0px_0px_9px] tw-border tw-border-solid tw-border-[#E7EAEE] tw-bg-[#fbfbfb] tw-px-[11px] tw-py-4">
                          <div className="tw-border-r tw-border-solid tw-border-r-disabled-input tw-p-2">
                            <h5 className="tw-text-xs tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-dark-gray">
                              Comments
                            </h5>
                            <div className="tw-mt-1 tw-w-[276px] tw-rounded-md tw-border tw-border-solid tw-border-disabled-input tw-p-2 tw-px-0">
                              <p className="tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-medium-gray">
                                <span className="tw-text-text-black"> Created at </span>{' '}
                                13 Feb 2023, 12:05:14
                              </p>
                              <p className="tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-medium-gray">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                              </p>
                            </div>
                          </div>
                          <div className="tw-border-r tw-border-solid tw-border-r-disabled-input tw-p-2">
                            <h5 className="tw-text-xs tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-dark-gray">
                              History
                            </h5>
                            <div>
                              <p className="tw-mt-2 tw-border-b tw-border-solid tw-border-b-disabled-input tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-medium-gray">
                                David{' '}
                                <span className="tw-text-text-black">
                                  {' '}
                                  Order Created at{' '}
                                </span>{' '}
                                13 Feb 2023, 12:05:14
                              </p>
                              <p className="tw-mt-1 tw-border-b tw-border-solid tw-border-b-disabled-input tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-medium-gray">
                                David{' '}
                                <span className="tw-text-text-black">
                                  {' '}
                                  Order Created at{' '}
                                </span>{' '}
                                13 Feb 2023, 12:05:14
                              </p>
                              <p className="tw-mt-1 tw-border-b tw-border-solid tw-border-b-disabled-input tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-medium-gray">
                                David{' '}
                                <span className="tw-text-text-black">
                                  {' '}
                                  Order Created at{' '}
                                </span>{' '}
                                13 Feb 2023, 12:05:14
                              </p>
                            </div>
                          </div>
                          <div className="tw-border-r tw-border-solid tw-border-r-disabled-input tw-p-2">
                            <div className="tw-flex tw-items-center tw-justify-between">
                              <h5 className="tw-text-xs tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-dark-gray">
                                Attachments
                              </h5>
                              <CustomButton
                                className="btn-secondary tw-h-[24px]"
                                text="Upload File"
                              />
                            </div>
                            <div className="tw-mt-2 tw-flex tw-items-center tw-gap-4">
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
                          </div>
                          <div className=" tw-p-2">
                            <h5 className="tw-text-xs tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-dark-gray">
                              Reason
                            </h5>
                            <p className="tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-medium-gray">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry. Lorem Ipsum has been the industry's
                            </p>
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
    </div>
  );
}
