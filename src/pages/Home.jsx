import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <div>
            <p className="hero-eyebrow">Borewell drilling &amp; rig services</p>
            <h1>Reliable borewell drilling for Tiruvannamalai</h1>
            <p className="lede">Professional borewell drilling solutions for homes, farms and commercial properties. Reliable equipment, experienced operators, and groundwater solutions that work for your land.</p>
            <div className="btn-row">
              <a className="btn btn-solid" href="tel:+919944345286">Call Now — 99443 45286</a>
              <a className="btn btn-outline" style={{ color: '#f2e8d6' }} href="https://wa.me/919944345286" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
            </div>
          </div>
          <div className="hero-rig-wrap">
            <img className="hero-rig" src="/images/hero-rig.png" alt="Sri Kalaiselvi Borewells drilling rig truck" loading="eager" />
          </div>
        </div>
      </div>

      <section className="intro">
        <div className="wrap grid">
          <div>
            <p className="kicker">Your trusted borewell partner</p>
            <h2>Dependable drilling, done right the first time</h2>
            <p className="body">Sri Kalaiselvi Borewells provides borewell drilling and rig services in and around Tiruvannamalai. We focus on dependable service, proper drilling practices, and timely completion of every project.</p>
          </div>
          <div className="why-list">
            <div className="why-item">
              <svg className="ico" viewBox="0 0 24 24" fill="none"><path d="M12 2v6M12 2l-4 3M12 2l4 3M6 22c0-4 2.5-6 6-6s6 2 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.8" /></svg>
              <div><h3>Reliable drilling service</h3><p>A professional approach to every drilling project, from the first visit to completion.</p></div>
            </div>
            <div className="why-item">
              <svg className="ico" viewBox="0 0 24 24" fill="none"><rect x="3" y="10" width="18" height="8" rx="1" stroke="currentColor" strokeWidth="1.8" /><path d="M7 10V6h10v4" stroke="currentColor" strokeWidth="1.8" /><circle cx="8" cy="20" r="1.6" stroke="currentColor" strokeWidth="1.8" /><circle cx="16" cy="20" r="1.6" stroke="currentColor" strokeWidth="1.8" /></svg>
              <div><h3>Modern rig equipment</h3><p>Suitable drilling equipment matched to different locations and ground conditions.</p></div>
            </div>
            <div className="why-item">
              <svg className="ico" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.8" /><path d="M5 21c0-4 3-6 7-6s7 2 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              <div><h3>Experienced operators</h3><p>Skilled handling of drilling operations, so each borewell is done safely and correctly.</p></div>
            </div>
            <div className="why-item">
              <svg className="ico" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21z" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.8" /></svg>
              <div><h3>Local service</h3><p>Based in Tiruvannamalai and serving the surrounding areas we know well.</p></div>
            </div>
            <div className="why-item">
              <svg className="ico" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h10M4 18h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              <div><h3>Customer-focused approach</h3><p>Clear communication and service tailored to your requirements, start to finish.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Need a borewell? Let's get started.</h2>
          <p>Contact Sri Kalaiselvi Borewells to discuss your borewell drilling requirements.</p>
          <div className="btn-row">
            <a className="btn btn-solid" href="tel:+919944345286">Call 99443 45286</a>
            <Link className="btn btn-outline" to="/contact">Send an enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}