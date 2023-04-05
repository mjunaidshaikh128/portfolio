/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "Nunito Sans"
      },
      backgroundImage: {
        "hero-image": "url(/assets/heroimage.jpg)"
      },
      colors: {
        designColor: "#F7D449",
        textColor: "#aeaeae"
      },
      boxShadow: {
        cardShadow: "0px 0px 5px 10px rgba(0,0,0,0.10)"
      }
    },
  },
  plugins: [],
}
