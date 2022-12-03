import React from "react";
import '../static/css/style.css';
import Navbar from "../components/Navbar";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    )
};

export default Layout;