import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";
const Blog = ({ data }) => {
  return (
    <Layout>
      <h1>{data.contentfulBlog.title}</h1>
      <p>
        {documentToReactComponents(JSON.parse(data.contentfulBlog.info.raw))}
      </p>
      <img src={data.contentfulBlog.image.file.url} alt="bild" width="400" />
    </Layout>
  );
};
export default Blog;
export const pageQuery = graphql`
  query {
    contentfulBlog {
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
