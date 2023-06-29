import { styled } from "@mui/material";

export const AdvertisementDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "#282c3f",
  height: "300px",
  alignItems: "center",
  "@media(max-width:1567px)": {
    height: "200px",
    padding: "130px 0px"
  },
  "@media(max-width:1440px)": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    height: "auto",
    padding: "50px 50px"
  },
  "@media(max-width:785px)": {
    gap: "30px",
    height: "auto",
    padding: "50px 50px"
  },
  "@media(max-width:751px)": {
    gap: "30px",
    height: "auto",
    padding: "50px 50px"
  },
  "@media(max-width:658px)": {
    display: "none"
  }
}));
export const AdvertisementImg = styled("img")(() => ({
  height: "170px",
  cursor: "pointer",
  transition: "transform 0.6s ease",
  justifySelf: "center",
  ":hover": {
    transform: "scale(1.09)",
  },
  "@media(max-width:751px)": {
    // gap: "30px",
    height: "150px",
    // padding: "50px 50px"
  }
}));
