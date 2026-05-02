import { useRef, useCallback } from 'react';

/**
 * useConfetti — meluncurkan confetti emoji di atas canvas
 */
export function useConfetti() {
  const frameRef = useRef(null);
  const aliveRef = useRef(false);

  const launch = useCallback((count = 150) => {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    const symbols = ['❤️', '🌹', '✨', '⭐', '🎊', '💕', '🎀', '💖'];

    const particles = Array.from({ length: count }, () => ({
      x:    Math.random() * canvas.width,
      y:    Math.random() * canvas.height - canvas.height,
      vx:   (Math.random() - 0.5) * 4,
      vy:   2 + Math.random() * 4,
      alpha: 1,
      size: 10 + Math.random() * 16,
      shape: symbols[Math.floor(Math.random() * symbols.length)],
      rot:  Math.random() * 360,
      rotV: (Math.random() - 0.5) * 6,
    }));

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      aliveRef.current = false;
    }
    aliveRef.current = true;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let anyVisible = false;
      particles.forEach(p => {
        if (p.alpha <= 0) return;
        anyVisible = true;
        p.x  += p.vx;
        p.y  += p.vy;
        p.rot += p.rotV;
        if (p.y > canvas.height) p.alpha -= 0.04;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.font = `${p.size}px serif`;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot * Math.PI / 180);
        ctx.fillText(p.shape, -p.size / 2, p.size / 2);
        ctx.restore();
      });
      if (anyVisible && aliveRef.current) {
        frameRef.current = requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
    draw();

    setTimeout(() => { aliveRef.current = false; }, 6000);
  }, []);

  return launch;
}
