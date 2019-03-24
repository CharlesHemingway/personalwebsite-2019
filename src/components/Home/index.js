import React from 'react';
import { Jumbotron, Button, Container} from 'reactstrap';


import '../../assets/styles/common.css';
import me from '../../assets/images/me.jpg';


import Navigation from '../Navigation';


const HomePage = (props) => {
  return (
    <div>
      <Jumbotron fluid className="layout">
        <Container fluid className="container">
   			   <Jumbotron className="inner-layout">
       <Navigation/>
       <hr className="my-2" />
          <img src={me} alt="me" className="image hvr-bounce-in" />
          <h1 className="display-4"> Hi, my name is Ossiel</h1>
          <p className="lead">Freelance Web Designer • React Developer • Tutor • Digital Nomad • Journalist </p>
          <hr className="my-2" />
          <p className="lead">
            <Button className="button hvr-bounce-in" href="https://github.com/ossielromero" color="primary" target="_blank" >Github</Button> {' '}
            <Button className="button hvr-bounce-in" href="https://www.linkedin.com/in/ossiel/" color="primary" target="_blank">LinkedIn</Button> {' '}
            <Button className="button hvr-bounce-in" href="https://www.instagram.com/ossieltr/" color="primary" target="_blank">Instagram</Button> {' '}
          </p>
       </Jumbotron>     
        </Container>
      </Jumbotron>
    </div>
  );
};


export default HomePage;