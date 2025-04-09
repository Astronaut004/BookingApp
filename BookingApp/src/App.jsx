import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyHome from './Component/MyHome'
import Navbar from './Component/Navbar';
import Flight from './Component/Flight/Flight';
import Auth from './Entry/Auth';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MyHome />} />
          <Route path='/flight' element={<Flight />} />
          <Route path='../Entry/Auth.jsx' element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;