'use client';

/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { TagsInput } from 'react-tag-input-component';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import Select from '@/common/components/select/select.component';
import TextArea from '@/common/components/text-area/text-area.component';
import EuroIcon from '@/common/icons/euro.icon';
import UseEditProduct from './use-edit-product.hook';

export default function EditProduct() {
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
    setDiscountInputValues,
    handleAddDiscountInput,
    handleDiscountInputChange,
    selectedTag,
    setSelectedTag
  } = UseEditProduct();
  return (
    <div className="content">
      <div className="tw-min-h-[100vh] tw-w-full tw-bg-[#FBFBFB] tw-px-[23px] ">
        <div className="tw-flex tw-items-center tw-justify-between tw-py-[24px]">
          <div className="tw-flex tw-items-center tw-gap-[16px]">
            <img src="/assets/images/back-icon.svg" alt="img" />
            <h1 className="admin-top-heading ">Edit Product</h1>
            <p className="admin-top-p">Item Number #: 10075</p>
          </div>
          <CustomButton className="btn-primary" text="Update" />
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
