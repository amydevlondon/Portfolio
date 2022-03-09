import React from 'react';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">AL</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/" data-text="home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#skills" data-text="skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#projects" data-text="projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.amycv.com" target="_blank" rel="noopener noreferrer" data-text="cv">CV</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#contact" data-text="connect">Connect</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;