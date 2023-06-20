/* eslint-disable react/button-has-type */
import CustomButton from '@/common/components/custom-button/custom-button.component';
import PlusIcon from '@/common/icons/plus.icon';
import CustomTable from '@/common/components/custom-table/custom-table.component';
import useCustomer from './use-customer.hook';
import Toaster from '@/common/components/toaster/toaster.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import SearchIcon from '@/common/icons/search-icon';
import Modal from '@/common/components/modal/modal.component';
import ModalFooter from '@/common/components/modal/components/modal-footer.component';
import TextArea from '@/common/components/text-area/text-area.component';

export default function Customer() {
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
    register,
    handleSubmit,
    setValue,
    errors,
    openModal,
    modalCloseHandler,
    onCommentSubmit,
    ref,
    handleSearch
  } = useCustomer();

  return (
    <div className="">
      {/* <Toaster
        show={showToaster}
        text={toasterMsg}
        onClose={() => setShowToaster(false)}
        type="success"
      /> */}
      <Modal onClose={modalCloseHandler} show={openModal} title="Add Comment">
        {/* <FormProvider {...methods}> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit(onCommentSubmit)(e);
          }}
        >
          <div className="tw-flex tw-flex-col tw-gap-2">
            <TextArea
              type="text"
              name="customerComment"
              placeholder="Enter Comment"
              register={register}
            />
            {/* <CustomInput
              type="text"
              name="lastName"
              placeholder="Last Name"
              isRequired
              register={register}
            /> */}
          </div>
          <ModalFooter onClose={modalCloseHandler} submitButtonText="Submit" />
        </form>
        {/* </FormProvider> */}
      </Modal>
      <div className="">
        <div className="tw-min-h-[100vh] tw-w-full tw-bg-[#FBFBFB] tw-px-[23px] ">
          <div className="tw-flex tw-items-center tw-justify-between tw-py-[24px]">
            <h1 className="h2 tw-font-medium">List of customer</h1>
            <CustomButton
              className="btn-primary"
              text="Create customer"
              startIcon={<PlusIcon />}
              href="/customer/create"
            />
          </div>
          <div className=" tw-rounded-[10px] tw-rounded-[10px_10px_0px_0px] tw-border tw-border-solid tw-border-solid tw-border-[#BBBBBB1A] tw-border-disabled-input tw-bg-white ">
            <div className="tw-flex tw-h-[66px] tw-w-full tw-items-center tw-justify-between tw-bg-[#BBBBBB1A] tw-px-5 tw-py-3">
              <div className="tw-flex tw-items-center tw-gap-[16px]">
                <div className="tw-h-[42px] tw-min-w-[323px]  tw-bg-white">
                  <CustomInput
                    placeholder="Search"
                    type="text"
                    onChange={handleSearch}
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
                  <div
                    ref={ref}
                    className="tw-absolute tw-left-[-200px] tw-top-10 tw-z-[100] tw-flex  tw-w-[257px] tw-flex-col tw-items-start tw-gap-[11px]  tw-rounded-md tw-border-[2px] tw-border-solid tw-border-[#BBBBBB1A] tw-bg-white tw-p-3 tw-shadow-2xl"
                  >
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
            <div className="tw-mt-[16px]">
              <CustomTable
                columns={columns.filter((col) => columnState[col.field])}
                rows={rows}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
