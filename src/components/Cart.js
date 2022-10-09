import React from 'react';
import styled, { css } from 'styled-components';
export default function Cart({setIsCartOpen,isCartOpen}) {
  return (
    <Container isCartOpen={isCartOpen} >
      fg
      <h2>CArt</h2>
      <button onClick={() => setIsCartOpen(false)}>X</button>
    </Container>
  );
}
const Container = styled.div`
  display: block;
  position: absolute;
  background-color: 'coral';
  width: 400px;
  height: 100%;
  top: 0;
  right: 0;
  translate: 300px;
  transition: translate 0.5s;
  ${props => console.log(props)}
  ${(props) => props.isCartOpen && css`
        translate:0px;
    `}
`;
