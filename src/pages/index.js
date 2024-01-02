import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { header, btn, textstart } from "../styles/home.module.css";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Home = ({ data }) => {
  return (
    <Layout pageTitle={data.contentfulStartside.title}>
      <section className={header}>
        <div className={textstart}>
          <p>
            {documentToReactComponents(
              JSON.parse(data.contentfulStartside.info.raw)
            )}
          </p>
        </div>
        <img
          src={data.contentfulStartside.image.file.url}
          alt="bild"
          width="400"
        />
        <Link className={btn} to="/Projects">
          Portfolio Projekts
        </Link>
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
