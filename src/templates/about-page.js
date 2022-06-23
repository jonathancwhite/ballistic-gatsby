import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Global/Hero";
import TeamPicture from '../components/Team/TeamPicture';
import { getImage } from "gatsby-plugin-image";
import { template } from "lodash";
import SkewedSectionSec from "../components/SkewedSection/SkewedSectionSec";
import SimpleSection from "../components/SimpleSection/SimpleSection";
import OpenPositions from "../components/Team/OpenPositions";
import Benefits from "../components/Team/Benefits";
import CoreValues from "../components/CoreValues/CoreValues";
import { Helmet } from "react-helmet";

// eslint-disable-next-line
export const AboutPageTemplate = ({ 
  seohelmet,
  hero,
  team, 
  corevalues,
  openings,
  benefits,
}) => {
  const heroImage = getImage(hero.img);

  return (
    <div>
      <Helmet>
        <title>{seohelmet.title}</title>
        <link rel="canonical" href={seohelmet.canonical} />
        <meta name="description" content={seohelmet.meta} />
        <meta property="og:image" content={seohelmet.ogimg} />
        <meta property="og:title" content={seohelmet.title} />
        <meta property="og:description" content={seohelmet.meta} />
      </Helmet>
      <Hero
        pageTitle={hero.heading}
        pageSubText={hero.copy}
        img={heroImage}
        showcaseAlt={hero.imgAlt}
      />
      <div className="expertSection">
        <div className="expertContainer">
          <h4>{team.heading}</h4>
          <p>{team.copy}</p>
        </div>
      </div>
      <div className="container pd-top flex-4col teamMembers">
        <TeamPicture teamMembers={team.member} />
      </div>
      <SkewedSectionSec section="team">
        <SimpleSection
          classAdded={"coreValues"}
          heading={corevalues.heading}
          subheading={corevalues.subheading}
          copy1={corevalues.copy}
          color={"gold"}
        />
        <div className="coreValues">
          <div className="coreValuesContainer flex wrap">
            <CoreValues list={corevalues.corevalueList}/>
          </div>
        </div> 
      </SkewedSectionSec>
      <OpenPositions jobs={openings.position} />
      <Benefits benefits={benefits} />
    </div>
  );
};

AboutPageTemplate.propTypes = {
  seohelmet: PropTypes.object,
  hero: PropTypes.object,
  team: PropTypes.object,
  corevalues: PropTypes.object,
  openings: PropTypes.object,
  benefits: PropTypes.object
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        seohelmet={frontmatter.seohelmet}
        hero={frontmatter.hero}
        team={frontmatter.team}
        corevalues={frontmatter.corevalues}
        openings={frontmatter.openings}
        benefits={frontmatter.benefits}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: {templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        seohelmet {
          title
          canonical
          meta
          ogimg {
            childImageSharp {
              gatsbyImageData {
                quality: 100
              }
            }
          }
        }
        hero {
          heading
          copy
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
        team {
          heading
          copy
          member {
            name
            title
          }
        }
        corevalues {
          heading
          subheading
          copy
          corevalueList {
            cvTitle
            cvCopy
          }
        }
        openings {
          position {
            title
            copy
            location
            link
          }
        }
        benefits {
          heading
          copy
          blist {
            icon { 
              childImageSharp {
                gatsbyImageData(
                  quality: 100, 
                  placeholder: BLURRED
                )
              }
            }
            benefit
          }
        }
      }
    }
  }
`;
