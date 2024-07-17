import {createSlice} from "@reduxjs/toolkit";

const themes = {
  cupcake: "cupcake",
  dracula: "dracula",
};

const initialState = {
  theme: "cupcake",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const {dracula, cupcake} = themes;
      state.theme = state.theme === dracula ? cupcake : dracula;
      document.documentElement.setAttribute("data-theme", state.theme);
    },
  },
});

export const {toggleTheme} = userSlice.actions;

export default userSlice.reducer;
