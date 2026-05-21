/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta editorial premium — institucional con calidez heritage
        ink: {
          DEFAULT: '#0A1628',
          50:  '#E7EBF1',
          100: '#C0CAD8',
          200: '#8B9BB4',
          300: '#566D90',
          400: '#2C4467',
          500: '#152A4A',
          600: '#0A1628',
          700: '#070F1C',
          800: '#040912',
          900: '#020509',
        },
        navy: {
          DEFAULT: '#0A1628',
          50:  '#E7EBF1',
          100: '#C0CAD8',
          200: '#8B9BB4',
          300: '#566D90',
          400: '#2C4467',
          500: '#152A4A',
          600: '#0A1628',
          700: '#070F1C',
          800: '#040912',
          900: '#020509',
        },
        petrol: {
          DEFAULT: '#0E3838',
          400: '#1A5151',
          500: '#114747',
          600: '#0E3838',
          700: '#0A2828',
          800: '#061818',
        },
        bronze: {
          DEFAULT: '#A47148',
          200: '#E8D5BB',
          300: '#D4B98F',
          400: '#BE9A6B',
          500: '#A47148',
          600: '#8A5C39',
          700: '#6D4729',
          800: '#4A301B',
        },
        // alias para compatibilidad
        gold: {
          DEFAULT: '#A47148',
          300: '#D4B98F',
          400: '#BE9A6B',
          500: '#A47148',
          600: '#8A5C39',
          700: '#6D4729',
        },
        bone: {
          DEFAULT: '#F4EFE6',
          50:  '#FBF8F2',
          100: '#F4EFE6',
          200: '#EAE2D2',
          300: '#DDD0B8',
        },
        cream: {
          DEFAULT: '#F4EFE6',
          50:  '#FBF8F2',
          100: '#F4EFE6',
          200: '#EAE2D2',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Escala editorial fluida
        'display-2xl': ['clamp(3.5rem, 9vw, 8.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-xl':  ['clamp(2.75rem, 6.5vw, 5.5rem)', { lineHeight: '1', letterSpacing: '-0.025em' }],
        'display-lg':  ['clamp(2.25rem, 5vw, 4rem)',     { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        'display-md':  ['clamp(1.75rem, 3.5vw, 2.75rem)',{ lineHeight: '1.1', letterSpacing: '-0.015em' }],
      },
      letterSpacing: {
        widest2: '0.22em',
        widest3: '0.32em',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(10, 22, 40, 0.18)',
        card: '0 4px 24px -8px rgba(10, 22, 40, 0.12)',
        lift: '0 30px 80px -30px rgba(10, 22, 40, 0.45)',
        ring: '0 0 0 1px rgba(164, 113, 72, 0.35)',
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(180deg, rgba(4,9,18,0.85) 0%, rgba(4,9,18,0.55) 45%, rgba(4,9,18,0.92) 100%)',
        'noise':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
    },
  },
  plugins: [],
}

