import React from 'react';

import './index.scss';

const Contact = () => {
  return (
    <section className="contact container" id="kapcsolat">
      <h1>Kapcsolat</h1>
      <p className="small-text-info main-email-info">Ha nem válaszolok 2 napon belül, akkor írj manuálisan emailt a <a href="mailto:kapcsolat@creatad.info">kapcsolat@creatad.info</a> címre.</p>
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="check">
        <p hidden>Ezt ne töltsd ki: <input type="text" name="check" /></p>
        <input type="hidden" name="form-name" value="contact" />
        <div className="input-field">
          <input type="text" name="name" id="name" placeholder="Név" />
          <label htmlFor="name">Név</label>
        </div>
        <div className="input-field">
          <input type="text" name="phone" id="phone" placeholder="Telefonszám" />
          <label htmlFor="phone">Telefonszám</label>
        </div>
        <div className="input-field">
          <input type="email" name="email" id="email" placeholder="Email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <textarea name="message" rows="5" id="message" placeholder="Üzenet"></textarea>
          <label htmlFor="message">Üzenet</label>
        </div>
        <button>Küldés</button>
        <div className="small-text-info">
          Nem sikerült? Küldj manuálisan emailt a <a href="mailto:kapcsolat@creatad.info">kapcsolat@creatad.info</a> címre.
        </div>
      </form>
    </section>
  );
};

export default Contact;
