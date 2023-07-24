import React from 'react';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <NavLink to={'/'}>Homepage</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
        </div>
    );
};

export default NavBar;