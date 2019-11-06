import React from 'react';
import {Link} from 'react-router-dom'
import Project from '../components/Project'
import workborde from '../favicon-workborde.ico'
import robo from '../favicon-robo.ico'

const completedProjects = [
  {
    title: 'Workborde',
    image: workborde,
    link: 'https://workbor.de',
    description: 'Cloud based free form note board productivity tool',
    details: ['https://workbor.de', 'User authentication', 'Static Reactjs front end client', 'Node.js (Loopback) REST API server', 'MongoDB database storage']
  },
  {
    title: 'RoboReader',
    image: robo,
    link: 'https://roboreader.jaon.ca',
    description: 'Basic machine learning concepts demonstration web app',
    details: ['https://roboreader.jaon.ca', 'Static Reactjs front end client', 'Python (Flask) backend API server', 'Python deep learning model using Keras and Tensorflow']
  }
];

class Projects extends React.Component {
  state = {mobile: window.innerWidth < 970};
  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  handleResize = (e) => {
    this.setState({mobile: window.innerWidth < 970})
  }
  render() {
    return (
      <div className='content'>
        <div className='title' style={{fontSize: '2em'}}>Projects</div>
        <hr style={{width: '30%'}} />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {completedProjects.map((project) => <Project key={project.title} {...project} mobile={this.state.mobile}/>)}
        </div>
        <Link className='link' to='/contact'>
          <div className='button'>Contact</div>
        </Link>
      </div>
    )
  }
};
export default Projects