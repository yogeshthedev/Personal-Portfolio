/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-elevated": "var(--bg-elevated)",
        card: "var(--card)",
        "card-hover": "var(--card-hover)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        bhi: "var(--bhi)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        alo: "var(--alo)",
        amd: "var(--amd)",
        "status-green": "var(--status-green)",
        text: "var(--text)",
        sub: "var(--sub)",
        faint: "var(--faint)",
      },
      fontFamily: {
        heading: ["var(--fh)"],
        serif: ["var(--fs)"],
        mono: ["var(--fm)"],
      },
      borderRadius: {
        r1: "var(--r1)",
        r2: "var(--r2)",
        r3: "var(--r3)",
      },
      maxWidth: {
        container: "var(--max)",
      },
    },
  },
  plugins: [],
}

