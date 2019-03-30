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
       I am a freelancer and I have been dividing my time between react development and mass social communication, I love to travel, eat, research, and instigate conversation. I am also keen towards video editing, graphic design, social media strategy, SEO, App development and Gatsby web design. I am a stern believer that all information should be free, open source technology, altruistic action, and that web design and services should be available to people of all income brackets and social strata. Depending on my timezone I am almost always available. I don't like to stick around in one country too long so if you want to have a cup of coffee it may or may not be possible depending on the direction of the wind.
       </p>
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