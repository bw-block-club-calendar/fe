import React, {useContext} from "react"
import AxiosWithAuth from "../util/AxiosWithAuth";




export const ProfileData = () => {
    const { profileData, setprofileData } = useContext(profileContext);

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
    const { eventData, setEventData } = useContext(eventContext);

    AxiosWithAuth()
    .get('/api/event/')
    .then(res => {
        console.log("addevent", res);
        setEventData(res.data)
        
    })
      .catch(error => {
        console.log("ERROR", error);
        alert(error);
    }

)}