import React from 'react';
import './App.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const firstName = 'Arij'; 

const App = () => {
  const greeting = firstName ? `Hello, ${firstName}!` : 'HELLO,there!';
  const showImage = !!firstName;

  return (
    <Container className="App">
      <h1>{greeting}</h1>
      {showImage && <Image />}
      <Card className="my-4">
        <Row className="g-0">
          {showImage && (
            <Col md={4}>
              <Image />
            </Col>
          )}
          <Col md={showImage ? 8 : 12}>
            <Card.Body>
              <Name />
              <Price />
              <Description />
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <p>Thank you for checking out our handmade necklaces!</p>
    </Container>
  );
};

export default App;


