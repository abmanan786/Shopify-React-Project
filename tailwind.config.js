// tailwind.config.js
module.exports = {
  darkMode: "class", // Yeh zaroori hai!!
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        text: "10px",
      },

      marginTop: {
        ml: "-5px",
      },

      image: {
        height: "500px",
      },

      image: {
        widht: "500px",
      },

      padding: {
        pl: "-10px",
      },

      fontFamily: {
        sans: ["Karla", "sans-serif"],
      },

      colors: {
        "bg-color": "#e3edf6",
    },
  },

  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
  },  
};
