import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontWeight: {
        normal: '450',
        bold: '750',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontSize: {
        // 50px
        '5.5xl': ['3.125rem', '3.75rem'],
        // 26px
        '2.5xl': '1.625rem',
        // 32px
        '3.5xl': ['2rem', '2.5rem'],
      },
      maxWidth: {
        'screen-lg': '1065px',
      },
    },
  },
  plugins: [],
} satisfies Config
