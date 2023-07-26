import React from "react";
import { socialLinks } from "../data";

interface SocialProps {
  social: {
    id: number,
    icon: string,
    href: string
  }

}

export default function NavLink({social}: SocialProps) {
  return (
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
  );
}
