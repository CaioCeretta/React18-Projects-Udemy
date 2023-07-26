
import React from 'react'

interface SocialLinkProps {
  href: string,
  icon: string,
  itemClass: string,

}

export default function SocialLink({href, icon, itemClass}: SocialLinkProps) {
  return (
    <li>
      <a href={href} target="_blank" rel='noreferrer' className={itemClass}>
        <i className={icon}/>
      </a>
    </li>
  )
}
