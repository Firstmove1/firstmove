import React, { useState, useEffect } from 'react';
import { Target, Activity, Users, Waves, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sports = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const [activeSport, setActiveSport] = useState(location.state?.activeSport || 'tennis');
  const [activeFaq, setActiveFaq] = useState(null);

  // Reusable Playbook Data Structure
  const sportData = {
    tennis: {
      id: 'tennis',
      name: 'Tennis',
      icon: <Target size={24} />,
      color: 'var(--ruby)',
      colorDim: 'var(--ruby-dim)',
      about: 'A globally celebrated racquet sport played individually against a single opponent or between two teams of two players each.',
      whyPlay: 'Improves cardiovascular fitness, increases bone density, and enhances strategic thinking and focus.',
      skills: ['Forehand & Backhand', 'Serving', 'Volleying', 'Footwork & Agility'],
      rules: 'Played on a rectangular court, the objective is to hit the ball over the net into the opponents court in a way that defeats their return.',
      equipment: ['Tennis Racquet', 'Pressurized Tennis Balls', 'Non-marking Shoes', 'Comfortable Sportswear'],
      benefits: ['Full body workout', 'Mental agility', 'Social interaction', 'Coordination'],
      whoItsFor: 'Ideal for all age groups (5+). Great for those looking for a mix of high-intensity cardio and technical skill.',
    },
    badminton: {
      id: 'badminton',
      name: 'Badminton',
      icon: <Users size={24} />,
      color: 'var(--sapphire)',
      colorDim: 'var(--sapphire-dim)',
      about: 'A fast-paced racquet sport played using shuttlecocks across a net, demanding excellent reflexes and stamina.',
      whyPlay: 'It is one of the fastest sports in the world, perfect for building quick reflexes, agility, and immense cardiovascular endurance.',
      skills: ['Grip & Stance', 'Clears & Drops', 'Smashing', 'Court Coverage'],
      rules: 'Score points by striking the shuttlecock with your racquet so it lands within the opposing side\'s half of the court.',
      equipment: ['Badminton Racquet', 'Feather/Nylon Shuttlecocks', 'Indoor Court Shoes'],
      benefits: ['Explosive speed', 'Reflex enhancement', 'High calorie burn', 'Leg strength'],
      whoItsFor: 'Perfect for all ages, especially those who enjoy fast indoor sports requiring explosive energy.',
    },
    football: {
      id: 'football',
      name: 'Football',
      icon: <Activity size={24} />,
      color: 'var(--emerald)',
      colorDim: 'var(--emerald-dim)',
      about: 'The world\'s most popular team sport, played between two teams of eleven players on a rectangular field.',
      whyPlay: 'Builds ultimate teamwork, incredible stamina, and provides a highly social and competitive environment.',
      skills: ['Dribbling & Passing', 'Shooting', 'First Touch', 'Tactical Positioning'],
      rules: 'Score by driving the ball into the opposing goal. Only the goalkeeper may handle the ball intentionally.',
      equipment: ['Football Boots (Studs/Turf)', 'Shin Guards', 'Football', 'Team Jersey'],
      benefits: ['Cardio endurance', 'Team building', 'Lower body strength', 'Spatial awareness'],
      whoItsFor: 'Great for team players and those looking to build exceptional stamina and lower body strength.',
    },
    cricket: {
      id: 'cricket',
      name: 'Cricket',
      icon: <Target size={24} />,
      color: 'var(--gold)',
      colorDim: 'var(--gold-dim)',
      about: 'A bat-and-ball game played between two teams, deeply ingrained in sporting culture and known for its strategic depth.',
      whyPlay: 'Develops immense hand-eye coordination, patience, and team strategy. It\'s a sport of immense technique.',
      skills: ['Batting technique', 'Pace & Spin Bowling', 'Fielding & Catching', 'Running between wickets'],
      rules: 'The batting team scores runs by hitting the bowled ball, while the fielding team tries to dismiss them.',
      equipment: ['Cricket Bat', 'Leather/Tennis Ball', 'Pads & Gloves', 'Helmet'],
      benefits: ['Hand-eye coordination', 'Strategic thinking', 'Core stability', 'Focus'],
      whoItsFor: 'Ideal for those who enjoy technical skill building, strategy, and team dynamics.',
    },
    basketball: {
      id: 'basketball',
      name: 'Basketball',
      icon: <Activity size={24} />,
      color: 'var(--gold)',
      colorDim: 'var(--gold-dim)',
      about: 'A fast-paced indoor team sport where players score by shooting a ball through a high hoop.',
      whyPlay: 'Incredible for developing vertical jump, quick lateral movements, and cardiovascular fitness.',
      skills: ['Dribbling', 'Shooting & Layups', 'Passing', 'Rebounding'],
      rules: 'Score by shooting the ball through the opponent\'s hoop while adhering to dribbling and foul rules.',
      equipment: ['Basketball', 'High-top Basketball Shoes', 'Comfortable apparel'],
      benefits: ['Vertical leap', 'Agility', 'Teamwork', 'Bone strength'],
      whoItsFor: 'Great for energetic individuals who want a fast-paced, high-scoring team sport.',
    },
    swimming: {
      id: 'swimming',
      name: 'Swimming',
      icon: <Waves size={24} />,
      color: 'var(--sapphire)',
      colorDim: 'var(--sapphire-dim)',
      about: 'The propulsion of the body through water using combined arm and leg motions.',
      whyPlay: 'The ultimate zero-impact full-body workout, perfect for fitness, rehabilitation, and survival skills.',
      skills: ['Freestyle', 'Breaststroke', 'Backstroke', 'Breathing techniques'],
      rules: 'Complete the set distance in the specific stroke without touching the pool floor (in competition).',
      equipment: ['Swimsuit', 'Goggles', 'Swim Cap'],
      benefits: ['Zero-impact cardio', 'Full body toning', 'Lung capacity', 'Stress relief'],
      whoItsFor: 'Perfect for all ages, from toddlers learning water safety to adults seeking low-impact cardio.',
    }
  };

  const sportsList = Object.values(sportData);
  const activeData = sportData[activeSport];

  const faqs = [
    { q: 'Which sports does FirstMove offer?', a: 'We currently offer comprehensive coaching and facilities for Tennis, Badminton, Football, Cricket, Basketball, and Swimming. We are constantly expanding our offerings.' },
    { q: 'Can beginners learn?', a: 'Absolutely. We have dedicated programs for complete beginners of all ages, ensuring a safe, supportive, and structured introduction to any sport.' },
    { q: 'What age groups can participate?', a: 'Our programs start from age 5 (Kids Programme) and extend to adults of all ages and skill levels.' },
    { q: 'Can I get private coaching?', a: 'Yes! We offer 1-on-1 private coaching for all our primary sports with verified, elite coaches.' },
    { q: 'What equipment do I need?', a: 'For trial sessions, basic equipment is often provided. For regular coaching, we recommend purchasing your own personal gear (racquets, specific shoes) which our coaches can guide you on.' }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      
      {/* 1. CLICKABLE SPORT ICONS */}
      <section className="reveal" style={{ padding: '60px 0', backgroundColor: 'var(--panel)', borderBottom: '1px solid var(--panel-2)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Select a Sport</div>
          <h1 className="font-display" style={{ fontSize: '40px', marginBottom: '40px', color: 'var(--chalk)' }}>Sports Playbook</h1>
          
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {sportsList.map((sport) => {
              const isActive = activeSport === sport.id;
              return (
                <button 
                  key={sport.id}
                  onClick={() => setActiveSport(sport.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 24px',
                    borderRadius: '32px', cursor: 'pointer', transition: 'all 0.3s ease',
                    backgroundColor: isActive ? sport.color : 'var(--ink)',
                    border: `1px solid ${isActive ? sport.color : 'var(--panel-2)'}`,
                    color: isActive ? '#fff' : 'var(--steel)',
                    boxShadow: isActive ? `0 8px 24px ${sport.colorDim}` : 'none',
                    transform: isActive ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                  onMouseOver={e => {
                    if(!isActive) {
                      e.currentTarget.style.borderColor = sport.color;
                      e.currentTarget.style.color = sport.color;
                    }
                  }}
                  onMouseOut={e => {
                    if(!isActive) {
                      e.currentTarget.style.borderColor = 'var(--panel-2)';
                      e.currentTarget.style.color = 'var(--steel)';
                    }
                  }}
                >
                  {sport.icon}
                  <span className="font-mono" style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {sport.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. SPORT PLAYBOOK */}
      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--ink)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          {/* Playbook Header */}
          <div style={{ 
            backgroundColor: activeData.colorDim, padding: '48px', borderRadius: '24px', 
            marginBottom: '48px', border: `1px solid ${activeData.color}`,
            display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap'
          }}>
            <div style={{ 
              width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--ink)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: activeData.color
            }}>
              {React.cloneElement(activeData.icon, { size: 48 })}
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h2 className="font-display" style={{ fontSize: '48px', color: activeData.color, marginBottom: '16px' }}>{activeData.name} Playbook</h2>
              <p style={{ fontSize: '18px', color: 'var(--chalk)', lineHeight: 1.6 }}>{activeData.about}</p>
            </div>
          </div>

          {/* Playbook Content Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            
            <div style={{ backgroundColor: 'var(--panel)', padding: '32px', borderRadius: '16px', border: '1px solid var(--panel-2)' }}>
              <h3 className="font-mono" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: activeData.color, marginBottom: '16px' }}>Why Play?</h3>
              <p style={{ color: 'var(--steel)', lineHeight: 1.6, fontSize: '16px' }}>{activeData.whyPlay}</p>
            </div>

            <div style={{ backgroundColor: 'var(--panel)', padding: '32px', borderRadius: '16px', border: '1px solid var(--panel-2)' }}>
              <h3 className="font-mono" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: activeData.color, marginBottom: '16px' }}>Basic Rules</h3>
              <p style={{ color: 'var(--steel)', lineHeight: 1.6, fontSize: '16px' }}>{activeData.rules}</p>
            </div>

            <div style={{ backgroundColor: 'var(--panel)', padding: '32px', borderRadius: '16px', border: '1px solid var(--panel-2)', gridColumn: '1 / -1' }}>
              <h3 className="font-mono" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: activeData.color, marginBottom: '24px' }}>Core Skills & Training</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                {activeData.skills.map((skill, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle2 size={18} color={activeData.color} />
                    <span style={{ color: 'var(--chalk)', fontWeight: 500 }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--panel)', padding: '32px', borderRadius: '16px', border: '1px solid var(--panel-2)' }}>
              <h3 className="font-mono" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: activeData.color, marginBottom: '16px' }}>Equipment Needed</h3>
              <ul style={{ color: 'var(--steel)', lineHeight: 1.6, paddingLeft: '20px' }}>
                {activeData.equipment.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: 'var(--panel)', padding: '32px', borderRadius: '16px', border: '1px solid var(--panel-2)' }}>
              <h3 className="font-mono" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: activeData.color, marginBottom: '16px' }}>Key Benefits</h3>
              <ul style={{ color: 'var(--steel)', lineHeight: 1.6, paddingLeft: '20px' }}>
                {activeData.benefits.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: activeData.color, padding: '32px', borderRadius: '16px', gridColumn: '1 / -1', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <h3 className="font-mono" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', color: 'rgba(255,255,255,0.8)' }}>Who It's For</h3>
              <p style={{ fontSize: '20px', lineHeight: 1.6, maxWidth: '600px', marginBottom: '32px' }}>{activeData.whoItsFor}</p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link to="/contact" style={{
                  backgroundColor: '#fff', color: activeData.color, padding: '16px 32px', border: 'none', cursor: 'pointer',
                  borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                  display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none'
                }}>
                  Join a {activeData.name} Program <ArrowRight size={18} />
                </Link>
                <Link to="/learn-a-sport/private" style={{
                  backgroundColor: 'transparent', color: '#fff', padding: '16px 32px', border: '1px solid #fff', cursor: 'pointer',
                  borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                  display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none'
                }}>
                  Find a Private Coach
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--panel)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="font-display" style={{ fontSize: '48px', color: 'var(--chalk)' }}>Frequently Asked Questions</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <div key={i} style={{ 
                  backgroundColor: 'var(--ink)', borderRadius: '12px', border: '1px solid var(--panel-2)', overflow: 'hidden' 
                }}>
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    style={{ 
                      width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      textAlign: 'left', cursor: 'pointer', backgroundColor: 'transparent', border: 'none', color: 'var(--chalk)'
                    }}
                  >
                    <span style={{ fontSize: '18px', fontWeight: 600 }}>{faq.q}</span>
                    <ChevronDown size={20} style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', 
                      transition: 'transform 0.3s ease',
                      color: isOpen ? 'var(--gold)' : 'var(--steel)'
                    }} />
                  </button>
                  <div style={{ 
                    maxHeight: isOpen ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease',
                    padding: isOpen ? '0 24px 24px' : '0 24px', color: 'var(--steel)', lineHeight: 1.6, fontSize: '16px'
                  }}>
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Sports;
