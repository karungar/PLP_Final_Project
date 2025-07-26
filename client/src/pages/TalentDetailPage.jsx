// src/pages/TalentDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Spinner, Alert, ListGroup, Badge } from 'react-bootstrap';
import { talentAPI } from '../services/api';

const TalentDetailPage = () => {
  const { id } = useParams();
  const [talent, setTalent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTalent = async () => {
      try {
         const { data } = await talentAPI.getById(id);
        setTalent(data);
      } catch (err) {
        setError('Failed to load talent profile');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTalent();
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
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

  if (!talent) {
    return (
      <Container className="mt-4">
        <Alert variant="warning">Talent profile not found</Alert>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <div className="d-flex align-items-center mb-4">
            <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" 
                 style={{ width: '80px', height: '80px' }}>
              <span className="fs-4">{talent.user?.name?.charAt(0) || 'T'}</span>
            </div>
            <div className="ms-3">
              <Card.Title>{talent.user?.name || 'Unnamed Talent'}</Card.Title>
              <Card.Subtitle className="text-muted">
                {talent.title} • {talent.location}
              </Card.Subtitle>
            </div>
          </div>
          
          <Card.Text className="mb-4">
            {talent.bio || 'No bio provided.'}
          </Card.Text>
          
          <div className="mb-4">
            <h5>Skills</h5>
            <div className="d-flex flex-wrap gap-2">
              {talent.skills.map((skill, index) => (
                <Badge key={index} bg="primary" pill>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <h5>Experience</h5>
            <p>{talent.experience || 'No experience information provided.'}</p>
          </div>
          
          <div className="mb-4">
            <h5>Education</h5>
            <p>{talent.education || 'No education information provided.'}</p>
          </div>
          
          <div className="d-flex gap-3">
            {talent.linkedin && (
              <Button variant="outline-primary" href={talent.linkedin} target="_blank">
                LinkedIn
              </Button>
            )}
            {talent.github && (
              <Button variant="outline-dark" href={talent.github} target="_blank">
                GitHub
              </Button>
            )}
            {talent.portfolio && (
              <Button variant="outline-info" href={talent.portfolio} target="_blank">
                Portfolio
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TalentDetailPage;