import { createSlice } from "@reduxjs/toolkit";

export const { reducer, actions } = createSlice({
  name: "favourites",
  initialState: [],
  reducers: {
    toggle: (state, action) => {
      return state.includes(action.payload.id)
        ? state.filter((id) => id !== action.payload.id)
        : [...state, action.payload.id];
    },
  },
});
