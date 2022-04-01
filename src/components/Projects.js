import React from 'react';
import { projects } from '../data';
import { VscCircleFilled } from 'react-icons/vsc';
import { FaLaptop } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const Projects = () => {
    return (
        <section className="projects">
            <h3 className="title">Projects</h3>
            <article className="projects-list">
                {projects.map((project) => {
                    const { id, name, languages, description, code, demo } = project;
                    return (
                        <div className="project" key={id}>
                            <h3>{name}</h3>
                            <div className="project-languages">
                                {languages.map((i) => {
                                    return (
                                        <p key={Math.random() * 1000}>
                                            {i}
                                            {languages.indexOf(i) !== languages.length - 1 ? <VscCircleFilled className="circle" /> : ""}
                                        </p>
                                    );
                                })}
                            </div>
                            <p className="project-description">{description && description}</p>
                            <div className="project-links">
                                <a href={code} target="_blank" rel="noopener noreferrer">
                                    <FiGithub className="project-icon" />Source Code
                                </a>
                                <a href={demo} target="_blank" rel="noopener noreferrer">
                                    {demo && <FaLaptop className="project-icon" />}
                                    {demo && "Live site"}
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