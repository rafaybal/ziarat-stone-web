
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // Custom blue theme colors (replacing marble theme)
        blue: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d9ff',
          300: '#a4bfff',
          400: '#799cff',
          500: '#507eff',
          600: '#3a65f8',
          700: '#2f51e8',
          800: '#2742bc',
          900: '#253993',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        "accordion-up": {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-in-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "pulse-light": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "0.2" }
        },
        "shine": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" }
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" }
        }
      },
      animation: {
        "accordion-down": 'accordion-down 0.2s ease-out',
        "accordion-up": 'accordion-up 0.2s ease-out',
        "fade-in": 'fade-in 0.8s ease-out forwards',
        "float": 'float 3s ease-in-out infinite',
        "pulse-light": 'pulse-light 4s ease-in-out infinite',
        "shine": 'shine 3s linear infinite',
        "shimmer": 'shimmer 2s ease-in-out infinite',
        "rotate-slow": 'rotate-slow 20s linear infinite',
        "bounce-gentle": 'bounce-gentle 3s ease-in-out infinite'
      },
      backgroundImage: {
        'blue-gradient': "linear-gradient(135deg, rgba(244,247,254,1) 0%, rgba(215,227,244,1) 100%)",
        'hero-pattern': "url('https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        'light-overlay': "linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.2), rgba(255,255,255,0.1))"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
