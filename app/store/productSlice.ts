import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/product";

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: {
      id: 0,
      name: "",
      price: 0,
      image: "",
      description: "",
      images: [],
      variants: [],
    } as Product,
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export const selectProduct = (state: { product: { product: Product } }) =>
  state.product.product;

export default productSlice.reducer;
