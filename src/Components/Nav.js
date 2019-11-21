import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const Nav = (props) => {
    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user_id")
        props.history.push("/");
        
    }

    return (
        <div className="nav cont">
        <img src="" alt="logo"/>
        {localStorage.getItem("token") ? (
            <nav className="navbar">
               <button><Link to="/">Home</Link></button>
               <button><Link to="/createprofile">Create Profile</Link></button>
                <button><Link to="/profile">Profile</Link></button>
               <button><Link to="/events">Your Events</Link></button>
               <button><Link to="/addevent">Add An Event</Link></button>
                <button onClick={handleLogout}> <Link to="/">Logout</Link></button>
            </nav>
        ) : (
            <nav className="navbar">
                <button><Link to="/">Home</Link></button>
                <button><Link to="/register">Register</Link></button>
                <button><Link to="/login">Login</Link></button>
                
                <button> <Link to="/events">Events</Link></button>
            </nav>
        )}
        </div>
    )
}

export default Nav