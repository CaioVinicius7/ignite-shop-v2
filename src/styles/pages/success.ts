import { styled } from "..";

export const SuccessContainer = styled("main", {
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  marginTop: "-8rem",
  padding: "0 2rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  h1: {
    fontSize: "$2xl",
    color: "$gray100"
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300"
    }
  }
});

export const ProductsContainer = styled("div", {
  marginTop: "8rem",
  marginBottom: "4rem",

  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",

  div: {
    width: "8.75rem",
    height: "8.75rem",
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.8)",
    borderRadius: "50%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "&:not(:first-child)": {
      marginLeft: "-3rem"
    }
  },

  "@lg": {
    img: {
      width: 120,
      height: 132
    }
  }
});
