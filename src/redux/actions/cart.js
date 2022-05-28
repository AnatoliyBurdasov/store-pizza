import {
  CLEAR_CART,
  ADD_PIZZA_CART,
  PLUS_CART_ITEM,
  MINUS_CART_ITEM,
  REMOVE_CART_ITEM,
} from "../types/types";

export const addPizzaToCart = (pizzaObj) => ({
  type: ADD_PIZZA_CART,
  payload: pizzaObj,
});

export const removeCartItem = (id) => ({
  payload: id,
  type: REMOVE_CART_ITEM,
});

export const plusCartItem = (id) => ({
  payload: id,
  type: PLUS_CART_ITEM,
});

export const minusCartItem = (id) => ({
  payload: id,
  type: MINUS_CART_ITEM,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
