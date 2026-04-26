import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-outfit)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "hsl(var(--foreground))",
            lineHeight: "1.75",
            fontSize: "1.125rem",
            h1: {
              fontFamily: "var(--font-outfit)",
              fontWeight: "700",
              letterSpacing: "-0.025em",
            },
            h2: {
              fontFamily: "var(--font-outfit)",
              fontWeight: "600",
              letterSpacing: "-0.025em",
              marginTop: "2.5em",
            },
            h3: {
              fontFamily: "var(--font-outfit)",
              fontWeight: "600",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            code: {
              fontWeight: "400",
              backgroundColor: "hsl(var(--muted))",
              padding: "0.2rem 0.4rem",
              borderRadius: "0.25rem",
            },
            a: {
              color: "hsl(var(--primary))",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              fontWeight: "500",
              "&:hover": {
                color: "hsl(var(--primary) / 0.8)",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), typography],
} satisfies Config

export default config

