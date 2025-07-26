/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Softer Japanese-inspired colors
        'jp-red': '#D0666F',      // Softer red (traditional beni-iro)
        'jp-indigo': '#5B6E8C',   // Softer indigo (ai-iro)
        'jp-slate': '#414C60',    // Softer slate
        'jp-gold': '#D9C9A3',     // Softer gold (kincha-iro)
        'jp-sakura': '#FADADD',   // Soft cherry blossom pink
        'jp-matcha': '#BED2B6',   // Soft matcha green
        'jp-cream': '#F6F0E8',    // Soft Japanese paper color

        // Maintaining African palette with slight adjustments for harmony
        'afri-red': '#E9756A',    // Slightly softer red
        'afri-yellow': '#F9D777', // Slightly softer yellow
        'afri-green': '#67A678',  // Slightly softer green
        'paper': '#F9F6F0',       // Slightly warmer paper
      },
      backgroundImage: {
        'washi': "url('/assets/images/washi.png')",
        'kente': "url('/assets/images/kente-pattern.png')",
      }
    },
  },
  plugins: [],
}