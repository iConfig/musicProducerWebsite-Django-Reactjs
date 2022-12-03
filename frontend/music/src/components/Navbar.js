import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div class="classynav">
            <ul className="nav-ul">
                <li className="nav-li"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-li"><Link className="nav-link" to= "/beats" >Beats</Link></li>
                <li className="nav-li"><Link className="nav-link" to="/contact" >Contact</Link></li>
            </ul>
        </div>
    )
};

export default Navbar;