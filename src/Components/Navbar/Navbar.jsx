import React from "react";
import "./Navbar.css"

const Navbar = ()=>{
    return (
        <div className="navbar">
            <div className="name">
                <span>Dhruv</span>
            </div>
            
            <ul className="section">
                <li><a href="#" class="nav-link">About</a></li>
                <li><a href="#" class="nav-link">Experience</a></li>
                <li><a href="#" class="nav-link">Project</a></li>
                <li><a href="#" class="nav-link">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;