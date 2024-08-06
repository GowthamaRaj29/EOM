import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
      isValid = false;
      formErrors.name = 'Name is required';
    }

    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      isValid = false;
      formErrors.phone = 'Phone number must be exactly 10 digits';
    }

    if (!formData.email) {
      isValid = false;
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      formErrors.email = 'Email is invalid';
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password) {
      isValid = false;
      formErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
      isValid = false;
      formErrors.password = 'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character';
      console.log('Password validation error:', formData.password);
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios.post('http://localhost:5000/users', formData)
        .then((response) => {
          setMessage('Registration successful');
          navigate('/login');
        })
        .catch((error) => {
          console.error('Registration failed:', error.response || error.message || error);
          setMessage('Registration failed');
        });
    }
  };

  const handleBack = () => {
    navigate('/login');
  };

  return (
    <div className="register-container-f">
      <div className="register-card-f">
        <div className="logo-f">Devents</div>
        <h2>REGISTER</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group-ff">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div className="form-group-ff">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.phone && <div className="error">{errors.phone}</div>}
          </div>
          <div className="form-group-ff" autoComplete="off">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group-ff" autoComplete="off">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="button-group-f">
            <button type="submit" className="register-btn-f">Register</button>
            <button type="button" className="back-btn-f" onClick={handleBack}>Back</button>
          </div>
        </form>
        {message && <div className="message-f">{message}</div>}
      </div>
    </div>
  );
};

export default Register;
