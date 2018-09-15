import React from 'react';
import { Button, Grid, Col, code, Row,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  Nav,
  PageHeader,
  Container
} from 'react-bootstrap';
import Panel from './auth/Panel';


export default class Navigation extends React.Component {

  render() {
    return (<div><Navbar  inverse staticTop >
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#home">INDEX</a>
                </Navbar.Brand>
              </Navbar.Header>
            </Navbar>
            <PageHeader>
                INDEX PAGE
            </PageHeader>
            <div><Panel/></div>
            </div>
          );
  }
}
