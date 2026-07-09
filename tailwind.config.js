/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f0f0f',
          dark: '#080808',
          light: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#39FF14', // Neon Green
          glow: 'rgba(57, 255, 20, 0.5)',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')",
      },
      boxShadow: {
        'neon': '0 0 10px rgba(57,255,20,0.3), 0 0 20px rgba(57,255,20,0.2)',
      }
    },
  },
  plugins: [],
}
