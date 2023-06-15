import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/auth.slice';
import businessDetailReducer from './features/business-detail/business-detail.slice';
import financialDetailReducer from './features/financial-detail/financial-detail.slice';
import profileFinancialBusinessReducer from './features/profile-financial-business/profile-financial-business.slice';
import profileReducer from './features/profile/profile.slice';
import priceGroupReducer from './features/price-group/price-group.slice';
import discountGroupReducer from './features/discount-group/discount-group.slice';
import faqReducer from './features/faq/faq.slice';
import tagReducer from './features/tag/tag.slice';
import productReducer from './features/product/product.slice';
import customerReducer from './features/customer/customer.slice';
import productCategoryReducer from './features/product-category/product-category.slice';
import userReducer from './features/user/user.slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    businessDetail: businessDetailReducer,
    financialDetail: financialDetailReducer,
    profileFinancialBusiness: profileFinancialBusinessReducer,
    profile: profileReducer,
    priceGroup: priceGroupReducer,
    discountGroup: discountGroupReducer,
    faq: faqReducer,
    product: productReducer,
    customer: customerReducer,
    productCategory: productCategoryReducer,
    tag: tagReducer
  }
});

export default store;
