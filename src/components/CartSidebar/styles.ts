import { styled } from "../../styles";

export const CardSideNavContainer = styled("aside", {
  height: "100vh",
  width: 580,
  position: "fixed",
  right: 0,
  top: 0,
  padding: "6rem 4rem 0",

  background: "$gray800",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",

  display: "flex",
  flexDirection: "column",

  transition: "transform 0.2s ease-in-out",

  h1: {
    fontSize: "$lg",
    marginBottom: "3rem"
  },

  main: {
    overflow: "auto",
    marginBottom: "2rem",

    "&::-webkit-scrollbar": {
      width: 8
    },

    "&::-webkit-scrollbar-thumb": {
      borderRadius: 6,
      background: "#34343a"
    }
  },

  footer: {
    marginTop: "auto",
    paddingBottom: "2rem",

    div: {
      marginBottom: "0.75rem",

      display: "flex",
      justifyContent: "space-between",

      span: {
        color: "$gray100"
      },

      strong: {
        color: "$gray100",
        fontSize: "$md"
      }
    },

    button: {
      width: "100%",
      marginTop: "2rem",
      background: "$green500",
      border: 0,
      color: "$white",
      borderRadius: 8,
      padding: "1.25rem",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "$md",

      transition: "0.2s",

      "&:disabled": {
        opacity: 0.6,
        cursor: "not-allowed"
      },

      "&:not(:disabled):hover": {
        backgroundColor: "$green300"
      }
    }
  },

  "@lg": {
    width: 600
  },

  "@md": {
    width: "100vw"
  },

  variants: {
    isHidden: {
      true: {
        transform: "translateX(100%)"
      }
    }
  }
});

export const CloseButton = styled("button", {
  position: "absolute",
  right: "2rem",
  top: "2rem",

  border: 0,
  background: "transparent",
  color: "#8D8D99",
  cursor: "pointer",

  transition: "0.2s",

  "&:hover": {
    filter: "brightness(1.4)"
  }
});

export const ProductContainer = styled("div", {
  display: "flex",
  gap: "1.5rem",

  "&:not(:first-child)": {
    marginTop: "1.25rem"
  }
});

export const ImageContainer = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",

  borderRadius: 8,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  cursor: "pointer"
});

export const DetailsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  h2: {
    color: "$gray300",
    fontSize: "$md",
    lineHeight: "160%",

    maxWidth: "25ch",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },

  strong: {
    fontSize: "$md",
    lineHeight: "160%"
  },

  span: {
    color: "$green500",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "auto",
    width: "min-content",

    transition: "0.1s",

    "&:hover": {
      filter: "brightness(0.8)"
    }
  },

  "@media(max-width: 460px)": {
    h2: {
      maxWidth: "20ch"
    }
  },

  "@media(max-width: 420px)": {
    h2: {
      maxWidth: "15ch"
    }
  }
});
