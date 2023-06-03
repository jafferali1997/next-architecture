import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customerService from './customer.service';

const initialState = {
  createPersonalDetail: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
  },
  createAccountDetail: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
  },
  createDiscount: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
  },
  createCompanyDetail: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
  },
  createCustomerTermOfPaymentAndDelivey: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
  },
  update: { data: null, isError: false, isSuccess: false, isLoading: false, message: '' },
  getSingle: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
  },
  getAll: { data: null, isError: false, isSuccess: false, isLoading: false, message: '' },
  detlete: { data: null, isError: false, isSuccess: false, isLoading: false, message: '' }
};

export const createCustomerPersonalDetail = createAsyncThunk(
  'customer/createPersonalDetail',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await customerService.createCustomerPersonalDetail(payload);
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

export const createCustomerAccountDetail = createAsyncThunk(
  'customer/createAccountDetail',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await customerService.createCustomerAccountDetail(payload);
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

export const createCustomerDiscount = createAsyncThunk(
  'customer/createDiscount',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await customerService.createCustomerDiscount(payload);
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

export const createCustomerCompanyDetail = createAsyncThunk(
  'customer/createCompanyDetail',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await customerService.createCustomerCompanyDetail(payload);
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

export const createCustomerTermOfPaymentAndDelivey = createAsyncThunk(
  'customer/createTermOfPaymentAndDelivey',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await customerService.createCustomerTermOfPaymentAndDelivey(
        payload
      );
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

export const getSingleCustomer = createAsyncThunk(
  'customer/get',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await customerService.getSingleCustomer(payload);
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

export const getAllCustomer = createAsyncThunk(
  'customer/getAll',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await customerService.getAllCustomer();
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

export const updateCustomer = createAsyncThunk(
  'customer/update',
  async ({ payload: { id, data }, callBackMessage }, thunkAPI) => {
    try {
      const response = await customerService.updateCustomer(id, data);
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

export const deleteCustomer = createAsyncThunk(
  'customer/delete',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await customerService.deleteCustomer(payload);
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

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCustomerPersonalDetail.pending, (state) => {
        state.createPersonalDetail.isLoading = true;
        state.createPersonalDetail.message = '';
      })
      .addCase(createCustomerPersonalDetail.fulfilled, (state, action) => {
        state.createPersonalDetail.isLoading = false;
        state.createPersonalDetail.isSuccess = true;
        state.createPersonalDetail.data = action.payload;
      })
      .addCase(createCustomerPersonalDetail.rejected, (state, action) => {
        state.createPersonalDetail.message = action.payload.message;
        state.createPersonalDetail.isLoading = false;
        state.createPersonalDetail.isError = true;
        state.createPersonalDetail.data = null;
      })
      .addCase(createCustomerAccountDetail.pending, (state) => {
        state.createAccountDetail.isLoading = true;
        state.createAccountDetail.message = '';
      })
      .addCase(createCustomerAccountDetail.fulfilled, (state, action) => {
        state.createAccountDetail.isLoading = false;
        state.createAccountDetail.isSuccess = true;
        state.createAccountDetail.data = action.payload;
      })
      .addCase(createCustomerAccountDetail.rejected, (state, action) => {
        state.createAccountDetail.message = action.payload.message;
        state.createAccountDetail.isLoading = false;
        state.createAccountDetail.isError = true;
        state.createAccountDetail.data = null;
      })
      .addCase(createCustomerCompanyDetail.pending, (state) => {
        state.createCompanyDetail.isLoading = true;
        state.createCompanyDetail.message = '';
      })
      .addCase(createCustomerCompanyDetail.fulfilled, (state, action) => {
        state.createCompanyDetail.isLoading = false;
        state.createCompanyDetail.isSuccess = true;
        state.createCompanyDetail.data = action.payload;
      })
      .addCase(createCustomerCompanyDetail.rejected, (state, action) => {
        state.createCompanyDetail.message = action.payload.message;
        state.createCompanyDetail.isLoading = false;
        state.createCompanyDetail.isError = true;
        state.createCompanyDetail.data = null;
      })
      .addCase(createCustomerDiscount.pending, (state) => {
        state.createDiscount.isLoading = true;
        state.createDiscount.message = '';
      })
      .addCase(createCustomerDiscount.fulfilled, (state, action) => {
        state.createDiscount.isLoading = false;
        state.createDiscount.isSuccess = true;
        state.createDiscount.data = action.payload;
      })
      .addCase(createCustomerDiscount.rejected, (state, action) => {
        state.createDiscount.message = action.payload.message;
        state.createDiscount.isLoading = false;
        state.createDiscount.isError = true;
        state.createDiscount.data = null;
      })
      .addCase(createCustomerTermOfPaymentAndDelivey.pending, (state) => {
        state.createTermOfPaymentAndDelivey.isLoading = true;
        state.createTermOfPaymentAndDelivey.message = '';
      })
      .addCase(createCustomerTermOfPaymentAndDelivey.fulfilled, (state, action) => {
        state.createTermOfPaymentAndDelivey.isLoading = false;
        state.createTermOfPaymentAndDelivey.isSuccess = true;
        state.createTermOfPaymentAndDelivey.data = action.payload;
      })
      .addCase(createCustomerTermOfPaymentAndDelivey.rejected, (state, action) => {
        state.createTermOfPaymentAndDelivey.message = action.payload.message;
        state.createTermOfPaymentAndDelivey.isLoading = false;
        state.createTermOfPaymentAndDelivey.isError = true;
        state.createTermOfPaymentAndDelivey.data = null;
      })
      .addCase(updateCustomer.pending, (state) => {
        state.update.isLoading = true;
        state.update.message = '';
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        state.update.isLoading = false;
        state.update.isSuccess = true;
        state.update.data = action.payload;
      })
      .addCase(updateCustomer.rejected, (state, action) => {
        state.update.message = action.payload.message;
        state.update.isLoading = false;
        state.update.isError = true;
        state.update.data = null;
      })
      .addCase(getSingleCustomer.pending, (state) => {
        state.getSingle.isLoading = true;
        state.getSingle.message = '';
      })
      .addCase(getSingleCustomer.fulfilled, (state, action) => {
        state.getSingle.isLoading = false;
        state.getSingle.isSuccess = true;
        state.getSingle.data = action.payload;
      })
      .addCase(getSingleCustomer.rejected, (state, action) => {
        state.getSingle.message = action.payload.message;
        state.getSingle.isLoading = false;
        state.getSingle.isError = true;
        state.getSingle.data = null;
      })
      .addCase(getAllCustomer.pending, (state) => {
        state.getAll.isLoading = true;
        state.getAll.message = '';
      })
      .addCase(getAllCustomer.fulfilled, (state, action) => {
        state.getAll.isLoading = false;
        state.getAll.isSuccess = true;
        state.getAll.data = action.payload;
      })
      .addCase(getAllCustomer.rejected, (state, action) => {
        state.getAll.message = action.payload.message;
        state.getAll.isLoading = false;
        state.getAll.isError = true;
        state.getAll.data = null;
      })
      .addCase(deleteCustomer.pending, (state) => {
        state.delete.isLoading = true;
        state.delete.message = '';
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.delete.isLoading = false;
        state.delete.isSuccess = true;
        state.delete.data = action.payload;
      })
      .addCase(deleteCustomer.rejected, (state, action) => {
        state.delete.message = action.payload.message;
        state.delete.isLoading = false;
        state.delete.isError = true;
        state.delete.data = null;
      });
  }
});

export default customerSlice.reducer;
