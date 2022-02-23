import { createSlice } from "@reduxjs/toolkit";

export const { reducer, actions } = createSlice({
  name: "favourites",
  initialState: [],
  reducers: {
    toggle: (state, action) => {
      return state.find((favourite) => favourite.id === action.payload.movie.id)
        ? state.filter((movie) => movie.id !== action.payload.movie.id)
        : [...state, action.payload.movie];
    },
  },
});
