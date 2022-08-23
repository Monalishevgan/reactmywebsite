import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navebar';
import {Routes,Route,Navigate } from 'react-router-dom';

import './App.css'; 

const App =() => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* 👇️ redirect to /home when user goes to / */}
        <Route path="/" element={<Navigate replace to="/" />} />
        {/* <Navigate to="/" exact  /> */}
        {/* 👇️ only match this when no other routes match */}
        <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
        />
      </Routes>
    </>
  );

}
export default App;
