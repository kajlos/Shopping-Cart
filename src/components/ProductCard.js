import React from 'react';
import styled from 'styled-components';
export default function ProductCard({ img, price, name }) {
  return (
    <Container>
      <img src={img} alt="item"></img>
      <div>
        <span>{name}</span>
        <span>${price}</span>
        <button>Add to the cart</button>
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
    font-weight: 'bold';
    font-size: 1.2em;
  }
`;
