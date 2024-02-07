/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      serif: ["IBM Plex Mono", "monospace"],
      sans: ["Poppins", "serif"],
    },
    extend: {
      colors: {
        background: "#101010",
        primary: {
          DEFAULT: "#FDFDFD",
          dark: "#888888",
        },
        secondary: {
          light: "#F5F5F5",
          DEFAULT: "#FF4FA3",
          dark: "#F5F5F5",
        },
        accent: {
          light: "#F5F5F5",
          DEFAULT: "#FFCF70",
          dark: "#F5F5F5",
        },
      },
      height: {
        "screen-mobile": "100dvh",
      },
      minHeight: {
        "screen-mobile": "100dvh",
      },
      padding: {
        "9vw": "9vw",
      },
      fontSize: {
        clamp: "clamp(2rem, 12vw, 14.5rem)",
      },
    },
  },
  plugins: [],
};
