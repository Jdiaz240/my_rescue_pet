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
  mutation SavedPets($newPet: InputPet!) {
    SavedPets(newPet: $newPet) {
      _id
      username
      email
      SavedPets {
          petId
          authors
          image
          link
          title
          description
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
  mutation removePetId($petId: ID!) {
    removePetId(petId: $petId) {
      _id
      username
      email
      SavedPets {
          authors
          description
          petId
          image
          title
          link
      }
    }
  }
`;