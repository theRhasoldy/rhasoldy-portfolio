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
          light: "#FFF8EB",
          DEFAULT: "#FFCF70",
          dark: "#FFA320",
        },
      },
      height: {
        "screen-mobile": "100dvh",
        window: "clamp(30rem, 40vw, 40rem)",
        card: "clamp(32.95rem, 43.1vw, 43.1rem)",
      },
      minHeight: {
        "screen-mobile": "calc(100dvh - 4.75rem)",
      },
      margin: {
        192: "12rem",
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
