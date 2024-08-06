import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/Home.css';
import Footer from '../components/Footer'; // Adjust the path as necessary
import Img1 from '../assets/Homeimg.jpg';
import Pep from '../assets/Pep.jpg';
import Virtual from '../assets/VirtualEvent.jpeg';
import Exhibition from '../assets/Exhibition.jpg';
import Navbar from '../components/Navbar';

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBookNowClick = (defaultOption) => {
    navigate('/bookings', { state: { defaultOption } }); // Navigate to the BookNow route with state
  };

  return (
    <div className="homebg">
      <Navbar />
      <div className="home-container">
        <div className="left-content-h">
          <h1 className="magic-text">
            Let's Create <span className="magic-gradient">Magic</span> Together
          </h1>
          <p className='magic-p'>
            Don't wait! Book your event with us today and experience the magic of a perfectly planned event.
          </p>
          <button className="book-now-btn-h" onClick={() => handleBookNowClick('default')}>Book now</button>
        </div>
        <div className="right-content">
          <img src={Img1} alt="Event planning banner" className="banner-image" />
        </div>
      </div>

      <div id="about-us" className="about-us">
        <h2>About Us</h2>
        <p>
          At Devents, we specialize in turning your dreams into reality. Whether it's a corporate event, wedding, or private party, our expert team is dedicated to delivering exceptional events tailored to your unique vision. With our innovative approach and meticulous attention to detail, we ensure that every event we manage is memorable and flawless.
        </p>
      </div>

      <div className="key-features">
        <h2>Key Features</h2>

        <div id="personalized-event-planning" className="feature-card">
          <div className="feature-text">
            <h3>Personalized Event Planning</h3>
            <p>
              Our personalized approach ensures that your event reflects your style and preferences. We work closely with you to understand your needs and create a bespoke plan that exceeds your expectations.
            </p>
            <button className="book-now-btn-pe" onClick={() => handleBookNowClick('personalized')}>Book Now</button>
          </div>
          <div className="feature-image">
            <img src={Pep} alt="Personalized Event Planning" />
          </div>
        </div>

        <div id="virtual-event" className="feature-card virtual-event">
          <div className="feature-image">
            <img src={Virtual} alt="Virtual Event" className='virtual' />
          </div>
          <div className="feature-text">
            <h3>Virtual Event</h3>
            <p>
              We utilize state-of-the-art virtual event platforms that can be tailored to fit your specific needs. From webinars and conferences to virtual trade shows and networking events, we provide versatile solutions that enhance the attendee experience.
            </p>
            <button className="book-now-btn-vi" onClick={() => handleBookNowClick('virtual')}>Book Now</button>
          </div>
        </div>

        <div id="exhibition-management" className="feature-card">
          <div className="feature-text">
            <h3>Exhibition Management</h3>
            <p>
              We provide customized exhibition designs that reflect your brand identity and message. Our creative team works closely with you to develop a unique and visually stunning exhibition space that attracts and engages visitors.
            </p>
            <button className="book-now-btn-ex" onClick={() => handleBookNowClick('exhibition')}>Book Now</button>
          </div>
          <div className="feature-image">
            <img src={Exhibition} alt="Exhibition Management" />
          </div>
        </div>
      </div>

      <div className="by-the-numbers">
        <div className="numbers-card">
          <h2>Devents by the Numbers</h2>
          <div className="numbers-container">
            <div className="number-item">
              <h3>1000+</h3>
              <p>events</p>
            </div>
            <div className="number-item">
              <h3>5000+</h3>
              <p>event planners</p>
            </div>
            <div className="number-item">
              <h3>106+</h3>
              <p>countries</p>
            </div>
            <div className="number-item">
              <h3>1.6M+</h3>
              <p>attendees</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
