import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { textabout, title, description } from "../styles/about.module.css";

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <div className={textabout}>
        <p className={title}>{data.contentfulAbout.title}</p>

        <p className={description}>
          {documentToReactComponents(JSON.parse(data.contentfulAbout.info.raw))}
        </p>
        <img src={data.contentfulAbout.image.file.url} alt="bild" width="80%" />
      </div>
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
