import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Aside } from './';
import { AccountCreate, AccountInfo, AccountDetails } from '../pages';
import 'antd/dist/antd.css';
import '../assets/css/App.scss';

function App() {
  return (
    <div className="wrapper-main">
      <Aside />
      <div className="wrapper-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AccountInfo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
