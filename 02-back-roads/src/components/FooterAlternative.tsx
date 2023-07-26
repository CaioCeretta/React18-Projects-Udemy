import { pageLinks, socialLinks } from "../data"
import {PageLinks} from "./PageLinks"
import SocialLink from "./SocialLink"

export default function FooterAlternative() {
  return (
<footer className="section footer">
        <PageLinks parentClass="footer-links" itemClass="footer-link"/>
        {/* <ul className="footer-links">
          {pageLinks.map(link => (
          <li key={link.id}>
            <a href={link.href} className="footer-link">
              {link.text}
            </a>
          </li>
          ))}
        </ul> */}
        <ul className="footer-icons">
          {socialLinks.map(social => (
            <SocialLink href={social.href} icon={social.icon} itemClass="footer-icon"/>
          
          ))}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>  )
}
