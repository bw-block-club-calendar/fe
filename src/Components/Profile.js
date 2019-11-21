import React, { useEffect, useState } from "react";
// import AxiosWithAuth from "../util/AxiosWithAuth";



 const Profile = (props) => {
  const { eventData, setEventData } = useContext(eventContext);
  const userId = localStorage.getItem('user_id');


  return (
<div>
<div>
      {eventData.map(prof => {
        if (prof.user_id === userId) {
          return (
            <div>
              <ProfileCard />
            </div>
          ):(
            <div>
              <h2>Go Socialize!</h2>
              </div>
          )
        }
      })}

    </div>


    </div>
  );
}

export default Profile;