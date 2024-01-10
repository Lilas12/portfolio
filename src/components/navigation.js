import React from "react";
import { Link } from "gatsby";
import { navLinks, navLinkItem, navLinkText } from "./layout.module.css";

const Navigation = () => (
  <nav>
    <ul className={navLinks}>
      <li className={navLinkItem}>
        <Link to="/" className={navLinkText}>
          Home
        </Link>
      </li>

      <li className={navLinkItem}>
        <Link to="/about" className={navLinkText}>
          About
        </Link>
      </li>

      <li className={navLinkItem}>
        <Link to="/Projects" className={navLinkText}>
          Projects
        </Link>
      </li>

      <li className={navLinkItem}>
        <Link to="/contact" className={navLinkText}>
          Contact
        </Link>
      </li>
      <li className={navLinkItem}>
        <Link to="/category" className={navLinkText}>
          Category
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navigation;
