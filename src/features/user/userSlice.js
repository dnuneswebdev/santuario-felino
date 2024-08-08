import {createSlice} from "@reduxjs/toolkit";

const themes = {
  cupcake: "cupcake",
  dracula: "dracula",
};

const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

function getUserFromLocalStorage() {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  return user;
}

function getThemeFromLocalStorage() {
  const theme = localStorage.getItem("theme") || themes.cupcake;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    toggleTheme: (state) => {
      const {dracula, cupcake} = themes;
      state.theme = state.theme === dracula ? cupcake : dracula;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const {toggleTheme, loginUser, logout} = userSlice.actions;

export default userSlice.reducer;
