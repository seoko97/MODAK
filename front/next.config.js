const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  compress: true,
  reactStrictMode: true,
  // babel -> SWC
  swcMinify: true,

  experimental: {
    styledComponents: true,
  },

  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === "production";
    config.resolve.modules.push(__dirname);
    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "eval",
      plugins: [
        ...config.plugins,
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
      ],
    };
  },
});
