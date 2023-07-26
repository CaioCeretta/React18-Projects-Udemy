import logo from "../images/logo.svg";
import React from "react";
import {PageLinks} from "./PageLinks";

import { socialLinks } from "../data";
import NavLink from "./NavLink";
import SocialLink from "./SocialLink";


export default function NavbarAlternative() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="nav-icons" itemClass="nav-icon"/>
        <ul className="nav-icons">
          {socialLinks.map(social => (
            <SocialLink key={social.id} href={social.href} icon={social.icon} itemClass="nav-icon" />
          ))}
        </ul>
      </div>
    </nav>
  );
}

