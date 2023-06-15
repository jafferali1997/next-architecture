'use client';

/* eslint-disable react/button-has-type */
import CustomButton from '@/common/components/custom-button/custom-button.component';
import PlusIcon from '@/common/icons/plus.icon';
import CustomTable from '@/common/components/custom-table/custom-table.component';
import Toaster from '@/common/components/toaster/toaster.component';
import useProduct from './use-product.hook';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import SearchIcon from '@/common/icons/search-icon';

export default function Product() {
  const {
    handleColShow,
    open,
    columns,
    columnState,
    rows,
    handleToggleColumn,
    showToaster,
    toasterMsg,
    setShowToaster,
    handleSearch
  } = useProduct();

  return (
    <div className="">
      {/* <Toaster
        show={showToaster}
        text={toasterMsg}
        onClose={() => setShowToaster(false)}
        type="success"
      /> */}
      <div className="">
        <div className="tw-min-h-[100vh] tw-w-full tw-bg-[#FBFBFB] tw-px-[23px] ">
          <div className="tw-flex tw-items-center tw-justify-between tw-py-[24px]">
            <h1 className="h1">List of Product</h1>
            <CustomButton
              className="btn-primary"
              text="Create customer"
              startIcon={<PlusIcon />}
              href="/product/create"
            />
          </div>
          <div className=" tw-rounded-[10px_10px_0px_0px] tw-border-solid tw-border-[#BBBBBB1A] tw-bg-white">
            <div className="tw-flex tw-h-[66px] tw-w-full tw-items-center tw-justify-between tw-bg-[#BBBBBB1A]">
              <div className="tw-flex tw-items-center tw-gap-[16px]">
                <div className="tw-h-[42px] tw-min-w-[323px]  tw-bg-white">
                  <CustomInput
                    placeholder="Search"
                    onChange={handleSearch}
                    type="text"
                    startIcon={<SearchIcon />}
                  />
                </div>
                {/* <img src="/assets/images/filter-icon.svg" alt="img" /> */}
              </div>
              <div className="tw-relative">
                <button
                  onClick={handleColShow}
                  className="tw-font-dm tw-text-sm tw-font-normal tw-not-italic tw-leading-[21buttonx] tw-text-[#585858] tw-underline"
                >
                  Show columns
                </button>
                {open && (
                  <div className="tw-absolute tw-left-[-200px] tw-top-10 tw-z-[100] tw-flex  tw-w-[257px] tw-flex-col tw-items-start tw-gap-[11px]  tw-rounded-md tw-bg-white tw-p-3">
                    {columns.map((col) => (
                      <div key={col.field} className="tw-flex tw-gap-2">
                        <input
                          id={col.headerName}
                          type="checkbox"
                          className="unchecked:tw-bg-[url('/assets/images/unchecked.svg')] tw-h-4 tw-w-4 tw-appearance-none tw-rounded-sm tw-border tw-border-gray-300 tw-bg-cover checked:tw-bg-[url('/assets/images/checked.svg')]"
                          checked={columnState[col.field]}
                          onChange={() => handleToggleColumn(col.field)}
                        />
                        <label
                          className="tw-font-dm tw-text-xs tw-font-medium tw-not-italic tw-leading-[18px] tw-text-[#2C2E3E]"
                          htmlFor={col.headerName}
                        >
                          {col.headerName}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <CustomTable
              columns={columns.filter((col) => columnState[col.field])}
              rows={rows}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
