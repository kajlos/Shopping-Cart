import React, { createContext, useState } from 'react';

export const CartContext = createContext(null);

export const CartContextProvider = props => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const addToCart = product => {
    let exist = cart.find(x => x.id === product.id);
    if (exist) {
      setCart(
        cart.map(x => (x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x))
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = product => {
    if (product.quantity === 1) {
      let newCart = cart.filter(x => x.id !== product.id);
      setCart(newCart);
    } else {
      setCart(
        cart.map(x => (x.id === product.id ? { ...product, quantity: product.quantity - 1 } : x))
      );
    }
  };
  const quantity = cart.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0);
  const total = cart
    .reduce((prev, current) => {
      return prev + current.quantity * current.price;
    }, 0)
    .toFixed(2);
  const value = {
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    cart,
    setCart,
    quantity,
    total,
  };
  return <CartContext.Provider value={value}>{props.children}</CartContext.Provider>;
};
export default CartContext;
