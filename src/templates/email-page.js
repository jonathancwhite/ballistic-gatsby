import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage, getSrc } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Hero from '../components/Global/Hero';
import InternalPage from '../components/Global/InternalPage';
import LogoShowcaseList from '../components/Global/LogoShowcaseList';
import CenteredBriefText from '../components/Global/CenteredBriefText';
import SimpleSection from '../components/SimpleSection/SimpleSection';
import SkewedSection from '../components/SkewedSection/SkewedSectionSec';
import { Helmet } from "react-helmet";

// eslint-disable-next-line
export const EmailPageTemplate = ({
    seohelmet,
    hero,
    mainpitch,
    brands,
    secondary,
    finalpitch
}) => {
  const heroImage = getImage(hero.img);
  const secondaryImage = getSrc(secondary.img);
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
        <LogoShowcaseList
          logoshowcaseList={brands.blist}
        />
        <CenteredBriefText heading={mainpitch.heading} copy={mainpitch.copy}/>
        <SkewedSection horizontalImg={secondaryImage} imgAlt={secondary.imgAlt}>
          <SimpleSection
            classAdded={"darkbg"}
            heading={secondary.heading}
            subheading={secondary.subheading}
            copy1={secondary.copy}
            color={"gold"}
          />
        </SkewedSection>
        <div className="container pd-top hardwork">
            <h4 className="section-title">{finalpitch.heading}</h4>
            <p>{finalpitch.copy}</p>
        </div>
      </InternalPage>
    </div>
  );
};

EmailPageTemplate.propTypes = {
  seohelmet: PropTypes.object,
  hero: PropTypes.object,
  mainpitch: PropTypes.object,
  brands: PropTypes.object,
  secondary: PropTypes.object,
  finalpitch: PropTypes.object,
};

const EmailPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <EmailPageTemplate
        seohelmet={frontmatter.seohelmet}
        hero={frontmatter.hero}
        mainpitch={frontmatter.mainpitch}
        brands={frontmatter.brands}
        secondary={frontmatter.secondary}
        finalpitch={frontmatter.finalpitch}
      />
    </Layout>
  );
};

EmailPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default EmailPage;

export const pageQuery = graphql`
  query EmailPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "Email-page" } }) {
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
        brands {
          blist {
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
        }
        mainpitch {
          heading
          copy
        }
        secondary {
          img {
            childImageSharp {
              gatsbyImageData(
                quality: 100, 
                placeholder: BLURRED
              )
            }
          }
          imgAlt
          heading
          subheading
          copy
        }
        finalpitch {
          heading
          copy
        }
      }
    }
  }
`;
