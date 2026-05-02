import { useState, useCallback } from 'react';
import { useInView } from '../hooks/useInView';
import { messageCards } from '../data/wishes';
import './MessageSection.css';

function MessageCard({ card, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useInView(
    useCallback(() => setVisible(true), []),
    0.15
  );

  return (
    <div
      ref={ref}
      className={`msg-card ${visible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="card-icon" style={{ animationDelay: `${index * 0.5}s` }}>
        {card.icon}
      </div>
      <h3>{card.title}</h3>
      <p>{card.text}</p>
    </div>
  );
}

export default function MessageSection() {
  return (
    <section id="message-section" className="section message-section">
      <div className="section-inner">
        <div className="section-badge">💌 Pesan Untukmu</div>
        <h2 className="section-title">Dari Hati yang Paling Dalam</h2>

        <div className="cards-grid">
          {messageCards.map((card, i) => (
            <MessageCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
