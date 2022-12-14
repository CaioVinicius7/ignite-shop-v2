import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },

  body: {
    "-webkit-font-smoothing": "antialised",
    backgroundColor: "$gray900",
    color: "$gray100",

    "&::-webkit-scrollbar": {
      width: 10,
      background: "#2e2e2e"
    },

    "&::-webkit-scrollbar-thumb": {
      borderRadius: 6,
      background: "#3c3c3c"
    }
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400
  },

  "@media (max-width: 1080px)": {
    html: {
      "font-size": "93.75%"
    }
  },

  "@media (max-width: 720px)": {
    html: {
      "font-size": "87.5%"
    }
  }
});
