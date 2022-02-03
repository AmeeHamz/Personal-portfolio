import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; 

export default function Header(props) {
    return (
        <header class={`header-${props.bgColor || "white"}`}>
      <div class="container">
        <div class="nav">
          <div class="nav1">
            <Link to="/">
            <img src="images/W-logo.png" alt="logo" /> 
            </Link>
          </div>
          <div class="nav2">
            <div class="menu">
            <HashLink to="/#about">about Me</HashLink>
            </div>
            <div class="menu">
            <HashLink to="/#services">services</HashLink>
            </div>
            <div class="menu">
            <a href="#">Blogs</a>
            </div>
            <div class="menu">
              <Link to="/portifolio">Portifolio</Link>
            </div>
            <div class="menu">
            <HashLink to="/#contact">contact Me</HashLink>
            </div>
          </div>
        </div>
      </div>
    </header>
    )
    
}