import axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    
    return (
        <div className="p-4 shadow-md bg-blue-950 shadow-blue-950">
            <div className="container flex items-center justify-between text-white">
                <h1>7oy 10dars</h1>
                <ul className="flex items-center gap-3">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/second">Scroll</NavLink>
                    </li>
                </ul>
                <h1>React</h1>
            </div>
        </div>
    );
}

export default Header;
