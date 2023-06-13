import CustomInput from '@/common/components/custom-input/custom-input.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import Select from '@/common/components/select/select.component';
import useLineItem from './use-line-item.hook';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import SearchIcon from '@/common/icons/search-icon';
import DeleteIcon from '@/common/icons/delete.icon';
import { useState } from 'react';

export default function LineItem() {
  const {
    isSubmit,
    setIsSubmit,
    columns,
    rows,
    ids,
    isIdAdded,
    allCheckboxHandler,
    checkBoxHandler
  } = useLineItem();
  return (
    <div className="personal-details-wrapper">
      <div className="content-header tw-flex tw-items-center tw-justify-between ">
        <h3 className="form-inner-heading">Product Table</h3>
        <div className="tw-flex tw-min-w-[900px] tw-items-center tw-justify-between">
          {ids.length !== 0 && (

          <div className='tw-gap-2.5 tw-border tw-w-[42px] tw-border-disabled-input tw-px-3.5 tw-py-3 tw-rounded-md tw-border-solid'>
          <img src="/assets/icons/copy.svg" alt="" />
          </div>
          )}
          <div className="tw-w-full tw-max-w-[523px] tw-bg-secondary-gray">
            <Select
              options={[
                { id: 'male', value: 'male', label: 'Male' },
                { id: 'female', value: 'female', label: 'Female' }
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
          <CustomButton text="Add Product" className="btn-primary" />
        </div>
      </div>
      <table class="... tw-mt-[18px] tw-w-full tw-border-collapse tw-rounded-[20px_0px_0px_0px] ">
        <thead>
          <tr>
            <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
              <input
                id="test"
                type="checkbox"
                checked={rows.length === ids.length}
                onChange={allCheckboxHandler}
                className={` tw-h-4 tw-w-4 tw-appearance-none tw-rounded-sm tw-border tw-border-solid tw-border-[1px_solid_lightgray] tw-bg-center tw-bg-no-repeat ${
                  rows.length === ids.length && 'tw-border-primary tw-bg-checked'
                }`}
              />
              <label htmlFor="test"></label>
            </th>
            {columns.map((col, index) => (
              <th
                className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4"
                key={index}
              >
                {col.headerName}
              </th>
            ))}
            {/* <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
              Add PP
            </th>
            <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
              Action
            </th>
            <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
              Product
            </th>
            <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
              Description
            </th>
            <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
              Quantity
            </th>
            <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
              Position No
            </th>
            <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
              Unit
            </th>
            <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
              Price
            </th>
            <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
              Tax
            </th>
            <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
              Discount
            </th>
            <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4">
              Total
            </th> */}
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              <input
                id="test"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className={` tw-h-4 tw-w-4 tw-appearance-none tw-rounded-sm tw-border tw-border-solid tw-border-[1px_solid_lightgray] tw-bg-center tw-bg-no-repeat ${
                  isChecked && 'tw-border-primary tw-bg-checked'
                }`}
              />
              <label htmlFor="test"></label>
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              <div className="tw-flex tw-justify-center">
                {' '}
                <img src="/assets/icons/add-pp.blue.svg" alt="" />
              </div>
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              <div className="tw-flex tw-gap-[27px]">
                <img src="/assets/icons/delete.red.svg" alt="" />
                <img src="/assets/icons/copy.svg" alt="" />
              </div>
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              21
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              Food
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              23
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              12
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              pc
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              300
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              19.00
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              10 %
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              2300
            </td>
          </tr> */}

          {rows.map((rowData, ind) => {
            const data_id = isIdAdded(ind);
            return (
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
                        <div className="tw-flex tw-justify-center">
                          <img src="/assets/icons/add-pp.blue.svg" alt="" />
                        </div>
                      ) : rowData[column.field].includes('action') ? (
                        <div className="tw-flex tw-gap-[27px]">
                          <img src="/assets/icons/delete.red.svg" alt="" />
                          <img src="/assets/icons/copy.svg" alt="" />
                        </div>
                      ) : (
                        rowData[column.field]
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          <tr>
            {/* <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              <div className="tw-flex tw-justify-center">
                {' '}
                <img src="/assets/icons/add-pp.svg" alt="" />
              </div>
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              <div className="tw-flex tw-gap-[27px]">
                <img src="/assets/icons/delete.red.svg" alt="" />
                <img src="/assets/icons/copy.svg" alt="" />
              </div>
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              21
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              Food
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              23
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              12
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              pc
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              300
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              19.00
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              10 %
            </td>
            <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
              2300
            </td> */}
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}
