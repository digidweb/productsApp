import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
          <Link to="/products">Home</Link>
        {"   |   "}
          <Link to="/new">Novo</Link>
    </nav>
  );
}

export default NavBar;
