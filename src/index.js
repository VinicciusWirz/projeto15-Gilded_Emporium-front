import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetStyle from './assets/css/ResetStyle';
import GlobalStyle from './assets/css/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ResetStyle/>
    <GlobalStyle/>
    <App />
  </>
);
