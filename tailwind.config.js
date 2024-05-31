/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        custom: {
          "primary": "#FF4000",
          "primary-content": "#FFFFFF",
          "secondary": "#FFA726",
          "neutral": "#020617",
          "neutral-content": "#FFA726",
          "accent": "#FFA726",
          "accent-content": "#FF4000",
          "base-content": "#020617",
          "base-100": "#FFFFFF",
          "base-200": "FFA726",
          "success": "#37d399",
          "error": "#f77272",
        },
      },
      
    ],
  }
}
