/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial-1":
          "radial-gradient(circle at center, #209FC1 25%, #8563DB 25%, #5381CE 0%)",
      },
      colors: {
        "gray-light": "var(--gray-light)",
        "gray-dark": "var(--gray-dark)",
        cyan: "var(--cyan)",
        purple: "var(--purple)",
      },
    },
  },
  plugins: [],
};
