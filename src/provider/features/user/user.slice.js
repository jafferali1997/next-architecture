import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const generalState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
  data: null
};

const initialState = {
  addPhoneAndGenerateOtp: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
    data: null
  },
  generateOtp: { ...generalState },
  verifyOtp: { ...generalState },
  generateForgetPasswordLink: { ...generalState },
  regenerateEmailLink: { ...generalState },
  changePasswordFromLink: { ...generalState },
  changePassword: { ...generalState },
  verifyEmail: { ...generalState }
};

export const addPhoneAndGenerateOtp = createAsyncThunk('user/addPhoneAndGenerateOtp');

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
});

export default userSlice.reducers;
