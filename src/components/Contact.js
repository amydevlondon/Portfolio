import React from 'react';
import { links } from '../data';
import { ReactComponent as Icon } from '../svgs/svg5.svg';

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-container">
                <Icon className="logo" />
                <div>
                    <h3 className="title">Let's Connect</h3>
                    <div className="contact-list">
                        {
                            links.map((i) => {
                                const { id, link, icon, text } = i;
                                return (
                                    <a href={link} target="_blank" rel="noopener noreferrer" key={id}>
                                        <i className={`contact-icon ${icon}`} />
                                        {text}
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;