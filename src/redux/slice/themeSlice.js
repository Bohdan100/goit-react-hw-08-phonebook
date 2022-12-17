import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkTheme: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, _) => {
      return (state.darkTheme = !state.darkTheme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
