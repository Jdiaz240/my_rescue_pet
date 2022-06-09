import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';
import PetIcon from '../components/petIcon'
import ShelterIcon from '../components/shelterIcon';

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
                    <Link to="/search">
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
        </>
    );
};

export default Home;
