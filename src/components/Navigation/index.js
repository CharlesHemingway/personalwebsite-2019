import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'; 



import dab from '../../assets/images/dab-panda.png';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar" color="faded" light>
          <NavbarBrand href="/" className="mr-auto brand hvr-bounce-in">
          <img src={dab} alt="dab-panda" className="image-2 " />
          

          Ossiel Romero</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2 hvr-bounce-in" />
          
          <Collapse isOpen={!this.state.collapsed} className="collapse" navbar>
            <Nav navbar >
              <NavItem >
              <Link to={ROUTES.HOME} className="navlink hvr-bounce-in">Home</Link>
              </NavItem>
              <NavItem>
               <Link to={ROUTES.ABOUT} className="navlink hvr-bounce-in">About</Link>
              </NavItem>
              <NavItem>
               <Link to={ROUTES.PROJECTS} className="navlink hvr-bounce-in">Projects</Link>
              </NavItem>
              <NavItem>
               <Link to={ROUTES.CONTACT} className="navlink hvr-bounce-in">Contact</Link>            
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}



