import React from 'react';
import ReactDOM from 'react-dom';
require ('/styles/layout.css');
import './script.js';
import Head from 'next/head';

import ScrollReveal from 'scrollreveal'
import  App  from './app';

import Head from 'next/head'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React>
  <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://unpkg.com/scrollreveal@3.3.2/dist/scrollreveal.min.js"></script>
      </Head>
         <App />
    
    </div>
 
  </React>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
