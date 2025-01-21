import '../styles/Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons
import { FiArrowRight } from 'react-icons/fi'; // Arrow for links
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='site-footer'>
            <div className="footer-container">
                

                {/* About Us Section */}
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>New Hue Restoration + Design is dedicated to providing top-tier restoration and innovative design solutions.</p>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <Link 
                                to="/about">About <FiArrowRight className="icon" />
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/projects">Projects <FiArrowRight className="icon" />
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/gallery">Gallery <FiArrowRight className="icon" />
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/request-work">Request Work <FiArrowRight className="icon" />
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>
                    <FaPhoneAlt className="icon" /> Phone: <a href="tel:+17343309717">(734) 330-9717
                    </a>
                    </p>
                    <p>
    
        <FaEnvelope className="icon" />Email: <a href="mailto:info@newhuerestoration.com">info@newhuerestoration.com
    </a>
</p>
                    <p>
                        <FaMapMarkerAlt className="icon" /> Address:
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.google.com/maps/place/310+W+Logan+St,+Tecumseh,+MI+49286"
                        >
                            310 W Logan St, Tecumseh, MI 49286
                        </a>
                    </p>
                </div>
                <img src="/assets/header-logo.png" alt="New Hue Restoration Logo" className="footer-img" />
            </div>

            <div className="footer-bottom">
                &copy; 2025 New Hue Restoration + Design. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;
