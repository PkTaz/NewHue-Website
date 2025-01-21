import React from 'react';
import "../styles/Projects.css";

function DProjects() {
  return (
    <div>
    <h1 className="project-header">Detroit Projects</h1>
    <div className="projects-container">
        <div class="project-card">
            <img src="/assets/project-garage.jpg" alt="Project 5" />
            <div className="project-info">
                <h3>Detroit Garage Door Remodel</h3>
                <p className="location">Detroit, MI (2012)</p>
                <p className="description">Solid White Oak garage doors designed and built for a home in Detroit. 
                    Project included rebuilding both headers, installing new hardware, 
                    and finishing the door and exterior wood elements.</p>
            </div>
        </div>
        <div className="project-card">
            <img src="/assets/project-village.jpg" alt="Project 11" />
            <div className="project-info">
                <h3>Indian Village Remodel</h3>
                <p className="location">Detroit, MI (2022-2024)</p>
                <p className="description">Full exterior restoration and remodel. Design and built custom window sashes to fit original openings.
                     Custom white oak doors.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DProjects;