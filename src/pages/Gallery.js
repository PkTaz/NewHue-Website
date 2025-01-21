import React, { useState } from 'react';
import '../styles/Gallery.css';
import { FaCamera } from 'react-icons/fa';  // Import icon from react-icons

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, name: 'Historic Restoration', category: 'Milford', imgSrc: '/assets/project-italiante.jpeg' },
    { id: 2, name: 'Historic Restoration', category: 'Milford', imgSrc: '/assets/italiante2.jpg' },
    { id: 3, name: 'Detroit Garage Before', category: 'Detroit', imgSrc: '/assets/project-garage.jpg' },
    { id: 4, name: 'Detroit Garage After', category: 'Detroit', imgSrc: '/assets/garage2.jpg' },
    { id: 5, name: 'Home Restoration', category: 'Ann Arbor', imgSrc: '/assets/project-whittier.jpg' },
    { id: 6, name: 'Home Restoration', category: 'Ann Arbor', imgSrc: '/assets/whittier2.jpg' },
    { id: 7, name: 'Home Restoration', category: 'Ann Arbor', imgSrc: '/assets/whittier3.jpg' },
    { id: 8, name: 'Victorian Redesign', category: 'Tecumseh', imgSrc: '/assets/project-victorian.jpg' },
    { id: 9, name: 'Victorian Redesign', category: 'Tecumseh', imgSrc: '/assets/victorian2.jpg' },
    { id: 10, name: 'Victorian Redesign', category: 'Tecumseh', imgSrc: '/assets/victorian3.jpg' },
    { id: 11, name: 'French Villa Redesign', category: 'Detroit', imgSrc: '/assets/project-village.jpg' },
    { id: 12, name: 'French Villa Redesign', category: 'Detroit', imgSrc: '/assets/village2.jpg' },
    { id: 13, name: 'French Villa Redesign', category: 'Detroit', imgSrc: '/assets/village3.jpg' },
    { id: 14, name: 'Historic Restoration', category: 'Ann Arbor', imgSrc: '/assets/project-hewitt.jpg' },
    { id: 15, name: 'Historic Restoration', category: 'Ann Arbor', imgSrc: '/assets/hewitt2.jpg' },
    { id: 16, name: 'Historic Restoration', category: 'Ann Arbor', imgSrc: '/assets/hewitt3.jpg' },
    { id: 17, name: 'Historic Restoration', category: 'Ann Arbor', imgSrc: '/assets/hewitt4.jpg' },
    { id: 18, name: 'Historic Restoration', category: 'Hillsdale', imgSrc: '/assets/project-greek.jpg' },
    { id: 19, name: 'Historic Restoration', category: 'Hillsdale', imgSrc: '/assets/greek2.jpg' },
    { id: 20, name: 'Historic Restoration', category: 'Hillsdale', imgSrc: '/assets/greek3.jpg' },
    { id: 21, name: 'Redesign & Build', category: 'Ann Arbor', imgSrc: '/assets/project-herbert.jpg' },
    { id: 22, name: 'Redesign & Build', category: 'Ann Arbor', imgSrc: '/assets/herbert2.jpg' },
    { id: 23, name: 'Redesign & Build', category: 'Ann Arbor', imgSrc: '/assets/herbert3.jpg' },
    { id: 24, name: 'Redesign & Build', category: 'Ann Arbor', imgSrc: '/assets/herbert4.jpg' },
    { id: 25, name: 'Redesign & Build', category: 'Ann Arbor', imgSrc: '/assets/herbert5.jpg' },
    { id: 26, name: 'Historic Farmhouse Remodel', category: 'Ann Arbor', imgSrc: '/assets/project-bird.jpg' },
    { id: 27, name: 'Historic Farmhouse Remodel', category: 'Ann Arbor', imgSrc: '/assets/bird2.jpg' },
    { id: 28, name: 'Orchard Barn Before', category: 'Tecumseh', imgSrc: '/assets/project-orchard.jpg' },
    { id: 29, name: 'Orchard Barn After', category: 'Tecumseh', imgSrc: '/assets/orchard2.jpg' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">
        <span className="line"></span>
        Gallery
        <span className="line"></span>
      </h2>
      <div className="icon-container">
      <FaCamera className="gallery-icon" />
      </div>
      <div className="category-buttons">
        <button onClick={() => setFilter('all')} className={`category-btn ${filter === 'all' ? 'active' : ''}`}>All</button>
        <button onClick={() => setFilter('Ann Arbor')} className={`category-btn ${filter === 'Ann Arbor' ? 'active' : ''}`}>Ann Arbor</button>
        <button onClick={() => setFilter('Detroit')} className={`category-btn ${filter === 'Detroit' ? 'active' : ''}`}>Detroit</button>
        <button onClick={() => setFilter('Tecumseh')} className={`category-btn ${filter === 'Tecumseh' ? 'active' : ''}`}>Tecumseh</button>
        <button onClick={() => setFilter('Hillsdale')} className={`category-btn ${filter === 'Hillsdale' ? 'active' : ''}`}>Hillsdale</button>
        <button onClick={() => setFilter('Milford')} className={`category-btn ${filter === 'Milford' ? 'active' : ''}`}>Milford</button>
      </div>
      <div className="gallery-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="gallery-item">
            <img src={project.imgSrc} alt={project.name} className="gallery-img" />
            <div className="gallery-overlay">
              <h3 className="project-name">{project.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
