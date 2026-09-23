import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SCHOOL_POINTS = [
  { title: 'Strict Child-Safe Standards', desc: '100% background-checked, first-aid certified, and safety-trained professional coaches.' },
  { title: 'Multi-Sport Exposure', desc: 'Versatile training across diverse sports to develop well-rounded athleticism, coordination, and agility.' },
  { title: 'Pathway to Tournaments', desc: 'Phased training that sharpens tactical skills, team spirit, and match temperament for inter-school competitions.' },
  { title: 'Tracked Development', desc: 'Term-wise reports on stamina, agility, and sport-specific milestones shared directly with parents.' },
];

const PRIVATE_POINTS = [
  { title: 'Your Location, Your Time', desc: 'Progressive training brought straight to your preferred court at a flexible schedule.' },
  { title: 'For Kids & Adults Alike', desc: 'Tailored sessions whether you\'re introducing your child to a new sport or learning one yourself.' },
  { title: 'Verified & Safe Professionals', desc: '100% background-checked, vetted coaches delivering a secure, family-friendly training environment.' },
  { title: 'Personalized Pace & Focus', desc: 'Customized drills matching your personal fitness and skill goals — from casual play to advanced technique.' },
  { title: 'Measurable Milestones', desc: 'Regular progress checks and constructive feedback to ensure every session delivers visible growth.' },
];

const Card = ({ tag, headline, desc, points, buttonText, buttonPath, accent, accentDim, image }) => (
  <div style={{
    backgroundColor: 'var(--ink)',
    borderRadius: '20px',
    border: `1px solid ${accentDim}`,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'var(--transition-smooth)',
    flex: '1 1 460px',
    minWidth: 0,
  }}
    onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 32px 64px ${accentDim}`; }}
    onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
  >
    {/* Image */}
    <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
      <img
        src={image}
        alt={headline}
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}
        onMouseOver={e => e.target.style.transform = 'scale(1.04)'}
        onMouseOut={e => e.target.style.transform = 'scale(1)'}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,25,47,0.7) 0%, transparent 60%)' }} />
      <div style={{
        position: 'absolute', bottom: '20px', left: '24px',
        fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600,
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: accent,
        background: 'rgba(10,25,47,0.7)', backdropFilter: 'blur(8px)',
        padding: '6px 14px', borderRadius: '4px', border: `1px solid ${accentDim}`
      }}>
        {tag}
      </div>
    </div>

    {/* Body */}
    <div style={{ padding: '36px 36px 40px', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <h3 className="font-display" style={{ fontSize: 'clamp(24px, 2.5vw, 32px)', color: '#fff', marginBottom: '16px', lineHeight: 1.1 }}>
        {headline}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', lineHeight: 1.75, marginBottom: '32px' }}>
        {desc}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px', flex: 1 }}>
        {points.map((pt, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <CheckCircle2 size={16} color={accent} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: accent, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {pt.title}:&nbsp;
              </span>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{pt.desc}</span>
            </div>
          </div>
        ))}
      </div>

      <Link to={buttonPath} style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        backgroundColor: accent, color: '#fff',
        padding: '14px 28px', borderRadius: '8px',
        fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.1em',
        textDecoration: 'none', transition: 'all 0.25s ease',
        alignSelf: 'flex-start',
        boxShadow: `0 4px 16px ${accentDim}`
      }}
        onMouseOver={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
        onMouseOut={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        {buttonText} <ArrowRight size={14} />
      </Link>
    </div>
  </div>
);

const CoachingBlocks = () => (
  <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--chalk)' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '72px' }}>
        <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Training Pathways</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', color: '#fff' }}>How We Coach</h2>
      </div>

      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        <Card
          tag="After-School Sports Program"
          headline="From the Classroom Straight to the Court"
          desc="We bring expert mentorship and structured play right to school premises after hours. From foundational movement to match-day readiness, kids explore multiple sports, build lifelong fitness habits, and develop athletic skills through a clear, guided growth pathway that takes them from casual fun to competitive confidence."
          points={SCHOOL_POINTS}
          buttonText="Explore After-School Coaching"
          buttonPath="/learn-a-sport/schools"
          accent="var(--emerald)"
          accentDim="var(--emerald-dim)"
          image="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop"
        />
        <Card
          tag="Private & Society Coaching"
          headline="Mentorship on Your Schedule at Your Preferred Location"
          desc="Skip the traffic and rigid academy schedules. Whether it's individual coaching for your child in your gated community, or private sessions for yourself to master a sport, we bring certified, trusted coaches directly to your preferred court. Structured, personal, and completely built around your lifestyle."
          points={PRIVATE_POINTS}
          buttonText="Book a Trial Class"
          buttonPath="/learn-a-sport/private"
          accent="var(--gold)"
          accentDim="var(--gold-dim)"
          image="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1600&auto=format&fit=crop"
        />
      </div>
    </div>
  </section>
);

export default CoachingBlocks;
