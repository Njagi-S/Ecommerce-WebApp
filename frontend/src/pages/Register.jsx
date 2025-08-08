import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Register() {
  // State to manage form inputs
  const [form, setForm] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    username: '',
    email: '',
    phone: '',
    country_code: '+254',
    dob: '',
    gender: '',
    password: '',
    confirm_password: '',
  });

  // Password visibility toggle
  const [showPassword, setShowPassword] = useState(false);

  // Toast state
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullPhone = form.country_code + form.phone;

    try {
      // Send registration data
      const response = await axios.post('https://your-api-url.com/api/register', {
        ...form,
        phone: fullPhone,
      });

      setMessage('✅ Registration successful!');
      setError(null);

      // Reset form on success
      setForm({
        first_name: '',
        middle_name: '',
        last_name: '',
        username: '',
        email: '',
        phone: '',
        country_code: '+254',
        dob: '',
        gender: '',
        password: '',
        confirm_password: '',
      });
    } catch (err) {
      // Handle error
      setError('❌ Registration failed. Please check your details.');
      setMessage(null);
      console.error(err);
    }
  };

  // Toast auto-dismissal after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(null);
      setError(null);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup
  }, [message, error]);

  return (
    <div className="container py-5" style={{ width: '580px', maxWidth: '620px' }}>
      {/* ✅ Toasts - top center, with timeout and styling */}
      {(message || error) && (
        <div
          className={`position-fixed top-0 start-50 translate-middle-x mt-3 z-3 alert 
            ${message ? 'alert-success' : 'alert-danger'} 
            d-flex justify-content-between align-items-center px-4 py-2 shadow rounded-pill`}
          style={{
            minWidth: '300px',
            maxWidth: '500px',
            fontSize: '0.95rem',
          }}
        >
          <div>{message || error}</div>
          {/* Close button */}
          <button
            type="button"
            className="btn-close ms-3"
            onClick={() => {
              setMessage(null);
              setError(null);
            }}
          ></button>
        </div>
      )}

      {/* ✅ Registration Form Card */}
      <div className="card p-4 border-0 shadow rounded-4">
        {/* Logo at the top */}
        <div className="text-center mb-3">
          <img src="/images/logo/logo.png" alt="Logo" style={{ maxWidth: '250px' }} />
        </div>
        <h3 className="text-center text-primary mb-4">Create Your Account</h3>

        <form onSubmit={handleSubmit}>
          {/* Name Fields Row */}
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                name="first_name"
                className="form-control"
                placeholder="First Name"
                value={form.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="middle_name"
                className="form-control"
                placeholder="Middle Name"
                value={form.middle_name}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="last_name"
                className="form-control"
                placeholder="Last Name"
                value={form.last_name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Username */}
          <div className="mb-3">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Choose a Username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number with Prefix */}
          <div className="mb-3 d-flex align-items-center">
            <select
              name="country_code"
              value={form.country_code}
              onChange={handleChange}
              className="form-select me-2"
              style={{ width: '130px', fontSize: '1rem' }}
            >
              <option value="+254">🇰🇪 +254</option>
              <option value="+255">🇹🇿 +255</option>
              <option value="+256">🇺🇬 +256</option>
              <option value="+250">🇷🇼 +250</option>
              <option value="+27">🇿🇦 +27</option>
            </select>
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
            {/* ✅ OPTIONAL: Phone number validation (commented) */}
            {/*
            pattern="[0-9]{9}"
            title="Enter a 9-digit phone number (e.g. 712345678)"
            */}
          </div>

          {/* Date of Birth */}
          <div className="mb-3">
            <input
              type="date"
              name="dob"
              className="form-control"
              value={form.dob}
              onChange={handleChange}
              required
            />
          </div>

          {/* Gender Radio Buttons */}
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="male"
                  checked={form.gender === 'male'}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="female"
                  checked={form.gender === 'female'}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="mb-3 position-relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="form-control"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            {/* Toggle Eye Icon */}
            <i
              className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} position-absolute top-50 end-0 translate-middle-y me-3`}
              style={{ cursor: 'pointer' }}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          {/* Confirm Password */}
          <div className="mb-4 position-relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirm_password"
              className="form-control"
              placeholder="Confirm Password"
              value={form.confirm_password}
              onChange={handleChange}
              required
            />
            {/* Toggle Eye Icon */}
            <i
              className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} position-absolute top-50 end-0 translate-middle-y me-3`}
              style={{ cursor: 'pointer' }}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100 rounded-pill">
            Register
          </button>
        </form>

        {/* Login redirect */}
        <p className="text-center mt-3 small">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
