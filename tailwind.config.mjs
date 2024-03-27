/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        crimson: ['Crimson Text', 'serif'],
      },
      colors: {
        ieBrand1: "#CCf2F7",
        ieBrand2: "#99E5EE",
        ieBrand3: "#00C1D5",
        ieBrand4: "#00A6B9",
        ieBrand5: "#006A76",
        gray: {
          50: "#FAFAFC",
          100: "#E9E9EC",
          300: "#ACAEB6",
          400: "#92959F",
          500: "#777C87",
          600: "#5D6370",
          700: "#434959",
          800: "#293041",
          900: "#0f172a",
        },
      },
      grayscale: {
        0: '0',
        DEFAULT: '100%',
      },
      blur: {
        0: '0',
        none: '0',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
    },
  },
  plugins: [],
};
