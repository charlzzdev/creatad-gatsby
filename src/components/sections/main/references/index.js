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
