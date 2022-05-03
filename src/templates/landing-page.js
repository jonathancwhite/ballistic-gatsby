import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Hero from '../components/Global/Hero';
import InternalPage from '../components/Global/InternalPage';

// eslint-disable-next-line
export const LandingPageTemplate = ({

}) => {

  return (
    <div>
      <InternalPage>
       
      </InternalPage>
    </div>
  );
};

LandingPageTemplate.propTypes = {

};

const LandingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <LandingPageTemplate
        
      />
    </Layout>
  );
};

LandingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default LandingPage;

export const pageQuery = graphql`
  query LandingPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
