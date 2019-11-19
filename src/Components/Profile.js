/*
const profiles =({}) => {
    const [profiles, setProfiles] = useState([]);


    return (
    <Route exact path="/" component={Nav}/>
    <Route exact path="/Events" component={Events} />
    <Route exact path="/Profile" component={profile} />

    );
};

export default profiles

*/


//Private Route

import { Redirect, Route } from "react-router-dom";

import React from "react";

export default function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props => {
          if (localStorage.getItem("token")) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/Login" />;
          }
        }}
      />
    );
   }