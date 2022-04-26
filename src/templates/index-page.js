import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Hero from '../components/Global/Hero';
import InternalPage from '../components/Global/InternalPage';
import LogoShowcase from '../components/Global/LogoShowcase';
import SimpleSection from '../components/SimpleSection/SimpleSection';

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  imageAlt,
  title,
  heading,
  subheading,
  ctaLink,
  ctaLink2,
  ctaTitle,
  ctaTitle2,
  brands,
  mainpitch,
}) => {

  return (
    <div>
      <Hero
        pageTitle={heading}
        pageSubText={subheading}
        showcaseImage={image}
        showcaseAlt={imageAlt}
        ctaPrimaryLink={ctaLink}
        ctaTextPrimary={ctaTitle}
        ctaTextSecondary={ctaTitle2}
        ctaSecondaryLink={ctaLink2}
      />
      <InternalPage>
        <LogoShowcase
          logo1={brands.brandLogo1}
          logo2={brands.brandLogo2}
          logo3={brands.brandLogo3}
          logo4={brands.brandLogo4}
          logo5={brands.brandLogo5}
        />
        <SimpleSection
          heading={mainpitch.heading}
          subheading={mainpitch.subheading}
          copy1={mainpitch.col1}
          copy2={mainpitch.col2}
          color={mainpitch.color}
          cta={mainpitch.ctaTitle}
          ctaLink={mainpitch.ctaLink}
          titleWidth={mainpitch.imageOption}
        />
        <LogoShowcase
          logo1={partners.partnerLogo1}
          logo2={partners.partnerLogo2}
          logo3={partners.partnerLogo3}
          logo4={partners.partnerLogo4}
          logo5={partners.partnerLogo5}
        />

      </InternalPage>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        imageAlt
        heading
        subheading
        heroCTATitle
        heroCTALink
        brands {
          brandLogo1
          brandLogo2
          brandLogo3
          brandLogo4
          brandLogo5
        }
        mainpitch {
          heading
          subheading
          col1
          col2
          ctaTitle
          ctaLink
          ctaTitle2
          ctaLink2
          color
          imageOption
        }
        about {
          heading
          description
        }
      }
    }
  }
`;
