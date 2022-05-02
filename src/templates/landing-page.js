import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Hero from '../components/Global/Hero';
import InternalPage from '../components/Global/InternalPage';

// eslint-disable-next-line
export const LandingPageTemplate = ({
  image,
  imageAlt,
  title,
  heading,
  subheading,
  ctaTitle,
  ctaLink,
  ctaTitle2,
  ctaLink2
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <Hero
        pageTitle={heading}
        pageSubText={subheading}
        img={heroImage}
        showcaseAlt={imageAlt}
        ctaLink={ctaLink}
        ctaTitle={ctaTitle}
        ctaTitle2={ctaTitle2}
        ctaLink2={ctaLink2}
      />
      <InternalPage>
       
      </InternalPage>
    </div>
  );
};

LandingPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  ctaTitle: PropTypes.string,
  ctaTitle2: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaLink2: PropTypes.string,
  brands: PropTypes.object,
  mainpitch: PropTypes.object,
  partners: PropTypes.object,
  about: PropTypes.object,
  services: PropTypes.object,
  nextsteps: PropTypes.object,
  numbers: PropTypes.object
};

const LandingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <LandingPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        ctaTitle={frontmatter.ctaTitle}
        ctaLink={frontmatter.ctaLink}
        ctaTitle2={frontmatter.ctaTitle2}
        ctaLink2={frontmatter.ctaLink2}
        brands={frontmatter.brands}
        mainpitch={frontmatter.mainpitch}
        partners={frontmatter.partners}
        about={frontmatter.about}
        services={frontmatter.services}
        nextsteps={frontmatter.nextsteps}
        numbers={frontmatter.numbers}
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
        image {
          childImageSharp {
            gatsbyImageData(
              quality: 100, 
              placeholder: BLURRED
            )
          }
        }
        imageAlt
        heading
        subheading
        ctaTitle
        ctaLink
        ctaTitle2
        ctaLink2
      }
    }
  }
`;
