import React from 'react';
import {Link} from 'react-router-dom'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import ContactItem from "../components/Contact";
const links = [
  {icon: faEnvelope, href: 'mailto:jasnxl@gmail.com', text: 'jasnxl@gmail.com'},
  {icon: faGithub, href: 'https://github.com/JaonL', text: 'JaonL'},
  {icon: faLinkedin, href: 'https://www.linkedin.com/in/jason-l-3aab8686', text: 'Jason Lu'}
]
const Contact = () => {
  return (
    <div className='content'>
      <div className='title' style={{fontSize: '2em'}}>Contact</div>
      <hr/>
      <div style={{margin: 10, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        {links.map((item) => <ContactItem key={item.href} {...item}/>)}
      </div>
      <p>Javascript, C++, Java, Python, C, C#, Golang</p>
      <Link className='link' to='/'>
        <div className='button'>Home</div>
      </Link>
    </div>
  )
};
export default Contact