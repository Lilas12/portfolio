import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const AboutPage = ({ data }) => {
  return (
    <Layout pageTitle={data.contentfulAbout.title}>
      <p>
        {documentToReactComponents(JSON.parse(data.contentfulAbout.info.raw))}
      </p>
      <img src={data.contentfulAbout.image.file.url} alt="bild" width="400" />
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    contentfulAbout {
      slug
      title
      image {
        file {
          url
        }
      }
      info {
        raw
      }
    }
  }
`;
export const Head = () => <title>Contact Me</title>;
export default AboutPage;
