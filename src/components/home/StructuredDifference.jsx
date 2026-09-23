import React from 'react';
import { BookOpen, BarChart3, Heart } from 'lucide-react';

const PILLARS = [
  {
    icon: <BookOpen size={28} />,
    number: '01',
    title: 'Curriculum Over Guesswork',
    desc: 'No random scrimmage matches or time-filling drills. Every session follows an age-stratified, phased syllabus designed to systematically build technical mastery and athletic IQ.',
    accent: 'var(--gold)',
    accentDim: 'var(--gold-dim)'
  },
  {
    icon: <BarChart3 size={28} />,
    number: '02',
    title: 'Performance Tracking That Counts',
    desc: 'We eliminate vague feedback. Parents and athletes receive milestone assessments covering speed, stamina, technique retention, and in-game decision-making.',
    accent: 'var(--sapphire)',
    accentDim: 'var(--sapphire-dim)'
  },
  {
    icon: <Heart size={28} />,
    number: '03',
    title: 'Mentorship That Builds Character',
    desc: 'Our coaches don\'t just train technique — they instill grit, focus, humility in victory, and resilience in defeat, building skills that outlast the final whistle.',
    accent: 'var(--emerald)',
    accentDim: 'var(--emerald-dim)'
  },
];

const StructuredDifference = () => (
  <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--chalk)' }}>
    <div className="container">
      {/* Header */}
      <div style={{ maxWidth: '680px', marginBottom: '80px' }}>
        <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>The Structured Difference</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: '#fff', marginBottom: '20px', lineHeight: 1.05 }}>
          What Separates a Casual Player from a Champion?
        </h2>
        <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
          Natural talent gets you noticed. Structured training gives you the edge.
        </p>
      </div>

      {/* 3-pillar grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
        {PILLARS.map((pillar, i) => (
          <div key={i} style={{
            padding: '44px 36px',
            borderRadius: '16px',
            border: `1px solid ${pillar.accentDim}`,
            backgroundColor: 'rgba(255,255,255,0.03)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'var(--transition-smooth)'
          }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = `0 24px 56px ${pillar.accentDim}`;
              e.currentTarget.style.borderColor = pillar.accent;
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = pillar.accentDim;
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
            }}
          >
            {/* Background number */}
            <div className="font-display" style={{
              position: 'absolute', top: '-10px', right: '24px',
              fontSize: '100px', fontWeight: 700, lineHeight: 1,
              color: pillar.accent, opacity: 0.06, pointerEvents: 'none',
              userSelect: 'none'
            }}>
              {pillar.number}
            </div>

            <div style={{
              width: '56px', height: '56px', borderRadius: '14px',
              backgroundColor: pillar.accentDim,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: pillar.accent, marginBottom: '28px',
              border: `1px solid ${pillar.accent}22`
            }}>
              {pillar.icon}
            </div>

            <h3 className="font-display" style={{ fontSize: '24px', color: '#fff', marginBottom: '16px', lineHeight: 1.1 }}>
              {pillar.title}
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StructuredDifference;
