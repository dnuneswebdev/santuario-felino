import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import catReducer from "./features/cat/catSlice";

export const store = configureStore({
  reducer: {
    userState: userReducer,
    cat: catReducer,
  },
});
