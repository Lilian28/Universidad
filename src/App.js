import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Denuncias from './Denuncias';
import Noticias from './Noticias';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {' JSL'}
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/denuncias">Denuncias</Nav.Link>
              <Nav.Link href="/noticias">Noticias</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/denuncias" component={Denuncias} />
            <Route path="/noticias" component={Noticias} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
