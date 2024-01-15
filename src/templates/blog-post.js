import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";
import {
  projects,
  blogTitle,
  blogContent,
  blogImage,
} from "../styles/blog.css";
const Blog = ({ data }) => {
  return (
    <Layout>
      <div className={projects}>
        <h1 className={blogTitle}>{data.contentfulBlog.title}</h1>
        <p className={blogContent}>
          {documentToReactComponents(JSON.parse(data.contentfulBlog.info.raw))}
        </p>
        <img
          src={data.contentfulBlog.image.file.url}
          alt="bild"
          className={blogImage}
          width="100%"
          height="500px"
        />
      </div>
    </Layout>
  );
};
export default Blog;
export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
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
