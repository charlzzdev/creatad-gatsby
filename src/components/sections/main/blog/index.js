import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { withoutSpecialChars } from '../../../../utils';
import './index.scss';

const Blog = ({ allPosts }) => {
  const { allContentfulBlogPost } = useStaticQuery(query);
  const displayAmount = allPosts ? allContentfulBlogPost.edges.length : 3;

  return (
    <section className={`blog container ${allPosts ? 'blog-full-page' : ''}`} id="blog">
      <h1>Blog</h1>
      <div>
        {
          allContentfulBlogPost.edges.slice(0, displayAmount).map(({ node }) => (
            <Link
              to={`/blog/${withoutSpecialChars(node.title)}`}
              className="blog-post-link"
              key={node.id}
            >
              <h2>{node.title}</h2>
              <div className="date">{new Date(node.updatedAt).toLocaleDateString()}</div>
              <div>{node.seoDescription}</div>
            </Link>
          ))
        }
      </div>
      {
        displayAmount < allContentfulBlogPost.edges.length && (
          <Link
            to="/blog"
            className="btn more-blog-posts-btn"
          >Összes megtekintése</Link>
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
          id
          updatedAt
          title
          seoDescription
        }
      }
    }
  }
`;

export default Blog;
