import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage, getSrc } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Hero from '../components/Global/Hero';
import InternalPage from '../components/Global/InternalPage';
import { Helmet } from "react-helmet";
import ProjectItems from "../components/Global/ProjectItems";

// eslint-disable-next-line
export const WorkPageTemplate = ({
    seohelmet,
    hero,
    latest,
    whitepaper,
    marketing,
    emaillatest,
    projects
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
        pageSubText={hero.copy}
        img={heroImage}
        showcaseAlt={hero.imgAlt}
      />
      <InternalPage>
        <main>
            <div className="latest-success">
                <h4>{latest.title}</h4>
                <p>{latest.copy}</p>
            </div>
            <div className="latest-success-img">
                <img src={latest.img.childImageSharp.gatsbyImageData} alt={latest.imgAlt} />
            </div>
        </main>
        <div className="whitepaper">
            <div className="whitepaper-copy">
                <h4>{whitepaper.title}</h4>
                <p>{whitepaper.copy}</p>
            </div>
            <div className="whitepaper-preview">
                <img src={whitepaper.img.childImageSharp.gatsbyImageData} alt={whitepaper.imgAlt} />
            </div>
        </div>
        <div className="fullwidth-img">
            <img src={marketing.img.childImageSharp.gatsbyImageData} alt={marketing.imgAlt} />
        </div>
        <section>
            <div className="emailmarketing-showcase">
                <div className="latest-success">
                    <h4>{emaillatest.title}</h4>
                    <p>{emaillatest.copy}</p>
                </div>
                <img src={emaillatest.img.childImageSharp.gatsbyImageData} alt={emaillatest.imgAlt} />
            </div>
        </section>
        <section>
            <div className="otherprojects">
                <h4>{projects.title}</h4>
                <p>{projects.copy}</p>
            </div>
            
            <ProjectItems projects={projects.item}/>

        </section>

      </InternalPage>
    </div>
  );
};

WorkPageTemplate.propTypes = {
  seohelmet: PropTypes.object,
  hero: PropTypes.object,
  latest: PropTypes.object,
  whitepaper: PropTypes.object,
  marketing: PropTypes.object,
  emaillatest: PropTypes.object,
  projects: PropTypes.object
};

const WorkPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <WorkPageTemplate
        seohelmet={frontmatter.seohelmet}
        hero={frontmatter.hero}
        latest={frontmatter.latest}
        whitepaper={frontmatter.whitepaper}
        marketing={frontmatter.marketing}
        emaillatest={frontmatter.emaillatest}
        projects={frontmatter.projects}
      />
    </Layout>
  );
};

WorkPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default WorkPage;

export const pageQuery = graphql`
  query WorkPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "work-page" } }) {
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
        latest {
          title
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
        whitepaper {
          title
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
        marketing {
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
        emaillatest {
          title 
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
        projects {
          title 
          copy 
          item {
            logo {
              childImageSharp {
                gatsbyImageData(
                  quality: 100, 
                  placeholder: BLURRED
                )
              }
            }
            logoAlt
            link
          }
        }
      }
    }
  }
`;
