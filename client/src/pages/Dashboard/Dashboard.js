import React from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import FuturePets from '../../components/Dashboard/FuturePets';
// import ClickedPets from '../../components/Dashboard/ClickedPets';



const Dashboard = () => {
  
  
    return (
        <div className="container">
            <h1> Name of User </h1>
        <FuturePets />
        {/* <ClickedPets /> */}
        
      </div>
    )
  };
  
  export default Dashboard;