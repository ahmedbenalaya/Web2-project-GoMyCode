import React from 'react';
import { NavLink, Route,  Switch } from 'react-router-dom';
import Contact from './Contact'
import List from './List'
import NavBar from './pages/NavBar'
const App = () => {
  return(
  <div>
    <NavBar />
      <Switch>
          <Route path="/" exact component={Contact}/>
          <Route path="/list" exact component={List}/>
          <Route path="/"  component={()=><div>ERREUR 404</div>}/>

      </Switch>
  </div>
);
}
export default App;