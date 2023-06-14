'use client';

import ProductForm from '../components/product-form/product-form.component';
import useDetailProduct from './use-detail-product.hook';
import CustomSelect from '@/common/components/custom-select/custom-select.component';

export default function DetailProduct() {
  const { priceInputValues, discountInputValues, selectedTag, selectedCategory, data } =
    useDetailProduct();

  return (
    <>
      {!data && <div>loading...</div>}
      {data && (
        <ProductForm
          priceInputValues={priceInputValues}
          discountInputValues={discountInputValues}
          selectedTag={selectedTag}
          data={data}
          disabled={true}
          selectedCategory={selectedCategory}
        />
      )}
    </>
  );
}
