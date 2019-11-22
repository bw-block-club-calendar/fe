import "./App.css";

import Button from "@material-ui/core/Button";

import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

//import Card from './Components/Card';
import Nav from "./Components/Nav";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Events from './Components/Events';
import Profile from "./Components/Profile";
import CreateProfile from "./Components/CreateProfile";
import AddEvent from "./Components/AddEvent";
// import PrivateRoute from "./Components/AddEvent";
import { EventContext, ProfileContext } from "./util/Hooks";
import AxiosWithAuth from "./util/AxiosWithAuth";
import EditEvent from "./Components/EditEvent";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [eventData, setEventData] = useState([]);
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    AxiosWithAuth()
      .get('/api/event/')
      .then(res => {
        console.log("addevent", res);
        setEventData(res.data)

      })
      .catch(error => {
        console.log("ERROR", error);
        alert(error);
      })
  }, []);

  useEffect(() => {
  AxiosWithAuth()
  .get('/api/profile/')
  .then(res => {
      console.log("profileCall", res);
      setProfileData(res.data)
      
  })
    .catch(error => {
      console.log("ERROR", error);
      alert(error);
  }
}, []);
  return (
    <div className="App">
      <EventContext.Provider value={{ eventData, setEventData }}>
        <ProfileContext.Provider value={{ profileData, setProfileData }}>
          <header className="App-header">
            <Route render={(props) => <Nav {...props} />} />

            <Route exact path="/login" render={(props) => <Login {...props} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            <Route exact path="/register" render={(props) => <Register {...props} />} />

            <Button variant="contained" color="primary">
              Hello Event Calendar
        </Button>
          </header>

          <Route exact path="/profile" render={(props) => <Profile {...props} />} />
          <Route exact path="/createprofile" render={(props) => <CreateProfile {...props} />} />
          <Route exact path="/events" render={(props) => <Events {...props} />} />
          <Route exact path="/addevent" render={(props) => <AddEvent {...props} />} />
          <Route exact path="/editevent" render={(props) => <EditEvent {...props} />} />
        </ProfileContext.Provider>
      </EventContext.Provider>
    </div>
  )
};


export default App;
