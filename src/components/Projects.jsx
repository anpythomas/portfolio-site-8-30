import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-container">
                <div className="project-card">
                    <img src="/img1.png" alt="Project 1"/>
                    <h3>Project 1</h3>
                    <p>Description of project 1</p>
                </div>
                <div className="project-card">
                    <img src="/img1.png" alt="Project 2"/>
                    <h3>Project 2</h3>
                    <p>Description of project 2</p>
                </div>
                <div className="project-card">
                    <img src="/img1.png" alt="Project 3"/>
                    <h3>Project 3</h3>
                    <p>Description of project 3</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
