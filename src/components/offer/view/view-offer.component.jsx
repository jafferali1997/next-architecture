import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material/node';
import Breadscrumb from '@/common/components/breadscrumb/breadscrumb.component';
import PlusIcon from '@/common/icons/plus.icon';
import DownloadDropdownBtn from '@/common/components/download-dropdown-button/download-dropdown-button.component';
import TableFilterTabs from '@/common/components/table-filter-tabs/table-filter-table.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useViewOffer from './use-view-offer.hook';

import CustomSelect from '@/common/components/custom-select/custom-select.component';

const breadscrumbs = [
  { id: 1, name: 'Documents', link: '/documents' },
  { id: 2, name: 'Offers', link: '/offer' }
];

const dropdownoptions = [
  { id: 1, name: 'option1', link: '/option1' },
  { id: 2, name: 'option2', link: '/option2' },
  { id: 3, name: 'option3', link: '/option3' }
];

const customoptions =[
  {value:'open', label:'Open'},
  {value:'accepted', label:'Accepted'},
  {value:'rejected', label:'Rejected'},
  {value:'invoiced', label:'Invoiced'}
]

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
  { id: 1, name: 'filter', label: 'Draft' },
  { id: 1, name: 'filter', label: 'Rejected' },
  { id: 1, name: 'filter', label: 'Template' }
];

export default function ViewOffer() {
  const [selectvalue, setSelectValue] = React.useState('');

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

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
    handleTabsFilter
  } = useViewOffer({});

  return (
    <div className="tw-w-full tw-bg-[#FBFBFB] tw-px-[23px] tw-pb-8 tw-pt-3">
      <Breadscrumb breadscrumbs={breadscrumbs} current={'Overview'} />

      <div className="tw-mt-2 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-2">
        <h2 className="tw-font-dm tw-text-[22px] tw-font-medium tw-capitalize tw-leading-8 tw-text-text-dark-gray">
          Offers
        </h2>

        <div className="tw-flex tw-flex-wrap tw-items-center tw-gap-4">
          <DownloadDropdownBtn text="Download Offers" dropdownoptions={dropdownoptions} />
          <a
            href="/"
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
                <label htmlFor="test"></label>
              </th>
              {columns.map((col, index) => (
                <th
                  className="...  rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4"
                  key={index}
                >
                  <div className="tw-flex tw-items-center tw-gap-2">
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
                      <label htmlFor="test"></label>
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
                                className="tw-2-[26px] tw-h-[26px]"
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
                            <CustomSelect options={customoptions} onChange={handleChange} className={`!tw-w-fit !tw-px-0 status_dropdown ${selectvalue? selectvalue : customoptions && customoptions[0].value} ${selectedId === ind && selectedValue}`}/>
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
    </div>
  );
}
