import React from 'react';

const Testimonial = () => (
  <section className="reveal" style={{ backgroundColor: 'var(--panel)' }}>
    {/* Thin Testimonial Banner */}
    <div style={{ padding: '40px 0', backgroundColor: 'var(--ink)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', textAlign: 'left' }}>
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" 
          alt="Rohan B." 
          style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--gold)' }} 
        />
        <div style={{ maxWidth: '800px' }}>
          <h2 className="font-display" style={{ fontSize: '24px', fontStyle: 'italic', color: 'var(--chalk)', marginBottom: '8px', textTransform: 'none', letterSpacing: '0', fontWeight: 400 }}>
            "The facilities are unmatched, but it's the community and the caliber of coaching that makes FirstMove the only club that matters."
          </h2>
          <div className="font-mono" style={{ fontSize: '13px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Rohan B. — Gold Member
          </div>
        </div>
      </div>
    </div>
    
    {/* Partners Section - Disabled per client request until 6+ clients are acquired 
    <div className="container" style={{ padding: '48px 0', textAlign: 'center' }}>
      <div className="font-mono" style={{ fontSize: '12px', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '32px' }}>
        Trusted by Schools and Partners
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', opacity: 0.5 }}>
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i} style={{ 
            width: '120px', height: '40px', backgroundColor: 'var(--panel-2)', borderRadius: '8px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--steel)', fontSize: '13px', fontWeight: '600'
          }}>
            Partner Logo
          </div>
        ))}
      </div>
    </div>
    */}
  </section>
);

export default Testimonial;
