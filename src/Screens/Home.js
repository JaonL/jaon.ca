import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='content'>
      <div className='title'>JASON LU</div>
      <hr/>
      <div className='subText'>Full Stack Web Developer</div>
      <div>Vancouver, Canada</div>
      <Link className='link' to='/projects'>
        <div className='button'>Projects</div>
      </Link>
    </div>
  )
};
export default Home