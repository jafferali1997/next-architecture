import api from '@/common/utils/api';

const createBusinessDetail = async (userData) => {
  const response = await api().post('/business-detail', userData);
  return response.data;
};

const getSingleBusinessDetail = async (id) => {
  const response = await api().get(`/business-detail/${id}`);
  return response.data;
};

const getAllBusinessDetail = async () => {
  const response = await api().get('/business-detail');
  return response.data;
};

const updateBusinessDetail = async (id, data) => {
  const response = await api().patch(`/business-detail/${id}`, data);
  return response.data;
};

const deleteBusinessDetail = async (id) => {
  const response = await api().post(`/business-detail${id}`);
  return response.data;
};

const businessDetailService = {
  createBusinessDetail,
  deleteBusinessDetail,
  updateBusinessDetail,
  getAllBusinessDetail,
  getSingleBusinessDetail
};

export default businessDetailService;
