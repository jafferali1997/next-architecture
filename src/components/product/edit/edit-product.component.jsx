'use client';

import { TagsInput } from 'react-tag-input-component';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import Select from '@/common/components/select/select.component';
import TextArea from '@/common/components/text-area/text-area.component';
import EuroIcon from '@/common/icons/euro.icon';
import useEditProduct from './use-edit-product.hook';
import ProductForm from '../components/product-form/product-form.component';

export default function EditProduct() {
  const {
    priceInputValues,
    handlePriceInput,
    discountInputValues,
    handleDiscountInput,
    ref,
    openPopup,
    setOpenPopup,
    selectedTag,
    handleTags,
    onSubmit,
    handleSubmit,
    register,
    categories,
    handleClickCategory,
    errors,
    selectedCategory,
    setSelectedCategory,
    data
  } = useEditProduct();
  return (
    <>
      {!data && <div>loading...</div>}
      {data && (
        <ProductForm
          priceInputValues={priceInputValues}
          handlePriceInput={handlePriceInput}
          discountInputValues={discountInputValues}
          handleDiscountInput={handleDiscountInput}
          ref={ref}
          categories={categories}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          selectedTag={selectedTag}
          handleTags={handleTags}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          handleClickCategory={handleClickCategory}
          data={data}
        />
      )}
    </>
  );
}
