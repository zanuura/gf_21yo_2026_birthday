import { useState, useEffect } from 'react';

/**
 * useCountdown — menghitung sisa waktu menuju tanggal ulang tahun
 * @param {string} targetDateStr  — ISO date string, e.g. '2026-05-18T00:00:00+07:00'
 * @returns {{ days, hours, mins, secs, isBirthday }}
 */
export function useCountdown(targetDateStr) {
  const target = new Date(targetDateStr).getTime();

  const calc = () => {
    const diff = target - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, isBirthday: true };
    return {
      days:       Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:      Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins:       Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      secs:       Math.floor((diff % (1000 * 60)) / 1000),
      isBirthday: false,
    };
  };

  const [time, setTime] = useState(calc);

  useEffect(() => {
    if (time.isBirthday) return;
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [time.isBirthday]);

  return time;
}
