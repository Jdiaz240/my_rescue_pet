import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Row } from 'react-bootstrap';

import Auth from '../utils/auth';
// import { searchPets } from '../utils/API';
import { savePetIds, getSavedPetIds } from '../utils/localStorage';
import { SAVE_PET } from '../utils/mutations';

const petfinder = require("@petfinder/petfinder-js");
const client = new petfinder.Client({apiKey: "bTD0N7eDjIihKlcKmqHa3bzIe5O5ZxmUXInVN6YXqjmmWEiYrx", secret: "M7yzm8Hubm0dbTkHki8oVHa09SrIvvtlZaQWHsGT"});

const SearchPets = () => {
  // create state for holding returned google api data
  const [searchedPets, setSearchedPets] = useState([]);
  // create state for holding our search field data
  const [searchType, setSearchType] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  // create state to hold saved petId values
  const [savedPetIds, setSavedPetIds] = useState(getSavedPetIds());

  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => savePetIds(savedPetIds);
  });

  //Use the Apollo useMutation() Hook to execute the SAVE_BOOK mutation in the handleSaveBook() function instead of the saveBook() function imported from the API file.
  const [savePet, { error }] = useMutation(SAVE_PET);

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchType || !searchLocation) {
      return false;
    }

    try {
      client.animal.search({
        type: searchType,
        location: searchLocation,
        limit: 25,
      }).then(resp => {
       const animals = resp.data.animals;
       console.log(animals);

// response.body example:

// age: "Young"
// breeds: {primary: 'Pit Bull Terrier', secondary: 'Mixed Breed', mixed: true, unknown: false}
 //checkbox for mixed or purebred
// contact: {email: null, phone: '(602) 506-2765', address: {postcode}}}
// gender: "Male"
// id: 55818720
// name: "MODELO"
// primary_photo_cropped: {medium}
// published_at: "2022-06-06T03:18:48+0000"
// size: "Large"
// species: "Dog"
// status: "adoptable"
// -- status_changed_at: "2022-06-06T03:18:48+0000"
// url: "https://www.petfinder.com/dog/modelo-55818720/az//mcacc-west-valley-anphoeniximal-care-center-az101/?referrer_id=a7470fa8-2969-44b7-871d-1a91742d448c"
// [[Prototype]]: Object

// iterate over results and create array of hashes (objects) that match model attributes

      const animalData = animals.map((animal) => ({
        petId: animal.id,
        breed: animal.breeds.primary,
        type: animal.type,
        name: animal.name,
        contact: animal.contact ? animal.contact.email : null,
        phone: animal.contact ? animal.contact.phone : null,
        address: animal.contact.postcode,
        gender: animal.gender,
        status: animal.status,
        description: animal.description,
        photo: animal.primary_photo_cropped ? animal.primary_photo_cropped.small : null,
      }));


        setSearchedPets(animalData);
        setSearchType('');
        setSearchLocation('');
      });      
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a book to our database
  const handleSavePet = async (petId) => {
    // find the book in `searchedPets` state by the matching id
    const bookToSave = searchedPets.find((pet) => pet.petId === petId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await savePet({
        variables: { newPet: { ...petToSave } },
      });

      // if book successfully saves to user's account, save book id to state
      setSavedPetIds([...savedPetIds, petToSave.petId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h4>Find your next best friend!</h4>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={5}>
                <Form.Control
                  name='searchType'
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a pet type'
                />
                 </Col>
                 <Col>
                <Form.Control
                  name='searchLocation'
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search in a location (city, state, postal code)'
                />
              </Col>
              <Col xs={10} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedPets.length
            ? `Viewing ${searchedPets.length} results:`
            : 'Search for a book to begin'}
        </h2>
        <CardColumns>
          {searchedPets.map((animal) => {
            return (
              <Card key={animal.animalId} border='dark'>
                {animal.photo ? (
                  <Card.Img src={animal.photo} alt={`The cover for ${animal.name}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{animal.name}</Card.Title>
                  <p className='small'>Breed: {animal.breed}</p>
                  <Card.Text>{animal.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedPetIds?.some((savedPetId) => savedPetId === animal.petId)}
                      className='btn-block btn-info'
                      onClick={() => handleSavePet(animal.petId)}>
                      {savedPetIds?.some((savedPetId) => savedPetId === animal.petId)
                        ? 'This book has already been saved!'
                        : 'Save this Book!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchPets;
