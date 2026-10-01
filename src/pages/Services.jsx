import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      <div className="services-hero">
        <div className="wrap">
          <p className="eyebrow">What we do</p>
          <h1>Our borewell services</h1>
          <p className="lede">From a first home borewell to large commercial drilling projects, here's how we can help.</p>
        </div>
      </div>

      <section className="services-grid-wrap">
        <div className="wrap">
          <div className="services-grid">
            <div className="scard">
              <svg className="ico" viewBox="0 0 24 24" fill="none"><path d="M12 2v14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M7 5l5-3 5 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 21c0-2.5 1.3-3.8 3-3.8s3 1.3 3 3.8" stroke="currentColor" strokeWidth="1.8" /></svg>
              <h3>Borewell drilling</h3>
              <p>Professional borewell drilling services for residential, agricultural, and commercial requirements.</p>
            </div>
            <div className="scard">
              <svg className="ico" viewBox="0 0 24 24" fill="none"><rect x="3" y="10" width="18" height="8" rx="1" stroke="currentColor" strokeWidth="1.8" /><path d="M7 10V6h10v4" stroke="currentColor" strokeWidth="1.8" /><circle cx="8" cy="20" r="1.6" stroke="currentColor" strokeWidth="1.8" /><circle cx="16" cy="20" r="1.6" stroke="currentColor" strokeWidth="1.8" /></svg>
              <h3>Borewell rig service</h3>
              <p>Reliable rig services for drilling projects across different locations and ground conditions.</p>
            </div>
            <div className="scard">
              <svg className="ico" viewBox="0 0 24 24" fill="none"><path d="M3 20h18M5 20V10l7-5 7 5v10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.8" /></svg>
              <h3>Agricultural borewell drilling</h3>
              <p>Drilling solutions for agricultural land where groundwater is needed for irrigation.</p>
            </div>
            <div className="scard">
              <svg className="ico" viewBox="0 0 24 24" fill="none"><path d="M3 11l9-7 9 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 10v10h14V10" stroke="currentColor" strokeWidth="1.8" /><rect x="10" y="14" width="4" height="6" stroke="currentColor" strokeWidth="1.8" /></svg>
              <h3>Residential borewell drilling</h3>
              <p>Borewell drilling services for homes, individual properties, and residential projects.</p>
            </div>
            <div className="scard">
              <svg className="ico" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="1.8" /><path d="M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              <h3>Commercial borewell drilling</h3>
              <p>Drilling support for commercial properties, institutions, and larger water requirements.</p>
            </div>
            <div className="scard">
              <svg className="ico" viewBox="0 0 24 24" fill="none"><path d="M4 20V10l8-6 8 6v10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M4 20h16" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="13" r="1.5" fill="currentColor" /></svg>
              <h3>New borewell projects</h3>
              <p>From site requirements to drilling operations, we support new borewell projects end to end.</p>
            </div>
            <div className="scard wide">
              <svg className="ico" viewBox="0 0 24 24" fill="none"><path d="M12 19c-3.5 0-6.5-2-6.5-5.5C5.5 9.5 12 3 12 3s6.5 6.5 6.5 10.5c0 3.5-3 5.5-6.5 5.5z" stroke="white" strokeWidth="1.8" /></svg>
              <h3>Borewell drilling consultation</h3>
              <p>Need help understanding your drilling requirements? Contact us to discuss your location, requirements, and project needs — before any drilling begins.</p>
              <a className="btn btn-solid" href="tel:+919944345286">Call 99443 45286</a>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="wrap">
          <h2>Looking for reliable borewell drilling?</h2>
          <p>Talk to Sri Kalaiselvi Borewells today.</p>
          <div className="btn-row">
            <a className="btn btn-solid" href="tel:+919944345286">📞 99443 45286</a>
            <Link className="btn btn-outline" to="/contact">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}