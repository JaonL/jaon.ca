import React from 'react';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
  return (
    <div className='content'>
      <div className='title' style={{fontSize: '2em'}}>Contact</div>
      <hr style={{width: '30%'}} />
      <div style={{margin: 10, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        <div>
          <FontAwesomeIcon icon={faEnvelope}/><a className='link' style={{color: 'gray'}} href='mailto:jasnxl@gmail.com'>jasnxl@gmail.com</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faGithub}/><a className='link' style={{color: 'gray'}} href='https://github.com/JaonL'>JaonL</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faLinkedin}/><a className='link' style={{color: 'gray'}} href='https://www.linkedin.com/in/jason-l-3aab8686/'>Jason Lu</a>
        </div>
      </div>
      <Link className='link' to='/'>
        <div className='button'>Home</div>
      </Link>
    </div>
  )
};
export default Contact