import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Why from './components/Why';
import Features from './components/Features';
import Partners from './components/Partners';
import Additional from './components/Additional';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <Router> 
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Navbar /> 
              <About />
              <Why />
              <Features />
              <Additional />
              <Partners />
              <Footer />
            </>
          } 
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        

      </Routes>
    </Router>
  );
}

export default App;
