import React from 'react';

import './index.scss';

const Services = () => {
  return (
    <section className="services container">
      <h2>Így ma a CreatAd kreatív, profi szolgáltatás a következőkből állhat:</h2>
      <div className="services--cards">
        <article className="offer-card">
          <h3>Közösségi média szolgáltatások</h3>
          <ul>
            <li>egyéni tanácsadás</li>
            <li>kreatív tartalom marketing</li>
            <li>termék/szolgáltatás fotózás</li>
            <li>hirdetés optimalizálás</li>
            <li>influencer kapcsolattartás</li>
          </ul>
        </article>
        <article className="offer-card">
          <h3>Grafikai szolgáltatások</h3>
          <ul>
            <li>logó tervezés</li>
            <li>komplett arculat tervezés</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
