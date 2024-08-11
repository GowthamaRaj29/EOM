// src/pages/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminLogin.css';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (email !== 'admin@devents.com') {
      errors.email = 'Email address is incorrect';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password !== 'admin123') {
      errors.password = 'Password is incorrect';
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate('/adminDash');
    }
  };

  const handleBack = () => {
    navigate('/login');
  };

  return (
    <div className="login-container-ll">
      <div className="login-card-ll">
        <div className="logo-ll">Devents</div>
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          {errors.email && <div className="error">{errors.email}</div>}
          <div className="form-group-ll">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>
          {errors.password && <div className="error">{errors.password}</div>}
          <div className="form-group-ll">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
          <button type="submit" className="login-btn-ll">Login</button>
        </form>
        <button className="signup-btn-ll" onClick={handleBack}>Back</button>
        <div className="footer-logo-l">D</div>
      </div>
    </div>
  );
}

export default AdminLogin;
