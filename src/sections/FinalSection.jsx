import { useConfetti } from '../hooks/useConfetti';
import './FinalSection.css';

export default function FinalSection() {
  const launchConfetti = useConfetti();

  return (
    <section id="final-section" className="section final-section">
      <div className="section-inner final-inner">
        <div className="big-number" aria-hidden="true">21</div>

        <h2 className="final-title">
          Happy Birthday<br />Nurlita Putri! 🎀
        </h2>

        <p className="final-sub">
          Semoga usia 21 tahun membawa kebahagiaan,<br />
          kesehatan, dan cinta yang tak terhingga 🌹💖
        </p>

        <div className="final-hearts" aria-hidden="true">
          {['💖', '🌹', '💖', '🌹', '💖'].map((h, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.2}s` }}>{h}</span>
          ))}
        </div>

        <button
          className="btn-celebrate"
          onClick={() => launchConfetti(250)}
          aria-label="Rayakan ulang tahun!"
        >
          🎊 Rayakan! 🎊
        </button>
      </div>
    </section>
  );
}
