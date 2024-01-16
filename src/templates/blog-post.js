import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";
import { portfolio, projects } from "../styles/projects.module.css";
const Blog = ({ data }) => {
  return (
    // <Layout>
    //   <div className={projects}>
    //     <h1 className={blogTitle}>{data.contentfulBlog.title}</h1>
    //     <p className={blogContent}>
    //       {documentToReactComponents(JSON.parse(data.contentfulBlog.info.raw))}
    //     </p>
    //     <img
    //       src={data.contentfulBlog.image.file.url}
    //       alt="bild"
    //       className={blogImage}
    //       width="70%"
    //       height="300px"
    //       padding="20px"
    //     />
    //   </div>
    // </Layout>
    <Layout>
      <div className={portfolio}>
        <h1>{data.contentfulBlog.title}</h1>
        <div className={projects}>
          <p>
            {documentToReactComponents(
              JSON.parse(data.contentfulBlog.info.raw)
            )}
          </p>
          <img
            src={data.contentfulBlog.image.file.url}
            alt="bild"
            width="70%"
          />
        </div>
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
