import React, {useContext} from "react";
import {EventContext} from "../util/Hooks"

export default function EventCard(props) {

 
      return (

        <div>
            <img src={props.event.image} alt="venue" />
<h3>{props.event.title}</h3>
<p>{props.event.description}</p>
      <p>{props.event.start} - {props.event.end}</p>
      
      <p>External Link: {props.event.ext_link}</p>
      <p>Venue: {props.event.location.name} </p>
      <p>Address:</p>
      <p>{props.event.location.name}</p>
      <p>{props.event.location.name} {props.event.location.name}</p>
      <p>{props.event.location.name}, {props.event.location.name}</p>
      <p>{props.event.location.name}</p>
<button>Going</button>
<button> Not Going</button>



    </div>
      )
    }