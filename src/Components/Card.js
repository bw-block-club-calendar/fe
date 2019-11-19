/*
Card from events to map object component from event


        <ul key={index}>
            <li>{user.email}</li>
            <li>{user.streetAddress}</li>
            <li>{user.city}</li>
            <li>{user.zipcode}</li>
            <li>{user.businessName}</li>

        </ul>
   
*/

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function EventCard(props) {

    const { data } = props;
      return (
    <Card>
      <Card className="card-body">
      <CardContent>Email: {data.name}</CardContent>
      <CardContent>Street Address: {data.streetAddress}</CardContent>
      <CardContent>City: {data.city}</CardContent>
      <CardContent>Zipcode: {data.zipcode}</CardContent>
      <CardContent>Business Name: {data.businessName}</CardContent>
      <CardContent></CardContent>
      </Card>
      </Card>
      )
    }