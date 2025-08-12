// ForgotPassword.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send request to backend to trigger password reset email
      const res = await axios.post('https://your-api.com/api/forgot-password/', { email });

      toast.success('Password reset link sent to your email.', { autoClose: 2000 });
    } catch (err) {
      toast.error('Failed to send reset email. Please try again.', { autoClose: 2000 });
      console.log(err);
    }
  };

  return (
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <ToastContainer position="top-center" autoClose={3000} />

      <Row className="shadow-lg rounded-4 bg-white p-4 w-100" style={{ maxWidth: '500px' }}>
        <Col xs={12}>
          <h3 className="text-center mb-4">Forgot Password</h3>
          <p className="text-muted text-center">
            Enter your email address and we’ll send you a link to reset your password.
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100 rounded-pill">
              Send Reset Link
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
