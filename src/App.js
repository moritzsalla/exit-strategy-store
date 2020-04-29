import React from 'react';
import styled from 'styled-components';

import Image from './images/image.jpg';

import 'reset-css';

const Wrapper = styled.main`
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 1rem;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <img src={Image} height="200" width="auto" alt="logo"></img>
        <Title>Exit Strategies</Title>
        <Text>
          There's nothing here yet. Please check back within a couple of days!
        </Text>
      </Wrapper>
    </div>
  );
}

export default App;
