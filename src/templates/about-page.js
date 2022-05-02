import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Global/Hero";
import TeamPicture from '../components/Team/TeamPicture';
import { template } from "lodash";
import SkewedSectionSec from "../components/SkewedSection/SkewedSectionSec";
import SimpleSection from "../components/SimpleSection/SimpleSection";
import CoreValues from "../components/SimpleSection/CoreValues";
import OpenPositions from "../components/Team/OpenPositions";
import Benefits from "../components/Team/Benefits";

// eslint-disable-next-line
export const AboutPageTemplate = ({ 
  hero,
  team, 
  corevalues,
  openings,
  benefits,
}) => {
  const heroImage = getImage(hero.img);

  return (
    <div>
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
        {team.member.map((item) => (
          <TeamPicture name={item.name} role={item.title} />
        ))}
      </div>
      <SkewedSectionSec>
        <SimpleSection
          classAdded={"darkbg"}
          heading={corevalues.heading}
          subheading={corevalues.subheading}
          copy1={corevalues.copy}
          color={"gold"}
          sectionWidth={"col-50 m-auto"}
        />
        <div className="coreValues">
          <div className="coreValuesContainer flex wrap">
            {corevalues.corevalueList.map((item) => (
              <div class="coreValue__item">
                <h4>{item.cvTitle}</h4>
                <p>{item.cvCopy}</p>
              </div>
            ))}
          </div>
        </div>
      </SkewedSectionSec>
      <OpenPositions jobs={openings.position} />
      <Benefits benefits={benefits} />
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
