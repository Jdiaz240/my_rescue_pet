import { gql } from '@apollo/client';


export const GET_ME = gql`
  query me {
    me {
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

export const GET_MY_PETS_FOR_ADOPTION = gql`
  query myPetsForAdoption {
    myPetsForAdoption {
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

export const GET_PET_FOR_ADOPTION = gql`
  query petForAdoption($petForAdoptionId: ID!) {
    petForAdoption(petForAdoptionId: $petForAdoptionId) {
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

export const GET_ALL_PETS_FOR_ADOPTION = gql`
  query getAllPetsForAdoption {
    getAllPetsForAdoption {
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