import api from '@/common/utils/api';

const createProfileFinancialBusiness = async (userData) => {
  const response = await api().post('/profile-financial-business', userData);
  return response.data;
};

const profileFinancialBusinessService = {
  createProfileFinancialBusiness
};

export default profileFinancialBusinessService;
