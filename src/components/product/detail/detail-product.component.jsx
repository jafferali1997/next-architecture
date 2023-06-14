import ProductForm from '../components/product-form/product-form.component';
import useDetailProduct from './use-detail-product.hook';

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
