import logo from "../images/logo.svg";
import React from "react";

import { pageLinks, socialLinks } from "../data";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => (
            <li key={link.id}>
              <a  href={link.href} className="nav-link">
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map(social => (
          <li key={social.id}>
            <a
              href={social.href}
              target="_blank"
              className="nav-icon"
              rel="noreferrer"
            >
              <i className={social.icon} />
            </a>
          </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
