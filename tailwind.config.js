/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ===== Sistema premium (basado en el logo) =====
        platinum: {
          DEFAULT: '#C9CCD1',
          50:  '#F5F6F7',
          100: '#E5E7EB',
          200: '#D4D7DC',
          300: '#C9CCD1',
          400: '#A8ACB3',
          500: '#878B92',
        },
        graphite: {
          DEFAULT: '#0B0D10',
          50:  '#EDEEF0',
          100: '#D6D8DC',
          200: '#A8ACB3',
          300: '#6B6F76',
          400: '#3A3D43',
          500: '#22252A',
          600: '#16191E',
          700: '#0B0D10',
          800: '#06080A',
          900: '#020304',
        },
        ice: {
          DEFAULT: '#6EA8FE',
          200: '#D3E3FF',
          300: '#A4C5FF',
          400: '#86B6FF',
          500: '#6EA8FE',
          600: '#3D86F4',
          700: '#2563EB',
        },
        offwhite: '#F7F8FA',
        bone: '#EFEFF1',
        hairline: 'rgba(11, 13, 16, 0.08)',
        'hairline-d': 'rgba(255, 255, 255, 0.10)',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Escala display fluida tipo Apple/Stripe
        'd-1': ['clamp(2.5rem, 7vw, 7.5rem)',  { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        'd-2': ['clamp(2rem, 5.5vw, 5.25rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'd-3': ['clamp(1.75rem, 4vw, 3.5rem)', { lineHeight: '1.04', letterSpacing: '-0.025em' }],
        'd-4': ['clamp(1.375rem, 2.6vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        widest2: '0.18em',
        widest3: '0.28em',
      },
      boxShadow: {
        glass:     '0 1px 0 0 rgba(255,255,255,0.6) inset, 0 30px 60px -25px rgba(11,13,16,0.25)',
        'glass-d': '0 1px 0 0 rgba(255,255,255,0.06) inset, 0 30px 60px -25px rgba(0,0,0,0.6)',
        soft:      '0 10px 40px -10px rgba(11,13,16,0.12)',
        lift:      '0 30px 80px -20px rgba(11,13,16,0.35)',
        ice:       '0 0 0 1px rgba(110,168,254,0.35), 0 20px 60px -10px rgba(110,168,254,0.30)',
      },
      backgroundImage: {
        'metal':       'linear-gradient(180deg, #F5F6F7 0%, #C9CCD1 60%, #878B92 100%)',
        'metal-cool':  'linear-gradient(135deg, #E5E7EB 0%, #A4C5FF 50%, #6EA8FE 100%)',
        'graphite-radial':
          'radial-gradient(ellipse at 50% 0%, #22252A 0%, #0B0D10 70%)',
        'ice-glow':
          'radial-gradient(circle at 50% 50%, rgba(110,168,254,0.35), transparent 65%)',
        'noise':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      keyframes: {
        shine: {
          '0%':   { transform: 'translateX(-120%) skewX(-12deg)' },
          '100%': { transform: 'translateX(220%) skewX(-12deg)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        shine: 'shine 1.4s ease-in-out',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
