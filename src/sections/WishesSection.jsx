import { useState, useCallback } from 'react';
import { useInView } from '../hooks/useInView';
import { wishes } from '../data/wishes';
import './WishesSection.css';

function WishItem({ wish, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useInView(
    useCallback(() => setVisible(true), []),
    0.1
  );

  return (
    <div
      ref={ref}
      className={`wish-item ${visible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <span className="wish-num">{wish.num}</span>
      <span className="wish-icon">{wish.icon}</span>
      <p className="wish-text">{wish.text}</p>
    </div>
  );
}

export default function WishesSection() {
  return (
    <section id="wishes-section" className="section wishes-section">
      <div className="section-inner">
        <div className="section-badge">🌟 Doa &amp; Harapan</div>
        <h2 className="section-title">21 Doa untuk Ulang Tahunmu</h2>
        <p className="section-sub">Setiap bintang mewakili satu harapan untukmu ✨</p>

        <div className="wishes-grid">
          {wishes.map((w, i) => (
            <WishItem key={w.num} wish={w} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
