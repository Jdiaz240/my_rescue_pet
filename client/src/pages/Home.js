import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Button, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faCircleInfo, faInfo, faPaw, faSearchLocation, faSync, faSyncAlt, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

// import { searchPets } from '../utils/API';
// import { savePetIds, getSavedPetIds } from '../utils/localStorage';
// import { SAVE_PET } from '../utils/mutations';

// const petfinder = require("@petfinder/petfinder-js");
// const client = new petfinder.Client({apiKey: "bTD0N7eDjIihKlcKmqHa3bzIe5O5ZxmUXInVN6YXqjmmWEiYrx", secret: "M7yzm8Hubm0dbTkHki8oVHa09SrIvvtlZaQWHsGT"});

const Home = () => {
  return (
    <>
    <Container className="justify-content-md-center" >
          <h2 className='title-style'>Did you know?</h2>
      </Container>
      <Jumbotron>
        <Row>
        <Card className='col-sm text-center card-title'>
          <Card.Header className='bg-warning text-dark'>920,000 shelter animals are euthanized each year</Card.Header>
          <Card.Body>
            <Card.Title>
            <FontAwesomeIcon icon={faTriangleExclamation} fade className='icon-style-home'/>
            </Card.Title>
            <Card.Text>Each year, approximately 920,000 shelter animals are euthanized (390,000 dogs and 530,000 cats). The number of dogs and cats euthanized in U.S. shelters annually has declined from approximately 2.6 million in 2011.  This decline can be partially explained by an increase in the percentage of animals adopted and an increase in the number of stray animals successfully returned to their owners.</Card.Text>
          </Card.Body>
        </Card>
        <Card className='col-sm text-center card-title'>
          <Card.Header className='bg-warning text-dark'>810,000 animals returned to their owners</Card.Header>
          <Card.Body>
            <Card.Title>
            <FontAwesomeIcon icon={faSyncAlt} spin className='icon-style-home'/>
            </Card.Title>
            <Card.Text>Approximately 4.1 million shelter animals are adopted each year (2 million dogs and 2.1 million cats). About 810,000 animals who enter shelters as strays are returned to their owners. Of those, 710,000 are dogs and 100,000 are cats</Card.Text>
          </Card.Body>
        </Card>
        </Row>
        
      </Jumbotron>
      <Container className="justify-content-md-center" >
        <>
          <h4 className='title-style'>Start your search here</h4>
          <p className='parragraph-style'>Find hundreds of pets, shelters or quick pet adoptions in your area with our pet search platform</p>
        </>
      </Container>
      <Row className="justify-content-center">
        <Col sm={2}>
          <Link to="/search">
          <FontAwesomeIcon icon={faPaw} className='home-search-icon'/>
            <p className="a-size">Find your next best friend</p>
          </Link>
        </Col>
        <Col sm={2}>
          <Link to="/organizations">
          <FontAwesomeIcon icon={faSearchLocation} className='home-search-icon'/>
            <p className="a-size">Find a near by shelter</p>
          </Link>
        </Col>
        <Col sm={2}>
          <Link to="/SearchPetsForAdoption">
          <FontAwesomeIcon icon={faCat} className='home-search-icon'/>
            <p className="a-size">Browse quick adoption pets</p>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Home;
