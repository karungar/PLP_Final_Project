// src/pages/ProfilePage.jsx
import React, { useState, useEffect } from 'react';
import { Container, Card, Spinner, Alert, Button, Form } from 'react-bootstrap';
import { authAPI, utilAPI } from '../services/api';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await authAPI.getProfile();
        setUser(response.data);
        setFormData(response.data);
      } catch (err) {
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authAPI.updateProfile(formData);
      setUser(response.data);
      setEditMode(false);
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>User Profile</Card.Title>
          
          {editMode ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name || ''}
                  onChange={handleChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email || ''}
                  onChange={handleChange}
                  disabled
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country || ''}
                  onChange={handleChange}
                />
              </Form.Group>
              
              <Button variant="primary" type="submit" className="me-2">
                Save Changes
              </Button>
              <Button variant="secondary" onClick={() => setEditMode(false)}>
                Cancel
              </Button>
            </Form>
          ) : (
            <>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Country:</strong> {user.country || 'Not specified'}</p>
              <p><strong>Role:</strong> {user.role}</p>
              
              <Button variant="primary" onClick={() => setEditMode(true)}>
                Edit Profile
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfilePage;