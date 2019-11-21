import react, {useContext} from "react";


export default function EventCard(props) {

  const { EventData, setEventData } = useContext(EventContext);
      return (

        <div>
            <img src={EventData.image} alt="venue" />
<h3>{EventData.title}</h3>
<p>{EventData.description}</p>
      <p>{EventData.start} - {EventData.end}</p>
      
      <p>External Link: {EventData.ext_link}</p>
      <p>Venue: {EventData.location.name} </p>
      <p>Address:</p>
      <p>{EventData.location.name}</p>
      <p>{EventData.location.name} {EventData.location.name}</p>
      <p>{EventData.location.name}, {EventData.location.name}</p>
      <p>{EventData.location.name}</p>




    </div>
      )
    }