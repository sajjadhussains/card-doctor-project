/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
    container: {
      center: true,
      padding: "3rem",
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",

        xl: "1280px",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        carDoctorTheme: {
          primary: "#FF3811",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "btn-primary": {
            color: "#fff",
          },
          ".btn-outline .btn-primary:hover": {
            color: "#ffffff",
          },
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
