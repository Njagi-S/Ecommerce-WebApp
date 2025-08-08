// Login.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();

  // State to handle form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Toggle for showing/hiding password
  const [showPassword, setShowPassword] = useState(false);

  // Toggle handler
  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://your-api.com/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success('Login successful!', { autoClose: 2000 });

        // Redirect after short delay
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      }
    } catch (error) {
      toast.error('Invalid email or password');
      setEmail('');
      setPassword('');
      console.log(error.message);
    }
  };

  return (
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center bg-gradient">
      {/* Toast container placed slightly above form */}
      <ToastContainer
        position="top-center"
        style={{ marginTop: '4rem', zIndex: 9999 }}
        autoClose={2000}
      />

      <Row className="w-100 shadow-lg rounded-4 overflow-hidden" style={{ width: '90%', maxWidth: '720px', background: '#fff' }}>
        {/* Left column with welcome + image */}
        <Col md={6} className="d-none d-md-block p-0">
          <div
            className="h-100 w-100 d-flex flex-column justify-content-center align-items-center text-white"
            style={{
              background: 'linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC)',
              padding: '2rem',
            }}
          >
            <img src="/images/logo/logo.png" alt="Logo" style={{ width: '250px', marginBottom: '1rem' }} />
            <h2>Hello, welcome!</h2>
            <p className="text-center px-3">Login and manage your account easily.</p>
            <Button variant="light" className="rounded-pill mt-3 px-4 py-2 fw-bold">
              Learn More
            </Button>
          </div>
        </Col>

        {/* Right column - login form */}
        <Col md={6} xs={12} className="p-5">
          <h3 className="text-center mb-4">Login to Your Account</h3>
          <Form onSubmit={handleSubmit}>
            {/* Email field */}
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-3"
              />
            </Form.Group>

            {/* Password field with Bootstrap icon toggle */}
            <Form.Group controlId="formPassword" className="mb-2">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="rounded-start-3"
                />

                {/* Bootstrap Icon Toggle (bi-eye / bi-eye-slash) */}
                <span
                  className="input-group-text bg-white border-start-0 rounded-end-3"
                  style={{ cursor: 'pointer' }}
                  onClick={handleTogglePassword}
                >
                  <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} `}></i>
                </span>
              </InputGroup>
            </Form.Group>

            {/* Forgot password link */}
            <div className="text-end mb-3">
              <Button
                variant="link"
                className="p-0 text-decoration-none"
                onClick={() => navigate('/forgot-password')}
              >
                Forgot Password?
              </Button>
            </div>

            {/* Login Button */}
            <Button type="submit" variant="primary" className="w-100 py-2 rounded-pill">
              Login
            </Button>

            {/* Optional: Redirect to register */}
            <div className="text-center mt-3">
              <small>
                Not a member yet?{' '}
                <span className="text-primary" role="button" onClick={() => navigate('/register')}>
                  Sign up
                </span>
              </small>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
