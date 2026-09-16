import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Target, Activity, Users, Waves, BookOpen, Trophy, Medal, MapPin, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Schools = () => {
  const successStoriesEnabled = false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sports = [
    { name: 'Cricket', icon: <Target size={32} />, color: 'var(--gold)' },
    { name: 'Football', icon: <Activity size={32} />, color: 'var(--emerald)' },
    { name: 'Badminton', icon: <Users size={32} />, color: 'var(--sapphire)' },
    { name: 'Tennis', icon: <Target size={32} />, color: 'var(--ruby)' },
    { name: 'Basketball', icon: <Activity size={32} />, color: 'var(--gold)' },
    { name: 'Swimming', icon: <Waves size={32} />, color: 'var(--sapphire)' },
    { name: 'Table Tennis', icon: <Users size={32} />, color: 'var(--sapphire)' },
    { name: 'Athletics', icon: <Activity size={32} />, color: 'var(--ruby)' },
  ];

  const features = [
    { title: 'Expert Coaches', desc: 'Trained coaches who provide structured sports training.', icon: <Users size={24} />, color: 'var(--emerald)' },
    { title: 'Build a Team', desc: 'Help students develop together and create stronger school teams.', icon: <Users size={24} />, color: 'var(--sapphire)' },
    { title: 'Tournaments', desc: 'Support students through competitive sporting opportunities.', icon: <Trophy size={24} />, color: 'var(--gold)' },
    { title: 'Evaluation', desc: 'Track student development and identify areas for improvement.', icon: <CheckCircle2 size={24} />, color: 'var(--ruby)' },
    { title: 'Results', desc: 'Measure progress and create a clear development journey.', icon: <Target size={24} />, color: 'var(--emerald)' }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      
      {/* 1. BANNER */}
      <section className="reveal" style={{ padding: '80px 0 60px', backgroundColor: 'var(--panel)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', position: 'relative' }}>
          <div style={{ flex: '1 1 500px', height: '600px', borderRadius: '16px', overflow: 'hidden', position: 'relative', boxShadow: '0 24px 60px rgba(0,0,0,0.08)' }}>
            <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2940&auto=format&fit=crop" alt="School Sports" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }} 
                 onMouseOver={e => e.target.style.transform = 'scale(1.05)'} onMouseOut={e => e.target.style.transform = 'scale(1)'} />
          </div>
          
          <div className="overlap-card">
            <div className="eyebrow" style={{ color: 'var(--emerald)', marginBottom: '16px' }}>For Schools</div>
            <h1 className="font-display" style={{ fontSize: '56px', marginBottom: '24px', color: 'var(--chalk)', lineHeight: 1.1 }}>Make the next sports star from your school</h1>
            <p style={{ fontSize: '18px', color: 'var(--steel)', marginBottom: '40px', lineHeight: 1.7 }}>
              Partner with FirstMove to provide professional sports coaching, structured curriculums, and a clear development pathway for your students.
            </p>
            
            <Link to="/contact" style={{
              backgroundColor: 'var(--emerald)', color: 'var(--ink)', padding: '16px 32px', border: 'none', cursor: 'pointer',
              borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
              transition: 'var(--transition-fast)', alignSelf: 'flex-start', textDecoration: 'none'
            }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
              Book a Free Demo <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION TEXT BLOCK */}
      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--ink)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="font-display" style={{ fontSize: '48px', marginBottom: '32px', color: 'var(--chalk)' }}>Building the next sports star from your school</h2>
          <p style={{ fontSize: '20px', color: 'var(--steel)', lineHeight: 1.7, marginBottom: '24px' }}>
            FirstMove helps schools establish a stronger sports culture by providing comprehensive coaching models. We handle the intricacies of sports education so your school can focus on shaping well-rounded individuals.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', textAlign: 'left', marginTop: '48px' }}>
            {['Structured sports coaching', 'Trained & certified coaches', 'Student athletic development', 'Building strong school teams', 'Organizing tournaments', 'Comprehensive student evaluation', 'Tracking results and progress', 'Creating a sports culture'].map((point, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 size={20} color="var(--emerald)" />
                <span style={{ color: 'var(--chalk)', fontSize: '16px', fontWeight: 500 }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COACHING / SCHOOL SPORTS PROGRAM FEATURES */}
      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--panel)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Why FirstMove</div>
            <h2 className="font-display" style={{ fontSize: '48px', color: 'var(--chalk)' }}>School Sports Program</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {features.map((feature, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--ink)', padding: '40px 32px', borderRadius: '16px', border: '1px solid var(--panel-2)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'var(--transition-fast)'
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--panel)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: feature.color, marginBottom: '24px' }}>
                  {feature.icon}
                </div>
                <h3 className="font-display" style={{ fontSize: '24px', marginBottom: '12px', color: 'var(--chalk)' }}>{feature.title}</h3>
                <p style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPORTS WE OFFER */}
      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--ink)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="font-display" style={{ fontSize: '48px', color: 'var(--chalk)' }}>Sports We Offer</h2>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            {sports.map((sport, i) => (
              <div key={i} style={{
                width: '160px', padding: '32px 16px', backgroundColor: 'var(--panel)', borderRadius: '16px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer',
                border: '1px solid var(--panel-2)', transition: 'var(--transition-fast)'
              }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = sport.color;
                e.currentTarget.style.backgroundColor = 'var(--ink)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = 'var(--panel-2)';
                e.currentTarget.style.backgroundColor = 'var(--panel)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ color: sport.color, marginBottom: '16px' }}>
                  {sport.icon}
                </div>
                <div className="font-mono" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--chalk)', fontWeight: 600 }}>
                  {sport.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPORTS COUNSELLING */}
      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--panel)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--sapphire)', marginBottom: '16px' }}>Guidance & Development</div>
            <h2 className="font-display" style={{ fontSize: '48px', marginBottom: '24px', color: 'var(--chalk)' }}>Sports Counselling</h2>
            <p style={{ fontSize: '18px', color: 'var(--steel)', lineHeight: 1.7, marginBottom: '32px' }}>
              We help schools and students identify suitable sporting pathways. By understanding student interests and evaluating their strengths, our experts provide tailored guidance to support a long-term, fulfilling sports journey.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['Understanding student interests', 'Identifying suitable sports', 'Guidance based on strengths', 'Exploring sporting opportunities'].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--sapphire)', borderRadius: '50%' }}></div>
                  <span style={{ color: 'var(--chalk)', fontSize: '16px', fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '500px', boxShadow: '0 24px 60px rgba(0,0,0,0.08)' }}>
            <img src="https://images.unsplash.com/photo-1574629810360-7efbbcb2785d?q=80&w=2940&auto=format&fit=crop" alt="Sports Counselling" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES (DISABLED) */}
      {successStoriesEnabled && (
        <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--ink)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Impact</div>
              <h2 className="font-display" style={{ fontSize: '48px', color: 'var(--chalk)' }}>Success Stories</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              {[1, 2, 3].map((item, i) => (
                <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--panel-2)', backgroundColor: 'var(--panel)' }}>
                  <div style={{ height: '240px' }}>
                    <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2938&auto=format&fit=crop" alt="Success Story" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '32px' }}>
                    <div className="font-mono" style={{ fontSize: '12px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>[Sport Category]</div>
                    <h3 className="font-display" style={{ fontSize: '24px', color: 'var(--chalk)', marginBottom: '8px' }}>[Student / School Name]</h3>
                    <div style={{ fontWeight: 600, color: 'var(--chalk)', fontSize: '15px', marginBottom: '16px' }}>[Achievement Title]</div>
                    <p style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: 1.6 }}>
                      [Short story placeholder describing the student's journey, how the program helped them improve, and their ultimate achievement in the sport.]
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. EXISTING CLIENTS + TESTIMONIALS */}
      <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--ink)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', marginBottom: '80px' }}>
          <div className="font-display" style={{ fontSize: '120px', color: 'var(--gold-dim)', lineHeight: 0.5, marginBottom: '20px' }}></div>
          <h2 className="font-display" style={{ fontSize: '40px', fontStyle: 'italic', color: 'var(--chalk)', marginBottom: '48px', textTransform: 'none', letterSpacing: '0', lineHeight: 1.4 }}>
            "FirstMove transformed our school's athletic program. The coaching quality is exceptional and our students have never been more engaged in sports."
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', backgroundColor: 'var(--panel-2)' }}>
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop" alt="Testimonial Author" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--chalk)', fontSize: '16px' }}>Placeholder Name</div>
              <div className="font-mono" style={{ fontSize: '12px', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>
                Principal, Placeholder International School
              </div>
            </div>
          </div>
        </div>
        
        <div className="container" style={{ paddingTop: '80px', borderTop: '1px solid var(--panel-2)' }}>
          <div className="font-mono" style={{ fontSize: '12px', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '48px' }}>
            Our School Partners
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', opacity: 0.4 }}>
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} style={{ 
                width: '140px', height: '60px', backgroundColor: 'var(--panel-2)', borderRadius: '8px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--steel)', fontSize: '14px', fontWeight: '600', letterSpacing: '0.05em'
              }}>
                School Logo
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOOK A FREE DEMO CTA */}
      <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--panel)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="font-display" style={{ fontSize: '56px', color: 'var(--chalk)', marginBottom: '24px' }}>Book a Free Demo for Your School</h2>
          <p style={{ fontSize: '20px', color: 'var(--steel)', lineHeight: 1.6, marginBottom: '48px' }}>
            Experience the FirstMove coaching model firsthand. Let us show you how we can elevate your school's sports program.
          </p>
          
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              backgroundColor: 'var(--gold)', color: 'var(--ink)', padding: '16px 40px', border: 'none', cursor: 'pointer',
              borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
              transition: 'var(--transition-fast)', textDecoration: 'none'
            }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
              Book a Free Demo <ArrowRight size={18} />
            </Link>
            
            <Link to="/contact" style={{
              backgroundColor: 'transparent', color: 'var(--chalk)', padding: '16px 40px', border: '1px solid var(--chalk)', cursor: 'pointer',
              borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
              transition: 'var(--transition-fast)', textDecoration: 'none'
            }} onMouseOver={e => {
              e.currentTarget.style.backgroundColor = 'var(--chalk)';
              e.currentTarget.style.color = 'var(--ink)';
            }} onMouseOut={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--chalk)';
            }}>
              Contact Us <MessageSquare size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Schools;
