import React, { useState, useEffect } from 'react';
import { MapPin, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/Logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Schools', path: '/learn-a-sport/schools' },
    { name: 'Private Coaching', path: '/learn-a-sport/private' },
    { name: 'Sports', path: '/sports' },
    { name: 'Locker Room', path: '/locker-room' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <style>{`
        .nav-glass {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 100;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Always glass — stronger when scrolled */
        .nav-glass.at-top {
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(24px) saturate(1.8);
          -webkit-backdrop-filter: blur(24px) saturate(1.8);
          border-bottom: 1px solid rgba(255,255,255,0.3);
          box-shadow: 0 1px 0 rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.04);
          padding: 14px 0;
        }

        .nav-glass.scrolled {
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(40px) saturate(2);
          -webkit-backdrop-filter: blur(40px) saturate(2);
          border-bottom: 1px solid rgba(242, 101, 34, 0.12);
          box-shadow: 0 2px 32px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.6) inset;
          padding: 12px 0;
        }

        .nav-glass.menu-open {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          padding: 14px 0;
          border-bottom: 1px solid rgba(242, 101, 34, 0.15);
        }

        .nav-link {
          font-family: var(--font-mono);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-decoration: none;
          color: rgba(10, 25, 47, 0.65);
          font-weight: 500;
          padding-bottom: 4px;
          border-bottom: 2px solid transparent;
          transition: color 0.2s ease, border-color 0.2s ease;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: var(--gold);
        }

        .nav-link.active {
          color: var(--gold);
          border-bottom-color: var(--gold);
          font-weight: 700;
        }

        .nav-cta {
          display: inline-block;
          text-decoration: none;
          text-align: center;
          background: var(--gold);
          color: #fff;
          padding: 10px 22px;
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          white-space: nowrap;
          box-shadow: 0 2px 12px rgba(242,101,34,0.35);
        }

        .nav-cta:hover {
          background: #d94f0e;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(242,101,34,0.4);
        }

        .desktop-nav { display: none !important; }

        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav-toggle { display: none !important; }
        }

        @media (max-width: 400px) {
          .nav-logo { height: 24px !important; }
          .nav-location { display: none !important; }
        }
      `}</style>

      <nav className={`nav-glass ${mobileMenuOpen ? 'menu-open' : scrolled ? 'scrolled' : 'at-top'}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>

          {/* Logo + Location */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src={logoImg} alt="FirstMove Logo" style={{ height: '34px', objectFit: 'contain' }} className="nav-logo" />
            </Link>
            <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(10,25,47,0.12)' }} />
            <div className="nav-location" style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: 'var(--chalk)' }}>
              <MapPin size={14} color="var(--gold)" />
              <span className="font-mono" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(10,25,47,0.55)' }}>Mumbai</span>
              <ChevronDown size={12} color="rgba(10,25,47,0.4)" />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ alignItems: 'center', gap: '20px', flexWrap: 'nowrap', justifyContent: 'flex-end' }}>
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className={`nav-link${isActive(link.path) ? ' active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="nav-cta">Get Started</Link>
          </div>

          {/* Mobile Toggle */}
          <div className="mobile-nav-toggle" style={{ display: 'block' }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: 'none', border: 'none', color: 'var(--chalk)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 99,
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
        paddingTop: '100px', overflowY: 'auto'
      }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {navLinks.map((link, idx) => (
            <div key={idx} style={{ borderBottom: '1px solid rgba(10,25,47,0.07)', paddingBottom: '16px' }}>
              <Link
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display"
                style={{
                  fontSize: '28px',
                  color: isActive(link.path) ? 'var(--gold)' : 'var(--chalk)',
                  textDecoration: 'none', display: 'block'
                }}
              >
                {link.name}
              </Link>
            </div>
          ))}
          <Link to="/contact" style={{
            display: 'block', textAlign: 'center', textDecoration: 'none',
            backgroundColor: 'var(--gold)', color: '#fff', padding: '16px', borderRadius: '6px',
            fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
            marginTop: '24px'
          }} onClick={() => setMobileMenuOpen(false)}>
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
