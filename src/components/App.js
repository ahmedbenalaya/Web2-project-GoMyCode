import React from 'react';

import { NavLink, Route,  Switch } from 'react-router-dom';
import Contact from './Contact'
import List from './List'
import * as ReactBootstrap from 'react-bootstrap'
const App = () => {
  return(
  <div> 
    <ReactBootstrap.Navbar bg="light" expand="sm">
  <ReactBootstrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.NavLink to="/" exact activeClassName='active'>Contact</ReactBootstrap.NavLink>
      <ReactBootstrap.NavLink to="/list" exact activeClassName='active' >Todo List</ReactBootstrap.NavLink>
    </ReactBootstrap.Nav>
    <ReactBootstrap.Form inline>
      <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactBootstrap.Button variant="outline-success">Search</ReactBootstrap.Button>
    </ReactBootstrap.Form>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
    
      <Switch>
          <Route path="/" exact component={Contact}/>
          <Route path="/list" exact component={List}/>
          <Route path="/"  component={()=><div>ERREUR 404</div>}/>

      </Switch>
  </div>
);
}
export default App;