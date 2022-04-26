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
  ctaTitle,
  ctaLink,
  ctaTitle2,
  ctaLink2,
  brands,
  mainpitch,
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
        {/* <LogoShowcase
          logo1={brands.brandLogo1}
          logo2={brands.brandLogo2}
          logo3={brands.brandLogo3}
          logo4={brands.brandLogo4}
          logo5={brands.brandLogo5}
        /> */}
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
        {/* <LogoShowcase
          logo1={partners.partnerLogo1}
          logo2={partners.partnerLogo2}
          logo3={partners.partnerLogo3}
          logo4={partners.partnerLogo4}
          logo5={partners.partnerLogo5}
        /> */}

      </InternalPage>
    </div>
  );
};

IndexPageTemplate.propTypes = {
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
        mainpitch {
          heading
          subheading
          col1
          col2
          ctaTitle
          ctaLink
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
