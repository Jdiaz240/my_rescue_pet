import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Container, Col, Form, Button, Card, CardColumns, Row, ListGroup, ListGroupItem} from 'react-bootstrap';

import Auth from '../utils/auth';
// import { searchPets } from '../utils/API';
import { savePetForAdoptionIds, getSavedPetForAdoptionIds } from '../utils/localStorage';
import { SAVE_PET_FOR_ADOPTION } from '../utils/mutations';
import { GET_MY_PETS_FOR_ADOPTION } from '../utils/queries';
import { Link } from 'react-router-dom';
import PetPlaceholder from '../components/petPlaceholder';

const PetsForAdoption = () => {
  // create state for holding our search field data
  const [petName, setPetName] = useState('');
  const [petDescription, setPetDescription] = useState('');
  const [petContact, setPetContact] = useState('');
  const [petType, setPetType] = useState('');
  const [petPhone, setPetPhone] = useState('');
  const [petAddress, setPetAddress] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petBreed, setPetBreed] = useState('');
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
        contact: petContact,
        type: petType,
        phone: petPhone,
        address: petAddress,
        age: petAge,
        breed: petBreed

      };
      console.log(petsForAdoptionData);

      const { data } = await savePetForAdoption({
        variables: { newPetForAdoption: { ...petToSave } },
      });

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Container>
        <h2>Add pet information</h2>
        <Form onSubmit={handleFormSubmit} className='bg-light text-dark'>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Pet Name</Form.Label>
              <Form.Control
                name='petName'
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                type='text'
                size='lg'
                placeholder='Pet name'
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Pet Type</Form.Label>
              <Form.Control
                name='petType'
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                type='text'
                size='lg'
                placeholder='Pet Type'
              ></Form.Control>
            </Form.Group>
          </Row>
          <Form.Group className='mb-3'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              name='petDescription'
              value={petDescription}
              onChange={(e) => setPetDescription(e.target.value)}
              type='text'
              size='lg'
              placeholder='Pet Description'
            ></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Age</Form.Label>
            <Form.Control
              name='petAge'
              value={petAge}
              onChange={(e) => setPetAge(e.target.value)}
              type='text'
              size='lg'
              placeholder='Is your pet "Young" or "Adult"?'
            ></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Breed</Form.Label>
            <Form.Control
              name='petBreed'
              value={petBreed}
              onChange={(e) => setPetBreed(e.target.value)}
              type='text'
              size='lg'
              placeholder='Enter pet breed, if mixed, please type "mixed"'
            ></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name='petContact'
              value={petContact}
              onChange={(e) => setPetContact(e.target.value)}
              type='text'
              size='lg'
              placeholder='Contact information'
            ></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name='petPhone'
              value={petPhone}
              onChange={(e) => setPetPhone(e.target.value)}
              type='text'
              size='lg'
              placeholder='Enter phone number to receive inquiries about your pet'
            ></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>ZipCode</Form.Label>
            <Form.Control
              name='petAddress'
              value={petAddress}
              onChange={(e) => setPetAddress(e.target.value)}
              type='text'
              size='lg'
              placeholder='Enter your ZipCode to narrow down results'
            ></Form.Control>
          </Form.Group>
          <Col xs={10} md={4}>
            <Button type='submit' variant='success' size='lg'>
              Save pet for adoption
            </Button>
          </Col>
        </Form>
      </Container>

      <Container>
        <h2>
          {petsForAdoptionData.length
            ? `Viewing ${petsForAdoptionData.length} saved pets:`
            : 'Add a pet to begin'}
        </h2>
        <CardColumns>
          {petsForAdoptionData.map((pet) => {
            return (
              <Card key={pet.petId} border='dark'>
                {pet.photo ? (
                  <Card.Img src={pet.photo} alt={`The cover for ${pet.name}`} variant='top' />
                ) : <PetPlaceholder />}
                <Card.Body>
                  <ListGroup variant="flush" className='text-center'>
                  <Card.Title className="mb-2 text-muted"> {pet.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Breed: {pet.breed}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Pet type: {pet.type} </Card.Subtitle>
                    <ListGroupItem>Age: {pet.age}</ListGroupItem>
                    <ListGroupItem>Description: {pet.description}</ListGroupItem>
                    <ListGroupItem>Contact: {pet.contact}</ListGroupItem>
                    <ListGroupItem>Phone: {pet.phone}</ListGroupItem>
                    <ListGroupItem>ZipCode: {pet.Address}</ListGroupItem>
                    {Auth.loggedIn() && (
                      <Link className='btn btn-success' as={Link} to={'/petsforadoption/edit/' + pet._id}>
                        Edit this pet
                      </Link>
                    )}
                  </ListGroup>
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
