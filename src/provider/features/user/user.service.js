import api from '@/common/utils/api';

const addPhoneAndGenerateOtp = async (phone) => {
  const response = await api().post('/user/add-phone-and-generate-otp', phone);
  return response.data;
};

const generateOtp = async () => {
  const response = await api().get('/user/generate-otp');
  return response.data;
};

const verifyOtp = async (otp) => {
  const response = await api().post('/user/verify-otp', otp);
  return response.data;
};

const getCurrentUser = async () => {
  const response = await api().get('/user');
  if (response.data.Succeeded) {
    const user = JSON.parse(localStorage.getItem('user'));
    localStorage.setItem(
      'user',
      JSON.stringify({ ...response.data.data, token: user.token })
    );
  }
  return response.data;
};

const generateForgetPasswordLink = async (email) => {
  const response = await api().post('/user/generate-forget-password-link', email);
  return response.data;
};

const regenerateEmailLink = async (email) => {
  const response = await api().post('/user/regenerate-email-link', email);
  return response.data;
};

const changePasswordFromLink = async (data) => {
  const response = await api().post('/user/change-password-from-link', data);
  return response.data;
};

const changePassword = async (data) => {
  const response = await api().post('/user/change-password', data);
  return response.data;
};

const verifyEmail = async (data) => {
  const response = await api().post('/user/verify-email', data);
  if (response.data.Succeeded) {
    localStorage.setItem('user', JSON.stringify({ ...response.data.data }));
  }
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
  verifyEmail,
  getCurrentUser
};

export default userService;
