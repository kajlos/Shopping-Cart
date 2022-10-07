import React from 'react';
import styled from 'styled-components';
import photo from '../../assets/images/builders.jpg';
import { Link } from 'react-router-dom';
import Wrapper from '../../components/Wrapper.style';
export default function Home() {
  return (
    <Wrapper>
      <Child>
        <Left>
          <h2>Best tools on the planet!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sunt vero hic odio
            magni, quasi, labore atque et id aspernatur ipsa tempora dolor at maxime recusandae quas
            nulla dolorum. Expedita.
          </p>
          <Link to="/products">
            <button>Shop now</button>
          </Link>
        </Left>
        <Right>
          <img src={photo} alt="builders"></img>
        </Right>
      </Child>
    </Wrapper>
  );
}
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    margin: 0;
    font-size: 2em;
  }
  p {
    line-height: 2;
    color: var(--light-grey-text);
  }
  a {
    align-self: center;
  }
  button {
    cursor: pointer;
    padding: 1rem 2rem;
    background-color: var(--orange);
    color: white;
    font-size: 1.6em;
    border: none;
    border-radius: 1rem;
    transition: 0.2s;
  }
  button:hover {
    scale: 1.2;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Child = styled.div`
  background-color: var(--bg-grey);
  padding: 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 1em;
  border-radius: 1rem;

  img {
    border-radius: 6px;
    align-self: center;
  }
  @media (min-width: 40em) {
    flex-direction: row;

    & > * {
      flex-basis: 100%;
    }
  }
`;
