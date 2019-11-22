import React, {useContext} from "react";
import {ProfileContext} from "../util/Hooks"

export default function ProfileCard(props) {

  const { profileData, setProfileData } = useContext(ProfileContext);
      return (

        <div>

        <h2>{profileData.first_name} {profileData.last_name}</h2>
        <p>{profileData.location.street_address} {profileData.location.street_address_2}</p>
        <p>{profileData.location.city} {profileData.location.state} {profileData.location.zipcode}</p>


    </div>
      )
    }