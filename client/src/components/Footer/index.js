import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithubSquare } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
  return (
    <footer id='footer-main'className='text-center text-white footer-style'>
        <section className='mb-2'>
       <a className='icon' href='https://github.com/Jdiaz240/my_rescue_pet'>
       <FontAwesomeIcon icon={faGithubSquare} className='icons' />
       </a>
       <a className='icon' href='https://github.com/Jdiaz240/my_rescue_pet'>
       <FontAwesomeIcon icon={faFacebook} className='icons' />
       </a>
        </section>
      <div className='text-center p-2'>
        Created By: Evelyn Frech, Joshua Diaz, Edwin Toro-Garcia, and Stephanie Chaparro-Roldan ♥
      </div>
    </footer>
  );
}