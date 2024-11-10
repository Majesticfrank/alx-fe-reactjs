import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav style={{ padding: "10px", background: "#f0f0f0" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
        <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
        <Link to="/Services" style={{ margin: "0 10px" }}>Services</Link>
      

      </nav>

    );
}
export default Navbar