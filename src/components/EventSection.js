import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './EventSection.css'; 

const EventSection = ({ title, events, redirectPath }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(redirectPath);
  };

  return (
    <div className="event-section">
      <h3>{title}</h3>
      <Row>
        {events.map((event, index) => (
          <Col key={index} xs={12} md={4} className="mb-4">
            <Card className="clickable-card" onClick={handleCardClick}>
              <Card.Img variant="top" src={event.image} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EventSection;
