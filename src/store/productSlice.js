import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks

// using redux style....
export function fetchProducts() {
    console.log("calling function")
  return async function fetchProductThunk(dispatch, getState) {
      console.log("function called")
    dispatch(setStatus(STATUS.LOADING));
    try {
      const {data} = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(data));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};
