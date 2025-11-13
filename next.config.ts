/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 static export enable
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // 👈 disable Next/Image optimization for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.wealthzi.com",
        port: "",
        pathname: "landing-page/banner.gif",
      }
    ],
  },
  // ⚠ Static export me redirects/rewrites nahi chalega
  // agar redirect chahiye toh client-side JS se handle karo
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