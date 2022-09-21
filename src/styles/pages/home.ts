import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
  minHeight: 656,
  marginBottom: "1rem"
});

export const SliderContainer = styled("section", {
  marginLeft: "0",

  "@xl": {
    marginLeft: "2rem"
  }
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
    cursor: "pointer"
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "1.5rem",
    height: "6rem",

    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 6,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",
    cursor: "default",

    div: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem"
    },

    strong: {
      color: "$gray100",
      fontSize: "$lg"
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300"
    }
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1
    }
  },

  "@md": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
      height: "7.75rem",
      transition: "0s",

      strong: {
        fontSize: "$md"
      },

      span: {
        fontSize: "$lg"
      }
    }
  }
});

export const AddToCartButton = styled("button", {
  border: 0,
  borderRadius: 6,
  width: "3.5rem",
  height: "3.5rem",
  padding: "0.75rem",
  background: "$green500",
  color: "$white",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  cursor: "pointer",
  transition: "0.2s",

  "&:hover": {
    filter: "brightness(0.8)"
  }
});
