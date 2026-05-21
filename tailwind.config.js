/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta institucional
        navy: {
          DEFAULT: '#0B1F3A',
          50:  '#E8ECF3',
          100: '#C5CFE0',
          200: '#9AAAC4',
          300: '#6F86A7',
          400: '#44618B',
          500: '#1A3D6E',
          600: '#0B1F3A',
          700: '#091830',
          800: '#061226',
          900: '#040D1B',
        },
        petrol: {
          DEFAULT: '#0F3A3A',
          500: '#114747',
          600: '#0F3A3A',
          700: '#0B2D2D',
        },
        gold: {
          DEFAULT: '#B08A3E',
          300: '#D4B370',
          400: '#C5A055',
          500: '#B08A3E',
          600: '#937234',
          700: '#735829',
        },
        cream: {
          DEFAULT: '#F7F3EC',
          50:  '#FBF9F4',
          100: '#F7F3EC',
          200: '#EFE8DA',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(11, 31, 58, 0.18)',
        card: '0 4px 24px -8px rgba(11, 31, 58, 0.15)',
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(180deg, rgba(6,18,38,0.78) 0%, rgba(6,18,38,0.62) 50%, rgba(6,18,38,0.85) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
