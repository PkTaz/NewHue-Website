import React from 'react';
import { FaPaintBrush, FaHistory, FaCogs, FaLightbulb, FaHandsHelping } from 'react-icons/fa'; // Importing icons
import '../styles/About.css';
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <section className="about-intro">
        <h1>Why New Hue Restoration + Design?</h1>
        <p>We specialize in bringing visions to life through meticulous restoration and innovative design. Each project is a canvas, and every detail is a brushstroke of perfection.</p>
      </section>

      <div className="section-icon">
        <FaPaintBrush />
      </div>

      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          New Hue Restoration + Design, LLC is a full-service design studio & licensed building firm,
          with a focus on preservation and revitalization of historic structures.
          NHR+D aims for every project to reflect our fascination with the historic built environment,
          and our expertise for people-focused spaces. NHR+D team is multi-faceted,
          and continues to prove excellent craft and thoughtful design with every project.
          Our team prides itself on its client relationships, and a mission to provide inspiring architectural design.
          This attention to client desires, project personalization, and management, allows for successful projects to occur.
        </p>
      </section>

      <div className="section-icon">
        <FaHistory />
      </div>

      <section className="about-process">
        <h2>The Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Discover</h3>
            <p>We begin by understanding your vision, goals, and unique style to lay the foundation for your project.</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Design</h3>
            <p>Our creative team crafts detailed plans that blend innovation with timeless techniques.</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Deliver</h3>
            <p>With precision and care, we bring your vision to life, ensuring every detail is perfect.</p>
          </div>
        </div>
      </section>

      <div className="section-icon">
        <FaCogs />
      </div>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <ul className="values-list">
          <li>
            <div className="value-icon">
              <FaPaintBrush />
            </div>
            <div>
              <span>Craftsmanship:</span> Elevating every detail to an art form.
            </div>
          </li>
          <li>
            <div className="value-icon">
              <FaLightbulb />
            </div>
            <div>
              <span>Innovation:</span> Seamlessly merging tradition with modernity.
            </div>
          </li>
          <li>
            <div className="value-icon">
              <FaHandsHelping />
            </div>
            <div>
              <span>Integrity:</span> Building trust through transparency and respect.
            </div>
          </li>
        </ul>
      </section>

      <div className="section-icon">
        <FaLightbulb />
      </div>

      <section className="about-cta">
        <h2>Let Us Redefine Your Space</h2>
        <p>Your vision deserves to be realized with care, creativity, and expertise. Let's create something extraordinary together.</p>
        <Link to="/request-work" className="cta-button">Get in Touch</Link>
      </section>

      <div className="section-icon">
        <FaHandsHelping />
      </div>
    </div>
  );
}

export default About;
