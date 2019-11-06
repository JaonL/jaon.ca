import React from "react";

const Project = ({image, link, title, description, details, mobile}) => {
  return (
    <div className='project'>
      <div className='projectHeader'>
        <img alt='' style={{margin: '10px'}} src={image}/>
        <hr className='verticalHR'/>
        <a className='link' target='_blank' rel='noopener noreferrer' href={link}>{title}</a>
        {mobile ? <div/> : <div>{'{ ' + description + ' }'}</div>}
      </div>
      {mobile ? <div className='mobileDescription'>{'{ ' + description + ' }'}</div> : <div/>}
      <div className='details'>{details.map((detail) => <li key={detail}>{detail}</li>)}</div>
    </div>
  )
};
export default Project