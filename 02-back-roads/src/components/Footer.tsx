import { pageLinks, socialLinks } from "../data"

export default function Footer() {
  return (
<footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map(link => (
          <li key={link.id}>
            <a href={link.href} className="footer-link">
              {link.text}
            </a>
          </li>
          ))}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map(social => (
          <li key={social.id}>
            <a
              href={social.href}
              target="_blank"
              className="footer-icon"
              rel="noreferrer"
            >
              <i className={social.icon}></i>
            </a>
          </li>
          ))}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>  )
}
