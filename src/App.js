import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"
            element={
              <>
                <Header />
                <Skills />
                <Projects />
                <Contact />
              </>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;