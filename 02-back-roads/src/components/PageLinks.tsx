import React from 'react'
import { pageLinks } from '../data'
import PageLink from './PageLink';

interface PageLinksProps {
  parentClass: string;
  itemClass: string;
}

function PageLinks({parentClass, itemClass}: PageLinksProps) {
  return (
    <ul className={parentClass} id="nav-links">
    {pageLinks.map((link) => (
      <PageLink link={link} itemClass={parentClass} />
    ))}
  </ul>
  )
}

export { PageLinks }
