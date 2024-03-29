import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';

import './index.scss';
import { Header, Blog, Footer } from '../components';

const BlogPage = ({ data }) => {
  return (
    <>
      <Helmet>
        <title>Blog - CreatAd</title>
        <meta property="og:url" content="https://creatad.info/blog" />
        <meta property="og:image" content="https://creatad.info/logo_lg.png" />
        <meta property="og:description" content="Kreatív marketing szolgáltatások" />
        <meta name="description" content="Kreatív marketing szolgáltatások" />
      </Helmet>
      <Header logoSrc={data.logo.childImageSharp.fluid}></Header>
      <main>
        <Blog allPosts />
      </main>
      <Footer></Footer>
    </>
  );
}

export const query = graphql`
  query {
    logo: file(relativePath: { regex: "/logo/" }) {
      childImageSharp{
        fluid(quality: 100) { ...GatsbyImageSharpFluid }
      }
    }
  }
`;

export default BlogPage;
