import React from 'react';

export default function Gallery() {
  return (
    <>
      <div className="gallery-hero">
        <div className="wrap">
          <p className="eyebrow">Our work</p>
          <h1>Our work gallery</h1>
          <p className="lede">Take a look at our borewell drilling and rig operations across Tiruvannamalai and surrounding areas.</p>
        </div>
      </div>

      <section className="gallery-grid-wrap">
        <div className="wrap">
          <div className="gallery-grid">
            <div className="gtile">
              <img className="tile-bg" src="/images/gallery-rig-generator.jpg" alt="Sri Kalaiselvi Borewells rig truck with generator unit" loading="lazy" />
            </div>
            <div className="gtile">
              <img className="tile-bg" src="/images/gallery-rig-side-1.jpg" alt="Sri Kalaiselvi Rig Service drilling truck" loading="lazy" />
            </div>
            <div className="gtile">
              <img className="tile-bg" src="/images/gallery-rig-side-2.jpg" alt="Sri Kalaiselvi Rig Service drilling truck close view" loading="lazy" />
            </div>
            <div className="gtile">
              <img className="tile-bg" src="/images/gallery-truck-front.jpg" alt="Sri Kalaiselvi Ashok Leyland drilling truck front view" loading="lazy" />
            </div>
            <div className="gtile">
              <img className="tile-bg" src="/images/gallery-fleet.png" alt="Two Sri Kalaiselvi borewell trucks parked together" loading="lazy" />
            </div>
            <div className="gtile">
              <img className="tile-bg" src="/images/gallery-on-road.png" alt="Sri Kalaiselvi drilling truck on the highway at sunset" loading="lazy" />
            </div>
          </div>
          <div className="gallery-note">
            <strong>More photos coming soon.</strong> Have other photos of our rig, team, or completed work? Send them over on WhatsApp and we'll add them here.
          </div>
        </div>
      </section>

      <section className="gallery-cta">
        <div className="wrap">
          <h2>Have a borewell requirement?</h2>
          <p>Let our team help you with your next drilling project.</p>
          <div className="btn-row">
            <a className="btn btn-solid" style={{ background: '#fff8ec', color: '#241a10' }} href="tel:+919944345286">Call 99443 45286</a>
          </div>
        </div>
      </section>
    </>
  );
}