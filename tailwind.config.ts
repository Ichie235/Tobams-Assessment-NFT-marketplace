import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "nft-royal-blue-gr":
          "linear-gradient(104.42deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 60.23%), linear-gradient(0deg, #2A27C9, #2A27C9)",
        "nft-purple-blue-gr":
          "linear-gradient(104.42deg, #4745D0 0%, #2A27C9 60.23%)",
      },
      colors: {
        "nft-navy-blue": "#060714",
        "nft-dark-bluish-gray": "#0E1028",
        "nft-deep-gray": "#7780A1",
        "nft-light-gray": "#262840",
        "nft-royal-blue": "#2A27C9",
      },
    },
  },
  plugins: [],
};

export default config;
