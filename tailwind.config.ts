import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.ts',
    './data/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        accent:       '#3700ff',
        bg:           '#e8e7ee',
        fg:           '#111111',
        muted:        '#888888',
        'card-bg':    '#FFFFFF',
        'green-live': '#22A06B',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm:      '2px',
        full:    '9999px',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-green': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34,160,107,0.5)' },
          '50%':      { boxShadow: '0 0 0 6px rgba(34,160,107,0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.3' },
        },
      },
      animation: {
        marquee:       'marquee 28s linear infinite',
        'pulse-green': 'pulse-green 1.8s ease-in-out infinite',
        blink:         'blink 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
