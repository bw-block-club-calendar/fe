import React, { useEffect, useContext} from "react";
import {EventContext} from "../util/Hooks"
import ProfileEventCard from "./ProfileEventCard"
import AxiosWithAuth from "../util/AxiosWithAuth"
import ProfileCard from "./ProfileCard"




 const Profile = () => {
 
 const { eventData, setEventData } = useContext(EventContext);
  const userId = localStorage.getItem('user_id');

  return (
<div>
<div> 
  <ProfileCard />
       {eventData.map(prof => {
        if (prof.user_id === userId) {
          return (
            <div>
             
              <ProfileEventCard key={prof.event_id} prof={prof}/>
            </div>
          )
            
      }
      {/*else{
        return(<div>
              <h2>Go Socialize!</h2>
              </div>
        );
        } */}
      })}

    </div>


    </div>
  );
}

export default Profile;