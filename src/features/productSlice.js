// import { createSlice } from "@reduxjs/toolkit";
//
// const initialState = {
//   items: undefined,
//   // cartCount: 0,
// };
//
// export const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     addProducts(state, action) {
//       state.items = action.payload;
//     },
//   },
//   extraReducers: {
//     ["cart/createCartItem"]: (state, action) => {
//       state.items.find((el) => el.id === action.payload.id).picked = true;
//     },
//     ["cart/deleteFromCart"]: (state, action) => {
//       state.items.find((el) => el.id === action.payload).picked = false;
//     },
//   },
// });
//
// export function getProductsList(action) {
//   return function (dispatch, getState) {
//     fetch("./products.json")
//       .then((data) => data.json())
//       .then((data) => dispatch(addProducts(data.products)));
//   };
// }
//
// export const { addProducts } = productSlice.actions;
// export default productSlice.reducer;
