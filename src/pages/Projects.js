import React from 'react';
import "../styles/Projects.css";
import { FaTools } from 'react-icons/fa';  // Import icon from react-icons

function Projects() {
  return (
    <div>
        <h1 className="project-header">
        <span className="icon-line" />
        Projects
        <span className="icon-line" />
      </h1>
      <div className="icon-container">
      <FaTools className="project-icon" />
      </div>
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
            <img src="/assets/project-dupont.jpg" alt="Project 2" />
            <div className="project-info">
                <h3>Dupont Underground Design</h3>
                <p className="location">Washington, DC (2019-2020)</p>
                <p className="description">Design Competition</p>
            </div>
        </div>
        <div className="project-card">
            <img src="/assets/project-italiante.jpeg" alt="Project 3" />
            <div className="project-info">
                <h3>North Italianate Restoration</h3>
                <p className="location">Milford, MI (2021-2022)</p>
                <p className="description">Historic Restoration</p>
            </div>
        </div>
        <div className="project-card">
            <img src="/assets/project1.jpg" alt="Project 4" />
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
            <img src="/assets/project-whittier.jpg" alt="Project 6" />
            <div className="project-info">
                <h3>Whittier-Ferguson Home Restoration</h3>
                <p className="location">Ann Arbor, MI (2019)</p>
                <p className="description">Historic Restoration & Contracting</p>
            </div>
        </div>
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
            <img src="/assets/project-greek.jpg" alt="Project 8" />
            <div className="project-info">
                <h3>Greek Revival Restoration & Remodel</h3>
                <p className="location">Hillsdale, MI (2019-2021)</p>
                <p className="description">Greek revival home with complete exterior restoration. The project included 100% removal of all paint material, 
                    repair, light construction of deteriorated ornamentation, window restoration and glazing, and complete finishing in a historic white. 
                    New roof, and additional copper elements were added to the entryway.</p>
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
        <div className="project-card">
            <img src="/assets/project-hewitt.jpg" alt="Project 10" />
            <div className="project-info">
                <h3>Hewitt Garage & House Restoration</h3>
                <p className="location">Ann Arbor, MI</p>
                <p className="description">This Project consisted of two phases: complete exterior restoration, and window restoration, 
                    and garage remodel and painting to match home.</p>
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
        <div className="project-card">
            <img src="/assets/project-herbert.jpg" alt="Project 12" />
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

export default Projects;