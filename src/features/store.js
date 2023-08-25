import { configureStore } from "@reduxjs/toolkit";
import burgerSlice from "./burgerSlice.js";

export const store = configureStore({
  reducer: {
    burgerSlice,
  },
});
