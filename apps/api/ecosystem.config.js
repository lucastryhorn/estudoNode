module.exports = {
  apps: [
    {
      name: 'myfood',
      script: 'dist/index.js',
      instances: 0,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
