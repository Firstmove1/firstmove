import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/Logo.png';

const Footer = () => (
  <footer className="reveal" style={{ padding: '80px 0 40px', borderTop: '1px solid var(--panel-2)', backgroundColor: 'var(--panel)' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '48px', marginBottom: '60px' }}>
      {/* Brand */}
      <div style={{ gridColumn: '1 / -1', maxWidth: '300px' }}>
        <div style={{ marginBottom: '24px' }}>
          <img src={logoImg} alt="FirstMove Logo" style={{ height: '48px', objectFit: 'contain' }} />
        </div>
        <p style={{ color: 'var(--steel)', fontSize: '14px', lineHeight: 1.6, marginBottom: '32px' }}>
          Premium sports coaching & academy for all ages. Elevate your game with elite coaches and world-class programs.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <div className="eyebrow" style={{ color: 'var(--chalk)', marginBottom: '24px' }}>Quick Links</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { name: 'Home', path: '/' },
            { name: 'Schools', path: '/learn-a-sport/schools' },
            { name: 'Private Coaching', path: '/learn-a-sport/private' },
            { name: 'Sports', path: '/sports' },
            { name: 'Locker Room', path: '/locker-room' },
            { name: 'About Us', path: '/about' },
            { name: 'Contact Us', path: '/contact' }
          ].map((link, j) => (
            <Link key={j} to={link.path} className="font-mono" style={{ fontSize: '13px', color: 'var(--steel)', textDecoration: 'none', transition: 'var(--transition-fast)' }}
              onMouseOver={e => e.target.style.color = 'var(--chalk)'} onMouseOut={e => e.target.style.color = 'var(--steel)'}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Contact & Social */}
      <div>
        <div className="eyebrow" style={{ color: 'var(--chalk)', marginBottom: '24px' }}>Contact & Social</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { name: 'Instagram', path: '#' },
            { name: 'Facebook', path: '#' },
            { name: 'Twitter', path: '#' },
            { name: 'hello@firstmove.co.in', path: 'mailto:hello@firstmove.co.in' },
            { name: '+91 98765 43210', path: 'tel:+919876543210' }
          ].map((link, j) => (
            <a key={j} href={link.path} className="font-mono" style={{ fontSize: '13px', color: 'var(--steel)', textDecoration: 'none', transition: 'var(--transition-fast)' }}
              onMouseOver={e => e.target.style.color = 'var(--chalk)'} onMouseOut={e => e.target.style.color = 'var(--steel)'}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom bar — Privacy & Terms moved here per task #16 */}
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', paddingTop: '32px', borderTop: '1px solid var(--panel-2)', color: 'var(--steel)', fontSize: '12px' }}>
      <div className="font-mono">© 2026 FirstMove.co.in. All rights reserved.</div>
      <div style={{ display: 'flex', gap: '24px' }}>
        <Link to="/privacy" className="font-mono" style={{ fontSize: '12px', color: 'var(--steel)', textDecoration: 'none' }}
          onMouseOver={e => e.target.style.color = 'var(--chalk)'} onMouseOut={e => e.target.style.color = 'var(--steel)'}>
          Privacy Policy
        </Link>
        <Link to="/terms" className="font-mono" style={{ fontSize: '12px', color: 'var(--steel)', textDecoration: 'none' }}
          onMouseOver={e => e.target.style.color = 'var(--chalk)'} onMouseOut={e => e.target.style.color = 'var(--steel)'}>
          Terms of Service
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
