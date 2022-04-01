import React from 'react';
import { ReactComponent as Icon } from '../svgs/svg2.svg';
import { FiDownload } from 'react-icons/fi';
import CV from '../CV/cv.pdf';

const Header = () => {
    return (
        <section className="header">
            <Icon className="logo" />
            <div>
                <div className="header-text">
                    <h1>Hi, I'm <span className="purple">Amy</span></h1>
                    <p className="sub-title">I'm a <span className="purple">Web Developer</span> based in London</p>
                </div>
                <div className="btn-container">
                    <a href={CV} className="header-btn" download>
                        <span className="btn-text">Download CV</span>
                        <span className="btn-icon"><FiDownload /></span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Header;