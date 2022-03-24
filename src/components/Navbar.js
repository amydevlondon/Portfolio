import React from 'react';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-custom navbar-expand-sm">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">A</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/skills" className="nav-link">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.amycv.com" className="nav-link" target="_blank" rel="noopener noreferrer">CV</a>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;