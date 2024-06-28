/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(163,220,47,0.3561799719887955) 0%, rgba(167,220,47,0.258140756302521) 100%);",
        "custom-radial": "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(163,220,47,0.1516981792717087) 50%);"
      },
      colors: {
        dark: "#0F0F0F",
        darklight: "#1F1F1F",
        darklight2: "#161616",
        darklight3: "#4F4F4F",
        secondarklight: "#242424",
        graycustom: "#9B9CA1",
        herobg: "#1d1c20",
        successgreen: "#A3DC2F",
        successlight: "#171F05",
        textsuccess: "#72A700",
        gray6: "#F2F2F2",
        gray7: "#7C7C7C",
        cardbg: "#1A1A1A",
        textcolor: "#F5F5F5",
        red: "#EE1F1F",
        blue: "#003FDB"
      }
    }
  },
  plugins: []
};
