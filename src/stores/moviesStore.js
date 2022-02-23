import { createSlice } from "@reduxjs/toolkit";

export const { reducer, actions } = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    change: (state, action) => [...action.payload.movies],
  },
});
