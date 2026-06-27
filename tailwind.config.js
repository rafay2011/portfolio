/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "#050505",
        surface: "#111111",
        "surface-2": "#161616",
        primary: "#FFFFFF",
        secondary: "#A1A1AA",
        muted: "#71717A",
        accent: {
          DEFAULT: "#C9A227",
          soft: "#E3C766",
          deep: "#9A7B16",
        },
        border: "rgba(255,255,255,0.08)",
        "border-strong": "rgba(255,255,255,0.14)",
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        display: ["Clash Display", "Geist", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 9vw, 8.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.0", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(2rem, 4.5vw, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-sm": ["clamp(1.6rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        content: "1280px",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E3C766 0%, #C9A227 45%, #9A7B16 100%)",
        "radial-glow": "radial-gradient(circle at center, rgba(201,162,39,0.16) 0%, transparent 70%)",
        "mesh-dark": "radial-gradient(at 20% 20%, rgba(201,162,39,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(120,90,255,0.06) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(201,162,39,0.05) 0px, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(201,162,39,0.35)",
        "glow-soft": "0 0 80px -20px rgba(201,162,39,0.25)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -30px rgba(0,0,0,0.9)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        shimmer: "shimmer 2s infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
