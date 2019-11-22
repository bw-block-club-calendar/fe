import React, {useContext} from "react";
import {Link} from "react-router-dom"

import AxiosWithAuth from "../util/AxiosWithAuth";

export default function ProfileEventCard(props) {
  const handleDelete = () => {
    props.setFetching(true)
    const deleteItem = {
      id: props.prof.id,
      user_id: props.prof.user_id
    }
    console.log('from delete', deleteItem)
    AxiosWithAuth()
      .delete(`/api/devLib/${props.prof.id}`)      
      .then(res=>{
        props.setFetching(false)
        console.log('in axios delete item', deleteItem)
        console.log("delete response", res)
      })
      .catch(err=> console.log('this is from the catch,', deleteItem, err))
  }

 
      return (

        <div>
            <img src={props.prof.image} alt="venue" />
<h3>{props.prof.title}</h3>
<p>{props.prof.description}</p>
      <p>{props.prof.start} - {props.prof.end}</p>
      
      <p>External Link: {props.prof.ext_link}</p>
      <p>Venue: {props.prof.location.name} </p>
      <p>Address:</p>
      <p>{props.prof.location.name}</p>
      <p>{props.prof.location.name} {props.prof.location.name}</p>
      <p>{props.prof.location.name}, {props.prof.location.name}</p>
      <p>{props.prof.location.name}</p>

<button><Link to="/editevent">Edit Event</Link></button>
<button onClick={handleDelete}>Cancel Event</button>



    </div>
      )
    }