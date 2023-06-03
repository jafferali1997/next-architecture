import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import profileFinancialBusinessService from './profile-financial-business.service';

// Get user from localStorage
const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

// Login user
export const profileFinancialBusiness = createAsyncThunk(
  '/profile-financial-business',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response =
        await profileFinancialBusinessService.createProfileFinancialBusiness(payload);
      if (response.Succeeded) {
        return response.data;
      }
      throw new Error(response.message);
    } catch (error) {
      callBackMessage('error', error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const profileFinancialBusinessSlice = createSlice({
  name: 'profileFinancialBusiness',
  initialState,
  reducers: {
    reset: (state) => {
      state = {
        data: null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: ''
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(profileFinancialBusiness.pending, (state) => {
        state.isLoading = true;
        state.message = '';
      })
      .addCase(profileFinancialBusiness.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(profileFinancialBusiness.rejected, (state, action) => {
        state.message = action.payload.message;
        state.isLoading = false;
        state.isError = true;
        state.data = null;
      });
  }
});

export const { reset } = profileFinancialBusinessSlice.actions;

export default profileFinancialBusinessSlice.reducer;
