import { configureStore } from "@reduxjs/toolkit";
import optionsSlice from './options/theme'

export const store = configureStore({
  reducer: {
    options: optionsSlice,
  },
});
