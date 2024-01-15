import React from "react";
import * as styles from "./footer.module.css";
const Footer = () => (
  <div className={styles.container}>
    <div className={styles.FooterContent}>
      Built with <a href="https://contentful.com/">Contentful</a> and{" "}
      <a href="https://gatsbyjs.com">Gatsby</a>
    </div>
  </div>
);
export default Footer;
