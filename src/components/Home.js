import React from 'react';
import styled from 'styled-components';
import photo from '../assets/images/builders.jpg';
import photo2 from '../assets/images/builders2.jpg';
export default function Home() {
  return (
    <Parent>
      <Child>
        <div>
          <p>Home</p>
        </div>
        <div>
          <img src={photo2} alt="builders"></img>
        </div>
      </Child>
    </Parent>
  );
}
const Parent = styled.div`
  width: min(80%, 70rem);
  background-color: darkblue;
  padding: 3rem 2rem;
  margin-inline: auto;
  flex: 1;
`;
const Child = styled.div`
  width: 90%;
  background-color: lightblue;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
