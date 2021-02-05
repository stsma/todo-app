import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './style.css';
import App from './App';
import AppMeme from './AppMeme';
import reportWebVitals from './reportWebVitals';

import MyInfo from "./components/MyInfo.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <AppMeme /> */}
  </React.StrictMode>,
  document.getElementById('root')
  // ReactDOM.render(<App />, document.getElementById("root"))
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();