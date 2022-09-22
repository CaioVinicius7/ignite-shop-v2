import { styled } from "../../styles";

export const SkeletonContainer = styled("main", {
  maxWidth: 1180,
  width: "100%",
  height: "66.5vh",
  margin: "0 auto 6rem",

  "@md": {
    height: "80vh",
    padding: "0 1.25rem",
    margin: "0 auto 9rem"
  }
});

export const HeaderSkeletonContainer = styled("header", {
  width: "100%",
  height: "5rem",
  padding: "2rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});

export const BodySkeletonContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "4rem",

  height: "100%",
  marginTop: "2rem",
  padding: "0 2rem",

  div: {
    display: "flex",
    flexDirection: "Column",
    gap: "1rem",

    footer: {
      marginTop: "auto"
    }
  },

  "@md": {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1.4fr 1.2fr",
    gap: "2rem",
    padding: "0 2rem"
  }
});
