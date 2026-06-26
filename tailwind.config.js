/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0A0E17',
        surface: '#101A2E',
        accent: {
          from: '#6366F1',
          to: '#8B5CF6',
        },
        'text-primary': '#F8FAFC',
        'text-secondary': '#94A3B8',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.glass': {
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(16, 26, 46, 0.6)',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        '.glass-light': {
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'rgba(0, 0, 0, 0.08)',
        },
        '.gradient-border': {
          position: 'relative',
          background:
            'linear-gradient(#101A2E, #101A2E) padding-box, linear-gradient(135deg, #6366F1, #8B5CF6) border-box',
          border: '1px solid transparent',
        },
        '.gradient-border-light': {
          position: 'relative',
          background:
            'linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(135deg, #6366F1, #8B5CF6) border-box',
          border: '1px solid transparent',
        },
      })
    },
  ],
}
