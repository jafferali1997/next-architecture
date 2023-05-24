import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './auth.service';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
  user: user || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await authService.login(payload);
      if (response.succeeded) {
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

export const logout = createAsyncThunk('auth/logout', async () => {
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
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.message = '';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.message = action.payload.message;
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  }
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
