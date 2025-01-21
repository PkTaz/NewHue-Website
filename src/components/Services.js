import '../styles/Services.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure this is imported if using npm


function Services() {
  return (
    <section id="advertisers" className="advertisers-service-sec">
      <div className="section-header">
        <h2>
          <span className="b-class-secondary">Our Services</span>
        </h2>
        <p className="sec-icon">
          <i className="fa-solid fa-cogs"></i> {/* Changed to represent service industry */}
        </p>
      </div>
      <div className="container">
        <div className="service-card">
          <div className="icon-wrapper">
            <i className="fa-solid fa-ruler-combined"></i> {/* Architect icon */}
          </div>
          <h3>Architectural Design</h3>
          <p>Construction Documents, Conceptual Design, Interior Design</p>
        </div>
        <div className="service-card">
          <div className="icon-wrapper">
            <i className="fa-solid fa-hard-hat"></i> {/* Construction helmet icon */}
          </div>
          <h3>General Contracting</h3>
          <p>Project management, Project Planning, Trades Liaison</p>
        </div>
        <div className="service-card">
          <div className="icon-wrapper">
            <i className="fa-solid fa-building"></i> {/* Building icon */}
          </div>
          <h3>Historic Preservation | Restoration | Consulting</h3>
          <p>Material Analysis, Interior/Exterior Historical Design, Construction Thermal Analysis</p>
        </div>
        <div className="service-card">
          <div className="icon-wrapper">
            <i className="fa-solid fa-tools"></i> {/* Tools icon */}
          </div>
          <h3>Custom Woodworking | Milling</h3>
          <p>Custom wood Materials, Decking, Railing, Doors, and Windows</p>
        </div>
        <div className="service-card">
          <div className="icon-wrapper">
            <i className="fa-solid fa-paint-brush"></i> {/* Paintbrush icon */}
          </div>
          <h3>Custom Painting | Finishing</h3>
          <p>Plaster Restoration</p>
        </div>
        <div className="service-card">
          <div className="icon-wrapper">
            <i className="fa-solid fa-home"></i> {/* Home icon */}
          </div>
          <h3>Licensed Residential Building | Construction</h3>
          <p>New construction, Remodeling, and Additions</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
