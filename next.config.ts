/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Enables static export (replaces `next export`)
  output: 'export',

  // ✅ Recommended for performance (optional)
  reactStrictMode: false,

  // ✅ Ignore build-time TS & ESLint errors in CI/CD
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Required for static sites (no server image optimization)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.wealthzi.com",
        port: "",
        pathname: "/landing-page/**", // ✅ wildcard fix (was missing `/`)
      },
    ],
  },

  // ✅ Optional: add trailing slashes (helps with Nginx & GitHub Pages)
  trailingSlash: true,

  // ✅ Environment variables (if needed)
  env: {
    NEXT_PUBLIC_SITE_URL: "https://www.wealthzi.com",
  },

  // ⚠ Redirects and rewrites don’t work with static export.
  // Use <Redirect> in components or client-side router.push().
  // async redirects() {
  //   return [
  //     { source: "/calculators/LumpSumCalculator", destination: "/calculators/lumpsum-calculator", permanent: true },
  //     { source: "/calculators/SIPCalculator", destination: "/calculators/sip-calculator", permanent: true },
  //     { source: "/calculators/GoalCalculator", destination: "/calculators/sip-goal-calculator", permanent: true },
  //     { source: "/calculators/FDCalculator", destination: "/calculators/fd-calculator", permanent: true },
  //     { source: "/calculators/RDCalculator", destination: "/calculators/rd-calculator", permanent: true },
  //     { source: "/calculators/LoanEMICalculator", destination: "/calculators/loan-emi-calculator", permanent: true },
  //   ];
  // },
};

module.exports = nextConfig;
