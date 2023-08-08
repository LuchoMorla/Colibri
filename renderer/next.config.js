module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer';
    }

    return config;
  },
    images: {
      domains: ['images.pexels.com', 'pexels.com', 'i.pinimg.com', 'https://i.pinimg.com/', 'https://aynimar.com/', 'aynimar.com', 'www.aynimar.com'],
    },
};
