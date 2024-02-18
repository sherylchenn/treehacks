import React from 'react';
import TopArticles from './components/NewsList.js';
import SundownDigest from './components/SundownDigest.js';

const App = () => {
  return (
    <div className="App">
      <SundownDigest />
      <h1>Bitcoin </h1>
      <TopArticles searchQuery="bitcoin" searchIn="title" language = "en"/>
      <h1>Ethereum </h1>
      <TopArticles searchQuery="ethereum" searchIn="title" language = "en"/>
      <h1>Solana </h1>
      <TopArticles searchQuery="solana" searchIn="title" language = "en"/>
    </div>
  );
}

export default App;

