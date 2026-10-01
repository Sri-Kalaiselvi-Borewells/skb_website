import React, { useRef } from 'react';

const SHEET_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbzNc4DpF9bEAduaFdYiEbZr74OBPF5JtQCYnNOlDZJKbjYjHKkKAi52dzyJWQtMjan1/exec';

export default function Contact() {
  const nameRef = useRef();
  const phoneRef = useRef();
  const locationRef = useRef();
  const serviceRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value.trim();
    const phone = phoneRef.current.value.trim();
    const location = locationRef.current.value.trim();
    const service = serviceRef.current.value.trim();
    const message = messageRef.current.value.trim();

    if (SHEET_WEBAPP_URL) {
      fetch(SHEET_WEBAPP_URL, {
        method: 'POST',
        body: new URLSearchParams({ name, phone, location, service, message })
      }).catch(() => { });
    }

    let text = `Hello Sri Kalaiselvi Borewells, I'd like to enquire about a borewell.%0A`;
    text += `Name: ${name}%0APhone: ${phone}`;
    if (location) text += `%0ALocation: ${location}`;
    if (service) text += `%0AService: ${service}`;
    if (message) text += `%0AMessage: ${message}`;

    window.open(`https://wa.me/919944345286?text=${text}`, '_blank');
  };

  return (
    <>
      <div className="contact-hero">
        <div className="wrap">
          <p className="eyebrow" style={{ color: '#4FA7B0' }}>Get in touch</p>
          <h1>Contact Sri Kalaiselvi Borewells</h1>
          <p className="lede">Have a borewell drilling requirement? Get in touch with us for more information about our services.</p>
        </div>
      </div>

      <section className="contact-main">
        <div className="wrap">
          <div className="contact-info">
            <h2>Visit or call us</h2>
            <div className="info-line">
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21z" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.8" /></svg>
              <div>
                <strong>Sri Kalaiselvi Borewells</strong>
                <span>Ponni Complex, 5, Vellore–Thoothukudi Hwy, Near Pachaiamman Kovil Arch, Tiruvannamalai, Annamalai R.F., Tamil Nadu – 606601</span>
              </div>
            </div>
            <div className="info-line">
              <svg viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.6c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" fill="currentColor" /></svg>
              <div>
                <strong>Call us</strong>
                <span><a href="tel:+919944345286">99443 45286</a><br /></span>
                <span><a href="tel:+919442120236">94421 20236</a></span>
              </div>
            </div>
            <div className="info-line">
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" stroke="currentColor" strokeWidth="1.8" /></svg>
              <div>
                <strong>WhatsApp</strong>
                <span><a href="https://wa.me/919944345286" target="_blank" rel="noopener noreferrer">Message us directly</a></span>
              </div>
            </div>
            <div className="map-frame">
              <iframe title="Sri Kalaiselvi Borewells location" loading="lazy"
                src="https://www.google.com/maps?cid=7437670665261128131&output=embed"></iframe>
            </div>
          </div>

          <form className="enquiry" onSubmit={handleSubmit}>
            <h2>Send an enquiry</h2>
            <p>Fill this in and it opens WhatsApp with your details, ready to send to us.</p>
            <div className="field">
              <label htmlFor="f-name">Name</label>
              <input id="f-name" name="name" type="text" placeholder="Enter your name" required ref={nameRef} />
            </div>
            <div className="field">
              <label htmlFor="f-phone">Phone number</label>
              <input id="f-phone" name="phone" type="tel" placeholder="Enter your phone number" required ref={phoneRef} />
            </div>
            <div className="field">
              <label htmlFor="f-location">Location</label>
              <input id="f-location" name="location" type="text" placeholder="Enter your location" ref={locationRef} />
            </div>
            <div className="field">
              <label htmlFor="f-service">Service required</label>
              <select id="f-service" name="service" ref={serviceRef}>
                <option value="">Select a service</option>
                <option>Borewell drilling</option>
                <option>Borewell rig service</option>
                <option>Agricultural borewell drilling</option>
                <option>Residential borewell drilling</option>
                <option>Commercial borewell drilling</option>
                <option>New borewell project</option>
                <option>Drilling consultation</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="f-message">Message</label>
              <textarea id="f-message" name="message" placeholder="Tell us about your borewell requirement" ref={messageRef}></textarea>
            </div>
            <button type="submit" className="btn btn-solid">Send Enquiry</button>
            <p className="form-note">Sending an enquiry opens WhatsApp on your device with your details filled in — nothing is stored on this site.</p>
          </form>
        </div>
      </section>

      <section className="quick-band">
        <div className="wrap">
          <h2>Need a borewell?</h2>
          <p>Call us directly to discuss your requirements — 99443 45286 · Tiruvannamalai, Tamil Nadu</p>
          <div className="btn-row">
            <a className="btn btn-solid" href="tel:+919944345286">📞 Call now</a>
            <a className="btn btn-outline" style={{ color: '#241a10' }} href="https://wa.me/919944345286" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}