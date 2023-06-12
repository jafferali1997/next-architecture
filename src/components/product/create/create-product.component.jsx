/* eslint-disable react/no-array-index-key */
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem
} from '@mui/material/node';
import { TagsInput } from 'react-tag-input-component';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import Select from '@/common/components/select/select.component';
import TextArea from '@/common/components/text-area/text-area.component';
import EuroIcon from '@/common/icons/euro.icon';
import UseCreateProduct from './use-create-product.hook';
import GroupIcon from '@/common/icons/group.icon';
import DeleteIcon from '@/common/icons/delete.icon';
import PencilIcon from '@/common/icons/pencil.icon';
import HorizentalDotsIcon from '@/common/icons/horizental-dots.icon';
import PlusIcon from '@/common/icons/plus.icon';
import SelectInput from '@mui/material/Select/SelectInput';
import ArrowLeftIcon from '@/common/icons/arrow-left.icon';
import ArrowRightIcon from '@/common/icons/arrow-right.icon';

export default function CreateProduct() {
  const {
    handleAddInput,
    handleInputChange,
    inputValues,
    setInputValues,
    priceInputValues,
    setPriceInputValues,
    handleAddPriceInput,
    handlePriceInputChange,
    discountInputValues,
    priceInputValue,
    setPriceInputValue,
    priceValues,
    setPriceValues,
    handleAddPriceClick,
    setDiscountInputValues,
    handleAddDiscountInput,
    handleDiscountInputChange,
    handleThreeMenu,
    threeDot,
    ref,
    openPopup,
    setOpenPopup,
    selectedTag,
    setSelectedTag,
    discountValues,
    setDiscountValues,
    discountInputValue,
    setDiscountInputValue,
    handleAddDiscountClick,
    priceMenuPopup,
    setpriceMenuPopup,
    discountMenuPopup,
    setdiscountMenuPopup
  } = UseCreateProduct();
  return (
    <div className="content">
      <div className="tw-min-h-[100vh] tw-w-full tw-bg-[#FBFBFB] tw-px-[23px] ">
        <div className="tw-flex tw-items-center tw-justify-between tw-py-[24px]">
          <div className="tw-flex tw-items-center tw-gap-[16px]">
            <img src="/assets/images/back-icon.svg" alt="img" />
            <h1 className="admin-top-heading ">Add Product</h1>
            <p className="admin-top-p">Item Number #: 10075</p>
          </div>
          <CustomButton className="btn-primary" text="Save" />
        </div>
        <div className="2bars tw-flex tw-gap-[24px]">
          <div className="main-content">
            <div className="form-box  tw-w-[759px] ">
              <h3 className="form-box-heading ">Basic Details</h3>
              <div className="tw-mt-[16px] tw-w-full">
                <CustomInput
                  label="Product name"
                  name="Product name"
                  placeholder="Product name"
                  type="text"
                />
                <h3 className="tw-mt-[16px]">Description </h3>
                <TextArea name="Description " placeholder="Description" type="textarea" />
              </div>
            </div>
            <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
              <h3 className="form-box-heading ">Product categories</h3>
              <div className="tw-mt-[16px] tw-flex tw-w-full tw-flex-col tw-gap-[16px]">
                <Select
                  label="Select product category"
                  name="Select product category "
                  placeholder="Select product category "
                  options={[
                    { label: 'Test 1', value: 'test1' },
                    { label: 'Test 2', value: 'test2' },
                    { label: 'Test 3', value: 'test3' }
                  ]}
                />
                <Select
                  label="Sub-Category Level 1 "
                  name="Sub-Category Level 1  "
                  placeholder="Sub-Category Level 1  "
                  options={[
                    { label: 'Test 1', value: 'test1' },
                    { label: 'Test 2', value: 'test2' },
                    { label: 'Test 3', value: 'test3' }
                  ]}
                />
                <Select
                  label="Sub-Category Level 2 "
                  name="Sub-Category Level 2  "
                  placeholder="Sub-Category Level 2  "
                  options={[
                    { label: 'Test 1', value: 'test1' },
                    { label: 'Test 2', value: 'test2' },
                    { label: 'Test 3', value: 'test3' }
                  ]}
                />
                <Select
                  label="Sub-Category Level 3 "
                  name="Sub-Category Level 3  "
                  placeholder="Sub-Category Level 3  "
                  options={[
                    { label: 'Test 1', value: 'test1' },
                    { label: 'Test 2', value: 'test2' },
                    { label: 'Test 3', value: 'test3' }
                  ]}
                />
              </div>
            </div>
            <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
              <h3 className="form-box-heading ">Inventory</h3>
              <div className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]">
                <CustomInput
                  label="Number Of Piece "
                  name="Number Of Piece "
                  placeholder="Number Of Piece "
                  type="text"
                />

                <Select
                  label="Units"
                  name="Units "
                  placeholder="Units "
                  options={[
                    { label: 'Test 1', value: 'test1' },
                    { label: 'Test 2', value: 'test2' },
                    { label: 'Test 3', value: 'test3' }
                  ]}
                />
                <CustomInput
                  label="Manufacture"
                  name="Manufacture"
                  placeholder="Enter Manufacture"
                  type="text"
                />
              </div>
            </div>
            <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
              <h3 className="form-box-heading ">Pricing</h3>
              <div className="form-box-grid">
                <CustomInput
                  label="Net price "
                  name="Net price "
                  placeholder="Enter net price "
                  type="text"
                  endIcon={<EuroIcon />}
                />
                <CustomInput
                  label="Gross price "
                  name="Gross price "
                  placeholder="Enter Gross price "
                  type="text"
                  endIcon={<EuroIcon />}
                />
                <CustomInput
                  label="Purchase price "
                  name="Purchase price "
                  placeholder="Enter Purchase price "
                  type="text"
                  endIcon={<EuroIcon />}
                />
                <CustomInput
                  label="Minimum selling price"
                  name="Minimum selling price"
                  placeholder="Enter Minimum selling price"
                  type="text"
                  endIcon={<EuroIcon />}
                />
              </div>
            </div>
            <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
              <div className="tw-flex tw-items-center tw-justify-between">
                <h3 className="form-box-heading ">Attributes</h3>
                <span className="inner-link" onClick={handleAddInput}>
                  Add more attribute
                </span>
              </div>
              {inputValues.map((value, index) => (
                <div
                  key={index}
                  className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]"
                >
                  <CustomInput
                    label="Attribute name "
                    name="Attribute name "
                    placeholder="Enter Attribute name "
                    type="text"
                  />

                  <Select
                    label="Attribute value"
                    name="Attribute value "
                    placeholder="Attribute value "
                    options={[
                      { label: 'Test 1', value: 'test1' },
                      { label: 'Test 2', value: 'test2' },
                      { label: 'Test 3', value: 'test3' }
                    ]}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="right-side">
            <div className="form-box tw-w-[336px]  ">
              <h3 className="form-box-heading ">Product Organization</h3>
              <div className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]">
                <label className="tw-text-xs tw-font-medium tw-not-italic tw-leading-[100%] tw-text-text-black">
                  Product Category
                </label>
                <SelectInput className="tw-flex tw-h-10 tw-w-[296px] tw-flex-row tw-items-center tw-gap-[91px] tw-rounded-md tw-border-[1.5px] tw-border-solid tw-border-text-ultra-light-gray tw-px-4 tw-py-[9.5px]">
                  <MenuItem value="Bird Supplies">
                    <div className="tw-flex tw-w-[250px] tw-items-center tw-justify-between">
                      <p className="tw-text-sm tw-font-normal tw-not-italic tw-leading-[21px] tw-text-text-black">
                        Bird Supplies
                      </p>
                      <ArrowRightIcon />
                    </div>
                  </MenuItem>
                  <MenuItem value="Cat Supplies">
                    <div className="tw-flex tw-w-[250px] tw-items-center tw-justify-between">
                      <p className="tw-text-sm tw-font-normal tw-not-italic tw-leading-[21px] tw-text-text-black">
                        Cat Supplies
                      </p>
                      <ArrowRightIcon />
                    </div>
                  </MenuItem>
                </SelectInput>
              </div>
            </div>
            <div className="form-box tw-mt-[16px] tw-w-[336px]  ">
              <h3 className="form-box-heading ">Tax</h3>
              <div className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]">
                <Select
                  label="Tax rate"
                  name="Tax rate "
                  placeholder="Tax rate "
                  options={[
                    { label: 'Test 1', value: 'test1' },
                    { label: 'Test 2', value: 'test2' },
                    { label: 'Test 3', value: 'test3' }
                  ]}
                />
              </div>
            </div>
            <div className="form-box  tw-mt-[16px]  tw-w-[336px]  ">
              <h3 className="form-box-heading ">Tags</h3>
              <div className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]">
                <TagsInput
                  value={selectedTag}
                  onChange={setSelectedTag}
                  name="Tags"
                  placeHolder="Enter Tags"
                />
              </div>
            </div>
            <div className="form-box tw-mt-[16px]  tw-w-[336px]">
              <div className="tw-flex tw-items-center tw-justify-between">
                <h3 className="form-box-heading ">Add price group</h3>
                <span className="inner-link" onClick={handleAddPriceInput}>
                  Add more group
                </span>
              </div>
              {priceValues?.map((value, index) => (
                <div className="tw-my-5 tw-flex tw-h-[79px] tw-w-[296px] tw-flex-row tw-items-start tw-justify-between  tw-gap-3 tw-rounded-md tw-px-4 tw-py-[18px] tw-shadow-[0px_0px_10px_rgba(29,78,216,0.07)]">
                  <div className="tw-flex tw-items-center  tw-gap-3">
                    <div>
                      <GroupIcon />
                    </div>
                    <div className="tw-flex-col tw-items-center  tw-gap-3">
                      <h4 className="tw-text-sm tw-font-medium tw-not-italic tw-leading-[21px] tw-text-text-medium-gray">
                        Group 1
                      </h4>
                      <p className="tw-text-xs tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
                        32
                      </p>
                    </div>
                  </div>
                  <Dialog open={openPopup}>
                    <div ref={ref} className="tw-w-[389px]">
                      <div>
                        <DialogTitle>Group</DialogTitle>
                      </div>
                      <DialogContent>
                        <CustomInput
                          placeholder="Group"
                          label="Group Name"
                          type="text"
                          // value={updateValue}
                          // onChange={(e) => setUpdateValue(e.target.value)}
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
                            //   handleUpdateCategory(idToUpdateCategory, updateValue);
                            //   setUpdateValue('');
                          }}
                        />
                      </DialogActions>
                    </div>
                  </Dialog>
                  <div className="tw-relative" onClick={handleThreeMenu}>
                    <div className="hover:tw-cursor-pointer">
                      <HorizentalDotsIcon />
                    </div>
                    {threeDot ? (
                      <div
                        ref={ref}
                        className="tw-absolute tw-bottom-[-66px] tw-left-[-100px] tw-flex tw-h-[74px] tw-w-[92px] tw-flex-col tw-items-start tw-gap-2 tw-rounded-md tw-border tw-border-solid tw-border-[#CECECE] tw-bg-white tw-p-3 "
                      >
                        <div
                          id="three-dot-div-4"
                          className="tw-flex tw-flex-row tw-items-center tw-gap-2 tw-p-0 hover:tw-cursor-pointer"
                          // onClick={() => handleButtonClickedit(id, value)}
                          onClick={() => setOpenPopup(true)}
                        >
                          <PencilIcon id="three-dot-pencil" />
                          <p
                            id="three-dot-p"
                            className="tw-text-sm tw-font-medium tw-not-italic tw-leading-[21px] tw-text-text-black"
                          >
                            Edit
                          </p>
                        </div>
                        <div
                          id="three-dot-div-5"
                          className="tw-flex tw-flex-row tw-items-center tw-gap-2 tw-p-0 hover:tw-cursor-pointer"
                          // onClick={() => handleDeleteCategory(id)}
                        >
                          <DeleteIcon id="three-dot-delete" />
                          <p
                            id="three-dot-div-6"
                            className="tw-text-sm tw-font-medium tw-not-italic tw-leading-[21px] tw-text-text-black"
                          >
                            Delete
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
              {priceInputValues.map((value, index) => (
                <div
                  key={index}
                  className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]"
                >
                  <Select
                    label="Group"
                    name="Group "
                    placeholder="Select Group "
                    options={[
                      { label: 'Test 1', value: 'test1' },
                      { label: 'Test 2', value: 'test2' },
                      { label: 'Test 3', value: 'test3' }
                    ]}
                  />
                  <CustomInput
                    label="Price "
                    name="Price "
                    placeholder="Enter Price "
                    type="text"
                  />
                  <CustomButton
                    text="Add"
                    startIcon={<PlusIcon />}
                    onClick={handleAddPriceClick}
                    className="btn-primary"
                  />
                </div>
              ))}
            </div>
            <div className="form-box tw-mt-[16px]  tw-w-[336px]">
              <div className="tw-flex tw-items-center tw-justify-between">
                <h3 className="form-box-heading ">Add discount group</h3>
                <span className="inner-link" onClick={handleAddDiscountInput}>
                  Add more group
                </span>
              </div>
              {discountValues?.map((value, index) => (
                <div className="tw-my-5 tw-flex tw-h-[79px] tw-w-[296px] tw-flex-row tw-items-start tw-justify-between  tw-gap-3 tw-rounded-md tw-px-4 tw-py-[18px] tw-shadow-[0px_0px_10px_rgba(29,78,216,0.07)]">
                  <div className="tw-flex tw-items-center  tw-gap-3">
                    <div>
                      <GroupIcon />
                    </div>
                    <div className="tw-flex-col tw-items-center  tw-gap-3">
                      <h4 className="tw-text-sm tw-font-medium tw-not-italic tw-leading-[21px] tw-text-text-medium-gray">
                        Group 1
                      </h4>
                      <p className="tw-text-xs tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
                        32
                      </p>
                    </div>
                  </div>
                  <Dialog open={openPopup}>
                    <div ref={ref} className="tw-w-[389px]">
                      <div>
                        <DialogTitle>Group</DialogTitle>
                      </div>
                      <DialogContent>
                        <CustomInput
                          placeholder="Group"
                          label="Group Name"
                          type="text"
                          // value={updateValue}
                          // onChange={(e) => setUpdateValue(e.target.value)}
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
                            //   handleUpdateCategory(idToUpdateCategory, updateValue);
                            //   setUpdateValue('');
                          }}
                        />
                      </DialogActions>
                    </div>
                  </Dialog>
                  <div className="tw-relative" onClick={handleThreeMenu}>
                    <div className="hover:tw-cursor-pointer">
                      <HorizentalDotsIcon />
                    </div>
                    {threeDot ? (
                      <div
                        ref={ref}
                        className="tw-absolute tw-bottom-[-66px] tw-left-[-100px] tw-flex tw-h-[74px] tw-w-[92px] tw-flex-col tw-items-start tw-gap-2 tw-rounded-md tw-border tw-border-solid tw-border-[#CECECE] tw-bg-white tw-p-3 "
                      >
                        <div
                          id="three-dot-div-4"
                          className="tw-flex tw-flex-row tw-items-center tw-gap-2 tw-p-0 hover:tw-cursor-pointer"
                          // onClick={() => handleButtonClickedit(id, value)}
                          onClick={() => setOpenPopup(true)}
                        >
                          <PencilIcon id="three-dot-pencil" />
                          <p
                            id="three-dot-p"
                            className="tw-text-sm tw-font-medium tw-not-italic tw-leading-[21px] tw-text-text-black"
                          >
                            Edit
                          </p>
                        </div>
                        <div
                          id="three-dot-div-5"
                          className="tw-flex tw-flex-row tw-items-center tw-gap-2 tw-p-0 hover:tw-cursor-pointer"
                          // onClick={() => handleDeleteCategory(id)}
                        >
                          <DeleteIcon id="three-dot-delete" />
                          <p
                            id="three-dot-div-6"
                            className="tw-text-sm tw-font-medium tw-not-italic tw-leading-[21px] tw-text-text-black"
                          >
                            Delete
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
              {discountInputValues.map((value, index) => (
                <div
                  key={index}
                  className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]"
                >
                  <Select
                    label="Group"
                    name="Group "
                    placeholder="Select Group "
                    options={[
                      { label: 'Test 1', value: 'test1' },
                      { label: 'Test 2', value: 'test2' },
                      { label: 'Test 3', value: 'test3' }
                    ]}
                  />
                  <CustomInput
                    label="Price "
                    name="Price "
                    placeholder="Enter Price "
                    type="text"
                  />
                  <CustomButton
                    text="Add"
                    startIcon={<PlusIcon />}
                    onClick={handleAddDiscountClick}
                    className="btn-primary"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
