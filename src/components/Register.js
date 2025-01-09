import React, { useState } from 'react';
import './Auth.css'; // Import the CSS file for styling
import { Container, Form, Button, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import { useNavigate } from 'react-router-dom'; // Import the hook for navigation

const Register = () => {
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

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if the user already exists
    if (existingUsers.find((user) => user.email === formData.email)) {
      setError('User already exists with this email');
      return;
    }
    
    // Save new user to localStorage
    existingUsers.push(formData);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Registration Successful!');
    setFormData({ name: '', email: '', password: '' }); // Clear the form after registration
    navigate('/login'); // Redirect to Login page after successful registration
  };

  return (
    <Container className="auth-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="auth-form">
            <h2>Register</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
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
                Register
              </Button>
            </Form>
            <p className="toggle-link" onClick={() => navigate('/login')}>
              Already have an account? Login
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
