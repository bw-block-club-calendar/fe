/*

    * eventTitle - String
    * eventAddress - Address
    * geolocation - Coordinates
    * eventDescription - String
    * eventStart - DateTime
    * eventEnd - DateTime
    * externalLink (Facebook listing for example. *Optional) - URL
    * 
    *
 */

import React, { useEffect, useState } from "react";

const Events =({values, errors, touched, status}) => {
    const [users, setUsers] = useState([]);

    useEffect (()=> {status && setUsers (users => [...users, status])}, [status]);

    return (

        
   
    <div className = "event-form">
    <br></br>
    <form>
    <field type="text" name="email" placeholder="What is your email?"/>
    <field type="text" name="username" placeholder="What is your username?"/>
    <field type="text" name="password" placeholder="What is your password?"/>
    <field type="text" name="streetAddress" placeholder="What is your street address?"/>
    <field type="text" name="city" placeholder="What city?"/>
    <field type="text" name="zipcode" placeholder="What is your zipcode?"/>
    <field type="text" name="businessName" placeholder="What is your business name?"/>
    
    </form>
    {users.map( (user, index) => (
        <ul key={index}>
        <li>{user.email}</li>
        <li>{user.username}</li>
        <li>{user.password}</li>
        <li>{user.streetAddress}</li>
        <li>{user.zipcode}</li>
        <li>{user.businessName}</li>

        </ul>
    ))}
    </div>

    );

};


export default Events;