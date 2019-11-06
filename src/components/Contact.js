import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const ContactItem = ({icon, href, text}) => {
  return  (
    <div style={{margin: '5px 0'}}>
      <FontAwesomeIcon icon={icon}/><a className='link' style={{color: 'gray'}} href={href}>{text}</a>
    </div>
  )
};
export default ContactItem