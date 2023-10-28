/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily:{
        inter:['Inter', 'sans-serif']
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        shade:"var(--shade)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        page:"var(--page)",
        main:{
          DEFAULT:'var(--main)',
          foreground:'var(--main-hover)'
        },
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
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        fadeup:{
          "0%":{
            transform:"translateY(160px)",
            opacity:0
          },
          "100%":{
            transform:"translateY(0px)",
            opacity:1
          },
        },
        fadeUpDelay:{
          "0% , 50%":{
            transform:"translateY(160px)",
            opacity:0
          },
          "100%":{
            transform:"translateY(0px)",
            opacity:1
          },
        },
        popinDelay:{
          "0% , 70%":{
            transform:"scale(0.2)",
            opacity:0,
          },
          "100%":{
            transform:"scale(1)",
            opacity:1  
          }
        },
        fadeUpDelay1:{
          "0% , 65%":{
            transform:"translateY(160px)",
            opacity:0
          },
          "100%":{
            transform:"translateY(0px)",
            opacity:1
          },
        },
        fadeUpDelay2:{
          "0% , 90%":{
            transform:"translateY(160px)",
            opacity:0
          },
          "100%":{
            transform:"translateY(0px)",
            opacity:1
          },
        },
        fadeUpDelay3:{
          "0% , 95%":{
            transform:"translateY(160px)",
            opacity:0
          },
          "100%":{
            transform:"translateY(0px)",
            opacity:1
          },
        },
        customBounce:{
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)"
          },
          "40%": {
            transform: "translateY(-10px)"
          },
          "60%": {
            transform: "translateY(-5px)"
          },
        },

      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeUp:"fadeup 0.5s linear 1",
        fadeUpDelay:"fadeUpDelay 0.8s linear 1",
        popinDelay:"popinDelay 1s linear 1",
        fadeUpDelay1:"fadeUpDelay1 1.4s linear 1",
        fadeUpDelay2:"fadeUpDelay1 2s linear 1",
        fadeUpDelay3:"fadeUpDelay1 2.4s linear 1",
        custombounce:"customBounce 8s linear infinite",
        fadeinView:"fadeup 0.75s linear 1"
      },
      screens:{ 
        xs:"340px",
        ...defaultTheme.screens,
        sm:"580px",
        md:"810px",
        lg:"1060px",
        xl:"1200px",
    },
    },
  },
  plugins: [require("tailwindcss-animate")],
}