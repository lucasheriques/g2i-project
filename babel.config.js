module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@api": "./src/api",
            "@components": "./src/components",
            "@features": "./src/features",
            "@store": "./src/store",
            "@utils": "./src/utils",
            "@services": "./src/services",
            "@assets": "./assets",
            "@constants": "./src/constants",
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};
