import React from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import { useMutation } from '@apollo/client';


function FuturePets() {

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>My Future Pets</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
          <Card.Link href="#">Saved Pet 1</Card.Link>
          </ListGroupItem>
          <ListGroupItem>
          <Card.Link href="#">Saved Pet 2</Card.Link>
          </ListGroupItem>
          <ListGroupItem>
          <Card.Link href="#">Saved Pet 1</Card.Link>
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    )
}

export default FuturePets;