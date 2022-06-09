import React from 'react';
import './App.css';
import './pages/SearchPets.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/Nav/index.css'

import Home from './pages/Home';
import SearchPets from './pages/SearchPets';
import SavedPets from './pages/SavedPets';
import PetsForAdoption from './pages/PetsForAdoption';
import EditPetForAdoption from './pages/EditPetForAdoption';
import Navbar from './components/Nav';
import Footer from './components/Footer/index';
import Header from './components/Header';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
        <Navbar />
        <Header />
        <Routes>
        
          <Route 
            path='/' 
            element={<Home />} 
          />
          <Route 
            path='/search' 
            element={<SearchPets />} 
          />
          <Route 
            path='/saved' 
            element={<SavedPets />} 
          />
          <Route 
            path='/petsforadoption' 
            element={<PetsForAdoption />} 
          />
          <Route 
            path='/petsforadoption/edit/:petForAdoptionId' 
            element={<EditPetForAdoption />} 
          />
          
          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
        </Routes>
        <Footer />
    </Router>
    </ApolloProvider>
  );
}

export default App;
