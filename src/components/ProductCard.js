import React from 'react';
import styled from 'styled-components';
export default function ProductCard({ product, addToCart }) {
  return (
    <Container>
      <img src={product.img} alt="item"></img>
      <div>
        <span>{product.name}</span>
        <span>${product.price}</span>
        <button onClick={() => addToCart(product)}>Add to the cart</button>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-color: var(--bg-grey);
  padding: 1em;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  img {
    width: 100%;
    aspect-ratio: 1/1;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 0.5rem;
    button {
      padding: 1rem 2rem;
      background-color: var(--orange);
      color: white;
      border: none;
      cursor: pointer;
      font-size: 1.3em;
      font-weight: bold;
      border-radius: 0.5rem;
    }
  }
  span:nth-child(1) {
    font-weight: 900;
    font-size: 1.2em;
  }
`;
