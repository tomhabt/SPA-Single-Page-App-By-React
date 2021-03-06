import React from "react";
import logo from "../logo.svg"


function Navbar() {
    return (
        <div>
            <nav className="nav">
                <img 
                    src={logo} 
                    className="logo"
                    alt="logo"
                />
                <h3>ReactFacts</h3>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;