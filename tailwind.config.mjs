/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ieBrand1: "#CCf2F7",
        ieBrand2: "#99E5EE",
        ieBrand3: "#00C1D5",
        ieBrand4: "#00A6B9",
        ieBrand5: "#006A76",
        gray: {
          50: "#FAFAFC",
          100: "#E9E9EC",
        },
      },
    },
  },
  plugins: [],
};
