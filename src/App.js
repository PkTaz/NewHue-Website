import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import RequestWork from './pages/RequestWork';
import Services from './components/Services';
import Footer from './components/Footer';
import AProjects from './pages/A2-Projects'; 
import DProjects from './pages/D-Projects';
import TProjects from './pages/T-Projects';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          {/* Home page route */}
          <Route 
            path="/" 
            element={
              <div className='home-container'>
                <div className="hero-section">
                  <h1>Welcome to <br /> <em>New Hue Restoration + Design</em></h1>
                  <p>Reviving historic structures with the perfect balance of antique beauty and contemporary design.</p>
                  <h2 className=''>Rated 5 out of 5 stars on all platforms!</h2>
                    <div className="star-rating">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  <Link to="/projects"><button className="cta-button">Explore Our Work</button></Link>
                  <div className="cards-section">
                    <div className="card project">
                      <h2>Projects</h2>
                      <p>Discover our stunning transformations.</p>
                      <Link to="/projects"><button>View Projects</button></Link>
                    </div>
                    <div className="card gallery">
                      <h2>Gallery</h2>
                      <p>See our past creations.</p>
                      <Link to="/gallery"><button>View Gallery</button></Link>
                    </div>
                    <div className="card custom-solutions">
                      <h2>Custom Solutions</h2>
                      <p>Let us bring your vision to life.</p>
                      <Link to="/request-work"><button>Contact Us</button></Link>
                    </div>
                  </div>
                </div>
                <Services />
              </div>
            }
          />
          {/* Other pages */}
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/request-work" element={<RequestWork />} />
          <Route path="/A2-Projects" element={<AProjects />} /> {/* Define the route */}
          <Route path="/D-Projects" element={<DProjects />} /> 
          <Route path="/T-Projects" element={<TProjects />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
