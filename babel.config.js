module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        "root": ["./src"],
        extentions: ['jx', 'jsx', 'ts', 'tsx'],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@config": "./src/config",
          "@hooks": "./src/hooks",
          "@routes": "./src/routes",
          "@screen": "./src/screen",
          "@service": "./src/service",
          "@utils": "./src/utils",
        }
      }]
    ]
  };
};
