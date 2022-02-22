import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import './blog-post.scss';
import { Header, Footer } from '../components';

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return <Img
        style={{ height: '400px' }}
        imgStyle={{ objectFit: 'contain' }}
        fluid={node.data.target.fluid}
      />
    }
  }
};

const BlogPage = ({ data, pathContext, location }) => {
  const [imageViewerSrc, setImageViewerSrc] = useState(null);
  const { id, title, seoDescription, updatedAt } = pathContext.blog;
  const content = data.allContentfulBlogPost.edges
    .find(({ node }) => node.id === id)
    .node.content; // images in rich text are not supported in gatsby-node.js queries

  useEffect(() => {
    document.querySelectorAll('.blog-post picture').forEach(picture => {
      const pictureSrc = picture.querySelector('img').src;

      picture.addEventListener('click', () => {
        setImageViewerSrc(pictureSrc);
      });
    });
  }, []);

  const closeImageViewer = () => setImageViewerSrc(null);

  return (
    <>
      <Helmet>
        <title>{title} - CreatAd</title>
        <meta property="og:url" content={`https://creatad.info${location.pathname}`} />
        <meta property="og:image" content="https://creatad.info/logo_lg.png" />
        <meta property="og:description" content={seoDescription} />
        <meta name="description" content={seoDescription} />
      </Helmet>
      <Header logoSrc={data.logo.childImageSharp.fluid}></Header>
      <main>
        <div className="blog-post container">
          <h1>{title}</h1>
          <div className="date">{new Date(updatedAt).toLocaleDateString()}</div>
          <p>{seoDescription}</p>
          {renderRichText(content, richTextOptions)}
          {
            imageViewerSrc && <>
              <img
                className="blog-img-viewer"
                src={imageViewerSrc}
                onClick={closeImageViewer}
                onWheel={closeImageViewer}
              />
              <svg onClick={closeImageViewer} className="close-img-viewer-icon" viewBox="0 0 24 24" width="48" height="48" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </>
          }
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          id,
          content {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                __typename
                title
                fluid(maxHeight: 1000) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    },
    logo: file(relativePath: { regex: "/logo/" }) {
      childImageSharp{
        fluid(quality: 100) { ...GatsbyImageSharpFluid }
      }
    }
  }
`;

export default BlogPage;
