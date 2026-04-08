import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Warm dark palette — never pure black or pure white
        canvas:  '#0d0d0f',   // near-black with cool tint
        surface: '#131316',   // cards / nav bg
        'surface-raised': '#1c1c21',
        // Alt section — warm dark instead of pure white
        'section-alt': '#16161a',
        // Text tokens
        'ink':       '#e8e6e1',   // near-white, warm
        'ink-muted': '#6b6a72',   // mid grey
        'ink-dim':   '#2e2d35',   // very dim — dividers
        // Accent
        accent: '#c8b89a',        // warm sand — subtle pop
      },
      letterSpacing: {
        widest: '0.4em',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
