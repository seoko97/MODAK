const path = require("path");

// const resolvePath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "storybook-addon-styled-component-theme/dist/preset",
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@src": path.resolve(__dirname, "../src"),
      "@pages": path.resolve(__dirname, "../src/pages"),
      "@components": path.resolve(__dirname, "../src/components"),
    };
    return config;
  },
};
