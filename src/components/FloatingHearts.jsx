import { useEffect } from 'react';

const SYMBOLS = ['❤️', '🌹', '💕', '💖', '✨', '🌸', '💝', '💗', '🎀', '⭐'];

export default function FloatingHearts() {
  useEffect(() => {
    const bg = document.getElementById('hearts-bg');
    if (!bg) return;

    const spawn = () => {
      const el = document.createElement('div');
      el.className = 'heart-float';
      el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      el.style.left = Math.random() * 100 + 'vw';
      el.style.fontSize = (0.9 + Math.random() * 1.4) + 'rem';
      const dur = 8 + Math.random() * 10;
      el.style.animationDuration = dur + 's';
      bg.appendChild(el);
      setTimeout(() => el.remove(), dur * 1000);
    };

    // initial burst
    for (let i = 0; i < 12; i++) setTimeout(spawn, i * 200);
    const interval = setInterval(spawn, 800);
    return () => clearInterval(interval);
  }, []);

  return <div id="hearts-bg" aria-hidden="true" />;
}
