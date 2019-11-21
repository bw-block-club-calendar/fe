import React, { useEffect, useState } from "react";
import AxiosWithAuth from "../util/AxiosWithAuth";

function AddDeets(props) {
const userId = parseInt(localStorage.getItem('user_id'));

  const [form, setForm] = useState({

    first_name: "",
    last_name: "",
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

  const addDeets = e => {
    e.preventDefault();
    console.log(form, "addform")
    let apiForm = {
      user_id: userId,
      first_name: form.first_name,
      last_name: form.last_name,
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
    console.log(apiForm, "addapiform")
    AxiosWithAuth()
      .post("/api/profile", apiForm)
      .then(res => {
        console.log("deets", res);
        props.history.push("/profile");
        window.location.reload();
      })
      .catch(error => {
        console.log("ERROR", error);
        alert(error);
        setForm({ first_name: "", last_name: "", location: {
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

  return (
    <div>
      <h2>Add Details</h2>
      <div>
        <form onSubmit={addDeets}>
          <label to="firstName">
            First Name:
            <input
              required
              type="text"
              placeholder="First Name"
              name="first_name"
              onChange={handleChanges}
              value={form.first_name}
            />
          </label>
          <label>
            Last Name:
            <input
              required
              type="text"
              placeholder="Last Name"
              name="last_name"
              onChange={handleChanges}
              value={form.last_name}
            />
          </label>

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
    </div>
  );
}

export default AddDeets;
