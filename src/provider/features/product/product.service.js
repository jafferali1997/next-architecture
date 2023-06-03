import api from '@/common/utils/api';

const createProduct = async (userData) => {
  const response = await api().post('/product', userData);
  return response.data;
};

const getSingleProduct = async (id) => {
  const response = await api().get(`/product/${id}`);
  return response.data;
};

const getAllProduct = async () => {
  const response = await api().get('/product');
  return response.data;
};

const updateProduct = async (id, data) => {
  const response = await api().patch(`/product/${id}`, data);
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await api().delete(`/product/${id}`);
  return response.data;
};

const productService = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProduct,
  getSingleProduct
};

export default productService;
