export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B5ED7",
        secondary: "#084298",
        background: "#F8F9FA",
        text: "#212529",
        graySoft: "#DEE2E6",
      },
      fontFamily:{
        ubuntu: ["ubuntu","sans-serif"]
      }
    },
  },
  plugins: [],
}
