import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Global/Hero";

// eslint-disable-next-line
export const LandingPageTemplate = ({
  hero,
  content,
  contentComponent,
  title,
}) => {
  const PostContent = contentComponent || Content;
  const heroImage = getImage(image) || image;

  return (
    <>
    <Hero 
      pageTitle={hero.heading}
      ctaLink={hero.ctaLink}
      ctaTitle={hero.ctaTitle}
      img={heroImage}
      showcaseAlt={hero.imgAlt}
    />
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

LandingPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
};

const LandingPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <LandingPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

LandingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default LandingPage;

export const pageQuery = graphql`
  query LandingPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
