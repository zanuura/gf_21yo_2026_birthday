import { useState } from 'react';
import { useConfetti } from '../hooks/useConfetti';
import './CakeSection.css';

export default function CakeSection() {
  const [blown, setBlown] = useState(false);
  const launchConfetti = useConfetti();

  const handleBlow = () => {
    if (blown) return;
    setBlown(true);
    launchConfetti(120);
  };

  return (
    <section id="cake-section" className="section cake-section">
      <div className="section-inner">
        <div className="section-badge">🎂 Kue Ulang Tahunmu</div>
        <h2 className="section-title">Tiup Lilinnya, Sayang!</h2>
        <p className="section-sub">Klik kue untuk meniup lilin 🕯️✨</p>

        <div
          className={`cake-wrapper ${blown ? 'cake-blown' : ''}`}
          onClick={handleBlow}
          role="button"
          tabIndex={0}
          aria-label="Tiup lilin kue"
          onKeyDown={(e) => e.key === 'Enter' && handleBlow()}
        >
          <img
            src="/cake.png"
            alt="Kue ulang tahun ke-21 kawaii"
            className="cake-img"
          />

          {/* Candles overlay — hidden when blown */}
          {!blown && (
            <div className="candles-overlay">
              <div className="flame-row">
                {['🕯️', '🕯️', '🕯️', '🕯️', '🕯️'].map((f, i) => (
                  <span key={i} className="flame" style={{ animationDelay: `${i * 0.1}s` }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Wish popup — shown after blown */}
          {blown && (
            <div className="wish-pop">
              🌟 Semoga semua harapanmu terkabul! 🌟
            </div>
          )}
        </div>

        <p className="cake-hint" style={{ opacity: blown ? 0 : 1 }}>
          👆 Klik kue untuk meniup lilin!
        </p>
      </div>
    </section>
  );
}
