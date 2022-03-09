import React from 'react';
import { ReactComponent as Icon } from '../svgs/svg1.svg';
import { links } from '../data';

export const Header = () => {
    return (
        <section className="header">
            <Icon className="logo" />
            <h1 className="title">Amy Lopez</h1>
            <h2 className="sub-title">Software Developer</h2>
            <article className="header-links">
                {
                    links.map((i) => {
                        const { id, link, icon } = i;
                        return (
                            <a href={link} key={id}>
                                <i className={icon} />
                            </a>
                        );
                    })
                }
            </article>
        </section>
    );
};

export default Header;