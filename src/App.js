import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Contact from './components/Contact'

export const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;