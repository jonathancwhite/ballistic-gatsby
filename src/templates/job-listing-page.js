import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage, getSrc } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Hero from '../components/Global/Hero';
import InternalPage from '../components/Global/InternalPage';
import CenteredBriefText from '../components/Global/CenteredBriefText';
import { Helmet } from "react-helmet";

// eslint-disable-next-line
export const JobListingPageTemplate = ({
    seohelmet,
    hero,
    mainpitch,
}) => {
  const heroImage = getImage(hero.img);
  const ogImage = getSrc(seohelmet.ogimg);

  return (
    <div>
      <Helmet>
          <title>{seohelmet.title}</title>
          <meta name="description" content={seohelmet.meta} />
          <link rel="canonical" href={seohelmet.canonical} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:url" content={seohelmet.canonical} />
      </Helmet>
      <Hero
        pageTitle={hero.heading}
        ctaTitle={hero.ctaText}
        ctaLink={hero.ctaLink}
        img={heroImage}
        showcaseAlt={hero.imgAlt}
      />
      <InternalPage>
        <CenteredBriefText heading={mainpitch.heading} copy={mainpitch.copy}/>
        {/* <div className="job-description">
            {job.description}
        </div> */}
      </InternalPage>
    </div>
  );
};

JobListingPageTemplate.propTypes = {
  seohelmet: PropTypes.object,
  hero: PropTypes.object,
  mainpitch: PropTypes.object,
};

const JobListingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <JobListingPageTemplate
        seohelmet={frontmatter.seohelmet}
        hero={frontmatter.hero}
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  );
};

JobListingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default JobListingPage;

export const pageQuery = graphql`
  query JobListingPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "job-listing-page" } }) {
      frontmatter {
        seohelmet {
            title,
            canonical,
            meta,
            ogimg {
              childImageSharp {
                gatsbyImageData(
                    quality: 100
                )
              }
            }
        }
        hero {
          heading
          ctaText
          ctaLink
          img {
            childImageSharp {
              gatsbyImageData(
                quality: 100, 
                placeholder: BLURRED
              )
            }
          }
          imgAlt
        }
        mainpitch {
          heading
          copy
        }
      }
    }
  }
`;
