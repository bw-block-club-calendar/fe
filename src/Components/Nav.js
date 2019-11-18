import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

const Nav = () => {
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload();
        
    }

    return (
        <div className="nav cont">
        <img src="" alt="logo"/>
        {localStorage.getItem("token") ? (
            <nav className="navbar">
               <button><Link to="/">Home</Link></button>
               <button><Link to="/profile">Your Events</Link></button>
               <button><Link to="/addevent">Add An Event</Link></button>
                <button onClick={handleLogout}> <Link to="/">Logout</Link></button>
            </nav>
        ) : (
            <nav className="navbar">
                <button><Link to="/">Home</Link></button>
                <button><Link to="/login">Login</Link></button>
                <button> <Link to="/Events">Events</Link></button>
            </nav>
        )}
        </div>
    )
}

export default Nav