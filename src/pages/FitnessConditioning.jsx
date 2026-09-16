import React, { useState, useEffect } from 'react';
import { Apple, Moon, Heart, Dumbbell, ChevronRight } from 'lucide-react';

const FitnessConditioning = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 'eat',
      title: 'How good you eat',
      icon: <Apple size={32} />,
      color: 'var(--emerald)',
      desc: 'Focus on your daily nutrition, meal quality, hydration, and consistency.',
      questions: [
        'How would you rate your daily hydration?',
        'How consistent are your meal timings?',
        'Do you consume a balanced mix of macros daily?'
      ]
    },
    {
      id: 'sleep',
      title: 'How good you sleep',
      icon: <Moon size={32} />,
      color: 'var(--sapphire)',
      desc: 'Monitor sleep duration, consistency, and your bedtime routine for optimal recovery.',
      questions: [
        'How many hours of sleep do you get on average?',
        'Do you wake up feeling rested?',
        'Do you maintain a consistent bedtime routine?'
      ]
    },
    {
      id: 'feel',
      title: 'How good you feel',
      icon: <Heart size={32} />,
      color: 'var(--gold)',
      desc: 'Track your daily readiness, energy levels, mood, and stress/recovery balance.',
      questions: [
        'How would you rate your daily energy levels?',
        'How well are you managing stress lately?',
        'Do you feel physically and mentally ready for the day?'
      ]
    },
    {
      id: 'workout',
      title: 'How good you workout',
      icon: <Dumbbell size={32} />,
      color: 'var(--ruby)',
      desc: 'Assess your training consistency, frequency, strength, endurance, and mobility.',
      questions: [
        'How consistent is your weekly training schedule?',
        'Do you allow adequate recovery between intense sessions?',
        'How would you rate your current strength and mobility?'
      ]
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--ink)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Assessment</div>
          <h1 className="font-display" style={{ fontSize: '56px', marginBottom: '24px' }}>Fitness & Conditioning</h1>
          <p style={{ fontSize: '20px', color: 'var(--steel)', lineHeight: 1.6 }}>
            Overall fitness is influenced by multiple areas of your lifestyle and training. 
            Evaluate your habits below to build a foundation for peak performance and recovery.
          </p>
        </div>
      </section>

      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--panel)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px' 
          }}>
            {sections.map((section) => (
              <div 
                key={section.id} 
                style={{
                  backgroundColor: 'var(--ink)',
                  borderRadius: '16px',
                  padding: '40px',
                  border: '1px solid var(--panel-2)',
                  transition: 'var(--transition-fast)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = section.color;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  if (activeSection !== section.id) {
                    e.currentTarget.style.borderColor = 'var(--panel-2)';
                  }
                }}
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--panel)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: section.color,
                  marginBottom: '24px'
                }}>
                  {section.icon}
                </div>
                
                <h2 className="font-display" style={{ fontSize: '28px', color: 'var(--chalk)', marginBottom: '16px' }}>
                  {section.title}
                </h2>
                
                <p style={{ color: 'var(--steel)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                  {section.desc}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: section.color,
                  fontWeight: '600',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {activeSection === section.id ? 'Close Assessment' : 'Start Assessment'} <ChevronRight size={16} style={{
                    transform: activeSection === section.id ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.3s'
                  }}/>
                </div>

                {/* Interactive Question Area Placeholder */}
                <div style={{
                  maxHeight: activeSection === section.id ? '1000px' : '0',
                  opacity: activeSection === section.id ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.5s ease-in-out',
                  marginTop: activeSection === section.id ? '32px' : '0',
                  borderTop: activeSection === section.id ? '1px solid var(--panel-2)' : 'none',
                  paddingTop: activeSection === section.id ? '24px' : '0'
                }}
                onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
                >
                  {section.questions.map((q, idx) => (
                    <div key={idx} style={{ marginBottom: '24px' }}>
                      <p style={{ color: 'var(--chalk)', fontSize: '15px', marginBottom: '12px', fontWeight: '500' }}>{idx + 1}. {q}</p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {['Poor', 'Fair', 'Good', 'Excellent'].map((opt) => (
                          <button key={opt} style={{
                            flex: '1 1 auto',
                            minWidth: '80px',
                            padding: '10px 8px',
                            backgroundColor: 'var(--panel)',
                            border: '1px solid var(--panel-2)',
                            borderRadius: '8px',
                            color: 'var(--steel)',
                            fontSize: '14px',
                            cursor: 'pointer',
                            transition: 'var(--transition-fast)'
                          }}
                          onMouseOver={e => {
                            e.currentTarget.style.borderColor = section.color;
                            e.currentTarget.style.color = 'var(--chalk)';
                          }}
                          onMouseOut={e => {
                            e.currentTarget.style.borderColor = 'var(--panel-2)';
                            e.currentTarget.style.color = 'var(--steel)';
                          }}>
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <button style={{
                    width: '100%',
                    padding: '14px',
                    backgroundColor: section.color,
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginTop: '8px',
                    transition: 'opacity 0.2s',
                    fontSize: '16px'
                  }}
                  onMouseOver={e => e.currentTarget.style.opacity = '0.9'}
                  onMouseOut={e => e.currentTarget.style.opacity = '1'}
                  >
                    Save Progress
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FitnessConditioning;
