import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { Nav } from 'react-bootstrap';



export default function Footer() {
  return (
    <MDBFooter id='footer-main'className='text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
        
       <a className='icon' href='https://github.com/Jdiaz240/my_rescue_pet'>
       <FontAwesomeIcon icon={faGithubSquare} className='icons' />Repository gitLink
       </a>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <a className='gitLink' href='https://github.com/Jdiaz240'>Joshua Diaz </a>
      <a className='gitLink' href='https://github.com/efrech'>Evelyn Frech </a>
      <a className='gitLink' href='https://github.com/schaparro08'>Stephanie Chaparro-Roldan </a>
      <a className='gitLink' href='https://github.com/EJTG1961'>Edwin Toro-Garcia </a>
      </div>
    </MDBFooter>
  );
}