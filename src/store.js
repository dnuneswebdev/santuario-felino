import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import catReducer from "./features/cat/catSlice";
import employeeReducer from "./features/employee/employeeSlice";

export const store = configureStore({
  reducer: {
    userState: userReducer,
    cat: catReducer,
    employee: employeeReducer,
  },
});
