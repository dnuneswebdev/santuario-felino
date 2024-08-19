import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  cat: {},
};

const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    loadCat: (state, action) => {
      state.cat = action.payload;
    },
  },
});

export const {loadCat} = catSlice.actions;

export default catSlice.reducer;
