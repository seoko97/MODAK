/**
 * @type {import('next').NextConfig}
 * */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  compress: true,
  reactStrictMode: true,
  // babel -> SWC
  swcMinify: true,

  experimental: {
    styledComponents: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    PRODUCTION_URL: process.env.PRODUCTION_URL,
  },

  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === "production";
    config.resolve.modules.push(__dirname);
    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "eval",
    };
  },
};

module.exports = withBundleAnalyzer(nextConfig);
