import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import './index.scss';

const Blog = () => {
  const { allContentfulBlogPost } = useStaticQuery(query);
  const [displayAmount, setDisplayAmount] = useState(3);

  return (
    <section className="blog container" id="blog">
      <h1>Blog</h1>
      <div>
        {
          allContentfulBlogPost.edges.slice(0, displayAmount).map(({ node }) => (
            <details key={node.id}>
              <summary>
                <h2>{node.title}</h2>
                <div className="date">{new Date(node.createdAt).toLocaleDateString()}</div>
                <div>{renderRichText(node.summary)}</div>
              </summary>
              <div className="content">{renderRichText(node.content)}</div>
            </details>
          ))
        }
      </div>
      {
        displayAmount < allContentfulBlogPost.edges.length && (
          <button
            onClick={() => setDisplayAmount(allContentfulBlogPost.edges.length)}
            className="more-blog-posts-btn"
          >Összes megtekintése</button>
        )
      }
    </section>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulBlogPost {
      edges {
        node {
          content {
            raw
          }
          id
          createdAt
          title
          summary {
            raw
          }
        }
      }
    }
  }
`;

export default Blog;
