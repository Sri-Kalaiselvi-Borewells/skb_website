import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function Header() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'active' : '';

    const toggleMobileNav = () => {
        document.getElementById('mobileLinks').classList.toggle('open');
    };

    return (
        <>
            <div className="rail"><div className="rail-fill" id="railFill" style={{ width: '20%', backgroundColor: '#C98A45' }}></div></div>
            <header className="nav">
                <div className="nav-inner">
                    <Link to="/" className="brand">
                        <span className="brand-text">Sri Kalaiselvi Borewells<small>Tiruvannamalai · Tamil Nadu</small></span>
                    </Link>
                    <nav className="links" id="navLinks">
                        <Link to="/" className={isActive('/')}>Home</Link>
                        <Link to="/about" className={isActive('/about')}>About</Link>
                        <Link to="/services" className={isActive('/services')}>Services</Link>
                        <Link to="/gallery" className={isActive('/gallery')}>Gallery</Link>
                        <Link to="/contact" className={isActive('/contact')}>Contact</Link>
                    </nav>
                    <a className="nav-call" href="tel:+919944345286">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.6c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" fill="currentColor" /></svg>
                        <span className="long">99443 45286</span>
                    </a>
                    <button className="burger" aria-label="Open menu" onClick={toggleMobileNav}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
                    </button>
                </div>
                <div className="mobile-links" id="mobileLinks" onClick={toggleMobileNav}>
                    <Link to="/" className={isActive('/')}>Home</Link>
                    <Link to="/about" className={isActive('/about')}>About</Link>
                    <Link to="/services" className={isActive('/services')}>Services</Link>
                    <Link to="/gallery" className={isActive('/gallery')}>Gallery</Link>
                    <Link to="/contact" className={isActive('/contact')}>Contact</Link>
                </div>
            </header>
        </>
    );
}

function Footer() {
    return (
        <footer>
            <div className="wrap">
                <span>© {new Date().getFullYear()} Sri Kalaiselvi Borewells, Tiruvannamalai.</span>
                <span>Borewell drilling &amp; rig services · Tamil Nadu</span>
            </div>
        </footer>
    );
}

function FloatActions() {
    return (
        <div className="float-actions">
            <a className="fab call" href="tel:+919944345286" aria-label="Call Sri Kalaiselvi Borewells">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.6c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" fill="white" /></svg>
            </a>
            <a className="fab whatsapp" href="https://wa.me/919944345286" target="_blank" rel="noopener noreferrer" aria-label="Message on WhatsApp">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.3 0 .5-.1.2-.1.3-.3.5-.1.2-.3.4-.4.5-.2.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.4.2.5.3.1.2.1.9-.1 1.5z" fill="white" /></svg>
            </a>
        </div>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Header />
            <FloatActions />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
