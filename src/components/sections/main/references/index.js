import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import './index.scss';
import { testimonials } from '../../../../assets/config/testimonials.json';

const References = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const completeTestimonials = Object.values(testimonials).filter(testimonial => testimonial.title && testimonial.text)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonialIndex(previousIndex => completeTestimonials[previousIndex + 1] ? previousIndex + 1 : 0);
    }, 5000);

    setIntervalId(interval);

    return () => clearInterval(interval);
  }, []);

  const getCompleteTestimonial = key => {
    const index = completeTestimonials.findIndex(testimonial => testimonial.id === key);
    clearInterval(intervalId);
    return index !== -1 ? index : activeTestimonialIndex;
  }

  const handleChangeTestimonial = key => setActiveTestimonialIndex(getCompleteTestimonial(key));

  const nextTestimonial = () => {
    clearInterval(intervalId);
    setActiveTestimonialIndex(completeTestimonials[activeTestimonialIndex + 1] ? activeTestimonialIndex + 1 : 0);
  }

  const prevTestimonial = () => {
    clearInterval(intervalId);
    setActiveTestimonialIndex(completeTestimonials[activeTestimonialIndex - 1] ? activeTestimonialIndex - 1 : completeTestimonials.length - 1);
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          bora: file(relativePath: { regex: "/bora.jpg/" }) { ...squareImage },
          fo: file(relativePath: { regex: "/fo.jpg/" }) { ...squareImage },
          lbt: file(relativePath: { regex: "/lbt.jpg/" }) { ...squareImage },
          my: file(relativePath: { regex: "/my.jpg/" }) { ...squareImage },
          nail: file(relativePath: { regex: "/nail.png/" }) { ...squareImage },
          pont: file(relativePath: { regex: "/pont.jpg/" }) { ...squareImage },
          ts: file(relativePath: { regex: "/ts.jpg/" }) { ...squareImage },
          universitas: file(relativePath: { regex: "/universitas.jpg/" }) { ...squareImage },
        }
      `}
      render={(data) => (
        <section className="references container" id="referenciak">
          <h1>Referenciák</h1>
          <div className="cards">
            {
              Object.entries(data).map(([key, value]) => (
                <article className="card" key={key}>
                  <div
                    className="img-wrapper"
                    role="button"
                    tabIndex="0"
                    onClick={() => handleChangeTestimonial(key)}
                    onKeyUp={() => handleChangeTestimonial(key)}
                  >
                    <Img
                      fluid={value.childImageSharp.fluid}
                      style={{ opacity: completeTestimonials[activeTestimonialIndex].name === testimonials[key].name ? 1 : 0.5 }}
                      alt={testimonials[key].name}
                    />
                  </div>
                </article>
              ))
            }
          </div>
          <div className="testimonials">
            <h2>{completeTestimonials[activeTestimonialIndex].title}</h2>
            <p>{completeTestimonials[activeTestimonialIndex].text}</p>
          </div>
          <div className="actions">
            <button className="arrow-btn" onClick={prevTestimonial}>
              <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              Előző
            </button>
            <button className="arrow-btn" onClick={nextTestimonial}>
              Következő
              <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </section>
      )}
    />
  );
};

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default References;
