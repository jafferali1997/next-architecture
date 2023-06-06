import api from '@/common/utils/api';

const createCustomerPersonalDetail = async (userData) => {
  const response = await api().post('/customer/personal', userData);
  return response.data;
};
const createCustomerAccountDetail = async (userData) => {
  const response = await api().post('/customer/account-detail', userData);
  return response.data;
};
const createCustomerDiscount = async (userData) => {
  const response = await api().post('/customer/discount', userData);
  return response.data;
};
const createCustomerCompanyDetail = async (userData) => {
  const response = await api().post('/customer/company-detail', userData);
  return response.data;
};
const createCustomerTermOfPaymentAndDelivey = async (userData) => {
  const response = await api().post('/customer/term-of-payment-and-delivery', userData);
  return response.data;
};

const getSingleCustomer = async (id) => {
  const response = await api().get(`/customer/${id}`);
  return response.data;
};

const getAllCustomer = async () => {
  const response = await api().post('/customer/get-all');
  return response.data;
};

const updateCustomer = async (id, data) => {
  const response = await api().patch(`/customer/${id}`, data);
  return response.data;
};

const deleteCustomer = async (id) => {
  const response = await api().delete(`/customer/${id}`);
  return response.data;
};

const customerService = {
  createCustomerPersonalDetail,
  createCustomerAccountDetail,
  createCustomerDiscount,
  createCustomerCompanyDetail,
  createCustomerTermOfPaymentAndDelivey,
  deleteCustomer,
  updateCustomer,
  getAllCustomer,
  getSingleCustomer
};

export default customerService;
