import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { GET_ME } from "../utils/queries";
import { RemovePetId } from '../utils/localStorage';
import { REMOVE_PET } from "../utils/mutations";


const SavedPets = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removePet, { error }] = useMutation(REMOVE_PET)
  const userData = data?.me || {};


  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeletePet = async (petId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removePet({
        variables: { petId }
      });

      // upon success, remove book's id from localStorage
      RemovePetId(petId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Container className="justify-content-md-center" >
        <h6 className='title-style'>Are you ready to adopt a pet?</h6>
      </Container>
      <Container>
        <h2>
          {userData.savedPets.length
            ? `You have saved ${userData.savedPets.length} ${userData.savedPets.length === 1 ? 'pet' : 'pets'}`
            : 'You have no saved pets!'}
        </h2>
        <CardColumns>
          {userData.savedPets.map((pet) => {
            return (
              <Card id='space1' className="saved-cards" key={pet.petId} border='dark'>
                {pet.photo ? <Card.Img src={pet.photo} alt={`The cover for ${pet.name}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title className='text-center'>{pet.name}</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush" className='text-center'>
                      <Card.Subtitle className="mb-2 text-muted">Pet Type: {pet.type}</Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">Breed: {pet.breed}</Card.Subtitle>
                      <ListGroupItem>Age: {pet.age}</ListGroupItem>
                      <ListGroupItem>Description: {pet.description}</ListGroupItem>
                    </ListGroup>
                  </Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeletePet(pet.petId)}>
                    Delete this Pet!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedPets;
