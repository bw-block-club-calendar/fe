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

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({


    container: {
      border: '3px solid red',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    textField: {
      
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 150,
    },
    button: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
  }));

const Events =({values, errors, touched, status}) => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();
    useEffect (()=> {status && setUsers (users => [...users, status])}, [status]);

    return (
 
        <div className={classes.container}>
        <div>
        <h2>Please Register for an Event!!</h2>
          <TextField
            id="standard-full-width"
            label="Email"
            style={{ margin: 8 }}
            name="email"
            placeholder="What is your email?"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
          id="standard-full-width"
          label="Address"
          style={{ margin: 8 }}
          name="streetAddress"
          placeholder="What is your street address?"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
        id="standard-full-width"
        label="City"
        style={{ margin: 8 }}
        name="city"
        placeholder="What city?"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />

        <TextField
        id="standard-full-width"
        label="Zipcode"
        style={{ margin: 8 }}
        name="zipcode"
        placeholder="What is your zipcode?"
        fullWidth
        margin="normal"
        InputLabelProps={{
            shrink: true,
        }}
    />

    <TextField
    id="standard-full-width"
    label="Business"
    style={{ margin: 8 }}
    name="businessName"
    placeholder="What is your business name?"
    fullWidth
    margin="normal"
    InputLabelProps={{
      shrink: true,
    }}
  />
  <Button variant="contained" color="primary" className={classes.button}>Register</Button>
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