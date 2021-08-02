import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import AuthContextProvider from '../src/Context/AuthContext';
import reportWebVitals from './reportWebVitals';
import {CartProvider} from "./Pages/Cart/CartContext";

ReactDOM.render(
  <React.StrictMode>
      <CartProvider>
      <Router>
          <AuthContextProvider>
              <App />
          </AuthContextProvider>
      </Router>
      </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
