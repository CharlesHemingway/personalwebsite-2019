import React, { Fragment } from 'react';
import { 
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';

import HomePage from '../Home';
import AboutPage from '../About';
import ProjectsPage from '../Projects';
import ContactPage from '../Contact';

import * as ROUTES from '../../constants/routes';

// const App = (props) => {
const App = () => (
  <Router>
    <Fragment>
     <div>
       <Route exact path={ROUTES.HOME} component={HomePage} />
       <Route exact path={ROUTES.ABOUT} component={AboutPage} />      
       <Route exact path={ROUTES.PROJECTS} component={ProjectsPage} />     
       <Route exact path={ROUTES.CONTACT} component={ContactPage} />     
       
       </div>
    </Fragment>
  </Router>
);
  


export default App;
