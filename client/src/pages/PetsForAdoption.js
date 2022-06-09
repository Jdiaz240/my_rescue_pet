import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Row, Subtitle } from 'react-bootstrap';

import Auth from '../utils/auth';
// import { searchPets } from '../utils/API';
import { savePetForAdoptionIds, getSavedPetForAdoptionIds } from '../utils/localStorage';
import { SAVE_PET_FOR_ADOPTION } from '../utils/mutations';
import { GET_MY_PETS_FOR_ADOPTION } from '../utils/queries';
import { Link } from 'react-router-dom';

const PetsForAdoption = () => {
  // create state for holding our search field data
  const [petName, setPetName] = useState('');
  const [petDescription, setPetDescription] = useState('');
  const [petContact, setPetContact] = useState('');

  // create state to hold saved petId values
  const [savedPetForAdoptionIds, setSavedPetForAdoptionIds] = useState(getSavedPetForAdoptionIds());

  useEffect(() => {
    return () => savePetForAdoptionIds(savedPetForAdoptionIds);
  });

  //Use the Apollo useMutation() Hook to execute the SAVE_BOOK mutation in the handleSaveBook() function instead of the saveBook() function imported from the API file.
  const [savePetForAdoption, { error }] = useMutation(SAVE_PET_FOR_ADOPTION);
  const { loading, data } = useQuery(GET_MY_PETS_FOR_ADOPTION);
  const petsForAdoptionData = data?.myPetsForAdoption || [];

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!petName || !petDescription || !petContact) {
      return false;
    }

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
        return false;
    }

    try {
        const petToSave = {
            name: petName,
            description: petDescription,
            contact: petContact
        };

        const { data } = await savePetForAdoption({
            variables: { newPetForAdoption: { ...petToSave } },
        });

    } catch (err) {
        console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h4>Add pet information</h4>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={5}>
                <Form.Control
                  name='petName'
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Pet name'
                />
                 </Col>
                 <Col>
                <Form.Control
                  name='petDescription'
                  value={petDescription}
                  onChange={(e) => setPetDescription(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Pet description'
                />
              </Col>
              <Col>
                <Form.Control
                  name='petContact'
                  value={petContact}
                  onChange={(e) => setPetContact(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Email address'
                />
              </Col>
              <Col xs={10} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Save pet
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {petsForAdoptionData.length
            ? `Viewing ${petsForAdoptionData.length} results:`
            : 'Add a pet to begin'}
        </h2>
        <CardColumns>
          {petsForAdoptionData.map((animal) => {
            return (
              <Card key={animal.animalId} border='dark'>
                {animal.photo ? (
                  <Card.Img src={animal.photo} alt={`The cover for ${animal.name}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title bg='light'>{animal.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Breed: {animal.breed}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Pet type: {animal.type} </Card.Subtitle>
                  <Card.Text>
                    <ul>
                      <li>
                      {animal.status}
                      </li>
                      <li>
                      {animal.age}
                      </li>
                      <li>
                      {animal.age}
                      </li>
                    </ul>
                    </Card.Text>
                  {Auth.loggedIn() && (
                    <Link as={Link} to={'/petsforadoption/edit/'+animal._id}>
                        Edit this pet
                    </Link>
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

export default PetsForAdoption;
