import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Home from './Screens/Home'
import Projects from './Screens/Projects'
import Contact from './Screens/Contact'

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/projects', name: 'Projects', Component: Projects },
  { path: '/contact', name: 'Contact', Component: Contact },
];

function App() {
  return (
    <Router>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={800}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
    </Router>
  );
}

export default App;
