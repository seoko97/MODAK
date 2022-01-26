import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state) => {
      state.user = {
        name: "asd",
      };
    },
  },
});

export const { setUser } = usersSlice.actions;
export default usersSlice.reducer;
