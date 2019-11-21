/* {
  "user_id": 9,
  "organizer": "profile",
  "title": "Councilperson Sheffield's Town Hall",
  "description": "Join Council President Pro Tem Sheffield and the City Assessor for an in depth discussion on Neighborhood Enterprise Zones and what they mean to you!",
  "start": "Tue Oct 22 2019 18:00:00 GMT-0400 (Eastern Daylight Time)",
  "end": "Tue Oct 22 2019 20:00:00 GMT-0400 (Eastern Daylight Time)",
  "ext_link": "https://detroitmi.gov/",
  "image": "https://detroitmi.gov/sites/detroitmi.localhost/files/2018-11/Mary-Sheffield.jpg",
  "location": {
    "name": "Metropolitain United Methodist Church",
    "coordinates": null,
    "street_address": "8000 Woodward ave",
    "street_address_2": null,
    "city": "Detroit",
    "zipcode": "48202",
    "state": "MI"
	}
}*/

import React, {useState} from "react";
import AxiosWithAuth from "../util/AxiosWithAuth"



const AddEvent = (props) => {

    const userId = parseInt(localStorage.getItem('user_id'));

    const [form, setForm] = useState({
  
        title: "",
      description: "",
      start: "",
      end: "",
      image: "",
      loc_name: "",
           coordinates: "",
           street_address: "",
           street_address_2: "",
           city: "",
            state: "",
            zipcode: ""
    });
  
    const handleChanges = e => {
     
      
      setForm({ ...form, [e.target.name]: e.target.value });
      
       console.log(form, "handle")
    };
  
    const addEvent = e => {
      e.preventDefault();
      console.log(form, "addeventform")
      let apiForm = {
        user_id: userId,
        title: form.title,
        description: form.description,
        start: form.start,
        end: form.end,
        image: form.image,
        location: {
          name: form.loc_name,
          coordinates: form.coordinates,
          street_address: form.street_address,
          street_address_2: form.street_address_2,
          city: form.city,
          state: form.state,
          zipcode: form.zipcode,
        }
        
  
      }
      console.log(apiForm, "addeventform")
      AxiosWithAuth()
        .post("/api/event", apiForm)
        .then(res => {
          console.log("addevent", res);
          props.history.push("/events");
          window.location.reload();
        })
        .catch(error => {
          console.log("ERROR", error);
          alert(error);
          setForm({ title: "", description: "", start: "", end: "", image: "", location: {
            name: "",
            coordinates: "",
            street_address: "",
            street_address_2: "",
            city: "",
            state: "",
            zipcode: ""
  
          }});
        
        });
    };

return(
    <div>
     <form onSubmit={addEvent}>

         <h2>Event</h2>

          <label to="title">
            Title:
            <input
              required
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleChanges}
              value={form.title}
            />
          </label>

          <label to="description">
            Description:
            <input
              
              type="text"
              placeholder="description"
              name="description"
              onChange={handleChanges}
              value={form.description}
            />
          </label>

          <label to="start">
            Start Time:
            <input
              required
              type="datetime-local"
              placeholder="Start Time"
              name="start"
              onChange={handleChanges}
              value={form.start}
            />
          </label>

          <label to="end">
            End Time:
            <input
              required
              type="datetime-local"
              placeholder="End Time"
              name="end"
              onChange={handleChanges}
              value={form.end}
            />
          </label>
          
          <label to="ext_link">
            External Link:
            <input
              
              type="text"
              placeholder="External Link"
              name="ext_link"
              onChange={handleChanges}
              value={form.ext_link}
            />
          </label>

          <label to="image">
            Image URL:
            <input
             
              type="text"
              placeholder="Image"
              name="image"
              onChange={handleChanges}
              value={form.image}
            /> </label>

<h2>Location</h2>

<label>
  Location Name:
  <input
    type="text"
    placeholder="Location Name"
    name="loc_name"
    onChange={handleChanges}
    value={form.loc_name}
  />
</label>

<label>
  Coordinates:
  <input
    type="text"
    placeholder="Coordinates"
    name="coordinates"
    onChange={handleChanges}
    value={form.coordinates}
  />
</label>

<label>
  Street Address:
  <input
    type="text"
    placeholder="Street Address"
    name="street_address"
    onChange={handleChanges}
    value={form.street_address}
  />
</label>

<input
  type="text"
  placeholder="Apt, Suite..."
  name="street_address_2"
  onChange={handleChanges}
  value={form.street_address_2}
/>
<input
  type="text"
  placeholder="City"
  name="city"
  onChange={handleChanges}
  value={form.city}
/>
<input
  type="text"
  placeholder="State"
  name="state"
  onChange={handleChanges}
  value={form.state}
/>
<input
  type="text"
  placeholder="Zipcode"
  name="zipcode"
  onChange={handleChanges}
  value={form.zipcode}
/>

<button type="submit">Add Details to Profile</button>
</form>
         
        </div>
)

}

export default AddEvent