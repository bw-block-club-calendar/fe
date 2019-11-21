import "./App.css";

import Button from "@material-ui/core/Button";

import React, {useState} from "react";
import { Route } from "react-router-dom";

//import Card from './Components/Card';
import Nav from "./Components/Nav";
import Register from "./Components/Register";
import Login from "./Components/Login";
// import Events from './Components/Events';
import Profile from "./Components/Profile";
import CreateProfile from "./Components/CreateProfile";
// import AddEvent from "./Components/AddEvent";
import PrivateRoute from "./Components/AddEvent";

function App() {
const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
        <EventContext.provider>
<ProfileContext.provider>
      <header className="App-header">
  <Route render={ (props) => <Nav {...props} /> } />

        <Route exact path="/login" render={ (props) => <Login {...props} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> } />
        <Route exact path="/register" render={ (props) => <Register {...props} /> } />

        <Button variant="contained" color="primary">
          Hello Event Calendar
        </Button>
      </header>
     
      <Route exact path="/profile"  render={ (props) => <Profile {...props} /> } />
      <Route exact path="/createprofile"  render={ (props) => <CreateProfile {...props} /> } />
       {/* <Route exact path="/events" render={ () => <Events {...props} /> } /> */}
      {/* <PrivateRoute exact path="/addevent" render={ () => <AddEvent {...props} /> } /> */}
</ProfileContext.provider>
      </EventContext.provider>
    </div>
  );
}

export default App;
