import React, { useState } from 'react';
import './Auth.css'; // Import the CSS file for styling
import { Container, Form, Button, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import { useNavigate } from 'react-router-dom'; // Import the hook for navigation

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Registration
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login Logic
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = existingUsers.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (user) {
        alert(`Welcome back, ${user.name}!`);
        navigate('/dashboard'); // Redirect to Dashboard after successful login
      } else {
        setError('Invalid email or password.');
      }
    } else {
      // Registration Logic
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      existingUsers.push(formData);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      alert('Registration Successful!');
      setFormData({ name: '', email: '', password: '' }); // Clear the form after registration
      navigate('/login'); // Redirect to Login page after successful registration
    }
  };

  return (
    <Container className="auth-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="auth-form">
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <Form onSubmit={handleSubmit}>
              {!isLogin && (
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
              )}
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                {isLogin ? 'Login' : 'Register'}
              </Button>
            </Form>
            <p className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
