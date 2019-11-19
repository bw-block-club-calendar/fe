import './App.css';

import Button from '@material-ui/core/Button';

import React from 'react';
import {Route} from "react-router-dom";

//import Card from './Components/Card';
import Nav from "./Components/Nav";
import Register from "./Components/Register";
import Login from "./Components/Login";
// import Events from './Components/Events';
// import Profile from "./Components/Profile";
// import AddEvent from "./Components/AddEvent";
// import PrivateRoute from "./Components/AddEvent";



function App() {
  return (
    <div className="App">
    
  
    

    <header className="App-header">
      <Nav />

      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

      <Button variant="contained" color="primary">
      Hello Event Calendar
      
    </Button>
      </header>  
          {/* <Route exact path="/events" component={Events} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute exact path="/addevent" component={AddEvent} /> */}
    </div>
  );
}

export default App;
