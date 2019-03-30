import React from 'react';
import { Jumbotron, Button, Container} from 'reactstrap';


import '../../assets/styles/common.css';
import me from '../../assets/images/me.jpg';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';
import instagram from '../../assets/images/instagram.png';


import Navigation from '../Navigation';


const HomePage = (props) => {
  return (
    <div>
      <Jumbotron fluid className="layout">
        <Container fluid className="container">
   			   <Jumbotron className="inner-layout">
       <Navigation/>
          <img src={me} alt="me" className="image hvr-bounce-in" />
          <h1 className="display-4"> Hi, my name is Ossiel</h1>
          <p className="lead">Freelance Web Designer • React Developer • Tutor • Digital Nomad • Investigator </p>
          <hr className="my-2" />
          <p className="lead">
            <Button className="button hvr-bounce-in" href="https://github.com/ossielromero" color="primary" target="_blank" >
          <img src={github} alt="github" className="image-2 hvr-bounce-in" /></Button> {' '}
            <Button className="button hvr-bounce-in" href="https://www.linkedin.com/in/ossiel/" color="primary" target="_blank">
            <img src={linkedin} alt="linkedin" className="image-2 hvr-bounce-in" /></Button> {' '}
            <Button className="button hvr-bounce-in" href="https://www.instagram.com/ossieltr/" color="primary" target="_blank">
            <img src={instagram} alt="instagram" className="image-2 hvr-bounce-in" /></Button> {' '}
          </p>
       </Jumbotron>     
        </Container>
      </Jumbotron>
    </div>
  );
};


export default HomePage;