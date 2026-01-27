/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#1152d4", // Default primary (Module 3, 5)
        "primary-light": "#eef4ff",
        "primary-dark": "#0a3aa0",

        // Module 1 specific
        "module1-primary": "#137fec",

        // Module 2 specific
        "module2-primary": "#f48c25",
        "navy": "#1B263B",
        "teal": "#2A9D8F",
        "grey-brand": "#6C757D",

        // Module 5 accents
        "accent": "#f97316",

        "background-light": "#f6f6f8",
        "background-dark": "#101622", // varying dark bgs: #101922, #221910, #101622

        "surface-light": "#ffffff",
        "surface-dark": "#1a2233", // varying: #1a2632, #1e2736, #1e2633

        "text-main-light": "#111318",
        "text-main-dark": "#f0f2f4",
        "text-secondary-light": "#616f89",
        "text-secondary-dark": "#9ca3af",

        "border-light": "#dbdfe6",
        "border-dark": "#2d3748",

        "danger": "#dc2626",
        "danger-light": "#fef2f2",
      },
      fontFamily: {
        "display": ["Lexend", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"],
        "montserrat": ["Montserrat", "sans-serif"],
        "opensans": ["Open Sans", "sans-serif"],
        "manrope": ["Manrope", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
