import React from 'react';
import { Heart, Brain, Users, TrendingUp } from 'lucide-react';

const WhoWeServe = () => {
  const benefits = [
    { title: 'Physical Vitality', desc: 'Build strength, endurance, and lasting cardiovascular health.', icon: <Heart size={24} /> },
    { title: 'Mental Clarity', desc: 'Reduce stress, boost your mood, and sharpen daily focus.', icon: <Brain size={24} /> },
    { title: 'Community & Connection', desc: 'Forge meaningful friendships and experience true team spirit.', icon: <Users size={24} /> },
    { title: 'Discipline & Growth', desc: 'Learn resilience, leadership, and the art of setting goals.', icon: <TrendingUp size={24} /> }
  ];

  return (
    <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--ink)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px', alignItems: 'center' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <div>
                <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Why We Play</div>
                <h2 className="font-display" style={{ fontSize: '56px', marginBottom: '24px' }}>The Transformative Power of Sports.</h2>
                <p style={{ fontSize: '18px', color: 'var(--steel)', lineHeight: 1.7 }}>
                  We believe that sports do more than just build athletes—they build character. Whether you are stepping onto the court for the first time or the thousandth time, the benefits echo through every aspect of your life.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
                {benefits.map((benefit, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ color: 'var(--gold)', flexShrink: 0 }}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-mono" style={{ fontSize: '16px', color: 'var(--chalk)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{benefit.title}</h3>
                      <p style={{ color: 'var(--steel)', fontSize: '14px', lineHeight: 1.6 }}>{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ width: '100%', height: '600px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--panel-2)' }}>
              <img 
                src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2929&auto=format&fit=crop" 
                alt="People of all ages enjoying sports together" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
