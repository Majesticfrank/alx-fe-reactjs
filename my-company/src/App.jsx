import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
;import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



function App() {


  return (
    <Router>
      <Navbar/>
    
      <Routes>
      <Route path ="/" element={<Home />}/>
      <Route path ="/Contact" element={<Contact />} /> 
      <Route path ="/About" element={<About />}/>
      <Route path ="/Services"element={<Services />} />    
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
