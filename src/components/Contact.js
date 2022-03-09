import React from 'react';
import { links } from '../data';
import { ReactComponent as Icon } from '../svgs/svg3.svg';

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Icon className="logo" />
            <h3 className="title">Let's Connect</h3>
            <article className="contact-list">
                {
                    links.map((i) => {
                        const { id, link, icon } = i;
                        return (
                            <a href={link} target="_blank" rel="noopener noreferrer" key={id}>
                                <i className={`contact-icon ${icon}`} />
                            </a>
                        );
                    })
                }
            </article>
        </section>
    );
};

export default Contact;