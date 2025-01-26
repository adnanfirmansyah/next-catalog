"use client"; // Enable client-side usage for Redux in the App Router

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
