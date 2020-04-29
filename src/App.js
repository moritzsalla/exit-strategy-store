import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import Image from './images/thumbnail.jpg';

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
      </Helmet>

      <h1>
        There's nothing here yet. Please check back within a couple of days!
      </h1>
    </div>
  );
}

export default App;
