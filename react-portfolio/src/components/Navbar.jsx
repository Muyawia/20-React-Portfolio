import React from "react";
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav>
        <h1>PORTFOLIO</h1>
        <ul>
            <li><Link to="Contact">Contact Me</Link></li>
            <li><Link to="About">About Me</Link></li>
            <li><Link to="Projects">My Projects</Link></li>
        </ul>
    </nav>

)};


export default Navbar;