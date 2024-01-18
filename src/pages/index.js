import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { header, btn, textstart, description } from "../styles/home.module.css";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Home = ({ data }) => {
  return (
    <Layout>
      <section className={header}>
        <div className={textstart}>
          <p className={description}>
            {documentToReactComponents(
              JSON.parse(data.contentfulStartside.info.raw)
            )}
            <img
              src={data.contentfulStartside.image.file.url}
              alt="bild"
              width="60%"
              height="200px"
            />
          </p>
          <Link className={btn} to="/category">
            My Projekts
          </Link>
        </div>

        {/* <Link className={btn} to="/Projects">
          Portfolio Projekts
        </Link> */}
      </section>
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    contentfulStartside {
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
export const Head = () => <title>Home</title>;
export default Home;
