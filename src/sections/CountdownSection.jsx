import { useConfetti } from '../hooks/useConfetti';
import { useCountdown } from '../hooks/useCountdown';
import './CountdownSection.css';

const pad = (n) => String(n).padStart(2, '0');

export default function CountdownSection() {
  const { days, hours, mins, secs, isBirthday } = useCountdown('2026-05-18T00:00:00+07:00');
  const launchConfetti = useConfetti();

  // auto-confetti when birthday arrives
  if (isBirthday) launchConfetti(300);

  return (
    <section id="countdown-section" className="section countdown-section">
      <div className="section-inner">
        <div className="section-badge">🕐 Hitung Mundur</div>
        <h2 className="section-title">Menuju Hari Istimewamu</h2>
        <p className="section-sub">18 Mei 2026 — Ulang Tahun ke-21 🎂</p>

        {!isBirthday ? (
          <div className="countdown-grid">
            <CdBox num={pad(days)}  label="Hari" />
            <span className="cd-sep">:</span>
            <CdBox num={pad(hours)} label="Jam" />
            <span className="cd-sep">:</span>
            <CdBox num={pad(mins)}  label="Menit" />
            <span className="cd-sep">:</span>
            <CdBox num={pad(secs)}  label="Detik" />
          </div>
        ) : (
          <div className="birthday-arrived">
            🎉 HARI INI ADALAH HARIMU, LITA! 🎉<br />
            Selamat Ulang Tahun ke-21! 🥳🎂💖
          </div>
        )}
      </div>
    </section>
  );
}

function CdBox({ num, label }) {
  return (
    <div className="cd-box">
      <span className="cd-num">{num}</span>
      <span className="cd-label">{label}</span>
    </div>
  );
}
