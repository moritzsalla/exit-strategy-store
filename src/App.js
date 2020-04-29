import React from 'react';
import { Helmet } from 'react-helmet';
import Image from './images/thumbnail.jpg';
import styled from 'styled-components';

import Thumbnail from './images/thumbnail.jpg';
import Favicon from './images/thumbnail.jpg';

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
      <Helmet>
        <meta charSet="utf-8" />

        <title>Exit Strategies</title>
        <meta name="title" content="Exit Strategies" />
        <meta
          name="description"
          content="Forgetful Number presents Exit Strategies: a photography collective composed of the photography graduates at the Royal Academy of Art in The Hague. "
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exitstrategies.store/" />
        <meta property="og:title" content="Exit Strategies" />
        <meta
          property="og:description"
          content="Forgetful Number presents Exit Strategies: a photography collective composed of the photography graduates at the Royal Academy of Art in The Hague. "
        />
        <meta property="og:image" content={Image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://exitstrategies.store/" />
        <meta property="twitter:title" content="Exit Strategies" />
        <meta
          property="twitter:description"
          content="Forgetful Number presents Exit Strategies: a photography collective composed of the photography graduates at the Royal Academy of Art in The Hague. "
        />
        <meta property="twitter:image" content={Image} />
        <link rel="shortcut icon" href={Favicon} />
      </Helmet>

      <Wrapper>
        <img src={Thumbnail} height="200" width="auto" alt="logo"></img>
        <Title>Exit Strategies</Title>
        <Text>
          There's nothing here yet. Please check back within a couple of days!
        </Text>
      </Wrapper>
    </div>
  );
}

export default App;
