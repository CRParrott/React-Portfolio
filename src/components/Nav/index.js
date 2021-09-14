import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul>
        <li className="navbar-brand">
          Charles Parrott
        </li>
      </ul>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link disabled" tabindex="-1" aria-disabled="true" to="/resume">
              Resume
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Nav;