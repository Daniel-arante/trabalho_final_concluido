import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Cadastro from './pages/singup/singup'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define que o Cadastro é a tela inicial */}
        <Route path="/" element={<Cadastro />} />
        {/* Define a rota de Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);