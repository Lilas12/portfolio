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
