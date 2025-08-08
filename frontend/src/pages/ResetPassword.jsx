// ResetPassword.js
import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams(); // Extract reset token from URL
  const navigate = useNavigate();

  // Form state for password and confirm password
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  });

  // Toggles for showing/hiding passwords
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check password match
    if (form.password !== form.confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    try {
      // Send reset request to backend
      await axios.post(`https://your-api.com/api/reset-password/${token}`, {
        password: form.password,
      });

      toast.success("Password has been reset.", { autoClose: 3000 });

      // Redirect to login after delay
      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      toast.error("Reset failed. Try again.");
      console.error(err);
    }
  };

  return (
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <ToastContainer position="top-center" autoClose={3000} />

      <Row className="shadow-lg rounded-4 bg-white p-4 w-100" style={{ maxWidth: '500px' }}>
        <Col xs={12}>
          <h3 className="text-center mb-4">Reset Password</h3>

          <Form onSubmit={handleSubmit}>
            {/* New Password */}
            <Form.Group controlId="newPassword" className="mb-3">
              <Form.Label>New Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter new password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                {/* Toggle visibility for password */}
                <Button variant="outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                  <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                </Button>
              </InputGroup>
            </Form.Group>

            {/* Confirm Password */}
            <Form.Group controlId="confirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showConfirm ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {/* Toggle visibility for confirm password */}
                <Button variant="outline-secondary" onClick={() => setShowConfirm(!showConfirm)}>
                  <i className={`bi ${showConfirm ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                </Button>
              </InputGroup>
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit" variant="primary" className="w-100 rounded-pill">
              Reset Password
            </Button>

            {/* Redirect to login */}
            <div className="text-center mt-3">
              <small>
                <span>Back to </span>
                <Link to="/login">Login</Link>
              </small>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
