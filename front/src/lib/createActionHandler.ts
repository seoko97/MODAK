import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const createActionByProps = <T, Q>(url: string, callback: (data: T) => Promise<Q>) => {
  return createAsyncThunk(url, async (data: T, { rejectWithValue }) => {
    try {
      if (data) return await callback(data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (!err.response) throw rejectWithValue(err);
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue(err);
    }
  });
};

const createAction = <Q>(url: string, callback: () => Promise<Q>) => {
  return createAsyncThunk(url, async (_, { rejectWithValue }) => {
    try {
      return await callback();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (!err.response) throw rejectWithValue(err);
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue(err);
    }
  });
};

export { createActionByProps, createAction };
