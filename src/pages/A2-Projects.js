import React from 'react';
import "../styles/Projects.css";

function AProjects() {
  return (
    <div>
    <h1 className="project-header">Ann Arbor Projects</h1>
    <div className="projects-container">
        <div className="project-card">
            <img src="/assets/project-oak.jpg" alt="Project 1" />
            <div className="project-info">
                <h3>Oak Porch</h3>
                <p className="location">Ann Arbor, MI (2021)</p>
                <p className="description">Total rebuild project of two small entryway porches. 
                    Porches were resurfaced with white oak tongue & groove decking. 
                    New white oak porch skirts were designed, built, and installed.</p>
            </div>
        </div>
        <div className="project-card">
            <img src="/assets/project1.jpg" alt="Project 2" />
            <div className="project-info">
                <h3>Hauser Balcony Remodel & Screen Porch</h3>
                <p class="location">Ann Arbor, MI (2020)</p>
                <p class="description">Total exterior renovation and restoration project. 
                    In 2021, NHR+D rebuilt the second floor master bedroom balcony with Kona Timbertech Decking, 
                    and custom designed and milled new White Oak railing and posts. Restored and used the existing Redwood spindles for the new build. 
                    Adjacent wall to the balcony was demoed, resheathed, and cladded with new Cedar shakes, 
                    and painted to match the house.</p>
            </div>
        </div>
        <div className="project-card">
            <img src="/assets/project-whittier.jpg" alt="Project 3" />
            <div className="project-info">
                <h3>Whittier-Ferguson Home Restoration</h3>
                <p className="location">Ann Arbor, MI (2019)</p>
                <p className="description">Historic Restoration & Contracting</p>
            </div>
        </div>
        <div className="project-card">
            <img src="/assets/project-hewitt.jpg" alt="Project 4" />
            <div className="project-info">
                <h3>Hewitt Garage & House Restoration</h3>
                <p className="location">Ann Arbor, MI</p>
                <p className="description">This Project consisted of two phases: complete exterior restoration, and window restoration, 
                    and garage remodel and painting to match home.</p>
            </div>
        </div>
        <div className="project-card">
            <img src="/assets/project-herbert.jpg" alt="Project 5" />
            <div className="project-info">
                <h3>Herbert Deck Remodel</h3>
                <p className="location">Ann Arbor, MI</p>
                <p className="description">This project was another concept built on clients wanting more desirable outdoor spaces in the era of the pandemic, 
                    and also aging in place. 
                    The deck built off the back of the house was redesigned and re-surfaced with TimberTech Decking</p>
            </div>
        </div>
      </div>
      </div>
  );
}

export default AProjects;