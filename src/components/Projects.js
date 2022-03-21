import React from 'react';
import { projects } from '../data';

export const Projects = () => {

    const arrow = <i className="fas fa-chevron-right arrow-icon" />;

    return (
        <section className="projects" id="projects">
            <h3 className="title">Projects</h3>
            <article className="projects-list">
                {projects.map((project) => {
                    const { id, name, languages, image, description, code, demo } = project;
                    return (
                        <div key={id} className="project">
                            <h4 className="project-name">{name}</h4>
                            <div className="project-languages">
                                {languages.map((i) => {
                                    return (
                                        <p key={Math.random() * 1000}>
                                            {i}
                                            {languages.indexOf(i) !== languages.length - 1 ? <span>|</span> : ""}
                                        </p>
                                    );
                                })}
                            </div>
                            {image && <img src={image} alt="" className="project-image" />}
                            <div className="project-description">
                                <p>{description}</p>
                            </div>
                            <div className="project-links">
                                <a href={code} target="_blank" rel="noopener noreferrer">
                                    Check out the Code
                                     {arrow}
                                </a>
                                <a href={demo} target="_blank" rel="noopener noreferrer">
                                    {demo && "Visit Site"}
                                    {demo && arrow}
                                </a>
                            </div>
                        </div>
                    );
                })}
            </article>
        </section>
    );
};

export default Projects;