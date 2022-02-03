import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
    return ( 
        <footer>
        <div class="container">
          <div class="footerContainer">
            <div class="footerLogo">
            <Link to="/">
              <img src="images/W-logo.png" alt="Logo" />
              </Link>
            </div>
            <div class="footerNav">
              <p>
              <HashLink to="/#about">About me</HashLink>
              </p>
              <p>
              <HashLink to="/#services">services</HashLink>
              </p>
              <p>
              <a href="#">blogs</a>
              </p>
              <p>
              <Link to="/portfolio">Portifolio</Link>
              </p>
              <p>
              <HashLink to="/#contact">contact me</HashLink>
              </p>
            </div>
            <div class="footerMedias">
              <div class="footerMedia">
                <a href="https://www.linkedin.com/in/laura-irene-paul"
                  ><i class="fab fa-linkedin-in"></i></a>
              </div>
              <div class="footerMedia">
              <a href="https://www.facebook.com/irene.mmassy.1466"><i class="fab fa-facebook-f"></i></a>
              </div>
              <div class="footerMedia">
              <a href="https://www.instagram.com/minaheryy/"><i class="fab fa-instagram"></i></a>
              </div>
              <div class="footerMedia">
              <a href="https://www.behance.net/laummassy01ce"><i class="fab fa-behance"></i></a>
              </div>
              <div class="footerMedia">
              <a href="https://github.com/irenemmassy"><i class="fab fa-github-alt"></i></a>
              </div>
            </div>
            <span>Copyright ©2020 All rights reserved </span>
          </div>
        </div>
      </footer>

    )
}