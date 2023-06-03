import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/auth.slice';
import businessDetailReducer from './features/business-detail/business-detail.slice';
import financialDetailReducer from './features/financial-detail/financial-detail.slice';
import profileFinancialBusinessReducer from './features/profile-financial-business/profile-financial-business.slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    businessDetail: businessDetailReducer,
    financialDetail: financialDetailReducer,
    profileFinancialBusiness: profileFinancialBusinessReducer
  }
});

export default store;
