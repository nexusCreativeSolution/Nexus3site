const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

// module.exports = withPlugins([optimizedImages], { target: 'serverless' });

module.exports = withPlugins([optimizedImages], { 
  experimental: {
      target: 'serverless',
      crypto: { encrypt: false },
      cryptography: 'aes-256-cbc',
    },
    security: {
      enableSourceMap: true,
      ssl: {
        enabled: false,
      },
    },
    exportTrailingSlash: true, // Optional: Add a trailing slash to paths
  }
);
