import React from 'react';
import styled from 'styled-components';
export default function CartItem({ product, addToCart, removeFromCart }) {
  return (
    <Container>
      <div>
        <img src={`${process.env.PUBLIC_URL}${product.img}`} alt="product"></img>
      </div>
      <Right>
        <h3>{product.name}</h3>
        <p>${(product.price * product.quantity).toFixed(2)}</p>
        <div>
          <button onClick={() => removeFromCart(product)}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => addToCart(product)}>+</button>
        </div>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--bg-grey);
  padding: 1em;
  display: flex;
  flex-direction: row;
  color: black;
  img {
    width: 100%;
    aspect-ratio: 1/1;
  }
  & > * {
    flex-basis: 100%;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    margin: 0;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  button {
    padding: 0.5em 1em;
  }
`;
