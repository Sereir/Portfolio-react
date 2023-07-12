import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import About from './pages/about/about';
import Error from './pages/error/error';
import Experience from './pages/experience/experience';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
// import components
import Navbar from './components/navbar/navbar';
import UpArrow from './components/uparrow/uparrow';

function App() {
  return (
    <Router>
      <Navbar />
      <UpArrow />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Experience/>} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
