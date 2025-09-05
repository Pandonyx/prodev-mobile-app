module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    // (optional but recommended by Expo if you use Reanimated)
    plugins: ["react-native-reanimated/plugin"],
  };
};
