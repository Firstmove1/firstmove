import React from 'react';
import { Users, Activity, Dumbbell, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/Logo.png';

const Services = () => {
  const services = [
    {
      name: 'School Program',
      icon: <Users size={22} />,
      desc: 'Structured after-school and on-campus sports curriculums for educational institutions, fostering physical activity, teamwork, and competitive spirit.',
      path: '/learn-a-sport/schools'
    },
    {
      name: 'Private Coaching',
      icon: <Activity size={22} />,
      desc: 'Personalized 1-on-1 and society-based sessions at your preferred location and schedule. Dedicated coaches, zero distractions.',
      path: '/learn-a-sport/private'
    },
    {
      name: 'Adult-Specific Training',
      icon: <Dumbbell size={22} />,
      desc: 'Specialized conditioning and sport-specific programs designed around the adult athlete — focus on biomechanics, technique, and match readiness.',
      path: '/fitness-and-conditioning'
    },
    {
      name: 'Curated Community Events & IPs',
      icon: <Calendar size={22} />,
      desc: 'Custom tournaments, community leagues, corporate sport days, and proprietary sporting events that bring athletes and fans together.',
      path: '/contact'
    },
  ];

  return (
    <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--panel)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>What We Offer</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>Our Services</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
          {services.map((service, i) => (
            <Link key={i} to={service.path} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div style={{
                padding: '40px 32px', backgroundColor: 'var(--ink)', borderRadius: '14px',
                border: '1px solid var(--panel-2)', transition: 'var(--transition-fast)', height: '100%',
                display: 'flex', flexDirection: 'column'
              }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'var(--gold-dim)';
                  e.currentTarget.style.boxShadow = '0 16px 40px var(--gold-dim)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--panel-2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Number + Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '12px',
                    backgroundColor: 'var(--panel)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--gold)', border: '1px solid var(--gold-dim)'
                  }}>
                    <img src={logoImg} alt="FirstMove" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </div>
                  <span className="font-display" style={{ fontSize: '48px', color: 'var(--panel-2)', lineHeight: 1 }}>
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-display" style={{ fontSize: '22px', marginBottom: '14px', color: 'var(--chalk)' }}>{service.name}</h3>
                <p style={{ color: 'var(--steel)', fontSize: '14px', lineHeight: 1.7, flex: 1 }}>{service.desc}</p>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: '6px', marginTop: '28px',
                  color: 'var(--gold)', fontFamily: 'var(--font-mono)', fontSize: '11px',
                  textTransform: 'uppercase', letterSpacing: '0.1em'
                }}>
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
