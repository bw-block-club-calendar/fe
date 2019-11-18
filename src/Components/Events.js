/*

    * eventTitle - String
    * eventAddress - Address
    * geolocation - Coordinates
    * eventDescription - String
    * eventStart - DateTime
    * eventEnd - DateTime
    * externalLink (Facebook listing for example. *Optional) - URL
    * 
    *
 */

import React, { useEffect, useState } from "react";

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

const Events =({values, errors, touched, status}) => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();
    useEffect (()=> {status && setUsers (users => [...users, status])}, [status]);

    return (

        
        <div className={classes.container}>
        <div>
          <TextField
            id="standard-full-width"
            label="Label"
            style={{ margin: 8 }}
            name="email"
            placeholder="What is your email?"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 8 }}
          name="streetAddress"
          placeholder="What is your street address?"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
        id="standard-full-width"
        label="Label"
        style={{ margin: 8 }}
        name="city"
        placeholder="What city?"
        helperText="Full width!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
      id="standard-full-width"
      label="Label"
      style={{ margin: 8 }}
      name="zipcode"
      placeholder="What is your zipcode?"
      helperText="Full width!"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
    />

    <TextField
    id="standard-full-width"
    label="Label"
    style={{ margin: 8 }}
    name="businessName"
    placeholder="What is your business name?"
    helperText="Full width!"
    fullWidth
    margin="normal"
    InputLabelProps={{
      shrink: true,
    }}
  />
          </div>
          {users.map( (user, index) => (
            <ul key={index}>
            <li>{user.email}</li>
            <li>{user.streetAddress}</li>
            <li>{user.city}</li>
            <li>{user.zipcode}</li>
            <li>{user.businessName}</li>

            </ul>
        ))}
          </div>

    );

};


export default Events;