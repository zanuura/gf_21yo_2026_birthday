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
                <p>Sayang yang paling aku cintai,</p>
                <br />
                <p>
                  Selamat ulang tahun yang ke-21! 🎉 Waktu terasa begitu cepat
                  berlalu, dan setiap harinya aku selalu bersyukur bisa mengenal
                  dan mencintaimu.
                </p>
                <br />
                <p>
                  Kamu tahu tidak? Setiap kali aku melihat kamu senyum, dunia
                  ini terasa jauh lebih baik. Kamu adalah alasan kenapa aku
                  selalu semangat menjalani hari.
                </p>
                <br />
                <p>
                  Di hari ulang tahunmu yang spesial ini, aku berharap semua
                  yang kamu impikan akan terwujud. Kamu pantas mendapatkan
                  semua kebaikan di dunia ini, Lita.
                </p>
                <br />
                <p>
                  Tetaplah menjadi dirimu yang imut, ceria, dan selalu bikin
                  aku jatuh cinta setiap harinya. Aku sangat mencintaimu,
                  dan aku berjanji akan selalu ada untukmu. 💕
                </p>
                <br />
                <p>Dengan cinta yang tak terbatas,</p>
                <p className="letter-sign">Yang selalu mencintaimu 💖</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
