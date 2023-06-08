import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './user.service';

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

export const addPhoneAndGenerateOtp = createAsyncThunk(
  'user/addPhoneAndGenerateOtp',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await userService.addPhoneAndGenerateOtp(payload);
      if (response.Succeeded) {
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      callBackMessage('error', error.message);
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);

export const generateOtp = createAsyncThunk(
  'user/generateOtp',
  async ({ payload, callBackMessage, successCallBack }, thunkAPI) => {
    try {
      const response = await userService.generateOtp();
      if (response.Succeeded) {
        successCallBack(response.data);
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      callBackMessage('error', error.message);
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'user/verifyOtp',
  async ({ payload, successCallBack, callBackMessage }, thunkAPI) => {
    try {
      const response = await userService.verifyOtp(payload);
      if (response.Succeeded) {
        successCallBack(response.data);
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      callBackMessage('error', error.message);
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);

export const generateForgetPasswordLink = createAsyncThunk(
  'user/generateForgetPasswordLink',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await userService.generateForgetPasswordLink(payload);
      if (response.Succeeded) {
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      callBackMessage('error', error.message);
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);

export const regenerateEmailLink = createAsyncThunk(
  'user/regenerateEmailLink',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await userService.regenerateEmailLink(payload);
      if (response.Succeeded) {
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      callBackMessage('error', error.message);
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);

export const changePasswordFromLink = createAsyncThunk(
  'user/changePasswordFromLink',
  async ({ payload, successCallBack, callBackMessage }, thunkAPI) => {
    console.log(successCallBack)
    try {
      const response = await userService.changePasswordFromLink(payload);
      if (response.Succeeded) {
        successCallBack()
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      callBackMessage('error', error.message);
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);

export const changePassword = createAsyncThunk(
  'user/changePassword',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await userService.changePassword(payload);
      if (response.Succeeded) {
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      callBackMessage('error', error.message);
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);

export const verifyEmail = createAsyncThunk(
  'user/verifyEmail',
  async ({ payload, successCallBack, callBackMessage }, thunkAPI) => {
    try {
      const response = await userService.verifyEmail(payload);
      if (response.Succeeded) {
        localStorage.setItem('user', JSON.stringify(response.data));
        successCallBack(response.data);
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      callBackMessage('error', error.message);
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPhoneAndGenerateOtp.pending, (state) => {
        state.create.isLoading = true;
        state.create.message = '';
        state.create.isError = false;
        state.create.isSuccess = false;
        state.create.data = null;
      })
      .addCase(addPhoneAndGenerateOtp.fulfilled, (state, action) => {
        state.create.isLoading = false;
        state.create.isSuccess = true;
        state.create.data = action.payload;
      })
      .addCase(addPhoneAndGenerateOtp.rejected, (state, action) => {
        state.create.message = action.payload.message;
        state.create.isLoading = false;
        state.create.isError = true;
        state.create.data = null;
      })
      .addCase(generateOtp.pending, (state) => {
        state.create.isLoading = true;
        state.create.message = '';
        state.create.isError = false;
        state.create.isSuccess = false;
        state.create.data = null;
      })
      .addCase(generateOtp.fulfilled, (state, action) => {
        state.create.isLoading = false;
        state.create.isSuccess = true;
        state.create.data = action.payload;
      })
      .addCase(generateOtp.rejected, (state, action) => {
        state.create.message = action.payload.message;
        state.create.isLoading = false;
        state.create.isError = true;
        state.create.data = null;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.create.isLoading = true;
        state.create.message = '';
        state.create.isError = false;
        state.create.isSuccess = false;
        state.create.data = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.create.isLoading = false;
        state.create.isSuccess = true;
        state.create.data = action.payload;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.create.message = action.payload.message;
        state.create.isLoading = false;
        state.create.isError = true;
        state.create.data = null;
      })
      .addCase(generateForgetPasswordLink.pending, (state) => {
        state.create.isLoading = true;
        state.create.message = '';
        state.create.isError = false;
        state.create.isSuccess = false;
        state.create.data = null;
      })
      .addCase(generateForgetPasswordLink.fulfilled, (state, action) => {
        state.create.isLoading = false;
        state.create.isSuccess = true;
        state.create.data = action.payload;
      })
      .addCase(generateForgetPasswordLink.rejected, (state, action) => {
        state.create.message = action.payload.message;
        state.create.isLoading = false;
        state.create.isError = true;
        state.create.data = null;
      })
      .addCase(regenerateEmailLink.pending, (state) => {
        state.create.isLoading = true;
        state.create.message = '';
        state.create.isError = false;
        state.create.isSuccess = false;
        state.create.data = null;
      })
      .addCase(regenerateEmailLink.fulfilled, (state, action) => {
        state.create.isLoading = false;
        state.create.isSuccess = true;
        state.create.data = action.payload;
      })
      .addCase(regenerateEmailLink.rejected, (state, action) => {
        state.create.message = action.payload.message;
        state.create.isLoading = false;
        state.create.isError = true;
        state.create.data = null;
      })
      .addCase(changePasswordFromLink.pending, (state) => {
        state.create.isLoading = true;
        state.create.message = '';
        state.create.isError = false;
        state.create.isSuccess = false;
        state.create.data = null;
      })
      .addCase(changePasswordFromLink.fulfilled, (state, action) => {
        state.create.isLoading = false;
        state.create.isSuccess = true;
        state.create.data = action.payload;
      })
      .addCase(changePasswordFromLink.rejected, (state, action) => {
        state.create.message = action.payload.message;
        state.create.isLoading = false;
        state.create.isError = true;
        state.create.data = null;
      })
      .addCase(changePassword.pending, (state) => {
        state.create.isLoading = true;
        state.create.message = '';
        state.create.isError = false;
        state.create.isSuccess = false;
        state.create.data = null;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.create.isLoading = false;
        state.create.isSuccess = true;
        state.create.data = action.payload;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.create.message = action.payload.message;
        state.create.isLoading = false;
        state.create.isError = true;
        state.create.data = null;
      })
      .addCase(verifyEmail.pending, (state) => {
        state.create.isLoading = true;
        state.create.message = '';
        state.create.isError = false;
        state.create.isSuccess = false;
        state.create.data = null;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.create.isLoading = false;
        state.create.isSuccess = true;
        state.create.data = action.payload;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.create.message = action.payload.message;
        state.create.isLoading = false;
        state.create.isError = true;
        state.create.data = null;
      });
  }
});

export default userSlice.reducers;
