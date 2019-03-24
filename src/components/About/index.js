import React from 'react';
import { Jumbotron, Container, ListGroup, ListGroupItem  } from 'reactstrap';

import Navigation from '../Navigation';
import '../../assets/styles/common.css';

const AboutPage = () => {

  return(
  	<div>
  <Jumbotron fluid className="layout">
        <Container fluid className="container">
      <Jumbotron className="inner-layout">
               <Navigation/>
               <hr className="my-2" />
			  <div>
     <h1 >

        About Me
      </h1>
       <p className="lead"> 
       My name is Ossiel Romero 
       and I am a web designer and react developer
        with more than half a decade of experience with 
        video editing, graphic design, social media strategy, SEO, react development and Gatsby web design. I can provide clients with custom and modern designs at an affordable rate for clients of all income brackets. I’m able to make own custom designs and templates that end up as pixel-perfect websites or Apps.  </p>
      <h3>Skills</h3>
      <ListGroup>

        <ListGroupItem tag="a" href="https://reactjs.org" target="_blank" action>
          Reactjs
        </ListGroupItem>

        <ListGroupItem tag="a" href="http://gatsbyjs.org/" target="_blank" action>
          Gatsby
        </ListGroupItem>

        <ListGroupItem tag="a" href="" target="_blank" action>
          Redux
        </ListGroupItem>

        <ListGroupItem tag="a" href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" action>
          CSS
        </ListGroupItem>

        <ListGroupItem tag="a" href="https://www.javascript.com/" target="_blank" action>
          Javascript
        </ListGroupItem>

        <ListGroupItem tag="a" href="https://www.w3.org/html/" target="_blank" action>
          HTML
        </ListGroupItem>

        <ListGroupItem tag="a" href="https://nodejs.org/en/" target="_blank" action>
          Node.js
        </ListGroupItem>

      </ListGroup>
    </div>
    </Jumbotron>
        </Container>
      </Jumbotron>
    </div>
  );
}


export default AboutPage;