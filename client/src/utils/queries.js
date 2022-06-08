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