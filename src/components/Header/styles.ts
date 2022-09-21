import { styled } from "../../styles";

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "@xl": {
    padding: "2rem 2.75rem"
  }
});

export const CartButton = styled("button", {
  border: 0,
  width: "48px",
  height: "48px",
  padding: "12px",
  borderRadius: 6,
  background: "$gray800",
  color: "#8D8D99",

  cursor: "pointer",
  transition: "0.2s",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    background: "#28282d",
    color: "#bbbbca",

    span: {
      background: "#00a977"
    }
  },

  span: {
    position: "absolute",

    background: "$green500",
    borderRadius: "50%",
    width: "2.15rem",
    height: "2.15rem",
    color: "$white",
    fontWeight: "bold",

    marginTop: "-2.6rem",
    marginRight: "-2.6rem",

    border: "5px solid $gray900",

    transition: "0.2s",

    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
