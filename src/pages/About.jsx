import React from 'react';

export default function About() {
  return (
    <>
      <div className="about-hero">
        <div className="wrap">
          <p className="eyebrow">About us</p>
          <h1>About Sri Kalaiselvi Borewells</h1>
          <p className="lede"><strong>Sri Kalaiselvi Borewells</strong> is a borewell drilling service based in Tiruvannamalai, Tamil Nadu. We provide drilling and rig services for residential, agricultural, and commercial requirements. Our goal is simple — to provide reliable borewell drilling services with the right equipment, professional handling, and attention to each project.</p>
        </div>
      </div>

      <div className="locate-strip">
        <div className="wrap">
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21z" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.8" /></svg>
          <span>Located near Pachaiamman Kovil Arch, Tiruvannamalai — serving customers in Tiruvannamalai and surrounding areas.</span>
        </div>
      </div>

      <section className="mission-grid">
        <div className="wrap">
          <div className="mcard">
            <h3>Our mission</h3>
            <p>To provide dependable and efficient borewell drilling services while maintaining professionalism, safety, and customer satisfaction.</p>
          </div>
          <div className="mcard">
            <h3>Our vision</h3>
            <p>To become a trusted borewell drilling service provider in the Tiruvannamalai region through quality work, reliable equipment, and customer-focused service.</p>
          </div>
        </div>
      </section>

      <section className="values-band">
        <div className="wrap">
          <h2>What we stand for</h2>
          <div className="values-row">
            <span className="value-chip">Reliability</span>
            <span className="value-chip">Quality</span>
            <span className="value-chip">Professionalism</span>
            <span className="value-chip">Safety</span>
            <span className="value-chip">Customer satisfaction</span>
          </div>
        </div>
      </section>
    </>
  );
}