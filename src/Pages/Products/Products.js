import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/Wrapper.style';
import ProductCard from '../../components/ProductCard';
import products from '../../data/Products.json';
export default function Products({ addToCart }) {
  return (
    <Wrapper>
      <Container>
        {products.map(product => {
          return <ProductCard key={product.id} product={product} addToCart={addToCart} />;
        })}
      </Container>
    </Wrapper>
  );
}

const Container = styled.div`
  margin-block: 1em;
  display: grid;
  min-width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  gap: 1em;
  align-content: start;
  justify-content: center;
`;
