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
        support:'var(--support)',
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
        fadeUp1:{
          "0%,20%":{
            transform:"translateY(160px)",
            opacity:0
          },
          "100%":{
            transform:"translateY(0px)",
            opacity:1
          },
        },
        fadeUpDelay:{
          "0% , 60%":{
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
        authBg:{
          "0%":{
            "background-position":"0 0"
          },
          "100%":{
           "background-position":"100px 100px" 
          }
        }

      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeUp:"fadeup 0.5s linear 1",
        fadeUphero:"fadeUp1 1s linear infinite",
        fadeUpDelay:"fadeUpDelay 1.2s linear 1",
        popinDelay:"popinDelay 1.4s linear 1",
        fadeUpDelay1:"fadeUpDelay1 1.8s linear 1",
        fadeUpDelay2:"fadeUpDelay1 2.2s linear 1",
        fadeUpDelay3:"fadeUpDelay1 2.6s linear 1",
        custombounce:"customBounce 8s linear infinite",
        fadeinView:"fadeup 0.75s linear 1",
        movebg:"authBg 30s linear infinite"
      },
      screens:{ 
        xs:"340px",
        ...defaultTheme.screens,
        sm:"580px",
        md:"810px",
        lg:"1060px",
        xl:"1200px",
    },
    backgroundImage:{
      dots:"radial-gradient(circle,#4a5568 2%, transparent 2%)"
    },
    },
  },
  plugins: [require("tailwindcss-animate")],
}