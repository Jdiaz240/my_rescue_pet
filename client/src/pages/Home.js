import React from 'react';
import { Link } from 'react-router-dom';
import PetIcon from '../components/petIcon'
import ShelterIcon from '../components/shelterIcon';
import { Jumbotron, Container, Button, Carousel, Row, Col } from "react-bootstrap";

// import { searchPets } from '../utils/API';
// import { savePetIds, getSavedPetIds } from '../utils/localStorage';
// import { SAVE_PET } from '../utils/mutations';

// const petfinder = require("@petfinder/petfinder-js");
// const client = new petfinder.Client({apiKey: "bTD0N7eDjIihKlcKmqHa3bzIe5O5ZxmUXInVN6YXqjmmWEiYrx", secret: "M7yzm8Hubm0dbTkHki8oVHa09SrIvvtlZaQWHsGT"});

const Home = () => {
  return (
    <>
      <Container className="justify-content-md-center" >
        <>
          <h4 className='title-style'>Start your search here</h4>
          <p className='parragraph-style'>Find hundreds of pets, shelters or quick pet adoptions in your area.</p>
        </>
      </Container>
      <Row className="justify-content-md-center">
        <Col sm={3}>
          <Link to="/search">
            <PetIcon />
            <p>Find your next best friend</p>
          </Link>
        </Col>
        <Col sm={3}>
          <Link to="/organizations">
            <ShelterIcon />
            <p>Find a shelter near by</p>
          </Link>
        </Col>
        <Col sm={3}>
          <Link to="/search">
            <PetIcon />
            <p>Find your next best friend</p>
          </Link>
        </Col>
      </Row>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="justify-content-md-center" >
        <>
          <h4 className='title-style'>Start your search here</h4>
          <p className='parragraph-style'>Find hundreds of pets, shelters or quick pet adoptions in your area.</p>
        </>
      </Container>
      <Row className="justify-content-md-center">
        <Col sm={2}>
          <Link to="/search">
            <PetIcon />
            <p>Find your next best friend</p>
          </Link>
        </Col>
        <Col sm={2}>
          <Link to="/search">
            <ShelterIcon />
            <p>Find a shelter near by</p>
          </Link>
        </Col>
        <Col sm={2}>
          <Link to="/search">
            <PetIcon />
            <p>Find your next best friend</p>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Home;
