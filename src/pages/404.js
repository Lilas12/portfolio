import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";
import { header, btn, textstart } from "../styles/notfound.module.css";
const Page404 = ({ data }) => {
  return (
    <Layout>
      <section className={header}>
        <div className={textstart}>
          {/* <p>
            {documentToReactComponents(
              JSON.parse(data.contentfulPage404.info.raw)
            )}
          </p> */}
          <img
            src={data.contentfulPage404.image.file.url}
            alt="bild"
            width="90%"
          />
          <Link className={btn} to="/">
            Go Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    contentfulPage404 {
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
export const Head = () => <title>404</title>;
export default Page404;
