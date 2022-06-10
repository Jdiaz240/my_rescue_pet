import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_PET = gql`
  mutation savePet($newPet: InputPet!) {
    savePet(newPet: $newPet) {
      _id
      username
      email
      savedPets {
          petId
          name
          photo
          status
          breed
          description
          age
          contact
          phone
          gender
          address
          type
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_PET = gql`
  mutation removePet($petId: ID!) {
    removePet(petId: $petId) {
      _id
      username
      email
      savedPets {
        petId
        name
        photo
        status
        breed
        description
        age
        contact
        phone
        gender
        address
        type
      }
    }
  }
`;

export const SAVE_PET_FOR_ADOPTION = gql`
  mutation savePetForAdoption($newPetForAdoption: InputPetForAdoption!) {
    savePetForAdoption(newPetForAdoption: $newPetForAdoption) {
      name
      photo
      status
      breed
      description
      age
      contact
      phone
      gender
      address
      type
    }
  }
`;

export const UPDATE_PET_FOR_ADOPTION = gql`
  mutation updatePetForAdoption($petForAdoptionId: ID!, $name: String, $description: String, $type: String, $contact: String, $phone: String, $address: String, $age: String, $breed: String) {
    updatePetForAdoption(petForAdoptionId: $petForAdoptionId, name: $name, description: $description, type: $type, contact: $contact, phone: $phone, address: $address, age: $age, breed: $breed) {
      _id
      name
      photo
      status
      breed
      description
      age
      contact
      phone
      gender
      address
      type
      user
    }
  }
`;