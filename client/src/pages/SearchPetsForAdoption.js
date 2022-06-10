import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Container, Col, Form, Button, Card, CardColumns, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import Auth from '../utils/auth';
// import { searchPets } from '../utils/API';
import { savePetForAdoptionIds, getSavedPetForAdoptionIds } from '../utils/localStorage';
import { SAVE_PET_FOR_ADOPTION } from '../utils/mutations';
import { GET_ALL_PETS_FOR_ADOPTION } from '../utils/queries';
import { Link } from 'react-router-dom';
import PetPlaceholder from '../components/petPlaceholder';

const PetsForAdoption = () => {
  // create state for holding our search field data
  const [petName, setPetName] = useState('');
  const [petDescription, setPetDescription] = useState('');
  const [petContact, setPetContact] = useState('');
  const [petType, setPetType] = useState('');
  // create state to hold saved petId values
  const [savedPetForAdoptionIds, setSavedPetForAdoptionIds] = useState(getSavedPetForAdoptionIds());

  useEffect(() => {
    return () => savePetForAdoptionIds(savedPetForAdoptionIds);
  });

  //Use the Apollo useMutation() Hook to execute the SAVE_BOOK mutation in the handleSaveBook() function instead of the saveBook() function imported from the API file.
  const [savePetForAdoption, { error }] = useMutation(SAVE_PET_FOR_ADOPTION);
  const { loading, data } = useQuery(GET_ALL_PETS_FOR_ADOPTION);
  const petsForAdoptionData = data?.getAllPetsForAdoption || [];

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
      <Container className="justify-content-md-center" >
        <h6 className='title-style'>Here are some easy adoption pets</h6>
        <p className='parragraph-style'>These pets have been added to our database by current users, facilitating communication for adoption. </p>
      </Container>

      <Container>
        <h4>
          {petsForAdoptionData.length
            ? `We currently have ${petsForAdoptionData.length} pets available:`
            : 'Sorry, no pets for easy adoption for now'}
        </h4>
        <CardColumns>
          {petsForAdoptionData.map((pet) => {
            return (
              <Card key={pet.petId} border='dark'>
                {pet.photo ? (
                  <Card.Img src={pet.photo} alt={`The cover for ${pet.name}`} variant='top' />
                ) : <PetPlaceholder />}
                <Card.Body>
                  <Card.Title className='text-center' bg='light'>{pet.name}</Card.Title>
                  <ListGroup variant="flush" className='text-center'>
                  <Card.Subtitle className="mb-2 text-muted">Breed: {pet.breed}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Pet type: {pet.type} </Card.Subtitle>
                  <ListGroupItem>Age: {pet.age}</ListGroupItem>
                      <ListGroupItem>Description: {pet.description}</ListGroupItem>
                      <ListGroupItem>Contact: {pet.contact}</ListGroupItem>
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

