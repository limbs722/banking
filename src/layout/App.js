import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Aside } from './';
import { AccountCreate, AccountInfo, AccountDetails } from '../pages';
import 'antd/dist/antd.css';
import '../assets/css/App.scss';

function App() {
  return (
    <div className="wrapper-main">
      <Aside />
      <div className="wrapper-content">
        <Routes>
          <Route path="/" element={<AccountInfo />} />
          <Route path="/accountCreate" element={<AccountCreate />} />
          <Route path="/accountDetails" element={<AccountDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
