import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUser } from '@/common/utils/users.util';
import authService from './auth.service';

// Get user from localStorage
const user = getUser();
const initialState = {
  login: {
    data: user || null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
  },
  signUp: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
  },
  logout: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
  },
  loginAndSignUpWithGoogle: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
  }
};

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async ({ payload, successCallBack, callBackMessage }, thunkAPI) => {
    try {
      const response = await authService.login(payload);
      if (response.Succeeded) {
        successCallBack(response.data);
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);
// signUp user
export const signUp = createAsyncThunk(
  'auth/register',
  async ({ payload, successCallBack, callBackMessage }, thunkAPI) => {
    try {
      const response = await authService.signUp(payload);
      if (response.Succeeded) {
        successCallBack(response.data);
        return response.data;
      }

      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);

export const loginAndSignUpWithGoogle = createAsyncThunk(
  'auth/loginAndSignUpWithGoogle',
  async ({ payload, successCallBack, callBackMessage }, thunkAPI) => {
    try {
      const response = await authService.loginAndSignUpWithGoogle(payload);
      if (response.Succeeded) {
        successCallBack(response.data);
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (payload, thunkAPI) => {
  try {
    const response = await authService.logout();
    if (response.Succeeded) {
      return response;
    }
    return thunkAPI.rejectWithValue(response);
  } catch (error) {
    return thunkAPI.rejectWithValue({ payload: error });
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.login = {
        data: user || null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: ''
      };
      state.logout = {
        data: null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: ''
      };
      state.register = {
        data: null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: ''
      };
      state.loginAndSignUpWithGoogle = {
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
      .addCase(login.pending, (state) => {
        state.login.isLoading = true;
        state.login.message = '';
        state.login.isError = false;
        state.login.isSuccess = false;
        state.login.data = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.login.isLoading = false;
        state.login.isSuccess = true;
        state.login.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.login.message = action.payload.message;
        state.login.isLoading = false;
        state.login.isError = true;
        state.login.data = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.signUp.isLoading = false;
        state.signUp.isSuccess = true;
        state.signUp.data = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.signUp.message = action.payload.message;
        state.signUp.isLoading = false;
        state.signUp.isError = true;
        state.signUp.data = null;
      })
      .addCase(signUp.pending, (state) => {
        state.signUp.isLoading = true;
        state.signUp.message = '';
        state.signUp.isError = false;
        state.signUp.isSuccess = false;
        state.signUp.data = null;
      })
      .addCase(logout.pending, (state) => {
        state.logout.isLoading = true;
        state.logout.message = '';
        state.logout.isError = false;
        state.logout.isSuccess = false;
        state.logout.data = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.logout.isLoading = false;
        state.logout.isSuccess = true;
        state.logout.data = action.payload;
      })
      .addCase(logout.rejected, (state, action) => {
        state.logout.message = action.payload.message;
        state.logout.isLoading = false;
        state.logout.isError = true;
        state.logout.data = null;
      })
      .addCase(loginAndSignUpWithGoogle.pending, (state) => {
        state.loginAndSignUpWithGoogle.isLoading = true;
        state.loginAndSignUpWithGoogle.message = '';
        state.loginAndSignUpWithGoogle.isError = false;
        state.loginAndSignUpWithGoogle.isSuccess = false;
        state.loginAndSignUpWithGoogle.data = null;
      })
      .addCase(loginAndSignUpWithGoogle.fulfilled, (state, action) => {
        state.loginAndSignUpWithGoogle.isLoading = false;
        state.loginAndSignUpWithGoogle.isSuccess = true;
        state.loginAndSignUpWithGoogle.data = action.payload;
      })
      .addCase(loginAndSignUpWithGoogle.rejected, (state, action) => {
        state.loginAndSignUpWithGoogle.message = action.payload.message;
        state.loginAndSignUpWithGoogle.isLoading = false;
        state.loginAndSignUpWithGoogle.isError = true;
        state.loginAndSignUpWithGoogle.data = null;
      });
  }
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
