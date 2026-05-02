import './HeroSection.css';

export default function HeroSection() {
  const handleScroll = () => {
    document.getElementById('countdown-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="section hero-section">
      <div className="hero-inner">
        <div className="badge-top">✨ 18 Mei 2005 → 18 Mei 2026 ✨</div>

        <div className="hero-char">
          <img src="/girl.png" alt="Karakter imut Lita" className="girl-img" />
        </div>

        <h1 className="hero-title">
          <span className="line1">Happy</span>
          <span className="line2">21<sup>st</sup> Birthday</span>
          <span className="line3">Nurlita Putri 🎀</span>
        </h1>

        <p className="hero-sub">
          Selamat memasuki usia 21 tahun yang luar biasa,<br />
          sayang! Kamu semakin cantik setiap harinya 🌹
        </p>

        <button className="btn-start" onClick={handleScroll}>
          Buka Pesanmu 💌
        </button>

        <div className="scroll-indicator" aria-hidden="true">
          <div className="mouse" />
          <p>scroll ke bawah</p>
        </div>
      </div>
    </section>
  );
}
