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
    padding: "2rem 4rem"
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
    filter: "brightness(1.25)"
  }
});
