import React, { useState } from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";
import Layout from "../components/layout";
const BlogPosts = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const allPosts = props.data.allContentfulBlog.edges;
  const categories = [
    "All",
    ...new Set(allPosts.map((post) => post.node.category)),
  ];
  const filteredPosts =
    selectedCategory === "All"
      ? allPosts
      : allPosts.filter((post) => post.node.category === selectedCategory);
  return (
    <Layout>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div>
        {filteredPosts.map(({ node }, index) => (
          <div key={index}>
            <h1>
              <Link to={node.slug}>{node.title}</Link>
            </h1>
            <h3>{node.subtitle}</h3>
            <p>{documentToReactComponents(JSON.parse(node.info.raw))}</p>
            <i>Kategori: {node.category}</i>
            <img src={node.image.file.url} alt="bild" width="400" />
          </div>
        ))}
      </div>
    </Layout>
  );
};
export const query = graphql`
  query {
    allContentfulBlog {
      edges {
        node {
          id
          slug
          title
          subtitle
          category
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
    }
  }
`;
export default BlogPosts;
