import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import coffeHouse from '../assets/menu-davide-cantelli-jpkfc5_d-DI-unsplash.jpg';

const SignIn = () => {
  const [remember, setRemember] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!username.trim()) newErrors.username = 'Username is required.';
    if (!password) newErrors.password = 'Password is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        setSuccess(true);
        setSubmitting(false);
        setTimeout(() => navigate('/'), 1000); // Redirect to home after 1s
      }, 1000); // Simulate async SignIn
    }
  };

  return (
    <section
      className='SectionFill position-relative d-flex align-items-center pt-5'
      style={{
        backgroundImage: `url(${coffeHouse})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100dvh',
      }}
    >
      <div className="Inner-overlay position-fixed"></div>
      <Container className='section-spacing position-relative z-1'>
        <Row>
          <Col md={6} lg={5} className='mx-auto'>
            <div className="bg-dark text-white rounded-5 p-4 py-xl-5 shadow-lg">
              <h1 className="fw-bold mb-2 text-center">Sign In</h1>
              <p className="text-center mb-4">Welcome Back</p>
              {success && <Alert variant="success" className="text-center">Sign In successful! Redirecting...</Alert>}
              <Form autoComplete="off" onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3" controlId="SignInUsername">
                  <Form.Label className="fw-semibold">Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    autoFocus
                    autoComplete="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="SignInPassword">
                  <Form.Label className="fw-semibold">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Form.Check
                    type="checkbox"
                    id="rememberMe"
                    label="Remember me"
                    checked={remember}
                    onChange={e => setRemember(e.target.checked)}
                    className="text-secondary"
                  />
                  <a href="#" className="text-tertiary text-decoration-underline">Forgot Password?</a>
                </div>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 fw-semibold mb-3 rounded-pill"
                  disabled={submitting}
                >
                  {submitting ? 'Signing In...' : 'Sign In'}
                </Button>
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-grow-1 border-bottom border-color-darkBlueGray"></div>
                  <span className="mx-1 text-white">or</span>
                  <div className="flex-grow-1 border-bottom border-color-darkBlueGray"></div>
                </div>
                <Button
                  variant="outline-light"
                  className="w-100 d-flex align-items-center justify-content-center gap-2 rounded-pill"
                  type="button"
                  onClick={() => window.alert('Google SignIn not implemented')}
                  disabled={submitting}
                >
                  <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M44.5 20H24V28.5H36.5C35.1 32.6 31.1 35.5 26.5 35.5C20.7 35.5 16 30.8 16 25C16 19.2 20.7 14.5 26.5 14.5C29.1 14.5 31.4 15.4 33.2 16.9L39.1 11C35.7 7.9 31.3 6 26.5 6C15.8 6 7 14.8 7 25C7 35.2 15.8 44 26.5 44C36.2 44 44.5 35.7 44.5 25C44.5 23.7 44.4 22.4 44.2 21.1L44.5 20Z" fill="#4285F4"/><path d="M6.3 14.7L13.1 19.6C15.1 15.7 20.2 12.5 26.5 12.5C29.1 12.5 31.4 13.4 33.2 14.9L39.1 9C35.7 5.9 31.3 4 26.5 4C17.2 4 9.1 10.7 6.3 14.7Z" fill="#34A853"/><path d="M26.5 44C31.3 44 35.7 42.1 39.1 39L33.2 33.1C31.4 34.6 29.1 35.5 26.5 35.5C20.7 35.5 16 30.8 16 25C16 19.2 20.7 14.5 26.5 14.5C29.1 14.5 31.4 15.4 33.2 16.9L39.1 11C35.7 5.9 31.3 4 26.5 4C17.2 4 9.1 10.7 6.3 14.7Z" fill="#FBBC05"/><path d="M44.5 20H24V28.5H36.5C35.1 32.6 31.1 35.5 26.5 35.5C20.7 35.5 16 30.8 16 25C16 19.2 20.7 14.5 26.5 14.5C29.1 14.5 31.4 15.4 33.2 16.9L39.1 11C35.7 7.9 31.3 6 26.5 6C15.8 6 7 14.8 7 25C7 35.2 15.8 44 26.5 44C36.2 44 44.5 35.7 44.5 25C44.5 23.7 44.4 22.4 44.2 21.1L44.5 20Z" fill="#EA4335"/></g></svg>
                  SignIn with Google
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignIn; 