import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { GET_ME } from "../utils/queries";
import { REMOVE_PET } from "../utils/mutations";
import { removePetId } from '../utils/localStorage'

const SavedPets = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removePetId, {error}] = useMutation(REMOVE_PET)
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
      removePetId(petId);
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
      <Jumbotron fluid id='jumbo1' className='text-light'>
        <Container>
          <h1 >Viewing saved pets!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedPets.length
            ? `Viewing ${userData.savedPets.length} saved ${userData.savedPets.length === 1 ? 'pet' : 'pets'}:`
            : 'You have no saved pets!'}
        </h2>
        <CardColumns>
          {userData.savedPets.map((pet) => {
            return (
              <Card id='space1' className="saved-cards" key={pet.petId} border='dark'>
                {pet.photo ? <Card.Img src={pet.photo} alt={`The cover for ${pet.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title >{pet.title}</Card.Title>
                  <p className='small'>User: {pet.users}</p>
                  <Card.Text>{pet.description}</Card.Text>
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
