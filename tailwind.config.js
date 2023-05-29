/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        parlourstheme: {
          primary: '#F63E7B',
          secondary: '#E5E5E5',
          accent: "#111430",
          neutral: "#E5E5E5",
          "base-100": "#FFFFFF",
        }
      }
    ]

  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

