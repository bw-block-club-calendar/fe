import React, {useContext} from "react"
import AxiosWithAuth from "../util/AxiosWithAuth";
import {ProfileContext, EventContext} from "../util/Hooks"




export const ProfileData = () => {
    const { profileData, setprofileData } = useContext(ProfileContext);

    AxiosWithAuth()
    .get('/api/profile/')
    .then(res => {
        console.log("profileCall", res);
        setProfileData(res.data)
        
    })
      .catch(error => {
        console.log("ERROR", error);
        alert(error);
    }

)}


export const eventData = () => {
    const { eventData, setEventData } = useContext(EventContext);



)}