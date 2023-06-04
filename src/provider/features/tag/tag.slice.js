import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import tagService from './tag.service';

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

export const createTag = createAsyncThunk(
  'tag/create',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await tagService.createTag(payload);
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

export const getSingleTag = createAsyncThunk(
  'tag/get',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await tagService.getSingleTag(payload);
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

export const getAllTag = createAsyncThunk(
  'tag/getAll',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await tagService.getAllTag();
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

export const updateTag = createAsyncThunk(
  'tag/update',
  async ({ payload: { id, data }, callBackMessage }, thunkAPI) => {
    try {
      const response = await tagService.updateTag(id, data);
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

export const deleteTag = createAsyncThunk(
  'tag/delete',
  async ({ payload, callBackMessage }, thunkAPI) => {
    try {
      const response = await tagService.deleteTag(payload);
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

export const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTag.pending, (state) => {
        state.create.isLoading = true;
        state.create.message = '';
      })
      .addCase(createTag.fulfilled, (state, action) => {
        state.create.isLoading = false;
        state.create.isSuccess = true;
        state.create.data = action.payload;
      })
      .addCase(createTag.rejected, (state, action) => {
        state.create.message = action.payload.message;
        state.create.isLoading = false;
        state.create.isError = true;
        state.create.data = null;
      })
      .addCase(updateTag.pending, (state) => {
        state.update.isLoading = true;
        state.update.message = '';
      })
      .addCase(updateTag.fulfilled, (state, action) => {
        state.update.isLoading = false;
        state.update.isSuccess = true;
        state.update.data = action.payload;
      })
      .addCase(updateTag.rejected, (state, action) => {
        state.update.message = action.payload.message;
        state.update.isLoading = false;
        state.update.isError = true;
        state.update.data = null;
      })
      .addCase(getSingleTag.pending, (state) => {
        state.getSingle.isLoading = true;
        state.getSingle.message = '';
      })
      .addCase(getSingleTag.fulfilled, (state, action) => {
        state.getSingle.isLoading = false;
        state.getSingle.isSuccess = true;
        state.getSingle.data = action.payload;
      })
      .addCase(getSingleTag.rejected, (state, action) => {
        state.getSingle.message = action.payload.message;
        state.getSingle.isLoading = false;
        state.getSingle.isError = true;
        state.getSingle.data = null;
      })
      .addCase(getAllTag.pending, (state) => {
        state.getAll.isLoading = true;
        state.getAll.message = '';
      })
      .addCase(getAllTag.fulfilled, (state, action) => {
        state.getAll.isLoading = false;
        state.getAll.isSuccess = true;
        state.getAll.data = action.payload;
      })
      .addCase(getAllTag.rejected, (state, action) => {
        state.getAll.message = action.payload.message;
        state.getAll.isLoading = false;
        state.getAll.isError = true;
        state.getAll.data = null;
      })
      .addCase(deleteTag.pending, (state) => {
        state.delete.isLoading = true;
        state.delete.message = '';
      })
      .addCase(deleteTag.fulfilled, (state, action) => {
        state.delete.isLoading = false;
        state.delete.isSuccess = true;
        state.delete.data = action.payload;
      })
      .addCase(deleteTag.rejected, (state, action) => {
        state.delete.message = action.payload.message;
        state.delete.isLoading = false;
        state.delete.isError = true;
        state.delete.data = null;
      });
  }
});

export default tagSlice.reducer;
