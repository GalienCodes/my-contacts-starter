import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditContact from './components/EditContact';
import AddForm from './components/AddForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/edit/:id' element={<EditContact />} />
      <Route path="/add" element={<AddForm />}>
      </Route>
    </Routes>
  </BrowserRouter>
);

