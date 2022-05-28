import axios from "axios";

import { SET_LOADED, SET_PIZZAS } from "../types/types";

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded());

  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ""}&_sort=${
        sortBy.type
      }&_order=${sortBy.order}`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};
