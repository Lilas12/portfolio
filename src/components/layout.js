import * as React from "react";
import { container, heading, siteTitle } from "./layout.module.css";
import { useStaticQuery, graphql } from "gatsby";
import Navigation from "./navigation";
import Footer from "./footer";
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <Navigation />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
