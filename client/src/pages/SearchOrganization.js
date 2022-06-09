import React, { useState, useEffect } from 'react';

import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Row, Subtitle, ListGroup, ListGroupItem } from 'react-bootstrap';

// import Auth from '../utils/auth';
// import { searchPets } from '../utils/API';
// import { savePetIds, getSavedPetIds } from '../utils/localStorage';
// import { SAVE_PET } from '../utils/mutations';

const petfinder = require("@petfinder/petfinder-js");
const client = new petfinder.Client({ apiKey: "bTD0N7eDjIihKlcKmqHa3bzIe5O5ZxmUXInVN6YXqjmmWEiYrx", secret: "M7yzm8Hubm0dbTkHki8oVHa09SrIvvtlZaQWHsGT" });

const SearchOrganizations = () => {
  // create state for holding returned google api data
//   const [searched, setSearchedPets] = useState([]);;
  // create state for holding our search field data
 
  const [searchedOrganizations, setSearchedOrganizations] = useState([]);
  const [searchLocation, setSearchLocation] = useState('');

  // create state to hold saved petId values
//   const [searchedOrgs, setSearchedOrgs] = useState([]);

  // set up useEffect hook to save `savedPetIds` list to localStorage on component unmount
//   useEffect(() => {
//     return () => savePetIds(savedPetIds);
//   });

  //Use the Apollo useMutation() Hook to execute the SAVE_BOOK mutation in the handleSaveBook() function instead of the saveBook() function imported from the API file.
//   const [savePet, { error }] = useMutation(SAVE_PET);

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchLocation) {
      return false;
    }

    try {
      client.organization.search({
       location: searchLocation
      }).then(resp => {
        const orgs = resp.data.organizations;
        console.log(orgs);

        const organizationData = orgs.map((orgs) => ({
          orgId: orgs.id,
          orgName: orgs.name,
          orgEmail: orgs.email,
          orgPhone: orgs.phone,
          orgAddress: orgs.address.address1,
          orgCity: orgs.address.city,
          orgState: orgs.address.state,
          orgPost: orgs.address.postcode
        }));


        setSearchedOrganizations(organizationData);
        setSearchLocation('');
        
      });
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a book to our database
//   const handleSavePet = async (petId) => {
//     // find the book in `searchedPets` state by the matching id
//     const petToSave = searchedPets.find((pet) => pet.petId === petId);
//     console.log(petToSave);

//     // get token
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

//     try {
//       const { data } = await savePet({
//         variables: { newPet: { ...petToSave } },
//       });

//       // if book successfully saves to user's account, save book id to state
//       setSavedPetIds([...savedPetIds, petToSave.petId]);
//     } catch (err) {
//       console.error(err);
//     }
//   };

  return (
    <>
      <Container className="justify-content-md-center" >
        <>
          <h4 className='title-style'>Start your search and find your next best friend</h4>
          <p className='parragraph-style'>Find dogs, cats, birds, rabbits, etc. near you</p>
        </>
      </Container>
      <Jumbotron className='text-light bg-dark'>
        <Container>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col>
                <Form.Control
                  name='searchOrganization'
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
        <h2 className='searchTitle'>
    
        </h2>
        <CardColumns>
          {searchedOrganizations.map((orgs) => {
            return (
              <Card key={orgs.orgId} className='resultBody'>
                <Card.Body>
                  <Card.Title bg='light'>{orgs.orgName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Phone: {orgs.orgPhone}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Email: {orgs.orgEmail} </Card.Subtitle>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroupItem>Address: {orgs.orgAddress}, {orgs.orgCity}, {orgs.orgState}</ListGroupItem>
                      <ListGroupItem>Postalcode: {orgs.orgPost}</ListGroupItem>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchOrganizations;