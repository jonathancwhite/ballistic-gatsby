import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Global/Hero";
import { Helmet } from "react-helmet";

// eslint-disable-next-line
export const NoIMGLandingPageTemplate = ({
  seohelmet,
  hero,
  content,
  contentComponent,
  title,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
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
    />
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

NoIMGLandingPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  seohelmet: PropTypes.object,
  hero: PropTypes.object
};

const NoIMGLandingPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <NoIMGLandingPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        seohelmet={post.frontmatter.seohelmet}
        hero={post.frontmatter.hero}
      />
    </Layout>
  );
};

NoIMGLandingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default NoIMGLandingPage;

export const pageQuery = graphql`
  query NoIMGLandingPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        seohelmet {
          title
          canonical
          meta
          ogimg {
            childImageSharp {
              gatsbyImageData (
                quality: 100
              )
            }
          }
        }
        hero {
          heading
        }
      }
    }
  }
`;
