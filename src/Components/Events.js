
import React, { useContext } from "react";

import EventCard from "./Card"



const Events = () => {
  const { eventData, setEventData } = useContext(eventContext);
    return (
    <div> 
        { eventData.map(event => {
          <EventCard />
        }
          
          ) }    
    </div>

    );

};


export default Events;