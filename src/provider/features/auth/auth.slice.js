import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './auth.service';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));
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
  }
};

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await authService.login(payload);
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
// signUp user
export const signUp = createAsyncThunk(
  'user/register',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await authService.signUp(payload);
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

// Sign up user
// export const signUp = createAsyncThunk(
//   "auth/signup",
//   async ({ payload, callBackMessage }, thunkAPI) => {
//     try {
//       const response = await authService.signUp(payload);
//       if (response.succeeded) {
//         return response.data;
//       }
//       throw new Error(response.message);
//     } catch (error) {
//       callBackMessage("error", error.message);
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const logout = createAsyncThunk('user/logout', async () => {
  try {
    return authService.logout();
  } catch (error) {
    return error;
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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.login.isLoading = true;
        state.login.message = '';
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
      });
  }
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
