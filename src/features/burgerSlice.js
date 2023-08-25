import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  burgers: [
    {
      id: uuidv4,
      title: "Cheese Burger",
      price: 2.99,
      img: "burger1",
      delay: "0.1",
    },
    {
      id: uuidv4,
      title: "Burger Vegan",
      price: 5.99,
      img: "burger2",
      delay: "0.5",
    },
    {
      id: uuidv4,
      title: "Burger Frites",
      price: 9.99,
      img: "burger3",
      delay: "O.8",
    },
  ],
  cartCount: 0,
};

export const burgerSlice = createSlice({
  name: "burgers",
  initialState,
  reducers: {
    addBurger(state, action) {
      state.burgers.push({ ...action.payload, id: uuidv4() });
    },
    updateBurger(state, action) {
      state.burgers = state.burgers.map((burger) =>
        burger.id === action.payload.id ? action.payload : burger,
      );
    },
    deleteBurger(state, action) {
      state.burgers = state.burgers.filter(
        (burger) => burger.id !== action.payload.id,
      );
    },
    addToCart(state, action) {
      state.cartCount++;
    },
  },
});

export function getBurgersList(action) {
  return function (dispatch, getState) {
    fetch();
  };
}

export const { addBurger, updateBurger, deleteBurger, addToCart } =
  burgerSlice.actions;
export default burgerSlice.reducer;
