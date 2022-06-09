import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<<<<<<< HEAD
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { Nav } from 'react-bootstrap';
=======
import { faFacebook, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
>>>>>>> d8e590b2d36ac38c4f9507ad17f781ae98296c94



export default function Footer() {
  return (
    <footer id='footer-main'className='text-center text-white footer-style'>
        <section className='mb-2'>
       <a className='icon' href='https://github.com/Jdiaz240/my_rescue_pet'>
       <FontAwesomeIcon icon={faGithubSquare} className='icons' />Repository gitLink
       </a>
       <a className='icon' href='https://github.com/Jdiaz240/my_rescue_pet'>
       <FontAwesomeIcon icon={faFacebook} className='icons' />
       </a>
        </section>
<<<<<<< HEAD
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <a className='gitLink' href='https://github.com/Jdiaz240'>Joshua Diaz </a>
      <a className='gitLink' href='https://github.com/efrech'>Evelyn Frech </a>
      <a className='gitLink' href='https://github.com/schaparro08'>Stephanie Chaparro-Roldan </a>
      <a className='gitLink' href='https://github.com/EJTG1961'>Edwin Toro-Garcia </a>
=======
      <div className='text-center p-2'>
        Created By: Evelyn Frech, Joshua Diaz, Edwin Toro-Garcia, and Stephanie Chaparro-Roldan ♥
>>>>>>> d8e590b2d36ac38c4f9507ad17f781ae98296c94
      </div>
    </footer>
  );
}