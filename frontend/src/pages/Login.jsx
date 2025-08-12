import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';

// The Login component now accepts `onLoginSuccess` as a prop
const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  // State to handle form fields: 'email' and 'password' store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // State to manage the password visibility toggle
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  // Form submission handler function
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)
    setLoading(true);

    try {
      // Send a POST request to the Django login endpoint
      const response = await axios.post('http://localhost:8000/api/login/', {
        email,
        password,
      });

      // Check if the request was successful
      if (response.status === 200) {
        // Store the received tokens
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        
        // This is the key change: call the function passed from the App component
        // to update the login state in the parent.
        onLoginSuccess();

        // Display a success notification
        toast.success('Login successful!', { autoClose: 2000 });

        // Redirect the user to the home page immediately
        navigate('/');
      }
    } catch (error) {
      // Log the full error object to the console for detailed debugging
      console.error("Login Error:", error);

      // Handle different types of errors based on the axios response structure
      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status === 401) {
          toast.error('Invalid email or password');
        } else if (error.response.status === 404) {
          // A 404 error might indicate the API endpoint URL is wrong
          toast.error('API endpoint not found. Please check the URL.');
        } else if (error.response.status >= 500) {
          // A 5xx error indicates a server-side problem
          toast.error(`Server error: ${error.response.status}. Please try again later.`);
        } else {
          // Handle any other status codes
          toast.error(`Error: ${error.response.data.detail || 'An unexpected error occurred.'}`);
        }
      } else if (error.request) {
        // The request was made but no response was received.
        toast.error('Network error. Please check your connection or that the server is running.');
      } else {
        // Something happened in setting up the request that triggered an error.
        toast.error('An unexpected client-side error occurred.');
      }
      
      // Clear the form fields after a failed login attempt for security
      setEmail('');
      setPassword('');
    } finally {
      setLoading(false);
    }
  };

  // The JSX for your component's UI
  return (
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center bg-gradient">
      {/* Toast container for displaying notifications */}
      <ToastContainer
        position="top-center"
        style={{ marginTop: '4rem', zIndex: 9999 }}
        autoClose={2000}
      />

      <Row className="w-100 shadow-lg rounded-4 overflow-hidden" style={{ width: '90%', maxWidth: '720px', background: '#fff' }}>
        {/* Left column with a welcome message and logo (desktop only) */}
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

        {/* Right column - the login form */}
        <Col md={6} xs={12} className="p-5">
          <h3 className="text-center mb-4">Login to Your Account</h3>
          <Form onSubmit={handleSubmit}>
            {/* Email input field */}
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

            {/* Password input field with a toggle to show/hide the password */}
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
                {/* Bootstrap Icon for the show/hide password toggle */}
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

            {/* Submit button to log in */}
            <Button type="submit" variant="primary" className="w-100 py-2 rounded-pill" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>

            {/* Link to the registration page */}
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
