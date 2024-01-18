import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  rubrik,
  textcontact,
  text,
  projects,
} from "../styles/about.module.css";

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <div className={projects}>
        <div className={textcontact}>
          {/* <h3 className={rubrik}>Contact Me</h3> */}
          <img
            src={data.contentfulContact.image.file.url}
            alt="bild"
            width="80%"
            height="200px"
          />
          <div className={text}>
            <p>
              {documentToReactComponents(
                JSON.parse(data.contentfulContact.info.raw)
              )}
            </p>
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
      image {
        file {
          url
        }
      }
    }
  }
`;
export const Head = () => <title>Contact Me</title>;
export default ContactPage;
