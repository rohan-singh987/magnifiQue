import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import initFontAwesome from "./initFontAwesome";
initFontAwesome();

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, []);

  return (
    
    <div>

    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
    </Routes>

  
    
    </div>
  );
}

export default App;
