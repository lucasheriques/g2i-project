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
            "@assets": "./assets",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@features": "./src/features",
            "@store": "./src/store",
            "@utils": "./src/utils",
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
