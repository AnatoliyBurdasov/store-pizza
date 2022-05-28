import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { EmptyCart } from "../components";
import CartItems from "../components/CartItems";
import { clearCart, plusCartItem, minusCartItem } from "../redux/actions/cart";

function Cart() {
  const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  const onClearCart = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(clearCart());
    }
  };

  const addedPizzas = Object.keys(items).map((key) => items[key].items[0]);

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };

  return (
    <>
      {!totalCount ? (
        <EmptyCart />
      ) : (
        <CartItems
          items={items}
          totalCount={totalCount}
          totalPrice={totalPrice}
          onPlus={onPlusItem}
          onMinus={onMinusItem}
          onClearCart={onClearCart}
          addedPizzas={addedPizzas}
        />
      )}
    </>
  );
}

export default Cart;
