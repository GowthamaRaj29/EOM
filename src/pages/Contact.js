import React from 'react';
import '../styles/Contact.css';
import Footer from '../components/Footer'

const Contact = () => {
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
        <form className="contact-form-c">
          <div className="form-group-c">
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Company" required />
          </div>
          <div className="form-group-c">
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone number" required />
          </div>
          <div className="form-group-c">
            <input type="text" placeholder="Address" required />
          </div>
          <div className="form-group-c">
            <textarea placeholder="Your Message" rows="4" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Contact;
