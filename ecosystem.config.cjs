// PM2 Ecosystem Config — Lita Birthday Website (React + Vite)
// ─────────────────────────────────────────────────────────────
// CARA PAKAI:
//
// 1. Development (hot-reload):
//    pm2 start ecosystem.config.cjs --env development
//
// 2. Production (setelah npm run build):
//    npm run build
//    pm2 start ecosystem.config.cjs
//    pm2 save
//    pm2 startup   (biar auto-start saat server reboot)

module.exports = {
  apps: [
    {
      name             : 'lita-birthday',   // nama proses di PM2
      script           : 'npm',
      args             : 'run start',       // npm run start = vite preview
      interpreter      : 'none',
      instances        : 1,
      autorestart      : true,
      watch            : false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV : 'production',
        PORT     : 3026,
      },
      env_development: {
        NODE_ENV : 'development',
        // untuk dev mode, jalankan: pm2 start ecosystem.config.cjs --env development
        // pastikan args diubah ke 'run dev' jika ingin hot-reload
      },
    },
  ],
};
