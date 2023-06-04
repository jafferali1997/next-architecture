import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productCategoryService from './product-category.service';

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

export const createProductCategory = createAsyncThunk(
  'productCategory/create',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await productCategoryService.createProductCategory(payload);
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

export const getSingleProductCategory = createAsyncThunk(
  'productCategory/get',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await productCategoryService.getSingleProductCategory(payload);
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

export const getAllProductCategory = createAsyncThunk(
  'productCategory/getAll',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await productCategoryService.getAllProductCategory();
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

export const updateProductCategory = createAsyncThunk(
  'productCategory/update',
  async ({ payload: { id, data }, callBackMessage }, thunkAPI) => {
    try {
      const response = await productCategoryService.updateProductCategory(id, data);
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

export const deleteProductCategory = createAsyncThunk(
  'productCategory/delete',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await productCategoryService.deleteProductCategory(payload);
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

export const productCategorySlice = createSlice({
  name: 'productCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProductCategory.pending, (state) => {
        state.create.isLoading = true;
        state.create.message = '';
      })
      .addCase(createProductCategory.fulfilled, (state, action) => {
        state.create.isLoading = false;
        state.create.isSuccess = true;
        state.create.data = action.payload;
      })
      .addCase(createProductCategory.rejected, (state, action) => {
        state.create.message = action.payload.message;
        state.create.isLoading = false;
        state.create.isError = true;
        state.create.data = null;
      })
      .addCase(updateProductCategory.pending, (state) => {
        state.update.isLoading = true;
        state.update.message = '';
      })
      .addCase(updateProductCategory.fulfilled, (state, action) => {
        state.update.isLoading = false;
        state.update.isSuccess = true;
        state.update.data = action.payload;
      })
      .addCase(updateProductCategory.rejected, (state, action) => {
        state.update.message = action.payload.message;
        state.update.isLoading = false;
        state.update.isError = true;
        state.update.data = null;
      })
      .addCase(getSingleProductCategory.pending, (state) => {
        state.getSingle.isLoading = true;
        state.getSingle.message = '';
      })
      .addCase(getSingleProductCategory.fulfilled, (state, action) => {
        state.getSingle.isLoading = false;
        state.getSingle.isSuccess = true;
        state.getSingle.data = action.payload;
      })
      .addCase(getSingleProductCategory.rejected, (state, action) => {
        state.getSingle.message = action.payload.message;
        state.getSingle.isLoading = false;
        state.getSingle.isError = true;
        state.getSingle.data = null;
      })
      .addCase(getAllProductCategory.pending, (state) => {
        state.getAll.isLoading = true;
        state.getAll.message = '';
      })
      .addCase(getAllProductCategory.fulfilled, (state, action) => {
        state.getAll.isLoading = false;
        state.getAll.isSuccess = true;
        state.getAll.data = action.payload;
      })
      .addCase(getAllProductCategory.rejected, (state, action) => {
        state.getAll.message = action.payload.message;
        state.getAll.isLoading = false;
        state.getAll.isError = true;
        state.getAll.data = null;
      })
      .addCase(deleteProductCategory.pending, (state) => {
        state.delete.isLoading = true;
        state.delete.message = '';
      })
      .addCase(deleteProductCategory.fulfilled, (state, action) => {
        state.delete.isLoading = false;
        state.delete.isSuccess = true;
        state.delete.data = action.payload;
      })
      .addCase(deleteProductCategory.rejected, (state, action) => {
        state.delete.message = action.payload.message;
        state.delete.isLoading = false;
        state.delete.isError = true;
        state.delete.data = null;
      });
  }
});

export default productCategorySlice.reducer;
