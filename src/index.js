import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw.js';
import Data from './Data';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App/>} >
        <Route index element ={<Home/>} />
        <Route path="home" element ={<Home/>} />
        <Route path="login" element ={<Login/>} />
        <Route path="createAccount" element ={<CreateAccount/>} />
        <Route path="deposit" element ={<Deposit/>} />
        <Route path="withdraw" element ={<Withdraw/>} />
        <Route path="data" element ={<Data/>} />
        <Route path="*" element={<Home/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);