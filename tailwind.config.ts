import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.6',
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3)'
          },
          '50%': {
            opacity: '1',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3)'
          }
        }
      },
      animation: {
        'fade-in-up-fast': 'fade-in-up 0.5s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'fade-in-up-2': 'fade-in-up 1.5s ease-out',
        'fade-in-up-3': 'fade-in-up 2s ease-out',
        'fade-in-up-4': 'fade-in-up 2.5s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
      },
      fontFamily: {
        instrumental: ['InstrumentalSerif', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
