import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link to={"/"} style={{textDecoration: 'none'}}><button>Home</button></Link>
        </div>
    );
}

export default NavBar;