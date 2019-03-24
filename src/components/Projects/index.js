import React from 'react';
import { Jumbotron, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

import Navigation from '../Navigation';

import '../../assets/styles/common.css';

import g from '../../assets/images/getgee.png';
import prep from '../../assets/images/preparalibre.png';
import rg from '../../assets/images/refugeesglobal.png';
import mp from '../../assets/images/malditoperro.png';




const ProjectsPage = () => {

  return(
  	<div>
  <Jumbotron fluid className="layout">
        <Container fluid className="container">
  <Jumbotron className="inner-layout">
           <Navigation/>
           
               <hr className="my-2" />
        <Row>
          <Col>
            <Card body outline color="secondary">
              <CardTitle className="cardtitle">Getgee</CardTitle>
               <CardText><img src={g} alt="getgee" className="image-3" />
          </CardText>
              <CardText>G is an open source graph database app. G is a free and open data commons. It uses a universal database and trust network to return control of our data to the users who created it while still allowing for mass collaboration.</CardText>
              <Button className="button hvr-bounce-in" color="primary" target="_blank" href="https://www.getgee.xyz/">Getgee</Button>
            </Card>
          </Col>
          <Col>
            <Card body outline color="secondary">
              <CardTitle className="cardtitle">RefugeesGlobal</CardTitle>
            <CardText><img src={rg} alt="refugeesglobal" className="image-3" /></CardText>
          
              <CardText>The Refugees Global Application will allow migrants, refugees, volunteers and aid workers to contact offical NGOs or working groups in their region or worldwide in order to organize mass collaboration efforts and strigmergicly get aid.</CardText>
              <Button className="button hvr-bounce-in" href="https://www.refugees.global/" target="_blank" color="primary">RefugeesGlobal</Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card body outline color="secondary">
              <CardTitle className="cardtitle">Preparalibre</CardTitle>
              <CardText><img src={prep} alt="preparalibre" className="image-3" /></CardText>
          
              <CardText>A Learning Course And Tutoring Application written for South American audience where they will be able to redestribute skills and knowledge through user made lesson plans and videos.</CardText>
              <Button className="button hvr-bounce-in" color="primary" target="_blank" href="https://www.getgee.xyz/">Preparalibre</Button>
            </Card>
          </Col>
          <Col>
            <Card body outline color="secondary">
              <CardTitle className="cardtitle">Malditoperro</CardTitle>
              <CardText><img src={mp} alt="malditoperro" className="image-3" />
          </CardText>
              <CardText>Malditoperro is a news and information distribution application written for a latam audience with the goal of promoting open source journalism and research. This application is written using Gatsby, Reactjs, and Netify</CardText>
              <Button className="button hvr-bounce-in" href="https://www.refugees.global/" target="_blank" color="primary">Malditoperro.com</Button>
            </Card>
          </Col>
        </Row>
       
      </Jumbotron>

           
        </Container>
      </Jumbotron>
    </div>
  );
}


export default ProjectsPage;