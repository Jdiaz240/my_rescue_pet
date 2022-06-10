import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, Row, Subtitle } from 'react-bootstrap';
import { useParams } from "react-router-dom";

import Auth from '../utils/auth';
import { UPDATE_PET_FOR_ADOPTION } from '../utils/mutations';
import { GET_PET_FOR_ADOPTION } from '../utils/queries';
import { Link } from 'react-router-dom';

const EditPetForAdoption = () => {
  // create state for holding our search field data
  const params = useParams();

  const [updatePetForAdoption, { error }] = useMutation(UPDATE_PET_FOR_ADOPTION);
  const { loading, data } = useQuery(GET_PET_FOR_ADOPTION, { variables: { petForAdoptionId: params.petForAdoptionId } });
  const petForAdoptionData = data?.petForAdoption || [];

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // if (!petName || !petDescription) {
    //   return false;
    // }

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const petToSave = {
        petForAdoptionId: petForAdoptionData._id,
        name: event.target.elements.petName.value,
        description: event.target.elements.petDescription.value,
        type: event.target.elements.petType.value,
        contact: event.target.elements.petContact.value,
        phone: event.target.elements.petPhone.value,
        address: event.target.elements.petAddress.value,
        age: event.target.elements.petAge.value,
        breed: event.target.elements.petBreed.value,
      };

      const { data } = await updatePetForAdoption({
        variables: { ...petToSave },
      });

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Container>
        <h4> Editing {petForAdoptionData.name}</h4>
        <Form onSubmit={handleFormSubmit} className='bg-light text-dark'>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Pet Name</Form.Label>
              <Form.Control
                name='petName'
                defaultValue={petForAdoptionData.name}
                type='text'
                size='lg'
                placeholder='Pet name'
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Pet type</Form.Label>
              <Form.Control
                name='petType'
                type='text'
                size='lg'
                defaultValue={petForAdoptionData.type}
              ></Form.Control>
            </Form.Group>
            </Row>
            <Form.Group className='mb-3'>
              <Form.Label>Pet Description</Form.Label>
              <Form.Control
                name='petDescription'
                type='text'
                size='lg'
                defaultValue={petForAdoptionData.description}
              ></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
            <Form.Label>Age</Form.Label>
            <Form.Control
              name='petAge'
              type='text'
              size='lg'
              defaultValue={petForAdoptionData.age}
            ></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Breed</Form.Label>
            <Form.Control
              name='petBreed'
              type='text'
              size='lg'
              defaultValue={petForAdoptionData.breed}
            ></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name='petContact'
              type='text'
              size='lg'
              defaultValue={petForAdoptionData.contact}
            ></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name='petPhone'
              type='text'
              size='lg'
              defaultValue={petForAdoptionData.phone}
            ></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>ZipCode</Form.Label>
            <Form.Control
              name='petAddress'
              type='text'
              size='lg'
              defaultValue={petForAdoptionData.address}
            ></Form.Control>
          </Form.Group>
            <Col xs={10} md={4}>
              <Button type='submit' variant='success' size='lg'>
                Update pet
              </Button>
            </Col>
        </Form>
      </Container>
    </>
  );
};

export default EditPetForAdoption;
