import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithubSquare } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
  return (
    <footer id='footer-main' className='text-center text-white footer-style'>
      <section className='mb-2'>
        <a className='icon' href='https://github.com/Jdiaz240/my_rescue_pet'>
          <FontAwesomeIcon icon={faGithubSquare} className='icons' /> 
        </a>
        <a className='icon' href='https://github.com/Jdiaz240/my_rescue_pet'>
          <FontAwesomeIcon icon={faFacebook} className='icons' />
        </a>
      </section>


      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <a className='gitLink' href='https://github.com/Jdiaz240'>Joshua Diaz </a>
        <a className='gitLink' href='https://github.com/efrech'>Evelyn Frech </a>
        <a className='gitLink' href='https://github.com/schaparro08'>Stephanie Chaparro-Roldan </a>
        <a className='gitLink' href='https://github.com/EJTG1961'>Edwin Toro-Garcia </a>
      </div>
    </footer>
  );
}