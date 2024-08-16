export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    colors: {
      gray: {
        100: "#F2F2F2",
        200: "#D9D9D9",
        300: "#808080",
        400: "#333333",
        500: "#262626",
        600: "#1A1A1A",
        700: "#0D0D0D",
      },

      danger: "#E25858",

      purple: {
        DEFAULT: "#8284FA",
        dark: "#5E60CE",
      },

      blue: {
        DEFAULT: "#4EA8DE",
        dark: "#1E6F9F",
      },
    },

    extend: {
      backgroundImage: (theme) => ({
        linearGradientGray700To600: `linear-gradient(to bottom, ${theme(
          "colors.gray.700"
        )} 50%, ${theme("colors.gray.600")} 50%)`,
      }),
    },
  },
  plugins: [],
};
