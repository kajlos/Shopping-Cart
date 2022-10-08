import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
export default function Navbar({ setIsCartOpen }) {
  return (
    <Wrapper>
      <NavWrapper>
        <h1>
          <Link to="/">Tools Shop</Link>
        </h1>
        <LinksWrapper>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <button onClick={() => setIsCartOpen(true)}>
              <CartIcon />
            </button>
          </li>
        </LinksWrapper>
      </NavWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.header`
  box-shadow: 1px 2px 3px grey;
  background-color: var(--orange);
  position: sticky;
  min-width: 100%;
`;
const NavWrapper = styled.nav`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: min(80%, 70rem);
  margin-inline: auto;
  margin-bottom: 0.5em;
  a {
    color: white;
    text-decoration: none;
  }
  @media (min-width: 40em) {
    flex-direction: row;
    margin-bottom: 0;
  }
`;
const LinksWrapper = styled.ul`
  gap: min(3vw, 3rem);
  display: flex;
  align-items: center;
  button {
    background: none;
    border: none;
    cursor: pointer;
    svg {
      fill: white;
      transition: 0.2s;
    }
    svg:hover {
      scale: 1.2;
    }
  }
  a,
  li {
    color: white;
    text-decoration: none;
    position: relative;
    scale: 1;
    transition: scale 0.3s;
  }
  a:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 0;
    background-color: white;
    left: 0;
    bottom: -5px;
    transition: 0.3s;
  }
  a:hover:after {
    width: 100%;
  }
  a:hover,
  li:hover {
    scale: 1.2;
  }
`;
