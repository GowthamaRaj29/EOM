// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Simulate successful validation and redirect to Home page
      console.log('Form submitted');
      navigate('/home');
    }
  };

  const handleSignup = () => {
    navigate('/register');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate('/forgot-password');
  };

  return (
    <div className="login-container-l">
      <div className="login-card-l">
        <div className="logo-ll">Devents</div>
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group-ll">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group-ll">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <button type="submit" className="login-btn-ll">Login</button>
        </form>
        <div className="footer-text-ll">
          Don’t you remember your password? <a href="#" onClick={handleForgotPassword}>Forgot Password</a>
        </div>
        <div className="or">OR</div>
        <button className="signup-btn-ll" onClick={handleSignup}>Signup</button>
        <div className="footer-logo-l">D</div>
      </div>
    </div>
  );
}

export default Login;
