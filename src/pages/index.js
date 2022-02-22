import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import './index.scss';
import { Header, About, Services, Divider, IdentityDesign, References, Blog, Contact, Footer } from '../components';

const IndexPage = ({ data }) => {
  return (
    <>
      <Helmet>
        <title>CreatAd</title>
        <meta property="og:url" content="https://creatad.info" />
        <meta property="og:image" content="https://creatad.info/logo_lg.png" />
        <meta property="og:description" content="Kreatív marketing szolgáltatások" />
        <meta name="description" content="Kreatív marketing szolgáltatások" />
      </Helmet>
      <Header logoSrc={data.logo.childImageSharp.fluid}></Header>
      <main>
        <About />
        <Services />
        <Divider />
        <IdentityDesign />
        <References />
        <Blog />
        <Contact />
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

export default IndexPage;
