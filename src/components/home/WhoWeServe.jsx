import React from 'react';
import { Heart, Brain, Users, TrendingUp } from 'lucide-react';

// Task #8: Reworked — 1 image, no clickable elements, similar tone but different wording
const WhoWeServe = () => {
  const benefits = [
    { title: 'Physical Vitality', desc: 'Build real strength, lasting endurance, and a cardiovascular system that works for you every day.', icon: <Heart size={24} /> },
    { title: 'Mental Clarity', desc: 'Step onto the field and leave stress behind. Sports sharpen your focus and brighten your outlook.', icon: <Brain size={24} /> },
    { title: 'Belonging & Camaraderie', desc: 'Find your people. Sport creates bonds that go beyond the game — friendships forged through effort and shared goals.', icon: <Users size={24} /> },
    { title: 'Resilience & Growth', desc: 'Every loss is a lesson. Every win builds confidence. Sport teaches you how to keep moving forward.', icon: <TrendingUp size={24} /> }
  ];

  return (
    <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--ink)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '64px', alignItems: 'center' }}>

          {/* Text + Benefits */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Why Sport Matters</div>
              <h2 className="font-display" style={{ fontSize: '52px', marginBottom: '24px' }}>
                The Benefits of Playing Sports.
              </h2>
              <p style={{ fontSize: '18px', color: 'var(--steel)', lineHeight: 1.7 }}>
                Sport is not just physical — it is one of the most powerful tools for building a better version of yourself.
                At FirstMove, we create the environment where those benefits become inevitable.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {benefits.map((benefit, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{
                    color: 'var(--gold)', flexShrink: 0, marginTop: '2px',
                    width: '44px', height: '44px', borderRadius: '50%',
                    backgroundColor: 'rgba(242, 101, 34, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-mono" style={{ fontSize: '15px', color: 'var(--chalk)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>{benefit.title}</h3>
                    <p style={{ color: 'var(--steel)', fontSize: '14px', lineHeight: 1.7 }}>{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Single encompassing image — no clickable elements per task #8 */}
          <div style={{ width: '100%', height: '620px', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--panel-2)', flexShrink: 0 }}>
            <img
              src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2929&auto=format&fit=crop"
              alt="People of all ages enjoying the benefits of playing sports together"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
