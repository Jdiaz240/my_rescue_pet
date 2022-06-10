import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
  return (
    <footer id='footer-main' className='text-center text-white footer-style'>
      <section className='mb-2'>
        <a className='icon' href='https://github.com/Jdiaz240/my_rescue_pet'>
          <FontAwesomeIcon icon={faGithubSquare} className='icons'/>
        </a>
      </section>


      <div className='gitLink'>
        <a href='https://github.com/Jdiaz240'> <FontAwesomeIcon icon={faGithubSquare}/> Joshua Diaz </a>
        <a href='https://github.com/efrech'> <FontAwesomeIcon icon={faGithubSquare}/> Evelyn Frech </a>
        <a href='https://github.com/schaparro08'> <FontAwesomeIcon icon={faGithubSquare}/> Stephanie Chaparro-Roldan </a>
        <a href='https://github.com/EJTG1961'> <FontAwesomeIcon icon={faGithubSquare}/> Edwin Toro-Garcia </a>
      </div>
    </footer>
  );
}