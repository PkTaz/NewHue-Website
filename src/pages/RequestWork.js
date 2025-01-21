import React, { useState } from 'react';
import '../styles/RequestWork.css';

function RequestWork() {
  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    details: '',
  });

  // State for form submission feedback
  const [feedback, setFeedback] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation example
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setFeedback('Please fill out all required fields.');
      return;
    }

    // Simulate successful submission
    setFeedback('Your request has been submitted successfully!');

    // Clear form inputs
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      details: '',
    });
  };

  return (
    <div className="position">
      <div className="form-container">
        <form className="request-form" onSubmit={handleSubmit}>
          <h2>Request Work</h2>

          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="details">Details</label>
          <textarea
            id="details"
            name="details"
            rows="5"
            value={formData.details}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>

          {/* Feedback message */}
          {feedback && <p className="feedback">{feedback}</p>}
        </form>
      </div>
    </div>
  );
}

export default RequestWork;
