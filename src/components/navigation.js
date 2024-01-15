import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import { navLinks, navLinkItem, navLinkText } from "./layout.module.css";
const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);
  return (
    <nav>
      <ul className={navLinks}>
        {/* <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
<li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
<li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact</Link></li>
<li className={navLinkItem}><Link to="/category" className={navLinkText}>Category</Link></li> */}
        {data.site.siteMetadata.menuLinks.map((link) => (
          <li className={navLinkItem}>
            <Link className={navLinkText} to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
