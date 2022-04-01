import React from 'react';
import { skills } from '../data';

const Skills = () => {
    return (
        <section className="skills">
            <h3 className="title">Skills</h3>
            <div className="skill-section">
                {skills.map((i) => {
                    const { id, title, text, icon } = i;
                    return (
                        <article key={id} className="skill">
                            <div className="flex">
                                <h4>{title}</h4>
                                <i className={`skill-icon ${icon}`}></i>
                            </div>
                            <p>{text}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;