/* eslint-disable react/no-array-index-key */
import { TagsInput } from 'react-tag-input-component';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import Select from '@/common/components/select/select.component';
import MultiSelect from '@/common/components/multi-select/multi-select.component';
import TextArea from '@/common/components/text-area/text-area.component';
import EuroIcon from '@/common/icons/euro.icon';
import UseCreateProduct from './use-create-product.hook';

export default function detailProduct() {
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
    setSelectedTag,
    data
  } = UseCreateProduct();

  return (
    <>
      {!data && <div>loading...</div>}
      {data && (
        <div className="content">
          <div className="tw-min-h-[100vh] tw-w-full tw-bg-[#FBFBFB] tw-px-[23px] ">
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
                      disabled
                      defaultValue={data.productName}
                    />
                    <h3 className="tw-mt-[16px]">Description </h3>
                    <TextArea
                      name="description"
                      placeholder="Description"
                      type="textarea"
                      disabled
                      defaultValue={data.description}
                    />
                  </div>
                </div>
                <div className="form-box tw-mt-[16px]  tw-w-[759px] ">
                  <h3 className="form-box-heading ">Product categories</h3>
                  <div className="tw-mt-[16px] tw-flex tw-w-full tw-flex-col tw-gap-[16px]">
                    <Select
                      label="Select product category"
                      name="productCategory"
                      disabled
                      defaultValue={data.productCategory}
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
                      disabled
                      defaultValue={data.quantity}
                      placeholder="Number Of Piece "
                      type="text"
                    />

                    <Select
                      label="Units"
                      name="unit"
                      disabled
                      defaultValue={data.unit}
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
                      disabled
                      defaultValue={data.manufacture}
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
                      disabled
                      defaultValue={data.netPrice}
                      endIcon={<EuroIcon />}
                    />
                    <CustomInput
                      label="Gross price "
                      name="grossPrice"
                      placeholder="Enter Gross price "
                      type="text"
                      disabled
                      defaultValue={data.grossPrice}
                      endIcon={<EuroIcon />}
                    />
                    <CustomInput
                      label="Purchase price "
                      name="purchasePrice"
                      placeholder="Enter Purchase price "
                      type="text"
                      disabled
                      defaultValue={data.purchasePrice}
                      endIcon={<EuroIcon />}
                    />
                    <CustomInput
                      label="Minimum selling price"
                      name="minSellingPrice"
                      placeholder="Enter Minimum selling price"
                      type="text"
                      disabled
                      defaultValue={data.minSellingPrice}
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
                      disabled
                      defaultValue={data.taxRate}
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
                      value={selectedTag}
                      onChange={setSelectedTag}
                      disabled
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
                  {data?.priceGroup?.map((value, index) => (
                    <div
                      key={index}
                      className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]"
                    >
                      <Select
                        label="Group"
                        name={`priceGroupName${index}`}
                        disabled
                        defaultValue={data.priceGroup[index].priceGroupName}
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
                        disabled
                        defaultValue={data.priceGroup[index].price}
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
                  {data?.discountGroup?.map((value, index) => (
                    <div
                      key={index}
                      className="tw-mt-[16px] tw-flex  tw-w-full tw-flex-col tw-gap-[16px]"
                    >
                      <Select
                        label="Group"
                        name={`discountGroupName${index}`}
                        placeholder="Select Group "
                        disabled
                        defaultValue={data.discountGroup[index].discountGroupName}
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
                        disabled
                        defaultValue={data.discountGroup[index].discount}
                        type="text"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
