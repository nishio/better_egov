import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function App() {
  const { law, path } = useParams();
  return (
    <div className="App">
      <Helmet>
        <title>{law}</title>
        <meta name="description" content={path} />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div >
  );
}

export default App;
