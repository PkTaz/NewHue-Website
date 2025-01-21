import React from 'react';
import "../styles/Projects.css";

function TProjects() {
  return (
    <div>
    <h1 className="project-header">Tecumseh Projects</h1>
    <div className="projects-container">
        <div className="project-card">
            <img src="/assets/project-orchard.jpeg" alt="Project 7" />
            <div className="project-info">
                <h3>Orchard Barn</h3>
                <p className="location">Tecumseh, MI (2020-2022)</p>
                <p className="description">The new design is to be built in the same footprint as the old one that had stood there for 150 years.
                    New trench footing was to be poured to support the existing slab. With updated features, and historical contemporary design, 
                    the new build embodies the usefulness the barn retained, 
                    while bringing it into the modern age.</p>
            </div>
        </div>
        <div className="project-card">
            <img src="/assets/project-victorian.jpg" alt="Project 9" />
            <div className="project-info">
                <h3>Victorian Parlor Remodel</h3>
                <p className="location">Tecumseh, MI (2018)</p>
                <p className="description">Interior Design & Historic Restoration</p>
            </div>
        </div>
      </div>
      </div>
  );
}

export default TProjects;