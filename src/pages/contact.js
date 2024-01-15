import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  formlogin,
  rubrik,
  login,
  textcontact,
  text,
  btnhover,
} from "../styles/about.module.css";

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <div className={textcontact}>
        <div className={formlogin}>
          <h3 className={rubrik}>Kontakta mig via:</h3>
          <div className={login}>
            <div className={btnhover}>
              <p className={text}>
                {documentToReactComponents(
                  JSON.parse(data.contentfulContact.info.raw)
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    contentfulContact {
      slug
      title
      info {
        raw
      }
    }
  }
`;
export const Head = () => <title>Contact Me</title>;
export default ContactPage;
