import React from 'react';
import { Target, Activity, Users, Waves } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BrowseBySport = () => {
  const navigate = useNavigate();

  const sports = [
    { name: 'Cricket', icon: <Target size={24} />, color: 'var(--gold)', colorDim: 'var(--gold-dim)', id: 'cricket' },
    { name: 'Football', icon: <Activity size={24} />, color: 'var(--emerald)', colorDim: 'var(--emerald-dim)', id: 'football' },
    { name: 'Badminton', icon: <Users size={24} />, color: 'var(--sapphire)', colorDim: 'var(--sapphire-dim)', id: 'badminton' },
    { name: 'Tennis', icon: <Target size={24} />, color: 'var(--ruby)', colorDim: 'var(--ruby-dim)', id: 'tennis' },
    { name: 'Basketball', icon: <Activity size={24} />, color: 'var(--gold)', colorDim: 'var(--gold-dim)', id: 'basketball' },
    { name: 'Swimming', icon: <Waves size={24} />, color: 'var(--sapphire)', colorDim: 'var(--sapphire-dim)', id: 'swimming' },
    { name: 'Table Tennis', icon: <Users size={24} />, color: 'var(--sapphire)', colorDim: 'var(--sapphire-dim)', id: 'table-tennis' },
    { name: 'Chess', icon: <Target size={24} />, color: 'var(--gold)', colorDim: 'var(--gold-dim)', id: 'chess' },
  ];

  return (
    <section className="reveal" style={{ padding: '40px 0', backgroundColor: 'var(--panel)', borderBottom: '1px solid var(--panel-2)' }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: '16px', padding: '16px 0', WebkitOverflowScrolling: 'touch' }}>
          {sports.map((sport, i) => (
            <button key={i} 
              onClick={() => navigate('/sports', { state: { activeSport: sport.id } })}
              style={{
                flex: '0 0 auto', scrollSnapAlign: 'start', display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 28px',
                borderRadius: '32px', cursor: 'pointer', transition: 'var(--transition-fast)',
                backgroundColor: 'var(--ink)', border: '1px solid var(--panel-2)', color: 'var(--chalk)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = sport.color;
                e.currentTarget.style.color = sport.color;
                e.currentTarget.style.boxShadow = `0 8px 24px ${sport.colorDim}`;
                const iconBox = e.currentTarget.children[0];
                iconBox.style.color = sport.color;
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--panel-2)';
                e.currentTarget.style.color = 'var(--chalk)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
                const iconBox = e.currentTarget.children[0];
                iconBox.style.color = 'var(--steel)';
              }}
            >
              <div style={{ color: 'var(--steel)', transition: 'var(--transition-fast)' }}>
                {React.cloneElement(sport.icon, { size: 20 })}
              </div>
              <span className="font-mono" style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {sport.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseBySport;
