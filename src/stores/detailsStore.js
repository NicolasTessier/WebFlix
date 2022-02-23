import { createSlice } from "@reduxjs/toolkit";

export const { reducer, actions } = createSlice({
  name: "details",
  initialState: {},
  reducers: {
    change: (state, action) => (state = action.payload.movie),
  },
});
