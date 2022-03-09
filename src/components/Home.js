import React from 'react';
import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

export const Home = () => {
    return (
        <>
            <Header />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;