
import React, { useContext } from "react";
import {EventContext} from "../util/Hooks"
import EventCard from "./EventCard"



const Events = () => {
  const { eventData, setEventData } = useContext(EventContext);
  console.log(eventData, "EVTD to be mapped")
    return (
    <div> 
        {eventData.map(event => (
          
          <EventCard key={event.event_id} event={event}/>
        )
          
          ) }    
    </div>

    );

};


export default Events;