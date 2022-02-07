import { createAsyncThunk } from "@reduxjs/toolkit";

export const logIn = createAsyncThunk("user/logIn", async () => {
  return new Promise<string>((r) => {
    setTimeout(() => r("asd"), 1000);
  });
});
