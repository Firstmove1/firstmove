import React, { useState, useEffect, useRef } from 'react';
import { Target, Activity, Users, Waves, ChevronDown, CheckCircle2, ArrowRight, Zap, Shield, Star } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Sport-specific images from Unsplash
const sportImages = {
  tennis: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2940&auto=format&fit=crop',
  badminton: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2940&auto=format&fit=crop',
  football: 'https://images.unsplash.com/photo-1574629810360-7efbbcb2785d?q=80&w=2940&auto=format&fit=crop',
  cricket: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2947&auto=format&fit=crop',
  basketball: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2990&auto=format&fit=crop',
  swimming: 'https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=2938&auto=format&fit=crop',
  'table-tennis': 'https://images.unsplash.com/photo-1611251135345-18c56206b863?q=80&w=2940&auto=format&fit=crop',
  chess: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2942&auto=format&fit=crop',
};

const Sports = () => {
  const location = useLocation();
  const playbookRef = useRef(null);
  const [activeSport, setActiveSport] = useState(location.state?.activeSport || 'cricket');
  const [activeFaq, setActiveFaq] = useState(null);
  const [prevSport, setPrevSport] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSportClick = (sportId) => {
    if (sportId === activeSport) return;
    setPrevSport(activeSport);
    setActiveSport(sportId);
    // Smooth scroll to playbook
    setTimeout(() => {
      playbookRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const sportData = {
    cricket: {
      id: 'cricket', name: 'Cricket', emoji: '🏏',
      icon: <Target size={28} />,
      color: 'var(--gold)', colorDim: 'var(--gold-dim)', colorHex: '#F26522',
      about: 'A bat-and-ball game played between two teams of eleven, deeply ingrained in Indian sporting culture and known for its strategic depth and immense technical demand.',
      whyPlay: 'Develops immense hand-eye coordination, patience, and team strategy. Cricket is a sport of concentration, skill, and mental strength.',
      skills: ['Batting Technique', 'Pace & Spin Bowling', 'Fielding & Catching', 'Running Between Wickets', 'Wicket-Keeping', 'Match Strategy'],
      rules: 'The batting team scores runs by hitting the bowled ball and running between wickets, while the fielding team tries to dismiss batsmen through catches, LBW, runouts, and more.',
      equipment: ['Cricket Bat', 'Leather / Tennis Ball', 'Batting Pads & Gloves', 'Helmet', 'Comfortable Whites / Team Jersey'],
      benefits: ['Hand-eye coordination', 'Strategic thinking', 'Core stability & agility', 'Patience & focus', 'Team communication'],
      whoItsFor: 'Ideal for those who enjoy technical skill building, strategy, and team dynamics. Perfect from age 6+.',
    },
    football: {
      id: 'football', name: 'Football', emoji: '⚽',
      icon: <Activity size={28} />,
      color: 'var(--emerald)', colorDim: 'var(--emerald-dim)', colorHex: '#2E7D32',
      about: 'The world\'s most popular team sport, played between two teams of eleven players on a rectangular field with 90 minutes of non-stop action.',
      whyPlay: 'Builds ultimate teamwork, incredible stamina, and provides a highly social and competitive environment for all ages.',
      skills: ['Dribbling & Ball Control', 'Passing & Vision', 'Shooting & Finishing', 'First Touch', 'Tactical Positioning', 'Set Pieces'],
      rules: 'Score by driving the ball into the opposing goal. The goalkeeper is the only player who may handle the ball in the penalty area.',
      equipment: ['Football Boots (Studs / Turf)', 'Shin Guards', 'Match Football', 'Team Jersey & Shorts'],
      benefits: ['Full body cardio endurance', 'Team building & leadership', 'Lower body strength', 'Spatial awareness', 'Quick decision making'],
      whoItsFor: 'Great for team players and those looking to build exceptional stamina and lower body strength. From age 5+.',
    },
    badminton: {
      id: 'badminton', name: 'Badminton', emoji: '🏸',
      icon: <Users size={28} />,
      color: 'var(--sapphire)', colorDim: 'var(--sapphire-dim)', colorHex: '#1565C0',
      about: 'A fast-paced racquet sport played using shuttlecocks across a net, demanding excellent reflexes, agility, and stamina. One of the fastest sports in the world.',
      whyPlay: 'Perfect for building lightning-fast reflexes, court agility, and immense cardiovascular endurance. Exciting for all skill levels.',
      skills: ['Grip & Stance Fundamentals', 'Clears & Drops', 'Smashing & Net Play', 'Court Coverage & Footwork', 'Doubles Strategy', 'Serve Techniques'],
      rules: 'Score points by striking the shuttlecock with your racquet so it lands within the opposing side\'s half of the court without them returning it.',
      equipment: ['Badminton Racquet', 'Feather / Nylon Shuttlecocks', 'Indoor Court Shoes', 'Lightweight Sportswear'],
      benefits: ['Explosive speed & reflexes', 'High calorie burn', 'Leg & arm strength', 'Improved coordination', 'Mental sharpness'],
      whoItsFor: 'Perfect for all ages, especially those who enjoy fast indoor sports requiring explosive energy. From age 5+.',
    },
    tennis: {
      id: 'tennis', name: 'Tennis', emoji: '🎾',
      icon: <Target size={28} />,
      color: 'var(--ruby)', colorDim: 'var(--ruby-dim)', colorHex: '#C62828',
      about: 'A globally celebrated racquet sport played individually against a single opponent (singles) or between two teams of two players (doubles) on a variety of surfaces.',
      whyPlay: 'Improves cardiovascular fitness, increases bone density, and enhances strategic thinking, focus, and mental resilience.',
      skills: ['Forehand & Backhand Groundstrokes', 'Serving & Return of Serve', 'Volleying & Net Play', 'Footwork & Agility', 'Lob & Drop Shot', 'Match Tactics'],
      rules: 'Each player or team aims to win games and sets by hitting the ball over the net and inside the court in a way the opponent cannot return.',
      equipment: ['Tennis Racquet', 'Pressurized Tennis Balls', 'Non-marking Shoes', 'Comfortable Sportswear'],
      benefits: ['Full body workout', 'Mental agility & strategy', 'Social interaction', 'Coordination & balance', 'Long-term joint health'],
      whoItsFor: 'Ideal for all age groups (5+). Great for those looking for a mix of high-intensity cardio and deep technical skill.',
    },
    basketball: {
      id: 'basketball', name: 'Basketball', emoji: '🏀',
      icon: <Activity size={28} />,
      color: 'var(--gold)', colorDim: 'var(--gold-dim)', colorHex: '#F26522',
      about: 'A fast-paced indoor team sport where players score by shooting a ball through a high hoop. Combines athleticism, teamwork, and rapid strategy.',
      whyPlay: 'Incredible for developing vertical leap, quick lateral movements, and cardiovascular fitness while having fun in a team environment.',
      skills: ['Dribbling & Ball Handling', 'Shooting & Layups', 'Passing & Court Vision', 'Rebounding', 'Defense Positioning', 'Fast Break Plays'],
      rules: 'Score by shooting the ball through the opponent\'s hoop. Adhere to dribbling rules and avoid personal fouls during play.',
      equipment: ['Official Basketball', 'High-top Basketball Shoes', 'Team Jersey & Shorts'],
      benefits: ['Vertical leap & explosiveness', 'Agility & speed', 'Team communication', 'Bone strength', 'Endurance'],
      whoItsFor: 'Great for energetic individuals who want a fast-paced, high-scoring team sport. From age 6+.',
    },
    swimming: {
      id: 'swimming', name: 'Swimming', emoji: '🏊',
      icon: <Waves size={28} />,
      color: 'var(--sapphire)', colorDim: 'var(--sapphire-dim)', colorHex: '#1565C0',
      about: 'The propulsion of the body through water using combined arm and leg motions. One of the most complete full-body activities known to human fitness.',
      whyPlay: 'The ultimate zero-impact full-body workout, perfect for fitness, rehabilitation, confidence in water, and long-term health at any age.',
      skills: ['Freestyle (Front Crawl)', 'Breaststroke', 'Backstroke', 'Butterfly Stroke', 'Breathing & Flip Turns', 'Open Water Techniques'],
      rules: 'Complete the set distance in the specific stroke without touching the pool floor. In competition, each stroke has specific guidelines.',
      equipment: ['Swimsuit / Swim Trunks', 'Goggles', 'Swim Cap', 'Fins & Kickboard (for training)'],
      benefits: ['Zero-impact full body cardio', 'Lung capacity & breathing control', 'Muscle toning', 'Stress relief', 'Lifelong safety skill'],
      whoItsFor: 'Perfect for all ages — from toddlers learning water safety to adults seeking low-impact, high-reward cardio. From age 3+.',
    },
    'table-tennis': {
      id: 'table-tennis', name: 'Table Tennis', emoji: '🏓',
      icon: <Users size={28} />,
      color: 'var(--sapphire)', colorDim: 'var(--sapphire-dim)', colorHex: '#1565C0',
      about: 'An Olympic racquet sport played on a hard table divided by a net. Known for its incredible speed, spin variations, and the mental sharpness it demands.',
      whyPlay: 'Sharpens reflexes dramatically, improves hand-eye coordination, and is one of the best sports for cognitive development at any age.',
      skills: ['Forehand & Backhand Drive', 'Spin Serves', 'Loop & Counter Loop', 'Footwork & Positioning', 'Defensive Chops', 'Match Strategy'],
      rules: 'Players serve alternately and score points when the opponent fails to return the ball correctly. First to 11 points (with 2-point lead) wins the game.',
      equipment: ['Table Tennis Bat (Pre-assembled or custom)', 'Table Tennis Balls (3-star)', 'Indoor Sports Shoes', 'Comfortable Sportswear'],
      benefits: ['Cognitive sharpness', 'Ultra-fast reflexes', 'Hand-eye coordination', 'Low injury risk', 'Social & fun'],
      whoItsFor: 'Fantastic for all ages, especially seniors seeking a mentally stimulating sport. Perfect for players who enjoy fast, technical rallies.',
    },
    chess: {
      id: 'chess', name: 'Chess', emoji: '♟️',
      icon: <Target size={28} />,
      color: 'var(--gold)', colorDim: 'var(--gold-dim)', colorHex: '#F26522',
      about: 'A two-player strategy board game recognised globally as a sport. Chess is the ultimate test of tactical thinking, pattern recognition, and mental endurance.',
      whyPlay: 'Develops advanced strategic planning, concentration, memory, and problem-solving abilities that translate into every area of life.',
      skills: ['Opening Principles & Theory', 'Middlegame Tactics', 'Endgame Technique', 'Pattern Recognition', 'Time Management', 'Psychological Resilience'],
      rules: 'Each player moves pieces according to specific rules to checkmate the opponent\'s king — placing it under an unavoidable attack.',
      equipment: ['Chess Set (Board + Pieces)', 'Clock / Timer (for competitive play)', 'Scorebook (for tournament play)'],
      benefits: ['Cognitive development', 'Improved memory', 'Patience & discipline', 'Strategic thinking', 'Academic performance boost'],
      whoItsFor: 'Perfect for all ages and backgrounds. Particularly powerful for students and professionals seeking to build mental sharpness.',
    },
  };

  const sportsList = Object.values(sportData);
  const activeData = sportData[activeSport];

  const faqs = [
    { q: 'Which sports does FirstMove offer?', a: 'We currently offer comprehensive coaching for Cricket, Football, Badminton, Tennis, Basketball, Swimming, Table Tennis, and Chess across our programs in Mumbai.' },
    { q: 'Can complete beginners learn with FirstMove?', a: 'Absolutely. We have dedicated beginner programs for all ages — ensuring a safe, supportive, and structured introduction to any sport, with no prior experience required.' },
    { q: 'What age groups can participate?', a: 'Our programs cater to kids from age 3–4 (toddler swimming) and go all the way to adults. Each sport has specific age-group batches tailored to skill and development stages.' },
    { q: 'Can I get private one-on-one coaching?', a: 'Yes. We offer private coaching for all our primary sports with background-verified, experienced coaches. Sessions are flexible in timing and location.' },
    { q: 'What equipment do I need to bring?', a: 'For trial and demo sessions, basic equipment is often provided by us. For regular training, we recommend investing in personal gear, and our coaches will guide you on what is best to buy.' },
    { q: 'Do you offer school and group programs?', a: 'Yes — our Schools Program is designed for educational institutions. We manage coaches, scheduling, and curriculum. Book a free demo for your school through our Schools page.' },
  ];

  return (
    <div style={{ paddingTop: '80px' }}>

      {/* ── 1. SPORT ICON SELECTOR ── */}
      <section style={{ padding: '60px 0 40px', backgroundColor: 'var(--panel)', borderBottom: '1px solid var(--panel-2)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '12px' }}>Explore Our Sports</div>
          <h1 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '8px', color: 'var(--chalk)' }}>Sports Playbook</h1>
          <p style={{ color: 'var(--steel)', fontSize: '16px', marginBottom: '40px' }}>Click on a sport to open its complete playbook</p>

          {/* Sport Icon Grid */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
            {sportsList.map((sport) => {
              const isActive = activeSport === sport.id;
              return (
                <button
                  key={sport.id}
                  onClick={() => handleSportClick(sport.id)}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                    padding: '20px 24px', borderRadius: '16px', cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    backgroundColor: isActive ? sport.colorHex : 'var(--ink)',
                    border: `2px solid ${isActive ? sport.colorHex : 'var(--panel-2)'}`,
                    color: isActive ? '#fff' : 'var(--steel)',
                    boxShadow: isActive ? `0 8px 32px ${sport.colorDim}` : 'none',
                    transform: isActive ? 'translateY(-4px) scale(1.05)' : 'translateY(0) scale(1)',
                    minWidth: '90px',
                  }}
                  onMouseOver={e => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = sport.colorHex;
                      e.currentTarget.style.color = sport.colorHex;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseOut={e => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'var(--panel-2)';
                      e.currentTarget.style.color = 'var(--steel)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  <span style={{ fontSize: '28px', lineHeight: 1 }}>{sport.emoji}</span>
                  <span className="font-mono" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
                    {sport.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 2. SPORT PLAYBOOK (opens below when clicked) ── */}
      <section ref={playbookRef} style={{ padding: '80px 0', backgroundColor: 'var(--ink)', transition: 'all 0.4s ease' }}>
        <div className="container">

          {/* Playbook Hero Banner */}
          <div style={{
            borderRadius: '24px', overflow: 'hidden', marginBottom: '48px',
            border: `1px solid ${activeData.color}`,
            boxShadow: `0 24px 64px ${activeData.colorDim}`,
            position: 'relative', minHeight: '340px',
            display: 'flex', alignItems: 'flex-end',
          }}>
            {/* Background Image */}
            <img
              src={sportImages[activeSport]}
              alt={activeData.name}
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', transition: 'opacity 0.5s ease',
              }}
              key={activeSport}
            />
            {/* Gradient Overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,25,47,0.95) 40%, rgba(10,25,47,0.4) 100%)' }} />
            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, padding: '48px', flex: 1 }}>
              <div className="eyebrow" style={{ color: activeData.color, marginBottom: '12px' }}>Sport Playbook</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#fff', marginBottom: '16px', lineHeight: 1.1 }}>
                <span style={{ color: activeData.color }}>{activeData.emoji} {activeData.name}</span>
              </h2>
              <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: '560px' }}>
                {activeData.about}
              </p>
            </div>
          </div>

          {/* Playbook Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' }}>

            {/* Why Play */}
            <div style={{ backgroundColor: 'var(--panel)', padding: '36px', borderRadius: '20px', border: '1px solid var(--panel-2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Zap size={18} color={activeData.color} />
                <h3 className="font-mono" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.12em', color: activeData.color }}>Why Play?</h3>
              </div>
              <p style={{ color: 'var(--steel)', lineHeight: 1.7, fontSize: '15px' }}>{activeData.whyPlay}</p>
            </div>

            {/* Basic Rules */}
            <div style={{ backgroundColor: 'var(--panel)', padding: '36px', borderRadius: '20px', border: '1px solid var(--panel-2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Shield size={18} color={activeData.color} />
                <h3 className="font-mono" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.12em', color: activeData.color }}>Basic Rules</h3>
              </div>
              <p style={{ color: 'var(--steel)', lineHeight: 1.7, fontSize: '15px' }}>{activeData.rules}</p>
            </div>

            {/* Core Skills — full width */}
            <div style={{ backgroundColor: 'var(--panel)', padding: '36px', borderRadius: '20px', border: '1px solid var(--panel-2)', gridColumn: '1 / -1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <Star size={18} color={activeData.color} />
                <h3 className="font-mono" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.12em', color: activeData.color }}>Core Skills & Training</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                {activeData.skills.map((skill, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', backgroundColor: 'var(--ink)', borderRadius: '10px', border: '1px solid var(--panel-2)' }}>
                    <CheckCircle2 size={16} color={activeData.color} />
                    <span style={{ color: 'var(--chalk)', fontWeight: 500, fontSize: '14px' }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div style={{ backgroundColor: 'var(--panel)', padding: '36px', borderRadius: '20px', border: '1px solid var(--panel-2)' }}>
              <h3 className="font-mono" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.12em', color: activeData.color, marginBottom: '20px' }}>Equipment Needed</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {activeData.equipment.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: activeData.color, flexShrink: 0 }} />
                    <span style={{ color: 'var(--chalk)', fontSize: '14px', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div style={{ backgroundColor: 'var(--panel)', padding: '36px', borderRadius: '20px', border: '1px solid var(--panel-2)' }}>
              <h3 className="font-mono" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.12em', color: activeData.color, marginBottom: '20px' }}>Key Benefits</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {activeData.benefits.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle2 size={16} color={activeData.color} />
                    <span style={{ color: 'var(--chalk)', fontSize: '14px', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who It's For — CTA */}
            <div style={{
              backgroundColor: activeData.colorHex, padding: '40px', borderRadius: '20px',
              gridColumn: '1 / -1', color: '#fff', display: 'flex',
              flexDirection: 'column', alignItems: 'center', textAlign: 'center'
            }}>
              <h3 className="font-mono" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px', color: 'rgba(255,255,255,0.7)' }}>Who It's For</h3>
              <p style={{ fontSize: '20px', lineHeight: 1.6, maxWidth: '600px', marginBottom: '32px', fontWeight: 500 }}>{activeData.whoItsFor}</p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link to="/contact" style={{
                  backgroundColor: '#fff', color: activeData.colorHex, padding: '14px 32px',
                  borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-flex',
                  alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'transform 0.2s'
                }}
                  onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Join {activeData.name} Program <ArrowRight size={16} />
                </Link>
                <Link to="/learn-a-sport/private" style={{
                  backgroundColor: 'transparent', color: '#fff', padding: '14px 32px',
                  border: '2px solid rgba(255,255,255,0.5)', borderRadius: '8px',
                  fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-flex',
                  alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'all 0.2s'
                }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Get a Private Coach
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. FAQ SECTION ── */}
      <section className="reveal" style={{ padding: '100px 0', backgroundColor: 'var(--panel)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '12px' }}>Got Questions?</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 52px)', color: 'var(--chalk)' }}>Frequently Asked Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <div key={i} style={{
                  backgroundColor: 'var(--ink)', borderRadius: '14px',
                  border: `1px solid ${isOpen ? 'var(--gold-dim)' : 'var(--panel-2)'}`,
                  overflow: 'hidden', transition: 'border-color 0.3s ease'
                }}>
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    style={{
                      width: '100%', padding: '22px 28px', display: 'flex',
                      justifyContent: 'space-between', alignItems: 'center',
                      textAlign: 'left', cursor: 'pointer', backgroundColor: 'transparent',
                      border: 'none', color: 'var(--chalk)'
                    }}
                  >
                    <span style={{ fontSize: '17px', fontWeight: 600, paddingRight: '16px' }}>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                        color: isOpen ? 'var(--gold)' : 'var(--steel)',
                        flexShrink: 0
                      }}
                    />
                  </button>
                  <div style={{
                    maxHeight: isOpen ? '200px' : '0', overflow: 'hidden',
                    transition: 'max-height 0.35s ease',
                    padding: isOpen ? '0 28px 24px' : '0 28px',
                    color: 'var(--steel)', lineHeight: 1.7, fontSize: '15px'
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
