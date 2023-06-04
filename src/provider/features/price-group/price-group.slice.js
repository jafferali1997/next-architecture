import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import priceGroupService from './price-group.service';

const initialState = {
  create: { data: null, isError: false, isSuccess: false, isLoading: false, message: '' },
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

export const createPriceGroup = createAsyncThunk(
  'priceGroup/create',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await priceGroupService.createPriceGroup(payload);
      if (response.Succeeded) {
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      callBackMessage('error', error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSinglePriceGroup = createAsyncThunk(
  'priceGroup/get',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await priceGroupService.getSinglePriceGroup(payload);
      if (response.Succeeded) {
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      callBackMessage('error', error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllPriceGroup = createAsyncThunk(
  'priceGroup/getAll',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await priceGroupService.getAllPriceGroup();
      if (response.Succeeded) {
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      callBackMessage('error', error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updatePriceGroup = createAsyncThunk(
  'priceGroup/update',
  async ({ payload: { id, data }, callBackMessage }, thunkAPI) => {
    try {
      const response = await priceGroupService.updatePriceGroup(id, data);
      if (response.Succeeded) {
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      callBackMessage('error', error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePriceGroup = createAsyncThunk(
  'priceGroup/delete',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await priceGroupService.deletePriceGroup(payload);
      if (response.Succeeded) {
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      callBackMessage('error', error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const priceGroupSlice = createSlice({
  name: 'priceGroup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPriceGroup.pending, (state) => {
        state.create.isLoading = true;
        state.create.message = '';
      })
      .addCase(createPriceGroup.fulfilled, (state, action) => {
        state.create.isLoading = false;
        state.create.isSuccess = true;
        state.create.data = action.payload;
      })
      .addCase(createPriceGroup.rejected, (state, action) => {
        state.create.message = action.payload.message;
        state.create.isLoading = false;
        state.create.isError = true;
        state.create.data = null;
      })
      .addCase(updatePriceGroup.pending, (state) => {
        state.update.isLoading = true;
        state.update.message = '';
      })
      .addCase(updatePriceGroup.fulfilled, (state, action) => {
        state.update.isLoading = false;
        state.update.isSuccess = true;
        state.update.data = action.payload;
      })
      .addCase(updatePriceGroup.rejected, (state, action) => {
        state.update.message = action.payload.message;
        state.update.isLoading = false;
        state.update.isError = true;
        state.update.data = null;
      })
      .addCase(getSinglePriceGroup.pending, (state) => {
        state.getSingle.isLoading = true;
        state.getSingle.message = '';
      })
      .addCase(getSinglePriceGroup.fulfilled, (state, action) => {
        state.getSingle.isLoading = false;
        state.getSingle.isSuccess = true;
        state.getSingle.data = action.payload;
      })
      .addCase(getSinglePriceGroup.rejected, (state, action) => {
        state.getSingle.message = action.payload.message;
        state.getSingle.isLoading = false;
        state.getSingle.isError = true;
        state.getSingle.data = null;
      })
      .addCase(getAllPriceGroup.pending, (state) => {
        state.getAll.isLoading = true;
        state.getAll.message = '';
      })
      .addCase(getAllPriceGroup.fulfilled, (state, action) => {
        state.getAll.isLoading = false;
        state.getAll.isSuccess = true;
        state.getAll.data = action.payload;
      })
      .addCase(getAllPriceGroup.rejected, (state, action) => {
        state.getAll.message = action.payload.message;
        state.getAll.isLoading = false;
        state.getAll.isError = true;
        state.getAll.data = null;
      })
      .addCase(deletePriceGroup.pending, (state) => {
        state.delete.isLoading = true;
        state.delete.message = '';
      })
      .addCase(deletePriceGroup.fulfilled, (state, action) => {
        state.delete.isLoading = false;
        state.delete.isSuccess = true;
        state.delete.data = action.payload;
      })
      .addCase(deletePriceGroup.rejected, (state, action) => {
        state.delete.message = action.payload.message;
        state.delete.isLoading = false;
        state.delete.isError = true;
        state.delete.data = null;
      });
  }
});

export default priceGroupSlice.reducer;
