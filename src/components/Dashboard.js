import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EventSection from '../components/EventSection'; // Import EventSection component
import './Dashboard.css';

// Import event images
import image1 from '../components/images/image1.jpg';
import image2 from '../components/images/image2.jpg';
import image3 from '../components/images/image3.jpg';
import pastImage1 from '../components/images/image4.jpg';
import pastImage2 from '../components/images/image5.jpg';
import pastImage3 from '../components/images/image6.jpg';

const Dashboard = () => {
  const upcomingEvents = [
    {
      image: image1,
      title: 'Upcoming Event 1',
      description: 'Details about Upcoming Event 1.',
    },
    {
      image: image2,
      title: 'Upcoming Event 2',
      description: 'Details about Upcoming Event 2.',
    },
    {
      image: image3,
      title: 'Upcoming Event 3',
      description: 'Details about Upcoming Event 3.',
    },
  ];

  const pastEvents = [
    {
      image: pastImage1,
      title: 'Past Event 1',
      description: 'Details about Past Event 1.',
    },
    {
      image: pastImage2,
      title: 'Past Event 2',
      description: 'Details about Past Event 2.',
    },
    {
      image: pastImage3,
      title: 'Past Event 3.',
      description: 'Details about Past Event 3.',
    },
  ];

  return (
    <div>
      {/* Fixed Button */}
      <button className="create-hackathon-btn">Create Hackathon</button>

      <Container fluid className="container">
        <Row noGutters>
          {/* Sidebar */}
          <Col xs={12} md={3} className="sidebar">
            <h3>Dashboard</h3>
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li>Help</li>
            </ul>
          </Col>

          {/* Main content */}
          <Col xs={12} md={9} className="content">
            <div className="welcome-message">
              <h3>Welcome to Level Supermind</h3>
              <p>Clear Mind Better Performance.</p>
            </div>

            {/* Upcoming Events Section */}
            <EventSection
              title="Upcoming Events"
              events={upcomingEvents}
              redirectPath="/upcoming-events"
            />

            {/* Past Events Section */}
            <EventSection
              title="Past Events"
              events={pastEvents}
              redirectPath="/past-events"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
