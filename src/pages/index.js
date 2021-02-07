import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';

import './index.scss';
import { Header, About, Services, Divider, IdentityDesign, References, Blog, Contact, Footer } from '../components';

const IndexPage = ({ data }) => {
  return (
    <>
      <Helmet>
        <title>CreatAd</title>
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
        <Img fluid={data.infoblock.childImageSharp.fluid} className="infoblock" alt="Széchenyi 2020 infoblokk"></Img>
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
    },
    infoblock: file(relativePath: { regex: "/infoblokk/" }) {
      childImageSharp {
        fluid(quality: 100) { ...GatsbyImageSharpFluid }
      }
    }
  }
`;

export default IndexPage;
