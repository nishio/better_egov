import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const Index = () => {
  return <a href="https://scrapbox.io/nishio/%E8%A6%8B%E3%82%84%E3%81%99%E3%81%84%E6%9D%A1%E6%96%87">see here</a>
}

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact children={<Index />} />
    <Route path="/:law/:path" children={<App />} />
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
