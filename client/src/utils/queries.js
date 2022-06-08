import { gql } from '@apollo/client';


export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      SavedPets {
        authors
        description  
        petId
        image
        link
        title
      }
    }
  }
`;