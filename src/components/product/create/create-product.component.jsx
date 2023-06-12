/* eslint-disable react/no-array-index-key */
import { TagsInput } from 'react-tag-input-component';
import { Controller, useForm } from 'react-hook-form';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import Select from '@/common/components/select/select.component';
import MultiSelect from '@/common/components/multi-select/multi-select.component';
import TextArea from '@/common/components/text-area/text-area.component';
import EuroIcon from '@/common/icons/euro.icon';
import UseCreateProduct from './use-create-product.hook';

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
    setDiscountInputValues,
    handleAddDiscountInput,
    handleDiscountInputChange,
    selectedTag,
    handleTags
  } = UseCreateProduct();

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

                  <Select
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
              {/* <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
              <div className="tw-flex tw-items-center tw-justify-between">
                <h3 className="form-box-heading ">Attributes</h3>
                <span className="inner-link" onClick={handleAddInput}>
                  Add more attribute
                </span>
              </div>
              {inputValues?.map((value, index) => (
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
            </div> */}
            </div>
            <div className="right-side">
              <div className="form-box tw-w-[336px]  ">
                <h3 className="form-box-heading ">Tax</h3>
                <div className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]">
                  <Select
                    label="Tax rate"
                    name="taxRate"
                    register={register}
                    errors={errors}
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
                  {/* <Controller
                    name="tags"
                    control={control}
                    defaultValue=""
                    render={({ field }) => ( */}
                  <TagsInput
                    name="tags"
                    value={selectedTag?.map((item) => item.tagName)}
                    onChange={handleTags}
                    placeHolder="Enter Tags"
                  />
                  {/* )}
                  /> */}
                </div>
              </div>
              <div className="form-box tw-mt-[16px]  tw-w-[336px]">
                <div className="tw-flex tw-items-center tw-justify-between">
                  <h3 className="form-box-heading ">Add price group</h3>
                  <span className="inner-link" onClick={handleAddPriceInput}>
                    Add more group
                  </span>
                </div>
                {priceInputValues?.map((value, index) => (
                  <div
                    key={index}
                    className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]"
                  >
                    <Select
                      label="Group"
                      name={`priceGroupName${index}`}
                      register={register}
                      errors={errors}
                      placeholder="Select Group "
                      options={[
                        { label: 'Test 1', value: 'test1' },
                        { label: 'Test 2', value: 'test2' },
                        { label: 'Test 3', value: 'test3' }
                      ]}
                    />
                    <CustomInput
                      label="Price "
                      name={`price${index}`}
                      placeholder="Enter Price "
                      register={register}
                      errors={errors}
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
                {discountInputValues?.map((value, index) => (
                  <div
                    key={index}
                    className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]"
                  >
                    <Select
                      label="Group"
                      name={`discountGroupName${index}`}
                      placeholder="Select Group "
                      register={register}
                      errors={errors}
                      options={[
                        { label: 'Test 1', value: 'test1' },
                        { label: 'Test 2', value: 'test2' },
                        { label: 'Test 3', value: 'test3' }
                      ]}
                    />
                    <CustomInput
                      label="Discount"
                      name={`discount${index}`}
                      placeholder="Enter discount"
                      register={register}
                      errors={errors}
                      type="text"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
