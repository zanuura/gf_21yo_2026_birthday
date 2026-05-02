import { useState, useCallback } from 'react';
import LoadingScreen    from './components/LoadingScreen';
import FloatingHearts   from './components/FloatingHearts';
import HeroSection      from './sections/HeroSection';
import CountdownSection from './sections/CountdownSection';
import CakeSection      from './sections/CakeSection';
import MessageSection   from './sections/MessageSection';
import LetterSection    from './sections/LetterSection';
import WishesSection    from './sections/WishesSection';
import FinalSection     from './sections/FinalSection';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), []);

  return (
    <>
      {/* ── Canvas untuk confetti (global, di atas semua) ── */}
      <canvas id="confetti-canvas" aria-hidden="true" />

      {/* ── Loading screen ── */}
      <LoadingScreen onDone={handleLoaded} />

      {/* ── Main content (muncul setelah loading) ── */}
      {loaded && (
        <>
          <FloatingHearts />
          <main>
            <HeroSection />
            <CountdownSection />
            <CakeSection />
            <MessageSection />
            <LetterSection />
            <WishesSection />
            <FinalSection />
          </main>
        </>
      )}
    </>
  );
}
