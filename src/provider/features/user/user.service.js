import api from '@/common/utils/api';

const addPhoneAndGenerateOtp = async (phone) => {
  const response = await api().post('/users/add-phone-and-generate-otp', phone);
  return response.data;
};

const generateOtp = async () => {
  const response = await api().get('/users/generate-otp');
  return response.data;
};

const verifyOtp = async (otp) => {
  const response = await api().post('/users/verify-otp', otp);
  return response.data;
};

const generateForgetPasswordLink = async (email) => {
  const response = await api().post('/users/generate-forget-password-link', email);
  return response.data;
};

const regenerateEmailLink = async (email) => {
  const response = await api().post('/users/regenerate-email-link', email);
  return response.data;
};

const changePasswordFromLink = async (data) => {
  const response = await api().post('/users/change-password-from-link', data);
  return response.data;
};

const changePassword = async (data) => {
  const response = await api().post('/users/change-password', data);
  return response.data;
};

const verifyEmail = async (data) => {
  const response = await api().post('/users/verify-email', data);
  return response.data;
};

const userService = {
  addPhoneAndGenerateOtp,
  generateOtp,
  verifyOtp,
  generateForgetPasswordLink,
  regenerateEmailLink,
  changePasswordFromLink,
  changePassword,
  verifyEmail
};

export default userService;
