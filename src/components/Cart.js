import React from 'react';
import { createPortal } from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import CartItem from './CartItem';
export default function Cart({ setIsCartOpen, isCartOpen, cart, addToCart, removeFromCart }) {
  const sum = () => {
    let sum = cart.reduce((prev, current) => {
      return prev + current.price * current.quantity;
    }, 0);
    return sum.toFixed(2);
  };
  let total = sum();
  return createPortal(
    <>
      <Container isCartOpen={isCartOpen}>
        <div className="cart-title">
          <h2>Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>X</button>
        </div>
        <ProductsContainer>
          {cart.map(x => {
            return (
              <CartItem
                key={x.id}
                product={x}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </ProductsContainer>
        <BottomDiv>
          <p>Total:${total}</p>
          <button>Checkout</button>
        </BottomDiv>
      </Container>
      <Overlay onClick={() => setIsCartOpen(false)}></Overlay>
      <ScrollDisabler />
    </>,
    document.getElementById('cart')
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: coral;
  width: min(100vw, 400px);
  top: 0;
  right: 0;
  z-index: 10;
  transition: 1s;
  animation: openModal 0.5s ease-in-out;
  padding: 2em 1em;
  color: white;
  overflow: auto;
  height: 100vh;
  .cart-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      font-weight: bold;
      padding: 1em;
      background: none;
      border: none;
      cursor: pointer;
      color: inherit;
    }
  }
  h2 {
    margin: 0;
  }
  @keyframes openModal {
    0% {
      translate: 100%;
    }
    100% {
      translate: 0;
    }
  }
`;
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  animation: openOverlay 0.5s ease-in-out;
  @keyframes openOverlay {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const ScrollDisabler = createGlobalStyle`
body{
  overflow-y:hidden;
}
`;
const ProductsContainer = styled.div`
  display: grid;
  justify-content: center;
  padding: 1rem 0;
  margin: 1em 0;
  row-gap: 1em;
`;
const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    padding: 0.5em 1em;
  }
`;
