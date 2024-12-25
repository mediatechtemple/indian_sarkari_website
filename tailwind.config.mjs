/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        skyblue: "#5EB5D3",
        darkbule: "#172F5F",
        "text-color": "#ffffff",
        "link-color": "#0800EE",
        "border-color": "#A9DBED",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppin: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        custom: "0 1px 15px #D7F5FF",
        custom2: "0 3px 8px #4F6FB0",
      },
      fontSize: {
        "icon-size": "8px",
      },
    },
  },
  plugins: [],
};
