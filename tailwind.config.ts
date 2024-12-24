import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        normal: '450',
        bold: '750',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        // 52px
        "5.5xl": "3.25rem",
        // 26px
        "2.5xl": "1.625rem",
      },
      maxWidth: {
        "screen-lg": "1080px",
      }
    },
  },
  plugins: [],
} satisfies Config;
