import React, { useState, useEffect } from 'react';
import { MapPin, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/Logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // New flat menu per client request (11/09/2026)
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Schools', path: '/learn-a-sport/schools' },
    { name: 'Private Coaching', path: '/learn-a-sport/private' },
    { name: 'Sports', path: '/sports' },
    { name: 'Locker Room', path: '/locker-room' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const getLinkColor = (path) => {
    if (path === '/' && location.pathname === '/') return 'var(--gold)';
    if (path !== '/' && location.pathname.startsWith(path)) return 'var(--gold)';
    return 'var(--steel)';
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '18px 0',
        transition: 'var(--transition-smooth)',
        backgroundColor: scrolled || mobileMenuOpen ? 'rgba(255, 255, 255, 0.97)' : 'transparent',
        backdropFilter: scrolled || mobileMenuOpen ? 'blur(24px)' : 'none',
        borderBottom: scrolled || mobileMenuOpen ? '1px solid var(--panel-2)' : 'none',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
          {/* Logo + Location */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src={logoImg} alt="FirstMove Logo" style={{ height: '32px', objectFit: 'contain' }} className="nav-logo" />
            </Link>
            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--panel-2)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: 'var(--chalk)' }}>
              <MapPin size={16} color="var(--gold)" />
              <span className="font-mono nav-mumbai-text" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mumbai</span>
              <ChevronDown size={14} color="var(--steel)" className="nav-chevron" />
            </div>
            <style>{`
              @media (max-width: 400px) {
                .nav-logo { height: 24px !important; }
                .nav-mumbai-text { display: none !important; }
                .nav-chevron { display: none !important; }
              }
            `}</style>
          </div>

          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '16px', flexWrap: 'nowrap', justifyContent: 'flex-end' }}>
            <style>{`
              @media (min-width: 1024px) {
                .desktop-nav { display: flex !important; }
                .mobile-nav-toggle { display: none !important; }
              }
              .desktop-nav a { white-space: nowrap; }
            `}</style>

            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="font-mono"
                style={{
                  fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em',
                  color: getLinkColor(link.path), textDecoration: 'none', transition: 'var(--transition-fast)',
                  fontWeight: getLinkColor(link.path) === 'var(--gold)' ? 700 : 500,
                  borderBottom: getLinkColor(link.path) === 'var(--gold)' ? '2px solid var(--gold)' : '2px solid transparent',
                  paddingBottom: '2px'
                }}
                onMouseOver={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseOut={e => e.currentTarget.style.color = getLinkColor(link.path)}
              >
                {link.name}
              </Link>
            ))}

            <Link to="/contact" style={{
              display: 'inline-block', textDecoration: 'none', textAlign: 'center',
              backgroundColor: 'var(--gold)', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer', borderRadius: '4px',
              fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              transition: 'var(--transition-fast)', whiteSpace: 'nowrap'
            }}
              onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
              onMouseOut={e => e.currentTarget.style.opacity = '1'}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="mobile-nav-toggle" style={{ display: 'block' }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: 'none', border: 'none', color: 'black', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              {mobileMenuOpen ? <X size={24} color="black" /> : <Menu size={24} color="black" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 99,
        backgroundColor: 'var(--panel)',
        transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
        paddingTop: '100px', overflowY: 'auto'
      }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {navLinks.map((link, idx) => (
            <div key={idx} style={{ borderBottom: '1px solid var(--panel-2)', paddingBottom: '16px' }}>
              <Link
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display"
                style={{
                  fontSize: '28px', color: getLinkColor(link.path),
                  textDecoration: 'none', display: 'block'
                }}
              >
                {link.name}
              </Link>
            </div>
          ))}
          <Link to="/contact" style={{
            display: 'block', textAlign: 'center', textDecoration: 'none',
            backgroundColor: 'var(--gold)', color: '#fff', padding: '16px', border: 'none', cursor: 'pointer', borderRadius: '4px',
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
