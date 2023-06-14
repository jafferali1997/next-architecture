/* eslint-disable react/forbid-prop-types */

'use client';

import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TagsInput } from 'react-tag-input-component';
import SelectInput from '@mui/material/Select/SelectInput';
import { MenuItem } from '@mui/material';
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

export default function ProductForm({
  priceInputValues,
  handlePriceInput,
  discountInputValues,
  handleDiscountInput,
  selectedTag,
  handleTags,
  onSubmit,
  handleSubmit,
  register,
  categories,
  handleClickCategory,
  errors
}) {
  const [modalData, setModalData] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const [categoryToMap, setCategoryToMap] = useState([]);
  const [parentCategory, setParentCategory] = useState([]);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const priceGroupList = useSelector((state) => state.priceGroup.getAll);
  const discountGroupList = useSelector((state) => state.discountGroup.getAll);

  useEffect(() => {
    dispatch(getAllPriceGroup());
    dispatch(getAllDiscountGroup());
  }, []);

  console.log(categories, 'categories');
  useEffect(() => {
    if (categories.length >= 1) {
      if (
        categoryId &&
        categories.find((category) => category.categoryToRender === categoryId)
      ) {
        setCategoryToMap([
          ...categories.find((category) => category.categoryToRender === categoryId)
            .categories
        ]);
      } else {
        setCategoryToMap([...categories[0].categories]);
      }
    }
  }, [categories, categoryId]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenPopup(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const handleModalData = (type, index = null, data = null) => {
    switch (type) {
      case 'updatePrice':
        setModalData([
          {
            id: index,
            label: 'Group Name',
            type: 'select',
            value: data.id,
            options: priceGroupList?.data?.map((item) => {
              return { name: item.priceGroupName, value: item.id };
            })
          },
          { id: index, label: 'price', value: data.price, type: 'number' }
        ]);
        break;
      case 'createPrice':
        setModalData([
          {
            label: 'Group Name',
            type: 'select',
            options: priceGroupList?.data?.map((item) => {
              return { name: item.priceGroupName, value: item.id };
            }),
            value: ''
          },
          { label: 'price', value: 0, type: 'number' }
        ]);
        break;
      case 'updateDiscount':
        setModalData([
          {
            id: index,
            label: 'Group Name',
            type: 'select',
            options: discountGroupList?.data?.map((item) => {
              return { name: item.discountGroupName, value: item.id };
            }),
            value: data.id
          },
          { id: index, label: 'discount', value: data.discount }
        ]);
        break;
      case 'createDiscount':
        setModalData([
          {
            label: 'Group Name',
            type: 'select',
            value: '',
            options: discountGroupList?.data?.map((item) => {
              return { name: item.discountGroupName, value: item.id };
            })
          },
          { label: 'discount', value: '' }
        ]);
        break;
    }
    setOpenPopup(true);
  };

  const handleModalSubmit = (data) => {
    if (data[0].id && data[1].label === 'discount') {
      handleDiscountInput(
        {
          discountGroupName: data[0].value,
          discount: data[0].value
        },
        data[0].id
      );
    }

    if (data[0].id && data[1].label === 'price') {
      handlePriceInput(
        { priceGroupName: data[0].value, price: data[0].value },
        data[0].id
      );
    }
    if (!data[0].id && data[1].label === 'discount') {
      handleDiscountInput({
        discountGroupName: data[0].value,
        discount: data[0].value
      });
    }

    if (!data[0].id && data[1].label === 'price') {
      handlePriceInput({
        priceGroupName: data[0].value,
        price: data[0].value
      });
    }
  };

  const handleParentCategory = (item) => {
    setParentCategory([...parentCategory, item]);
  };

  const handleClickSubCategory = (item) => {
    setCategoryId(item.id);
    handleParentCategory(item);
    handleClickCategory(item.id, item.categoryLevel + 1);
  };

  const handleClickParentCategory = (item) => {
    setCategoryId(item.parentCategoryId ? item.parentCategoryId : 0);
    setParentCategory([...parentCategory.slice(0, -1)]);
  };

  return (
    <div className="content">
      <div className="tw-min-h-[100vh] tw-w-full tw-bg-[#FBFBFB] tw-px-[23px] ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="tw-flex tw-items-center tw-justify-between tw-py-[24px]">
            <div className="tw-flex tw-items-center tw-gap-[16px]">
              <img src="/assets/images/back-icon.svg" alt="img" />
              <h1 className="admin-top-heading ">Add Product</h1>
              <p className="admin-top-p">Item Number #: 10075</p>
            </div>
            <CustomButton type="submit" className="btn-primary" text="Save" />
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
                    register={register}
                    errors={errors}
                  />
                  <h3 className="tw-mt-[16px]">Description </h3>
                  <TextArea
                    name="description"
                    placeholder="Description"
                    type="textarea"
                    register={register}
                    errors={errors}
                  />
                </div>
              </div>
              <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
                <h3 className="form-box-heading ">Product categories</h3>
                <div className="tw-mt-[16px] tw-flex tw-w-full tw-flex-col tw-gap-[16px]">
                  <Select
                    label="Select product category"
                    name="productCategory"
                    register={register}
                    errors={errors}
                    placeholder="Select product category "
                    options={[
                      { label: 'Test 1', value: 'test1' },
                      { label: 'Test 2', value: 'test2' },
                      { label: 'Test 3', value: 'test3' }
                    ]}
                  />
                  <Select
                    label="Sub-Category Level 1 "
                    name="productCategory"
                    placeholder="Sub-Category Level 1  "
                    options={[
                      { label: 'Test 1', value: 'test1' },
                      { label: 'Test 2', value: 'test2' },
                      { label: 'Test 3', value: 'test3' }
                    ]}
                  />
                  <Select
                    label="Sub-Category Level 2 "
                    name="productCategory"
                    placeholder="Sub-Category Level 2  "
                    options={[
                      { label: 'Test 1', value: 'test1' },
                      { label: 'Test 2', value: 'test2' },
                      { label: 'Test 3', value: 'test3' }
                    ]}
                  />
                  <Select
                    label="Sub-Category Level 3 "
                    name="productCategory"
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
                    name="quantity"
                    register={register}
                    errors={errors}
                    placeholder="Number Of Piece "
                    type="text"
                  />

                  <CustomSelect
                    label="Units"
                    name="unit"
                    register={register}
                    errors={errors}
                    placeholder="Units "
                    options={[
                      { label: 'Test 1', value: 'test1' },
                      { label: 'Test 2', value: 'test2' },
                      { label: 'Test 3', value: 'test3' }
                    ]}
                  />
                  <CustomInput
                    label="Manufacture"
                    name="manufacture"
                    placeholder="Enter Manufacture"
                    type="text"
                    register={register}
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
                    placeholder="Enter net price "
                    type="text"
                    register={register}
                    errors={errors}
                    endIcon={<EuroIcon />}
                  />
                  <CustomInput
                    label="Gross price "
                    name="grossPrice"
                    placeholder="Enter Gross price "
                    type="text"
                    register={register}
                    errors={errors}
                    endIcon={<EuroIcon />}
                  />
                  <CustomInput
                    label="Purchase price "
                    name="purchasePrice"
                    placeholder="Enter Purchase price "
                    type="text"
                    register={register}
                    errors={errors}
                    endIcon={<EuroIcon />}
                  />
                  <CustomInput
                    label="Minimum selling price"
                    name="minSellingPrice"
                    placeholder="Enter Minimum selling price"
                    type="text"
                    register={register}
                    errors={errors}
                    endIcon={<EuroIcon />}
                  />
                </div>
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
                    {parentCategory.length > 0 && (
                      <MenuItem value="">
                        <div className="tw-flex tw-w-[250px] tw-items-center tw-justify-between">
                          <span
                            onClick={() =>
                              handleClickParentCategory(
                                parentCategory[parentCategory.length - 1]
                              )
                            }
                          >
                            {'<'}
                          </span>
                          <p className="tw-text-sm tw-font-normal tw-not-italic tw-leading-[21px] tw-text-text-black">
                            {parentCategory[parentCategory.length - 1].categoryName}
                          </p>
                        </div>
                      </MenuItem>
                    )}
                    {categoryToMap.map((category) => (
                      <MenuItem value="">
                        <div className="tw-flex tw-w-[250px] tw-items-center tw-justify-between">
                          <p className="tw-text-sm tw-font-normal tw-not-italic tw-leading-[21px] tw-text-text-black">
                            {category.categoryName}
                          </p>
                          {category.hasChildren === true && (
                            <span onClick={() => handleClickSubCategory(category)}>
                              {'>'}
                            </span>
                          )}
                        </div>
                      </MenuItem>
                    ))}
                  </SelectInput>
                </div>
              </div>
              <div className="form-box tw-w-[336px]  ">
                <h3 className="form-box-heading ">Tax</h3>
                <div className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]">
                  <CustomSelect
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
                    onChange={handleTags}
                    name="Tags"
                    placeHolder="Enter Tags"
                  />
                </div>
              </div>
              <div className="form-box tw-mt-[16px]  tw-w-[336px]">
                <div className="tw-flex tw-items-center tw-justify-between">
                  <h3 className="form-box-heading ">Add price group</h3>
                  <span
                    className="inner-link"
                    onClick={() => handleModalData('createPrice')}
                  >
                    Add more group
                  </span>
                </div>
                {priceInputValues?.map((item, index) => (
                  <ProductGroup
                    item={item}
                    handleModalData={handleModalData}
                    handleUpdateInput={handlePriceInput}
                    index={index}
                    updateType="updatePrice"
                  />
                ))}
              </div>
              <div className="form-box tw-mt-[16px]  tw-w-[336px]">
                <div className="tw-flex tw-items-center tw-justify-between">
                  <h3 className="form-box-heading ">Add discount group</h3>
                  <span
                    className="inner-link"
                    onClick={() => handleModalData('createDiscount')}
                  >
                    Add more group
                  </span>
                </div>
                {discountInputValues?.map((item, index) => (
                  <ProductGroup
                    item={item}
                    handleModalData={handleModalData}
                    handleUpdateInput={handleDiscountInput}
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
          ref={ref}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        />
      </div>
    </div>
  );
}

ProductForm.propTypes = {
  priceInputValues: PropTypes.array.isRequired,
  handlePriceInput: PropTypes.func.isRequired,
  discountInputValues: PropTypes.array.isRequired,
  handleDiscountInput: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  selectedTag: PropTypes.array.isRequired,
  handleTags: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClickCategory: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};
