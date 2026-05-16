import { useState } from 'react';
import './LetterSection.css';

export default function LetterSection() {
  const [opened, setOpened] = useState(false);

  return (
    <section id="letter-section" className="section letter-section">
      <div className="section-inner">
        <div className="section-badge">📜 Surat Cinta</div>
        <h2 className="section-title">Untuk Lita Tersayang</h2>

        <div className="letter-envelope">
          {!opened ? (
            <div
              className="envelope-front"
              onClick={() => setOpened(true)}
              role="button"
              tabIndex={0}
              aria-label="Buka surat cinta"
              onKeyDown={(e) => e.key === 'Enter' && setOpened(true)}
            >
              <div className="env-heart">💌</div>
              <p className="env-label">Klik untuk membuka surat</p>
            </div>
          ) : (
            <div className="letter-paper">
              <div className="letter-header">
                <span className="letter-date">18 Mei 2026</span>
                <span className="letter-to">Untuk: Nurlita Putri 🌹</span>
              </div>
              <div className="letter-body">
                <p>To my favorite person everr, Lita! ✨</p>
                <br />
                <p>
                  Happy level 21! 🎉 Sumpah ga kerasa banget waktu jalan cepet amat.
                  Tiap hari aku tuh lowkey selalu bersyukur banget bisa bareng sama kamu, 
                  kayak, you're literally the best thing that ever happened to me fr fr. 😭💖
                </p>
                <br />
                <p>
                  Kamu tau ga sih? Tiap liat kamu senyum tuh auranya positive vibes banget,
                  bikin mood aku yang tadinya minus langsung stonks! 
                  Kamu tuh alasan aku selalu semangat, no cap. 
                </p>
                <br />
                <p>
                  Di hari ultah kamu yang ke-21 ini, semoga semua yang kamu manifest 
                  segera kejadian yaa. Semoga di umur yang baru ini kamu makin glowing, 
                  dilancarin semua urusannya, rezekinya ngalir terus, dan dijauhkan dari 
                  segala bad vibes. You deserve the world and all the good stuff in it, 
                  periodt. 
                </p>
                <br />
                <p>
                  Plis stay being your cute, slay, and cheerful self yang selalu 
                  bikin aku salting tiap hari. I love you 3000, and I'll always be 
                  your number one support system amiiinnn! 🫶💕
                </p>
                <br />
                <p>With all my love and pookie energy,</p>
                <p className="letter-sign">Your number 1 fanboy 💖</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
