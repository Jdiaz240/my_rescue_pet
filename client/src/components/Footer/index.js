import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
  return (
    <MDBFooter id='footer-main'className='text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
        
       <a className='icon' href='https://github.com/Jdiaz240/my_rescue_pet'>
       <FontAwesomeIcon icon={faGithubSquare} className='icons' />
       </a>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Created By: Evelyn Frech, Joshua Diaz, Edwin Toro-Garcia, and Stephanie Chaparro-Roldan
      </div>
    </MDBFooter>
  );
}