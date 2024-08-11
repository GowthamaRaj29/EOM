import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert("Message sent successfully!");
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });
    } catch (error) {
      console.error("There was an error sending the message!", error);
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <div>
      <div className="contact-page-c">
        <div className="contact-left-c">
          <h2>Contact Us</h2>
          <p>Not sure what you need? The team at DEvents will be happy to listen to you and suggest event ideas you hadn't considered.</p>
          <div className="contact-info-c">
            <p><strong>Email:</strong> devents@gmail.com</p>
            <p><strong>Support:</strong> 99 44 677777</p>
          </div>
        </div>
        <div className="contact-right-c">
          <h3>We'd love to hear from you! Let's get in touch</h3>
          <form className="contact-form-c" onSubmit={handleSubmit}>
            <div className="form-group-c">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                required
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-c">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-c">
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-c">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
