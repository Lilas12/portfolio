import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const ContactPage = ({ data }) => {
  return (
    <Layout pageTitle={data.contentfulContact.title}>
      <p>
        {documentToReactComponents(JSON.parse(data.contentfulContact.info.raw))}
      </p>
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    contentfulContact {
      slug
      title
      info {
        raw
      }
    }
  }
`;
export const Head = () => <title>Contact Me</title>;
export default ContactPage;
