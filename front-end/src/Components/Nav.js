import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

const Navigation = () => {
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload();
        
    }

    return (
        <div className="nav cont">
        <img src="" alt="logo"/>
        {localStorage.getItem("token") ? (
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/profile">Your Events</Link>
                <Link to="/addevent">Add An Event</Link>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        ) : (
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/Events">Events</Link>
            </nav>
        )}
        </div>
    )
}
