/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: 'var(--bg-page)',
        lavender: {
          50: '#FAF9FE',
          100: '#F4F2FA',
          200: '#E9E5F5',
          300: '#D7D0EE',
          400: '#B8ABE0',
          500: '#9986D0',
          600: '#7E66BF',
          700: '#674EA7',
          800: '#55418A',
          900: '#473772',
        },
        navy: {
          50: '#F0F3F9',
          100: '#E1E6F3',
          200: '#C2CCE7',
          300: '#94A6D5',
          400: '#647DBF',
          500: '#435EA8',
          600: '#324789',
          700: '#28386E',
          800: '#1E294F',
          900: '#0F172A',
          950: '#0B1120',
        },
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        sage: {
          50: '#F2FBF7',
          100: '#E1F6ED',
          200: '#C4EBDC',
          300: '#99DBC3',
          400: '#68C3A4',
          500: '#43A886',
          600: '#32876A',
          700: '#2A6C56',
          800: '#245646',
          900: '#1E473B',
        },
        surface: {
          DEFAULT: 'var(--bg-card)',
          card: 'var(--bg-card-pale)',
          subtle: 'var(--bg-card-subtle)',
        },
        subtle: {
          border: 'var(--border-subtle)',
          text: 'var(--text-secondary)',
        }
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
