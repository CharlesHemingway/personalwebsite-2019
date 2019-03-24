import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
                <NavLink href="/" className="hvr-bounce-in">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/" className="hvr-bounce-in">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects/" className="hvr-bounce-in">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact/" className="hvr-bounce-in">Contact</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
          <script type='text/javascript' src='https://ko-fi.com/widgets/widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Buy Me a Coffee', '#ff3374', 'X8X3SF64');kofiwidget2.draw();</script>
        </Navbar>
      </div>
    );
  }
}



