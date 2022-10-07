import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/Wrapper.style';
import ProductCard from '../../components/ProductCard';
import screwdriverimg from '../../assets/images/screwdriver.jpg';
export default function Products() {
  return (
    <Wrapper>
      <Container>
        <ProductCard img={screwdriverimg} price="10" name="Screwdriver" />
        <ProductCard img={screwdriverimg} price="10" name="Screwdriver" />
        <ProductCard img={screwdriverimg} price="10" name="Screwdriver" />
        <ProductCard img={screwdriverimg} price="10" name="Screwdriver" />
        <ProductCard img={screwdriverimg} price="10" name="Screwdriver" />
        <ProductCard img={screwdriverimg} price="10" name="Screwdriver" />
        <ProductCard img={screwdriverimg} price="10" name="Screwdriver" />
        <ProductCard img={screwdriverimg} price="10" name="Screwdriver" />
        <ProductCard img={screwdriverimg} price="10" name="Screwdriver" />
      </Container>
    </Wrapper>
  );
}

const Container = styled.div`
  margin-block: 1em;
  display: grid;
  min-width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  gap: 1em;
  align-content: start;
`;
