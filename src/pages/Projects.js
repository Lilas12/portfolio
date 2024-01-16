// import { graphql } from "gatsby";
// import * as React from "react";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { Link } from "gatsby";
// import Layout from "../components/layout";
// import { portfolio, projects } from "../styles/projects.module.css";

// const IndexPage = ({ data }) => {
//   return (
//     <Layout>
//       <div className={portfolio}>
//         <h2>Projects & Websites I've Created</h2>
//         {data.allContentfulBlog.nodes.map((blog) => (
//           <div className={projects}>
//             <h1>
//               <Link to={blog.slug}>{blog.title}</Link>
//             </h1>
//             {/* <h2>{blog.subtitle}</h2> */}
//             {<p>{documentToReactComponents(JSON.parse(blog.info.raw))}</p>}
//             <img src={blog.image.file.url} alt="bild" width="80%" />

{
  /* <div> */
}
{
  /* <p>{documentToReactComponents(JSON.parse(blog.info.raw))}</p> */
}
{
  /* <img src={blog.image.file.url} alt="bild" width="80%" /> */
}
{
  /* </div> */
}
// </div>
// ))}
{
  /* </div>
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    allContentfulBlog {
      nodes {
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
  }
`;
export default IndexPage;
export const Head = () => <title>Projects</title>; */
}
