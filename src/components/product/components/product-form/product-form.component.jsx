/* eslint-disable react/forbid-prop-types */

'use client';

import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TagsInput } from 'react-tag-input-component';
import SelectInput from '@mui/material/Select/SelectInput';
import { MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import Select from '@/common/components/select/select.component';
import TextArea from '@/common/components/text-area/text-area.component';
import EuroIcon from '@/common/icons/euro.icon';
import { getAllDiscountGroup } from '@/provider/features/discount-group/discount-group.slice';
import { getAllPriceGroup } from '@/provider/features/price-group/price-group.slice';
import ProductGroup from '../product-group/product-group.component';
import ProductModal from '../product-modal/product-modal.component';
import CustomSelect from '@/common/components/custom-select/custom-select.component';
import FieldError from '@/common/components/field-error/field-error.component';
import useProductForm from './use-product-form.hook';

export default function ProductForm({
  priceInputValues,
  handlePriceInput = null,
  discountInputValues,
  handleDiscountInput = null,
  selectedTag,
  handleTags = null,
  onSubmit = null,
  handleSubmit = null,
  register = null,
  categories = null,
  handleClickCategory = null,
  selectedCategory = [],
  setSelectedCategory = null,
  errors = null,
  data = {},
  disabled = false,
  control
}) {
  const {
    parentCategory,
    handleClickParentCategory,
    handleClickSubCategory,
    categoryToMap,
    handleSelectCategory,
    handleRemoveSelectedCategory,
    handleModalData,
    modalData,
    openPopup,
    setOpenPopup,
    handleModalSubmit,
    handleDeleteGroup
  } = useProductForm(
    categories,
    handleDiscountInput,
    handlePriceInput,
    setSelectedCategory,
    selectedCategory,
    handleClickCategory
  );

  const router = useRouter();

  return (
    <div className="content">
      <div className="tw-min-h-[100vh] tw-w-full tw-bg-[#FBFBFB] tw-px-[23px] ">
        <form onSubmit={!disabled ? handleSubmit(onSubmit) : () => {}}>
          <div className="tw-flex tw-items-center tw-justify-between tw-py-[24px]">
            <div className="tw-flex tw-items-center tw-gap-[16px]">
              <img
                role="presentation"
                onClick={() => {
                  router.back();
                }}
                src="/assets/images/back-icon.svg"
                alt="img"
              />
              <h1 className="admin-top-heading ">
                {Object.keys(data).length ? (disabled ? 'View' : 'Edit') : 'Add'} Product
              </h1>
              <p className="admin-top-p">
                {Object.keys(data).length ? `Item Number #: ${data.id}` : ''}
              </p>
            </div>
            {!disabled && (
              <CustomButton
                type="submit"
                className="btn-primary"
                text={Object.keys(data).length ? 'Update' : 'Save'}
              />
            )}
            {disabled && (
              <CustomButton
                onClick={() => {
                  router.push(`/product/edit/${data.id}`);
                }}
                className="btn-primary"
                text="Edit"
              />
            )}
          </div>
          <div className="2bars tw-flex tw-gap-[24px]">
            <div className="main-content">
              <div className="form-box  tw-w-[759px] ">
                <h3 className="form-box-heading ">Basic Details</h3>
                <div className="tw-mt-[16px] tw-w-full">
                  <CustomInput
                    label="Product name"
                    name="productName"
                    placeholder="Product name"
                    type="text"
                    defaultValue={data.productName}
                    disabled={disabled}
                    register={register}
                    errors={errors}
                  />
                  <h3 className="tw-mt-[16px]">Description </h3>
                  <TextArea
                    name="description"
                    placeholder="Description"
                    type="textarea"
                    defaultValue={data.description}
                    disabled={disabled}
                    register={register}
                    errors={errors}
                  />
                </div>
              </div>
              <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
                <h3 className="form-box-heading ">Inventory</h3>
                <div className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]">
                  <CustomInput
                    label="Number Of Piece "
                    name="quantity"
                    defaultValue={data.quantity}
                    register={register}
                    errors={errors}
                    disabled={disabled}
                    placeholder="Number Of Piece "
                    type="number"
                  />

                  <CustomSelect
                    label="Units"
                    name="unit"
                    defaultValue={data.unit}
                    control={control}
                    register={register}
                    errors={errors}
                    disabled={disabled}
                    placeholder="Units "
                    options={[
                      { label: 'm2', value: 'm2' },
                      { label: 'pc', value: 'pc' },
                      { label: 'm', value: 'm' },
                      { label: 'Cm', value: 'Cm' }
                    ]}
                  />
                  <CustomInput
                    label="Manufacture"
                    name="manufacturer"
                    placeholder="Enter Manufacture"
                    type="text"
                    defaultValue={data.manufacturer}
                    register={register}
                    disabled={disabled}
                    errors={errors}
                  />
                </div>
              </div>
              <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
                <h3 className="form-box-heading ">Pricing</h3>
                <div className="form-box-grid">
                  <CustomInput
                    label="Net price "
                    name="netPrice"
                    defaultValue={data.netPrice}
                    placeholder="Enter net price "
                    type="number"
                    register={register}
                    disabled={disabled}
                    errors={errors}
                    endIcon={<EuroIcon />}
                  />
                  <CustomInput
                    label="Gross price "
                    name="grossPrice"
                    defaultValue={data.grossPrice}
                    placeholder="Enter Gross price "
                    type="number"
                    register={register}
                    disabled={disabled}
                    errors={errors}
                    endIcon={<EuroIcon />}
                  />
                  <CustomInput
                    label="Purchase price "
                    name="purchasePrice"
                    defaultValue={data.purchasePrice}
                    placeholder="Enter Purchase price "
                    type="number"
                    register={register}
                    disabled={disabled}
                    errors={errors}
                    endIcon={<EuroIcon />}
                  />
                  <CustomInput
                    label="Minimum selling price"
                    name="minSellingPrice"
                    placeholder="Enter Minimum selling price"
                    type="number"
                    defaultValue={data.minSellingPrice}
                    register={register}
                    disabled={disabled}
                    errors={errors}
                    endIcon={<EuroIcon />}
                  />
                </div>
              </div>
            </div>

            <div className="right-side">
              <div className="form-box tw-w-[336px]">
                <h3 className="form-box-heading ">Product Organization</h3>
                <div className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]">
                  <label className="tw-text-xs tw-font-medium tw-not-italic tw-leading-[100%] tw-text-text-black">
                    Product Category
                  </label>
                  {!disabled && (
                    <SelectInput className="tw-flex tw-h-10 tw-w-[296px] tw-flex-row tw-items-center tw-gap-[91px] tw-rounded-md tw-border-[1.5px] tw-border-solid tw-border-text-ultra-light-gray tw-px-4 tw-py-[9.5px]">
                      {parentCategory.length > 0 && (
                        <MenuItem value="">
                          <div className="tw-flex tw-w-[250px] tw-items-center">
                            <div
                              className="tw-basis-1/12"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleClickParentCategory(
                                  parentCategory[parentCategory.length - 1]
                                );
                              }}
                            >
                              {'<'}
                            </div>
                            <div className="tw-basis-11/12 tw-text-right tw-text-sm tw-font-normal tw-not-italic tw-leading-[21px] tw-text-text-black">
                              {parentCategory[parentCategory.length - 1].categoryName}
                            </div>
                          </div>
                        </MenuItem>
                      )}
                      {categoryToMap.map((category) => (
                        <MenuItem value="">
                          <div className="tw-flex tw-w-[250px] tw-items-center">
                            <div
                              className="tw-basis-11/12 tw-text-sm tw-font-normal tw-not-italic tw-leading-[21px] tw-text-text-black"
                              onClick={() => handleSelectCategory(category)}
                            >
                              {category.categoryName}
                            </div>
                            {category.hasChildren === true && (
                              <div
                                className="tw-basis-1/12 tw-text-center"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleClickSubCategory(category);
                                }}
                              >
                                {'>'}
                              </div>
                            )}
                          </div>
                        </MenuItem>
                      ))}
                    </SelectInput>
                  )}
                  {errors && errors.category && (
                    <FieldError className="tw-mt-1" error={errors.category.message} />
                  )}
                </div>
                {selectedCategory.map((category, categoryIndex) => (
                  <div className="tw-m-2 tw-flex tw-rounded-full tw-bg-slate-200">
                    <div className="tw-basis-11/12 tw-px-3">
                      {category?.map((higherArchie, higherArchieIndex) => (
                        <span>
                          {higherArchie.categoryName}{' '}
                          {higherArchieIndex !== category.length - 1 && '>'}{' '}
                        </span>
                      ))}
                    </div>
                    {!disabled && (
                      <div
                        className="tw-float-right tw-m-auto tw-basis-1/12 tw-cursor-pointer tw-px-3"
                        onClick={() => handleRemoveSelectedCategory(categoryIndex)}
                      >
                        x
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="form-box tw-mt-[16px] tw-w-[336px]">
                <h3 className="form-box-heading ">Tax</h3>
                <div className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]">
                  <CustomSelect
                    label="Tax rate"
                    name="taxRate"
                    control={control}
                    defaultValue={data.taxRate}
                    placeholder="Tax rate "
                    disabled={disabled}
                    options={[
                      { label: '3%', value: '3%' },
                      { label: '5%', value: '5%' },
                      { label: '7%', value: '7%' },
                      { label: '10%', value: '10%' },
                      { label: '16%', value: '16%' }
                    ]}
                  />
                </div>
              </div>
              <div className="form-box  tw-mt-[16px]  tw-w-[336px]">
                <h3 className="form-box-heading ">Tags</h3>
                <div className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]">
                  <TagsInput
                    value={selectedTag.map((item) => item.tagName)}
                    onChange={handleTags}
                    disabled={disabled}
                    placeHolder="Enter Tags"
                  />
                </div>
              </div>
              <div className="form-box tw-mt-[16px]  tw-w-[336px]">
                <div className="tw-flex tw-items-center tw-justify-between">
                  <h3 className="form-box-heading ">Add price group</h3>
                  {!disabled && (
                    <span
                      className="inner-link"
                      onClick={() => handleModalData('createPrice')}
                    >
                      Add more group
                    </span>
                  )}
                </div>
                {priceInputValues?.map((item, index) => (
                  <ProductGroup
                    item={item}
                    handleModalData={handleModalData}
                    handleDeleteGroup={handleDeleteGroup}
                    index={index}
                    disabled={disabled}
                    updateType="updatePrice"
                  />
                ))}
              </div>
              <div className="form-box tw-mt-[16px]  tw-w-[336px]">
                <div className="tw-flex tw-items-center tw-justify-between">
                  <h3 className="form-box-heading ">Add discount group</h3>

                  {!disabled && (
                    <span
                      className="inner-link"
                      onClick={() => handleModalData('createDiscount')}
                    >
                      Add more group
                    </span>
                  )}
                </div>
                {discountInputValues?.map((item, index) => (
                  <ProductGroup
                    item={item}
                    handleModalData={handleModalData}
                    handleDeleteGroup={handleDeleteGroup}
                    disabled={disabled}
                    index={index}
                    updateType="updateDiscount"
                  />
                ))}
              </div>
            </div>
          </div>
        </form>
        <ProductModal
          data={modalData}
          setData={handleModalSubmit}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        />
      </div>
    </div>
  );
}

ProductForm.propTypes = {
  priceInputValues: PropTypes.array.isRequired,
  handlePriceInput: PropTypes.func,
  discountInputValues: PropTypes.array.isRequired,
  handleDiscountInput: PropTypes.func,
  categories: PropTypes.array.isRequired,
  selectedTag: PropTypes.array.isRequired,
  selectedCategory: PropTypes.array,
  setSelectedCategory: PropTypes.func,
  handleTags: PropTypes.func,
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleClickCategory: PropTypes.func,
  register: PropTypes.func,
  control: PropTypes.any,
  errors: PropTypes.object,
  data: PropTypes.object,
  disabled: PropTypes.bool
};
