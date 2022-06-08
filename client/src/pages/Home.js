import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Row } from 'react-bootstrap';

import Auth from '../utils/auth';
// import { searchPets } from '../utils/API';
import { savePetIds, getSavedPetIds } from '../utils/localStorage';
import { SAVE_PET } from '../utils/mutations';
import {SearchPets} from './SearchPets';

const petfinder = require("@petfinder/petfinder-js");
const client = new petfinder.Client({apiKey: "bTD0N7eDjIihKlcKmqHa3bzIe5O5ZxmUXInVN6YXqjmmWEiYrx", secret: "M7yzm8Hubm0dbTkHki8oVHa09SrIvvtlZaQWHsGT"});

const  LocalPets= () => {
    // const [searchedPets, setSearchedPets] = useState([]);
    // // create state for holding our search field data
    // const [searchType, setSearchType] = useState('');
    // const [searchLocation, setSearchLocation] = useState('');
  
    // // create state to hold saved petId values
    // const [savedPetIds, setSavedPetIds] = useState(getSavedPetIds());
  
    // // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
    // // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    // useEffect(() => {
    //   return () => savePetIds(savedPetIds);
    // });
  
    // //Use the Apollo useMutation() Hook to execute the SAVE_BOOK mutation in the handleSaveBook() function instead of the saveBook() function imported from the API file.
    // const [savePet, { error }] = useMutation(SAVE_PET);
  
    // // create method to search for books and set state on form submit
    // const handleFormSubmit = async (event) => {
    //   event.preventDefault();
  
    //   if (!searchType || !searchLocation) {
    //     return false;
    //   }
  
    //   try {
    //     client.animal.search({
    //       type: searchType,
    //       location: searchLocation,
    //       limit: 25,
    //     }).then(resp => {
    //      const animals = resp.data.animals;
    //      console.log(animals);
  

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
            <p1> Hello This is a</p1>
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
                <Button onclick="SearchPets()" onClick={() => console.log("Click")} type='submit' variant='success' size='lg'>
                  Submit Search 
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Jumbotron>
      </>
       );
    };

    export default LocalPets;