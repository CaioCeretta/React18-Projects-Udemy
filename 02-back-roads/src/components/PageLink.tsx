import React from "react";

interface PageLinkProps {
  link: {
    id: number,
    href: string,
    text: string
  }
  itemClass: string;
}


export default function PageLink({link, itemClass}: PageLinkProps) {
  return (
    <li key={link.id}>
      <a href={link.href} className={itemClass}>
        {link.text}
      </a>
    </li>
  );
}
