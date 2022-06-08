import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Button } from 'react-bootstrap';
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
            <Jumbotron fluid className='text-light bg-dark'>
                <Container>
                    <h4>Start your rescue pet search here.</h4>
                    <p>Find hundreds of pets, shelters or quick pet adoptions in your area.</p>
                </Container>
            </Jumbotron>
            <Link to="/search">
                <PetIcon />
                Find your next best friend
            </Link>
            <Link to="/search">
                <ShelterIcon />
                Find a shelter near by
            </Link>
        </>
    );
};

export default Home;
