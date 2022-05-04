import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage, getSrc } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Hero from '../components/Global/Hero';
import InternalPage from '../components/Global/InternalPage';
import LogoShowcase from '../components/Global/LogoShowcase';
import SimpleSection from '../components/SimpleSection/SimpleSection';
import SkewedSection from '../components/SkewedSection/SkewedSectionSec';
import ServicesPromo from '../components/Services/ServicesPromo';
import Numbers from "../components/SkewedSection/Numbers";
import BallisticLogoBG from '../img/logos/Ballistic-circle-white-21.png';


// eslint-disable-next-line
export const IndexPageTemplate = ({
  seohelmet,
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
  partners,
  about,
  services,
  nextsteps,
  numbers
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <Helmet>
        <title>{seohelmet.title}</title>
        <meta name="description" content={seohelmet.meta} />
        <link rel="canonical" href={seohelmet.canonical} />
        {/* <meta property="og:image" content={ogImage} /> */}
        <meta property="og:url" content={seohelmet.canonical} />
      </Helmet>
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
        <LogoShowcase
          logo1={brands.brandLogo1.childImageSharp.gatsbyImageData}
          logo2={brands.brandLogo2.childImageSharp.gatsbyImageData}
          logo3={brands.brandLogo3.childImageSharp.gatsbyImageData}
          logo4={brands.brandLogo4.childImageSharp.gatsbyImageData}
          logo5={brands.brandLogo5.childImageSharp.gatsbyImageData}
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
          logo1={partners.partnerLogo1.childImageSharp.gatsbyImageData}
          logo2={partners.partnerLogo2.childImageSharp.gatsbyImageData}
          logo3={partners.partnerLogo3.childImageSharp.gatsbyImageData}
          logo4={partners.partnerLogo4.childImageSharp.gatsbyImageData}
          logo5={partners.partnerLogo5.childImageSharp.gatsbyImageData}
        />
        <SkewedSection imageHighlight={"yes"}>
          <SimpleSection
            classAdded={"darkbg"}
            heading={about.heading}
            subheading={about.subheading}
            copy1={about.copy}
            sectionWidth={about.sectionWidth}
            color={about.color}
            cta={about.cta}
            ctaLink={about.ctaLink}
            secondaryCol1Title={about.columnTitle1}
            secondaryCol1Text={about.columnText1}
            secondaryCol2Title={about.columnTitle2}
            secondaryCol2Text={about.columnText2}
          />
        </SkewedSection>
        <ServicesPromo
          heading={services.heading}
          subheading={services.subheading}
          emailText={services.emailText}
          seoText={services.seoText}
          devText={services.devText}
        />
        <SkewedSection section="nextsteps">
        <div className="skewedSection__container--noFlex">
          <div className="skewFix">
            <SimpleSection
              classAdded={"darkbg"}
              heading={nextsteps.heading}
              subheading={nextsteps.subheading}
              copy1={nextsteps.copy}
              sectionWidth={nextsteps.sectionWidth}
              color={nextsteps.color}
            />
            <Numbers 
              num1={numbers.num1}
              text1={numbers.text1}
              num2={numbers.num2}
              text2={numbers.text2}
              num3={numbers.num3}
              text3={numbers.text3}
              num4={numbers.num4}
              text4={numbers.text4}
            />
            <div className="skewedSection__baLogo">
              <img src={BallisticLogoBG} alt="Ballistic Logo in background slightly hidden" />
            </div>
          </div>
        </div>
        </SkewedSection>
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
  services: PropTypes.object,
  nextsteps: PropTypes.object,
  numbers: PropTypes.object
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
        seohelmet {
          title
          meta
          canonical
        }
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
        brands {
          brandLogo1 {
            childImageSharp {
              gatsbyImageData(
                quality: 100, 
                placeholder: BLURRED
              )
            }
          }
          brandLogo2 {
            childImageSharp {
              gatsbyImageData(
                quality: 100, 
                placeholder: BLURRED
              )
            }
          }
          brandLogo3 {
            childImageSharp {
              gatsbyImageData(
                quality: 100, 
                placeholder: BLURRED
              )
            }
          }
          brandLogo4 {
            childImageSharp {
              gatsbyImageData(
                quality: 100, 
                placeholder: BLURRED
              )
            }
          }
          brandLogo5 {
            childImageSharp {
              gatsbyImageData(
                quality: 100, 
                placeholder: BLURRED
              )
            }
          }
        }
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
        partners {
          partnerLogo1 {
            childImageSharp {
              gatsbyImageData(
                quality: 100, 
                placeholder: BLURRED
              )
            }
          }
          partnerLogo2 {
            childImageSharp {
              gatsbyImageData(
                quality: 100, 
                placeholder: BLURRED
              )
            }
          }
          partnerLogo3 {
            childImageSharp {
              gatsbyImageData(
                quality: 100, 
                placeholder: BLURRED
              )
            }
          }
          partnerLogo4 {
            childImageSharp {
              gatsbyImageData(
                quality: 100, 
                placeholder: BLURRED
              )
            }
          }
          partnerLogo5 {
            childImageSharp {
              gatsbyImageData(
                quality: 100, 
                placeholder: BLURRED
              )
            }
          }
        }
        about {
          heading
          subheading
          sectionwidth
          copy
          color
          cta
          ctaLink
          columnTitle1
          columnText1
          columnTitle2
          columnText2
        }
        services {
          heading
          subheading
          emailText
          seoText
          devText
        }
        nextsteps {
          heading
          subheading
          copy
          color
          sectionwidth
        }
        numbers {
          num1
          text1
          num2
          text2
          num3
          text3
          num4
          text4
        }
      }
    }
  }
`;
