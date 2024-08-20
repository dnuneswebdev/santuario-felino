import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  employee: {},
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    loadEmployee: (state, action) => {
      state.employee = action.payload;
    },
  },
});

export const {loadEmployee} = employeeSlice.actions;

export default employeeSlice.reducer;
