import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './registration.css';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // make API call to register user with formData
    navigate('confirm');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-title">
        <h2>Martha Patient Registration form</h2>
      </div>
      <div>
        <div className="form-group">
          <div className="form-label">First Name</div>
          <input className="form-input" type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <div className="form-label">Last Name</div>
          <input className="form-input" type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <div className="form-label">Address</div>
          <input className="form-input" type="text" name="address" placeholder="Home address" value={formData.address} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <div className="form-label">EMail</div>
          <input className="form-input" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <div className="form-label">Password</div>
          <input className="form-input" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
        </div>
        <br></br>
        <div className="">
          I accept the terms and conditions &nbsp;
          <input type="checkbox" id="terms" />
        </div>
        <div className="form-group">
          <button className="form-button">Register</button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
