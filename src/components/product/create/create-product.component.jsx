'use client';

import ProductForm from '../components/product-form/product-form.component';
import useCreateProduct from './use-create-product.hook';

export default function CreateProduct() {
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
    setSelectedCategory
  } = useCreateProduct();
  return (
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
    />
  );
}
