import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <NavWrapper>
      <h1>Tool Shop</h1>
      <LinksWrapper>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </LinksWrapper>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  color: var(--orange);
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 1px 2px 3px grey;
  position: sticky;
  a {
    color: black;
    text-decoration: none;
    position: relative;
  }
  a:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 0;
    background-color: var(--orange);
    left: 0;
    bottom: -5px;
    transition: 0.3s;
  }
  a:hover:after {
    width: 100%;
  }
`;
const LinksWrapper = styled.div`
  gap: 3rem;
  display: flex;
`;
