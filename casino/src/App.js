import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import { useState } from 'react';

function App() {

  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
          <Route path="/" element={<Homepage/>} />
        
        </Routes>
  
        </Sidebar>
  </BrowserRouter>

  );
}

export default App;
