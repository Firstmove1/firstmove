import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    url: 'https://images.pexels.com/photos/29873466/pexels-photo-29873466.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Joyful badminton player celebrating victory indoors'
  },
  {
    url: 'https://images.pexels.com/photos/14605729/pexels-photo-14605729.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Boy playing badminton in sports hall'
  },
  {
    url: 'https://images.pexels.com/photos/32944292/pexels-photo-32944292.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Group of men engaged in indoor badminton discussion'
  }
];

const ALL_SPORTS = [
  'Athletics', 'Badminton', 'Basketball', 'Chess', 'Cricket',
  'Football', 'Gymnastics', 'Judo', 'Karate', 'Kickboxing',
  'Padel', 'Pickleball', 'Skating', 'Squash', 'Swimming',
  'Table Tennis', 'Taekwondo', 'Tennis'
];

const Hero = ({ isLoaded }) => {
  const [current, setCurrent] = useState(0);
  const [stats, setStats] = useState({ venues: 0, coaches: 0, cities: 0 });
  const heroRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-rotate slides
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Stats counter
  useEffect(() => {
    if (!isLoaded) return;
    const duration = 2000;
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setStats({
        venues: Math.floor(easeOut * 482),
        coaches: Math.floor(easeOut * 128),
        cities: Math.floor(easeOut * 24)
      });
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isLoaded]);

  return (
    <>
      <style>{`
        @keyframes hero-img-kenburns {
          from { transform: scale(1); }
          to   { transform: scale(1.08); }
        }
        @keyframes hero-fade-in {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes sports-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hero-slide-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.2s ease;
          animation: hero-img-kenburns 8s ease-out forwards;
        }
        .hero-slide-img.active {
          opacity: 1;
        }
        .hero-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(255,255,255,0.35);
          border: none; cursor: pointer;
          transition: all 0.3s ease;
        }
        .hero-dot.active {
          width: 24px; border-radius: 4px;
          background: var(--gold);
        }
        .sports-tag {
          display: flex;
          gap: 48px;
          animation: sports-scroll 30s linear infinite;
          white-space: nowrap;
        }
        .sports-strip-wrap {
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>

      <section ref={heroRef} style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden'
      }}>

        {/* ── Image slideshow ── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          {SLIDES.map((slide, i) => (
            <img
              key={i}
              src={slide.url}
              alt={slide.alt}
              className={`hero-slide-img${i === current ? ' active' : ''}`}
            />
          ))}
          {/* Dark gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(10,25,47,0.55) 0%, rgba(10,25,47,0.70) 50%, rgba(10,25,47,0.92) 100%)',
            zIndex: 1
          }} />
        </div>

        {/* ── Hero content ── */}
        <div style={{
          position: 'relative', zIndex: 2,
          flex: 1, display: 'flex', alignItems: 'center',
          paddingTop: '120px', paddingBottom: '60px'
        }}>
          <div className="container" style={{ width: '100%' }}>
            <div style={{ maxWidth: '860px' }}>

              {/* Eyebrow */}
              <div className="font-mono" style={{
                fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase',
                color: 'var(--gold)', marginBottom: '24px',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out 0.1s'
              }}>
                Structured Coaching &nbsp;•&nbsp; Certified Mentors &nbsp;•&nbsp; Tracked Growth
              </div>

              {/* Headline */}
              <h1 className="font-display" style={{
                fontSize: 'clamp(48px, 7vw, 96px)',
                color: '#fff', lineHeight: 0.95, marginBottom: '28px',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(28px)',
                transition: 'all 0.7s ease-out 0.25s'
              }}>
                Don't Just Watch<br />
                <span style={{ color: 'var(--gold)' }}>Champions.</span><br />
                Become One.
              </h1>

              {/* Subtext */}
              <p style={{
                fontSize: 'clamp(15px, 1.5vw, 18px)', color: 'rgba(255,255,255,0.75)',
                maxWidth: '640px', lineHeight: 1.8, marginBottom: '44px',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.7s ease-out 0.4s'
              }}>
                Raw passion needs structured discipline. Whether your child is discovering their first sport in school or you're mastering your technique — our structured curriculum and passionate coaches turn practice into the best hour of your week.
              </p>

              {/* CTA Buttons */}
              <div style={{
                display: 'flex', gap: '16px', flexWrap: 'wrap',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.7s ease-out 0.55s'
              }}>
                <Link to="/learn-a-sport/schools" style={{
                  backgroundColor: 'var(--gold)', color: '#fff',
                  padding: '16px 36px', borderRadius: '8px',
                  fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 20px rgba(242,101,34,0.45)'
                }}
                  onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(242,101,34,0.55)'; }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(242,101,34,0.45)'; }}
                >
                  For Schools <ArrowRight size={15} />
                </Link>

                <Link to="/learn-a-sport/private" style={{
                  backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff',
                  padding: '16px 36px', borderRadius: '8px',
                  fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.25s ease'
                }}
                  onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  For Private Coaching
                </Link>
              </div>

            </div>

            {/* Slide dots */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '48px' }}>
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`hero-dot${i === current ? ' active' : ''}`}
                  onClick={() => { setCurrent(i); clearInterval(intervalRef.current); }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

          {/* Below Hero: Sports strip + Safety bar */}
        <div style={{ position: 'relative', zIndex: 2, backgroundColor: 'rgba(10,25,47,0.95)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>

          {/* Expert-led Coaching for ... */}
          <div style={{ padding: '32px 0 0' }}>
            <div className="container">
              <p className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px', opacity: 0.8 }}>
                Expert-Led Coaching For
              </p>
            </div>
            <div className="sports-strip-wrap" style={{ paddingBottom: '32px' }}>
              <div style={{ display: 'flex' }}>
                {/* Duplicate for seamless scroll */}
                <div className="sports-tag">
                  {[...ALL_SPORTS, ...ALL_SPORTS].map((sport, i) => (
                    <span key={i} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '20px',
                      fontFamily: 'var(--font-display)',
                      fontSize: '18px',
                      fontWeight: 400,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'rgba(255,255,255,0.65)'
                    }}>
                      {sport}
                      <span style={{ color: 'var(--gold)', fontSize: '10px', opacity: 0.6 }}>◆</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Safety bar */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '16px 0' }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Shield size={14} color="var(--gold)" />
              <span className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
                Certified On-Campus Coaches &nbsp;·&nbsp; Structured Safety Standards &nbsp;·&nbsp; Background-Checked Professionals
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;
