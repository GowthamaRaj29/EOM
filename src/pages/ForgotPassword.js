import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    setIsEmailValid(/\S+@\S+\.\S+/.test(email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid) {
      axios.post('http://localhost:5000/forgot-password', { email })
        .then((response) => {
          console.log(response);
          setMessage('Verification email sent. Redirecting to login page...');
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          setMessage('Error sending verification email. Please try again.');
        });
    }
  };

  const handleBack = () => {
    navigate('/login');
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <div className="logo-r">Devents</div>
        <h2>Forgot Password</h2>
        <p>Kindly enter the Registered mail for verification</p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group-r">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              autoComplete="off"
            />
          </div>
          <div className="button-group-r">
            <button type="submit" className="submit-btn-r" disabled={!isEmailValid}>
              Submit
            </button>
            <button type="button" className="back-btn-r" onClick={handleBack}>
              Back
            </button>
          </div>
        </form>
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
};

export default ForgotPassword;
