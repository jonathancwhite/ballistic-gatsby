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
    jobpost
}) => {
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
      />
      <InternalPage>
        <CenteredBriefText heading={jobpost.title}/>
        <div className="job-description">
            {jobpost.description}
        </div>
      </InternalPage>
    </div>
  );
};

JobListingPageTemplate.propTypes = {
  seohelmet: PropTypes.object,
  hero: PropTypes.object,
  jobpost: PropTypes.object,
};

const JobListingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <JobListingPageTemplate
        seohelmet={frontmatter.seohelmet}
        hero={frontmatter.hero}
        jobpost={frontmatter.jobpost}
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
        jobpost {
            title
            description
        }
      }
    }
  }
`;