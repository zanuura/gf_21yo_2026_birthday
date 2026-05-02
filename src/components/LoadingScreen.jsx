import { useEffect, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 800); // wait for fade-out before notifying parent
    }, 2000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className={`loading-screen ${!visible ? 'loading-hidden' : ''}`}>
      <div className="loading-content">
        <div className="loading-heart">💖</div>
        <p className="loading-text">Menyiapkan sesuatu yang spesial...</p>
        <div className="loading-dots">
          <span /><span /><span />
        </div>
      </div>
    </div>
  );
}
