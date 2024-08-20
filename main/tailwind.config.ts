import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // Add your theme customizations here
      colors: {
        primary: "#38b2ac", // Replace with your desired primary color
        secondary: "#f0f0f0", // Replace with your desired secondary color
        accent: "#007bff", // Replace with your desired accent color
        text: "#333", // Text color
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
      spacing: {
        // Add custom spacing values if needed
      },
      padding: {
        "content-padding": "2rem", // Custom padding value
      },
    },
  },
  plugins: [],
};

export default config;
