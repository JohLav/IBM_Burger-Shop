import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./features/burgerSlice.js";

export const store = configureStore({
  reducer: {
    burgerReducer,
  },
});
