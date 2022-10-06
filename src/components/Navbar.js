import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Cart from './Cart';
export default function Navbar() {
  return (
    <Wrapper>
      <NavWrapper>
        <h1>
          <Link to="/">Tools Shop</Link>
        </h1>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <div>
            <button>
              <Cart />
            </button>
          </div>
        </LinksWrapper>
      </NavWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
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
  a {
    color: white;
    text-decoration: none;
  }
  @media (min-width: 40em) {
    flex-direction: row;
  }
`;
const LinksWrapper = styled.div`
  gap: min(3vw, 3rem);
  display: flex;
  button {
    background: none;
    border: none;
    cursor: pointer;
    svg {
      fill: white;
    }
  }
  a {
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
  a:hover {
    scale: 1.2;
  }
`;
