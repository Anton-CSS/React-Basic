import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to={'/'}>Homepage</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/posts'}>Posts</Link>
            </div>
        </div>
    );
};

export default NavBar;