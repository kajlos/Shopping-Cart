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
  color: orange;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  a {
    color: white;
    text-decoration: none;
  }
`;
const LinksWrapper = styled.div`
  gap: 3rem;
  display: flex;
`;
