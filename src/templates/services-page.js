import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Hero from '../components/Global/Hero';
import InternalPage from '../components/Global/InternalPage';
import LogoShowcaseList from '../components/Global/LogoShowcaseList';
import CenteredBriefText from '../components/Global/CenteredBriefText';
import SimpleSection from '../components/SimpleSection/SimpleSection';
import SkewedSection from '../components/SkewedSection/SkewedSectionSec';
import { Helmet } from "react-helmet";

// eslint-disable-next-line
export const ServicesPageTemplate = ({
    seo,
    hero,
    mainpitch,
    brands,
    secondary,
    finalpitch
}) => {
  const heroImage = getImage(hero.img);
  const secondaryImage = getImage(secondary.img);
  const ogImage = getImage(seo.img);

  return (
    <div>
      <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.meta} />
          <link rel="canonical" href={seo.canonical} />
          <meta property="og:image" content={seo.img} />
          <meta property="og:url" content={seo.canonical} />
      </Helmet>
      <Hero
        pageTitle={hero.heading}
        ctaTitle={hero.ctaText}
        ctaLink={hero.ctaLink}
        img={hero.img}
        showcaseAlt={hero.imgAlt}
      />
      <InternalPage>
        <LogoShowcaseList
          logoshowcaseList={brands.blist}
        />
        <CenteredBriefText heading={mainpitch.heading} copy={mainpitch.copy}/>
        <SkewedSection horizontalImg={secondary.img} imgAlt={secondary.imgAlt}>
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

ServicesPageTemplate.propTypes = {
  seo: PropTypes.object,
  hero: PropTypes.object,
  mainpitch: PropTypes.object,
  brands: PropTypes.object,
  secondary: PropTypes.object,
  finalpitch: PropTypes.object,
};

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ServicesPageTemplate
        seo={frontmatter.seo}
        hero={frontmatter.hero}
        mainpitch={frontmatter.mainpitch}
        brands={frontmatter.brands}
        secondary={frontmatter.secondary}
        finalpitch={frontmatter.finalpitch}
      />
    </Layout>
  );
};

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ServicesPage;

export const pageQuery = graphql`
  query ServicesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "services-page" } }) {
      frontmatter {
        seo {
            title,
            canonical,
            meta,
            ogimg {
                childImageSharp {
                    gatsbyImageData(
                        quality: 100, 
                        placeholder: BLURRED
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
