import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Target, Activity, Users, Waves, Star, ChevronDown, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Private = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sports = [
    { name: 'Tennis', icon: <Target size={32} />, color: 'var(--ruby)' },
    { name: 'Badminton', icon: <Users size={32} />, color: 'var(--sapphire)' },
    { name: 'Football', icon: <Activity size={32} />, color: 'var(--emerald)' },
    { name: 'Cricket', icon: <Target size={32} />, color: 'var(--gold)' },
    { name: 'Basketball', icon: <Activity size={32} />, color: 'var(--gold)' },
    { name: 'Swimming', icon: <Waves size={32} />, color: 'var(--sapphire)' },
    { name: 'Table Tennis', icon: <Users size={32} />, color: 'var(--sapphire)' },
  ];

  const coaches = [
    { name: 'Arjun S.', sport: 'Tennis', exp: '12 Yrs Exp', verified: true, desc: 'Former state champion specializing in biomechanics and serving technique. Excellent with both beginners and advanced players.', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2787&auto=format&fit=crop' },
    { name: 'Priya M.', sport: 'Badminton', exp: '8 Yrs Exp', verified: true, desc: 'National level player with a focus on agility, footwork, and match strategy. Proven track record with junior development.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop' },
    { name: 'Vikram R.', sport: 'Football', exp: '10 Yrs Exp', verified: true, desc: 'AIFF A-License coach focused on tactical awareness, first touch, and positioning. Experienced in 1-on-1 intensive training.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop' },
    { name: 'Neha K.', sport: 'Swimming', exp: '15 Yrs Exp', verified: true, desc: 'Specialist in stroke correction and endurance building. Creates a safe and progressive environment for all age groups.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop' }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* 1. HERO BANNER */}
      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--panel)', borderBottom: '1px solid var(--panel-2)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', position: 'relative' }}>
          <div style={{ flex: '1 1 500px', height: '600px', borderRadius: '16px', overflow: 'hidden', position: 'relative', boxShadow: '0 24px 60px rgba(0,0,0,0.08)' }}>
            <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2938&auto=format&fit=crop" alt="Private Coaching" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0%)', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }} 
                 onMouseOver={e => e.target.style.transform = 'scale(1.05)'} onMouseOut={e => e.target.style.transform = 'scale(1)'} />
          </div>
          
          <div className="overlap-card">
            <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Private Coaching</div>
            <h1 className="font-display" style={{ fontSize: '48px', marginBottom: '24px', color: 'var(--chalk)', lineHeight: 1.1 }}>We sell convenience in getting you a credible coach.</h1>
            <p style={{ fontSize: '18px', color: 'var(--steel)', marginBottom: '40px', lineHeight: 1.7 }}>
              Skip the hassle of finding the right coach. We bring verified, experienced sports coaching directly to you with flexible scheduling, convenient locations, and structured training plans so you can focus entirely on playing.
            </p>
            
            <Link to="/contact" style={{
              backgroundColor: 'var(--gold)', color: 'var(--chalk)', padding: '16px 32px', border: 'none', cursor: 'pointer',
              borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
              transition: 'var(--transition-fast)', alignSelf: 'flex-start', textDecoration: 'none'
            }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
              Book a Free Trial <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CONSISTENCY PROBLEM BANNER */}
      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--ink)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="font-display" style={{ fontSize: '48px', marginBottom: '32px', color: 'var(--chalk)' }}>Consistency is the key to getting better.</h2>
          <p style={{ fontSize: '20px', color: 'var(--steel)', lineHeight: 1.7 }}>
            People often struggle to stay consistent with a sport due to scheduling conflicts, lack of structured training, or difficulty finding a reliable coach. FirstMove solves these hurdles by providing seamless access to top-tier coaching, ensuring you never break your rhythm.
          </p>
        </div>
      </section>

      {/* 3. COACH PROFILES */}
      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--panel)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="font-display" style={{ fontSize: '48px', color: 'var(--chalk)' }}>Verified Coach Profiles</h2>
            <p style={{ fontSize: '18px', color: 'var(--steel)', maxWidth: '600px', margin: '16px auto 0' }}>All our coaches are rigorously vetted for experience, safety, and coaching excellence.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {coaches.map((coach, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--ink)', padding: '40px 32px', borderRadius: '16px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                border: '1px solid var(--panel-2)', cursor: 'pointer', transition: 'var(--transition-smooth)'
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'var(--gold-dim)';
                e.currentTarget.style.boxShadow = '0 16px 32px var(--gold-dim)';
                e.currentTarget.querySelector('img').style.filter = 'grayscale(0%)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--panel-2)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.querySelector('img').style.filter = 'grayscale(10%)';
              }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', padding: '4px', border: '2px solid var(--gold-dim)', marginBottom: '24px', position: 'relative' }}>
                  <img src={coach.img} alt={coach.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', filter: 'grayscale(10%)', transition: 'var(--transition-smooth)' }} />
                  {coach.verified && (
                    <div style={{ position: 'absolute', bottom: '0', right: '0', backgroundColor: 'var(--ink)', borderRadius: '50%', padding: '2px' }}>
                      <CheckCircle2 size={24} color="var(--emerald)" fill="#fff" />
                    </div>
                  )}
                </div>
                <div className="font-display" style={{ fontSize: '24px', marginBottom: '8px' }}>{coach.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <div className="font-mono" style={{ fontSize: '11px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {coach.sport} • {coach.exp}
                  </div>
                  {coach.verified && <span style={{ fontSize: '11px', color: 'var(--emerald)', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}><CheckCircle size={12}/> Verified</span>}
                </div>
                <p style={{ color: 'var(--steel)', fontSize: '14px', lineHeight: 1.6, flex: 1, marginBottom: '24px' }}>{coach.desc}</p>
                <Link to="/contact" style={{
                  color: 'var(--gold)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                  display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none'
                }}>
                  Book a Trial <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPORTS TAUGHT */}
      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--ink)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="font-display" style={{ fontSize: '48px', color: 'var(--chalk)' }}>Sports Taught</h2>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            {sports.map((sport, i) => (
              <div key={i} style={{
                width: '150px', padding: '24px 16px', backgroundColor: 'var(--panel)', borderRadius: '16px',
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

      {/* 5. KIDS & ADULTS PROGRAMS */}
      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--panel)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px' }}>
            
            {/* Kids Programme */}
            <div style={{ backgroundColor: 'var(--ink)', padding: '48px', borderRadius: '24px', border: '1px solid var(--panel-2)' }}>
              <div className="eyebrow" style={{ color: 'var(--sapphire)', marginBottom: '16px' }}>Ages 5-16</div>
              <h3 className="font-display" style={{ fontSize: '40px', marginBottom: '24px', color: 'var(--chalk)' }}>Kids Programme</h3>
              <p style={{ color: 'var(--steel)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
                Build a strong athletic foundation. Our kids programme focuses on enjoyment of the sport while developing core motor skills, discipline, and confidence.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Skill development & better fundamentals', 'Confidence and discipline building', 'Regular practice routines', 'Structured coaching for young athletes', 'Maximum enjoyment of sport'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--sapphire)', borderRadius: '50%' }}></div>
                    <span style={{ color: 'var(--chalk)', fontSize: '15px', fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" style={{
                backgroundColor: 'var(--panel)', color: 'var(--chalk)', padding: '16px 24px', border: '1px solid var(--panel-2)', cursor: 'pointer',
                borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '12px', width: '100%', textDecoration: 'none',
                transition: 'var(--transition-fast)'
              }} onMouseOver={e => { e.currentTarget.style.backgroundColor = 'var(--sapphire)'; e.currentTarget.style.color = '#fff'; }} 
                 onMouseOut={e => { e.currentTarget.style.backgroundColor = 'var(--panel)'; e.currentTarget.style.color = 'var(--chalk)'; }}>
                Explore Kids Programme
              </Link>
            </div>

            {/* Adults Programme */}
            <div style={{ backgroundColor: 'var(--ink)', padding: '48px', borderRadius: '24px', border: '1px solid var(--gold)' }}>
              <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Ages 17+</div>
              <h3 className="font-display" style={{ fontSize: '40px', marginBottom: '24px', color: 'var(--chalk)' }}>Adults Programme</h3>
              <p style={{ color: 'var(--steel)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
                Whether you're picking up a racquet for the first time or returning to a sport, our adult sessions are tailored to your pace and goals. <strong style={{ color: 'var(--chalk)' }}>Improve your game</strong> with targeted drills and match-play strategies.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Learn or relearn fundamentals', 'Improve your game tactically', 'Build consistency with flexible training', 'Fitness and conditioning through sport', 'Goal-based coaching'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--gold)', borderRadius: '50%' }}></div>
                    <span style={{ color: 'var(--chalk)', fontSize: '15px', fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" style={{
                backgroundColor: 'var(--gold)', color: 'var(--ink)', padding: '16px 24px', border: 'none', cursor: 'pointer',
                borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '12px', width: '100%', textDecoration: 'none',
                transition: 'var(--transition-fast)'
              }} onMouseOver={e => e.currentTarget.style.opacity = '0.9'} onMouseOut={e => e.currentTarget.style.opacity = '1'}>
                Book Adult Trial <ArrowRight size={18} />
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS WITH IMAGES */}
      <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--ink)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="font-display" style={{ fontSize: '48px', color: 'var(--chalk)' }}>Success Stories</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
            {[
              { quote: "Finding a coach who understands my schedule was impossible until FirstMove. My tennis game has improved massively in just three months.", name: "Rahul S.", sport: "Adults Tennis", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop" },
              { quote: "The coaching is incredibly structured. My daughter looks forward to her badminton sessions every week, and her footwork is visibly better.", name: "Anita D.", sport: "Kids Badminton", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop" },
              { quote: "I wanted to relearn swimming after a 10-year break. The coach was patient, verified, and made the whole process convenient.", name: "Karan V.", sport: "Adults Swimming", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop" }
            ].map((test, i) => (
              <div key={i} style={{ 
                backgroundColor: 'var(--panel)', padding: '40px', borderRadius: '16px', position: 'relative',
                border: '1px solid var(--panel-2)'
              }}>
                <div style={{ 
                  position: 'absolute', top: '-24px', left: '40px', width: '48px', height: '48px', 
                  backgroundColor: 'var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'
                }}>
                  <Star size={20} fill="#fff" />
                </div>
                <p style={{ fontSize: '16px', color: 'var(--chalk)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '32px', marginTop: '16px' }}>
                  "{test.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img src={test.img} alt={test.name} style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--chalk)' }}>{test.name}</div>
                    <div className="font-mono" style={{ fontSize: '12px', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>{test.sport}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Private;
