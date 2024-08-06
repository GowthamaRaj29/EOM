import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/BookNow.css';

function BookNow() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    eventFor: '',
    eventType: '',
    eventLocation: '',
    eventDate: '',
    eventTime: '',
    name: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    if (location.state && location.state.defaultOption) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        eventType: location.state.defaultOption
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleBack = () => {
    navigate('/home');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/bookings', formData);
      alert("Sit back and relax! We will contact you shortly. Have a Nice Day :)");
      navigate('/payment', { state: { formData } }); // Passing formData to Payment.js
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div className="book-now-page">
      <Navbar />
      <div className="book-now-form-container">
        <h2>Book Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="book-now-form-group">
            <label>Event For</label>
            <div className="book-now-radio-group-f">
              <label className="book-now-radio-label">
                <input type="radio" name="eventFor" value="organizer" required onChange={handleChange} />
                <span className="book-now-custom-radio"></span>
                Event Organizer
              </label>
              <label className="book-now-radio-label">
                <input type="radio" name="eventFor" value="individual" required onChange={handleChange} />
                <span className="book-now-custom-radio"></span>
                Individual
              </label>
            </div>
          </div>
          <div className="book-now-form-group">
            <label>Event Type</label>
            <div className="book-now-radio-group-t">
              <label className="book-now-radio-label">
                <input
                  type="radio"
                  name="eventType"
                  value="personalized"
                  checked={formData.eventType === 'personalized'}
                  required
                  onChange={handleChange}
                />
                <span className="book-now-custom-radio"></span>
                Personalized
              </label>
              <label className="book-now-radio-label">
                <input
                  type="radio"
                  name="eventType"
                  value="virtual"
                  checked={formData.eventType === 'virtual'}
                  required
                  onChange={handleChange}
                />
                <span className="book-now-custom-radio"></span>
                Virtual
              </label>
              <label className="book-now-radio-label">
                <input
                  type="radio"
                  name="eventType"
                  value="exhibition"
                  checked={formData.eventType === 'exhibition'}
                  required
                  onChange={handleChange}
                />
                <span className="book-now-custom-radio"></span>
                Exhibition
              </label>
            </div>
          </div>
          <div className="book-now-form-group">
            <label>Event Location</label>
            <textarea rows="4" name="eventLocation" required onChange={handleChange} />
          </div>
          <div className="book-now-form-group">
            <label>Event Date & Time</label>
            <div className="book-now-date-time-group">
              <input type="date" name="eventDate" required onChange={handleChange} />
              <input type="time" name="eventTime" required onChange={handleChange} />
            </div>
          </div>
          <div className="book-now-form-group">
            <label>Name</label>
            <input type="text" name="name" required onChange={handleChange} />
          </div>
          <div className="book-now-form-group">
            <label>Phone No</label>
            <input type="text" name="phone" required onChange={handleChange} />
          </div>
          <div className="book-now-form-group">
            <label>Email</label>
            <input type="email" name="email" required onChange={handleChange} />
          </div>
          <div className="book-now-button-group">
            <button type="button" className="book-now-back-button" onClick={handleBack}>Back</button>
            <button type="submit" className="book-now-submit-button">Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default BookNow;
